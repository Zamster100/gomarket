import puppeteer from 'puppeteer';

const PORT = 3006;
const OUTPUT = 'GoMarket_Pitch_Deck.pdf';
const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT, deviceScaleFactor: 1 });

    console.log(`Navigating to http://localhost:${PORT}...`);
    await page.goto(`http://localhost:${PORT}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Disable all animations and make all content immediately visible
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation: none !important;
          transition: none !important;
        }
        [style*="opacity: 0"], [style*="opacity:0"] {
          opacity: 1 !important;
        }
        [style*="transform: translateY"] {
          transform: none !important;
        }
        /* Hide theme toggle button from export */
        button[aria-label="Toggle theme"] {
          display: none !important;
        }
        /* Hide scroll indicator */
        .animate-bounce {
          display: none !important;
        }
      `
    });

    // Let deferred renders settle
    await new Promise(r => setTimeout(r, 1000));

    // Get the position and size of every slide section
    const sections = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('section')).map(el => {
        const rect = el.getBoundingClientRect();
        const scrollY = window.scrollY;
        return {
          x: rect.left,
          y: rect.top + scrollY,
          width: rect.width,
          height: rect.height
        };
      });
    });

    console.log(`Found ${sections.length} slides.`);

    // Screenshot each slide
    const screenshots = [];
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      console.log(`  Capturing slide ${i + 1}/${sections.length}...`);

      // Scroll the slide into the viewport
      await page.evaluate((y) => window.scrollTo(0, y), s.y);
      await new Promise(r => setTimeout(r, 200));

      const buffer = await page.screenshot({
        clip: {
          x: 0,
          y: s.y,
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT
        }
      });
      screenshots.push(buffer.toString('base64'));
    }

    // Build a temporary HTML page where each screenshot is a PDF page
    console.log('Assembling PDF...');
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { background: #000; }
            .page {
              width: ${SLIDE_WIDTH}px;
              height: ${SLIDE_HEIGHT}px;
              overflow: hidden;
              page-break-after: always;
              break-after: page;
            }
            .page img {
              width: ${SLIDE_WIDTH}px;
              height: ${SLIDE_HEIGHT}px;
              display: block;
            }
          </style>
        </head>
        <body>
          ${screenshots.map(b64 => `
            <div class="page">
              <img src="data:image/png;base64,${b64}">
            </div>
          `).join('')}
        </body>
      </html>
    `;

    await page.setContent(html, { waitUntil: 'load' });

    await page.pdf({
      path: OUTPUT,
      width: `${SLIDE_WIDTH}px`,
      height: `${SLIDE_HEIGHT}px`,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    await browser.close();
    console.log(`\nDone! Saved to ${OUTPUT} (${sections.length} slides)`);
  } catch (err) {
    console.error('Export failed:', err);
    process.exit(1);
  }
})();
