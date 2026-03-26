import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe,
  TrendingUp,
  Gavel,
  Smartphone,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  BarChart3,
  Zap,
  Users,
  Sun,
  Moon,
  Lock,
  Eye,
  EyeOff,
  MapPin,
  Target,
  Languages,
  AlertTriangle,
  Shield,
  Fingerprint
} from 'lucide-react';

const Slide = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`min-h-[100dvh] w-full flex flex-col items-center justify-center p-6 py-16 md:p-12 lg:p-24 relative ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Gomarket2026!') {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  if (!mounted) return null;

  if (!unlocked) {
    return (
      <div className="min-h-screen w-full font-sans bg-page text-main flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <div className="bg-card/50 border border-border-main rounded-3xl p-8 md:p-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
              <Lock className="text-accent w-6 h-6" />
            </div>
            <h1 className="font-display text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-main to-muted">GoMarket</h1>
            <p className="text-muted text-sm mb-8">Enter the password to view this deck.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false); }}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-xl bg-page border border-border-main text-main placeholder:text-dim focus:outline-none focus:border-accent transition-colors text-center pr-12"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-main transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {error && <p className="text-red-400 text-sm">Incorrect password.</p>}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-accent text-white font-medium hover:opacity-90 transition-opacity"
              >
                View Deck
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      <div className="bg-page text-main min-h-screen w-full transition-colors duration-300">
        
        {/* Theme Toggle Button */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-card border border-border-main text-main hover:border-accent transition-all shadow-lg focus:outline-none"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      
      {/* Slide 1: Cover */}
      <Slide className="bg-page">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-transparent"></div>
        
        <FadeIn className="z-10 text-center max-w-4xl mt-auto mb-auto">
          <h1 className="font-display text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-main to-muted">
            GoMarket
          </h1>
          <p className="text-lg md:text-3xl text-muted font-light leading-relaxed px-4">
            The prediction markets platform built for the world's most <span className="text-accent font-medium">opinionated</span> audience.
          </p>
        </FadeIn>
        
        <motion.div 
          className="absolute bottom-10 text-dim animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </Slide>

      {/* Slide 2: The Gap */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-10 md:mb-16 max-w-3xl leading-tight">
              Polymarket is built for the West. <br/>
              <span className="text-muted">The rest of the world is waiting.</span>
            </h2>
          </FadeIn>
          
          <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
            <FadeIn delay={0.2} className="flex items-start md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card flex items-center justify-center shrink-0 border border-border-main mt-1 md:mt-0">
                <Globe className="text-accent w-6 h-6 md:w-8 md:h-8" />
              </div>
              <p className="text-xl md:text-4xl font-medium leading-tight"><span className="text-accent block md:inline">300M+</span> Untapped Russian speaking users</p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex items-start md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card flex items-center justify-center shrink-0 border border-border-main mt-1 md:mt-0">
                <BarChart3 className="text-accent w-6 h-6 md:w-8 md:h-8" />
              </div>
              <p className="text-xl md:text-4xl font-medium leading-tight"><span className="text-accent block md:inline">400%</span> growth in predictions markets from 2024-2025</p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex items-start md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card flex items-center justify-center shrink-0 border border-border-main mt-1 md:mt-0">
                <Gavel className="text-accent w-6 h-6 md:w-8 md:h-8" />
              </div>
              <p className="text-xl md:text-4xl font-medium leading-tight"><span className="text-accent block md:inline">Polymarket:</span> $1.4M CFTC fine, US blocked</p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-3xl font-light text-muted border-l-4 border-accent pl-4 md:pl-6 py-2">
              The gap is real. The timing is now. <strong className="text-main block md:inline mt-2 md:mt-0">That's GoMarket.</strong>
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 4: The Proof */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-10 md:mb-16 leading-tight text-center">
              The highest crypto-adoption regions on earth have <span className="text-accent">no prediction market.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-10 md:mb-14">
            <FadeIn delay={0.15} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl md:text-3xl">🇷🇺</span>
                <h3 className="text-xl md:text-2xl font-display font-bold">Russia</h3>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                <span className="text-accent font-bold">$376B</span> in crypto received in 2024–25 — #1 in all of Europe
              </p>
            </FadeIn>

            <FadeIn delay={0.25} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl md:text-3xl">🇹🇷</span>
                <h3 className="text-xl md:text-2xl font-display font-bold">Turkey</h3>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                <span className="text-accent font-bold">1 in 4</span> people owns crypto, driven by 50%+ annual inflation
              </p>
            </FadeIn>

            <FadeIn delay={0.35} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl md:text-3xl">🇳🇬</span>
                <h3 className="text-xl md:text-2xl font-display font-bold">Nigeria</h3>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                <span className="text-accent font-bold">#2 globally</span> in crypto adoption. 73% ownership rate
              </p>
            </FadeIn>

            <FadeIn delay={0.45} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl md:text-3xl">🌏</span>
                <h3 className="text-xl md:text-2xl font-display font-bold">Asia-Pacific</h3>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                <span className="text-accent font-bold">37.6%</span> of the global crypto market, fastest growing region on earth
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <p className="text-xl md:text-3xl font-light text-muted border-l-4 border-accent pl-4 md:pl-6 py-2">
              <span className="text-accent font-bold">97.5%</span> of prediction market volume is controlled by US platforms. <strong className="text-main">None of this market is theirs.</strong>
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 5: The Plan */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-10 md:mb-16 leading-tight text-center">
              Four regions. One playbook. <span className="text-accent">Starting now.</span>
            </h2>
          </FadeIn>

          <div className="space-y-5 md:space-y-8">
            <FadeIn delay={0.15} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl flex items-start gap-4 md:gap-6">
              <span className="text-3xl md:text-4xl shrink-0 mt-1">🇷🇺</span>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-1">CIS — <span className="text-accent">Launch</span></h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">300M+ Russian speakers. We go live here first.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl flex items-start gap-4 md:gap-6">
              <span className="text-3xl md:text-4xl shrink-0 mt-1">🇹🇷</span>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-1">Turkey</h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">1 in 4 owns crypto. Inflation is 50%+. USDT is their savings account.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.35} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl flex items-start gap-4 md:gap-6">
              <span className="text-3xl md:text-4xl shrink-0 mt-1">🌏</span>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-1">Asia / SEA</h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">Vietnam, India, Philippines. 150M users. No dominant platform.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.45} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl flex items-start gap-4 md:gap-6">
              <span className="text-3xl md:text-4xl shrink-0 mt-1">🌍</span>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-1">Africa</h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">Nigeria is #2 in the world. Prediction markets just arrived there this week.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* Slide 6: The Aha */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-10 md:mb-16 leading-tight text-center">
              The competition didn't lose this market. <span className="text-accent">They never showed up.</span>
            </h2>
          </FadeIn>

          <div className="space-y-8 md:space-y-12">
            <FadeIn delay={0.2} className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="mt-1 shrink-0">
                <Target className="text-accent w-8 h-8 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">No presence. No language support. No local context.</h3>
                <p className="text-base md:text-xl text-muted">No understanding of how these users actually think, save, and trade.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="mt-1 shrink-0">
                <Languages className="text-accent w-8 h-8 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">We speak their language — literally.</h3>
                <p className="text-base md:text-xl text-muted">Markets built in Russian, Turkish, Arabic. Resolution criteria tied to their news, their events, their reality.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-xl md:text-3xl font-light text-muted border-l-4 border-accent pl-4 md:pl-6 py-2">
                This isn't a gap we're trying to close. It's a market we're building from scratch — <strong className="text-main">on our terms.</strong>
              </p>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* Slide 7: Bridge — The opportunity is obvious */}
      <Slide>
        <div className="max-w-4xl w-full text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-10 md:mb-16 leading-tight">
              The opportunity is obvious. <span className="text-accent">The build is not.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-2xl text-muted leading-relaxed mb-8 md:mb-12">
              Prediction markets failed globally for a decade — not because of demand, but because of three hard engineering problems nobody solved for this audience.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-10 md:mb-14">
              <div className="bg-card/50 border border-border-main px-6 py-4 rounded-2xl flex items-center gap-3">
                <span className="text-2xl">🧊</span>
                <span className="text-base md:text-lg font-medium text-muted">Cold start liquidity</span>
              </div>
              <div className="bg-card/50 border border-border-main px-6 py-4 rounded-2xl flex items-center gap-3">
                <span className="text-2xl">⚖️</span>
                <span className="text-base md:text-lg font-medium text-muted">Oracle disputes in adversarial environments</span>
              </div>
              <div className="bg-card/50 border border-border-main px-6 py-4 rounded-2xl flex items-center gap-3">
                <span className="text-2xl">🚪</span>
                <span className="text-base md:text-lg font-medium text-muted">Onboarding friction</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-base md:text-xl text-muted leading-relaxed mb-10 md:mb-14">
              We've spent months mapping exactly how each one breaks — and exactly how to solve it.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="text-xl md:text-3xl font-medium text-accent">
              Here's the platform we're building.
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 8: Built around the three problems */}
      <Slide>
        <div className="max-w-6xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-12 md:mb-20 text-center">
              Built around the three problems that <span className="text-accent">kill platforms.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <FadeIn delay={0.2} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🧊</span>
                <ArrowRight className="text-dim w-4 h-4" />
                <TrendingUp className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-1 text-muted">Cold Start →</h3>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-accent">Protocol-Owned Liquidity</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We seed every market ourselves at launch. LMSR AMM model, $1,500–3,000 per market. KOL-anchored positions create volume signal before organic trading arrives.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">⚖️</span>
                <ArrowRight className="text-dim w-4 h-4" />
                <Shield className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-1 text-muted">Oracle Disputes →</h3>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-accent">Layered Resolution</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Structured resolution criteria at market creation. Credentialed proposers with financial bonds. Expert arbitration panel for contested outcomes. Built for environments where state actors control the information.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="text-2xl md:text-3xl">🚪</span>
                <ArrowRight className="text-dim w-4 h-4" />
                <Fingerprint className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-1 text-muted">Onboarding Friction →</h3>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-accent">Invisible Crypto</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Embedded wallets. Session keys via ERC-4337. Users approve once, trade silently. No MetaMask popup on every order. Feels like a consumer app, settles on-chain.
              </p>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* Slide 6: The Markets We'll Run */}
      <Slide>
        <div className="max-w-6xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
              High-conviction markets worth trading.
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              "Will BTC surpass $120K before the next halving?",
              "Will a Solana ETF be approved in 2025?",
              "Will Russia and Ukraine sign a ceasefire by Dec 31?",
              "Will the Ruble weaken past 100 to the USD by Q3?",
              "Will the Weather in Moscow reach 28°F tomorrow?",
              "Will Telegram launch a native DEX in 2025?"
            ].map((market, i) => (
              <FadeIn key={i} delay={0.05 * i} className="bg-card border border-border-main rounded-2xl p-5 md:p-6 flex flex-col justify-between h-auto min-h-[160px] md:h-48 hover:border-accent/50 transition-colors">
                <h4 className="text-lg md:text-xl font-medium leading-snug">{market}</h4>
                <div className="flex gap-2 mt-4 pt-2 border-t border-border-main/50">
                  <div className="bg-accent/10 text-accent text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex-1 text-center">YES</div>
                  <div className="bg-red-500/10 text-red-500 text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex-1 text-center">NO</div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.6}>
            <p className="text-center text-dim text-xs md:text-sm uppercase tracking-widest px-4">
              Every market scored on 5 dimensions before listing. If it doesn't clear the bar, it doesn't go live.
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 7: The Hard Problems */}
      <Slide>
        <div className="max-w-6xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center">
              Three problems that kill prediction market platforms.
            </h2>
          </FadeIn>
          
          <div className="space-y-4 md:space-y-6">
            <FadeIn delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-card/30 border border-border-main/50 p-6 md:p-8 rounded-3xl items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-muted flex items-center justify-center text-xl md:text-2xl">🧊</div>
                <h3 className="text-xl md:text-2xl font-medium text-muted">Cold start — no liquidity, no traders</h3>
              </div>
              <div className="text-lg md:text-xl font-medium text-accent md:text-right pl-14 md:pl-0">
                Protocol-owned seed liquidity + KOL-anchored positions on launch
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-card/30 border border-border-main/50 p-6 md:p-8 rounded-3xl items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-muted flex items-center justify-center text-xl md:text-2xl">⚖️</div>
                <h3 className="text-xl md:text-2xl font-medium text-muted">Oracle disputes — who decides what's true?</h3>
              </div>
              <div className="text-lg md:text-xl font-medium text-accent md:text-right pl-14 md:pl-0">
                Tiered sources, credentialed proposers, expert arbitration panel
              </div>
            </FadeIn>
            
            <FadeIn delay={0.6} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-card/30 border border-border-main/50 p-6 md:p-8 rounded-3xl items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-muted flex items-center justify-center text-xl md:text-2xl">🚪</div>
                <h3 className="text-xl md:text-2xl font-medium text-muted">Onboarding drop-off — wallets kill conversion</h3>
              </div>
              <div className="text-lg md:text-xl font-medium text-accent md:text-right pl-14 md:pl-0">
                Embedded wallets, session keys, gas abstraction — approve once, trade silently
              </div>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* Slide 8: Technical Architecture */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 md:mb-12">
              Six layers. Each one a real engineering problem.
            </h2>
          </FadeIn>
          
          <div className="flex flex-col gap-3">
            {[
              { layer: "Frontend", desc: "Next.js, real-time order book, mobile-first" },
              { layer: "Backend Infra", desc: "PostgreSQL + Redis, WebSocket feeds, chain indexer" },
              { layer: "Wallet & Onboarding", desc: "Embedded wallets, ERC-4337 session keys, USDC on-ramp" },
              { layer: "Oracle System", desc: "Multisig v1 → UMA Optimistic Oracle v2" },
              { layer: "Matching Engine", desc: "Hybrid CLOB — off-chain order book, on-chain settlement" },
              { layer: "Smart Contracts", desc: "Trustless settlement — USDC collateral, YES/NO tokens, audited payouts" }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.05 * i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-card/80 border border-border-main p-4 md:p-6 rounded-2xl hover:border-accent/30 transition-colors">
                <div className="w-full md:w-48 shrink-0 font-display font-bold text-accent text-base md:text-lg">{item.layer}</div>
                <div className="text-muted text-sm md:text-lg">{item.desc}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 9: Build vs. Outsource */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 md:mb-16">
              We know what to build and what to buy.
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16">
            <FadeIn delay={0.2}>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 text-main border-b border-border-main pb-4">We build</h3>
              <ul className="space-y-3 md:space-y-4 text-lg md:text-xl text-muted">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent shrink-0" size={20}/> Matching engine</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent shrink-0" size={20}/> Resolution logic</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent shrink-0" size={20}/> Order signing</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent shrink-0" size={20}/> Chain indexer</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent shrink-0" size={20}/> Ops tooling</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 text-dim border-b border-border-main pb-4">We outsource</h3>
              <ul className="space-y-3 md:space-y-4 text-lg md:text-xl text-dim">
                <li className="flex items-center gap-3"><ArrowRight className="text-dim/60 shrink-0" size={20}/> Wallets → Privy / Dynamic</li>
                <li className="flex items-center gap-3"><ArrowRight className="text-dim/60 shrink-0" size={20}/> Gas → Gelato</li>
                <li className="flex items-center gap-3"><ArrowRight className="text-dim/60 shrink-0" size={20}/> Contracts base → Gnosis CTF</li>
                <li className="flex items-center gap-3"><ArrowRight className="text-dim/60 shrink-0" size={20}/> Oracle base → UMA</li>
                <li className="flex items-center gap-3"><ArrowRight className="text-dim/60 shrink-0" size={20}/> On-ramp → Moonpay</li>
              </ul>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-2xl font-light text-center text-muted bg-card/50 p-5 md:p-6 rounded-2xl border border-border-main">
              Most teams get this backwards. Over-engineer the contracts, under-build the exchange. <strong className="text-accent font-medium block md:inline mt-2 md:mt-0">We won't.</strong>
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 10: Road to Mainnet */}
      <Slide>
        <div className="max-w-6xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-12 md:mb-20 text-center">
              Testnet in 16 weeks. <br className="md:hidden" /><span className="text-emerald-400">Mainnet in 6 months.</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="mb-16 md:mb-24 relative px-4 md:px-0">
            {/* Mobile Vertical Line */}
            <div className="absolute left-[23px] top-2 bottom-2 w-1 bg-gradient-to-b from-accent/80 to-accent rounded-full md:hidden"></div>
            
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 rounded-full"></div>
            <div className="hidden md:block absolute top-1/2 left-0 w-3/4 h-1 bg-gradient-to-r from-accent/50 to-accent -translate-y-1/2 rounded-full"></div>
            
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6 md:gap-0">
              {[
                "Contracts", "Matching Engine", "Wallets + Oracle", "Frontend", "Testnet", "Audit", "Mainnet"
              ].map((step, i) => (
                <div key={i} className="flex flex-row md:flex-col items-center gap-4 md:gap-4 relative z-10">
                  <div className={`w-4 h-4 rounded-full shrink-0 ${i === 6 ? 'bg-main shadow-[0_0_15px_rgba(var(--accent-rgb),0.8)] md:scale-150' : i < 5 ? 'bg-accent' : 'bg-dim'}`}></div>
                  <span className={`text-base md:text-base font-medium md:absolute md:top-8 md:whitespace-nowrap ${i === 6 ? 'text-main font-bold' : 'text-muted'}`}>{step}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
            <FadeIn delay={0.4} className="text-center bg-card/30 p-6 rounded-2xl border border-border-main/50">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🏦</div>
              <p className="text-lg md:text-xl font-medium text-main">$100K–$250K seed liquidity committed</p>
            </FadeIn>
            <FadeIn delay={0.5} className="text-center bg-card/30 p-6 rounded-2xl border border-border-main/50">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🔐</div>
              <p className="text-lg md:text-xl font-medium text-main">$100K–$200K audit budget ring-fenced</p>
            </FadeIn>
            <FadeIn delay={0.6} className="text-center bg-card/30 p-6 rounded-2xl border border-border-main/50">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">⛽</div>
              <p className="text-lg md:text-xl font-medium text-main">Gas float for sponsored transactions</p>
            </FadeIn>
            <FadeIn delay={0.7} className="text-center bg-card/30 p-6 rounded-2xl border border-border-main/50">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">💧</div>
              <p className="text-lg md:text-xl font-medium text-main">7+ Liquidity and spread providers</p>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* Slide 11: What We Have */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 md:mb-16">
              The foundation is built. Now we build the infrastructure.
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <FadeIn delay={0.2} className="bg-card/50 p-6 md:p-8 rounded-3xl border border-border-main">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 text-main flex items-center gap-3">
                <CheckCircle2 className="text-accent w-8 h-8" /> Done
              </h3>
              <ul className="space-y-3 md:space-y-4 text-lg md:text-xl text-muted">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> Market design framework</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> Oracle architecture</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> Liquidity strategy</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> 300+ KOL relationships</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> Full technical specification</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> Legal analysis underway</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} className="bg-accent/10 p-6 md:p-8 rounded-3xl border border-accent/50">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 text-accent flex items-center gap-3">
                <ArrowRight className="text-accent w-8 h-8" /> What's next
              </h3>
              <ul className="space-y-3 md:space-y-4 text-lg md:text-xl text-muted">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> MVP launch &amp; Testing</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> GTM Strategy &amp; Rollout</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Parlay Sports System</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Oracle &amp; News partners</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Mainnet launch</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* Slide 12: Roadmap */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-7xl font-bold mb-12 md:mb-20 text-center">
              Roadmap
            </h2>
          </FadeIn>

          {/* Horizontal line */}
          <div className="relative hidden md:block mb-12">
            <div className="absolute top-1.5 left-0 right-0 h-px bg-border-main/50" />
            <div className="grid grid-cols-4 gap-6">
              {[
                { phase: "Phase 1", title: "Foundation", time: "Q1 2026", done: true },
                { phase: "Phase 2", title: "Launch", time: "Q2 2026", done: false },
                { phase: "Phase 3", title: "Growth", time: "Q3 2026", done: false },
                { phase: "Phase 4", title: "Scale", time: "Q4 2026+", done: false }
              ].map((p, i) => (
                <FadeIn key={i} delay={0.15 * i} className="relative pt-6">
                  <div className={`absolute top-0 left-0 w-3 h-3 rounded-full border-2 ${p.done ? 'bg-accent border-accent' : 'bg-card border-border-main/80'}`} />
                  <span className="text-accent font-bold text-xs uppercase tracking-wider">{p.phase}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-main font-display font-bold text-xl">{p.title}</span>
                    {p.done && <CheckCircle2 className="text-accent w-4 h-4" />}
                  </div>
                  <span className="text-dim text-sm">{p.time}</span>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                done: true,
                items: [
                  "Core platform live",
                  "Team and operations in place",
                  "Market framework and product scope defined",
                  "Liquidity and market maker partnerships secured"
                ]
              },
              {
                done: false,
                items: [
                  "Mainnet launch with curated opening markets",
                  "Parlays live in time for FIFA World Cup 2026",
                  "Referral program launched",
                  "Liquidity staking introduced",
                  "Community and KOL activation"
                ]
              },
              {
                done: false,
                items: [
                  "Expanded market categories and deeper functionality",
                  "Token farming program launched",
                  "Eastern Europe market entry",
                  "Increased liquidity depth and market maker coverage"
                ]
              },
              {
                done: false,
                items: [
                  "Multi-region expansion",
                  "Decentralized oracle integration",
                  "Community-driven market creation",
                  "Advanced trading features and incentive programs"
                ]
              }
            ].map((phase, i) => (
              <FadeIn key={i} delay={0.15 * i}>
                {/* Mobile-only header */}
                <div className="md:hidden flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full border-2 ${phase.done ? 'bg-accent border-accent' : 'bg-card border-border-main/80'}`} />
                  <span className="text-accent font-bold text-xs uppercase tracking-wider">Phase {i + 1}</span>
                  <span className="text-main font-display font-bold text-lg">{["Foundation", "Launch", "Growth", "Scale"][i]}</span>
                  {phase.done && <CheckCircle2 className="text-accent w-4 h-4" />}
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${phase.done ? 'bg-accent/60' : 'bg-muted/60'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 13: Team */}
      <Slide>
        <div className="max-w-6xl w-full">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-7xl font-bold mb-12 md:mb-20 text-center">
              Team
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "Tural K.",
                role: "Co-Founder",
                desc: "Crypto-native marketing strategist and ecosystem builder with hands-on experience across 20+ Web3 projects, specializing in KOL acquisition, growth campaigns, and launch execution.",
                img: "/team/Tural Kazimov.jpg",
                imgPosition: "object-top"
              },
              {
                name: "Nicholas J.",
                role: "Co-Founder",
                desc: "Crypto investor and growth operator with 7+ years in Web3. Scaled memecoins to $500M+ valuations via KOL-led growth across TRON and Sui. Built a Telegram mini-app driving user acquisition.",
                img: "/team/Nicholas Jorden.jpg",
                imgPosition: "object-top"
              },
              {
                name: "Zamir K.",
                role: "Head of Operations",
                desc: "Operations leader with 12+ years building systems that scale. Led 30+ token launches, managed $200M+ portfolio, and built operational frameworks from PE to Web3.",
                img: "/team/zamir k.jpg",
                imgPosition: "object-top"
              },
              {
                name: "King Advisory",
                role: "Head of Marketing",
                desc: "Advisor and growth operator with 10+ years in marketing and corporate sales. Focused on driving revenue and closing high-value deals.",
                img: "/team/King.jpg",
                imgPosition: "object-top"
              },
              {
                name: "Davey K.",
                role: "Head of Socials",
                desc: "Web3 growth operator (ex-Polygon, QuickSwap, Lunar Digital Assets) specializing in scaling crypto projects from 0 to market traction.",
                img: "/team/Davey Keuvelaar.jpg",
                imgPosition: "object-top"
              },
              {
                name: "Andrea LV.",
                role: "Project Manager",
                desc: "Connects product strategy, financial design, and engineering execution to build scalable digital products, most recently working with teams around EthicHub, Celo, and Migalabs.",
                img: "/team/andrea lv.jpg",
                imgPosition: "object-top"
              }
            ].map((member, i) => (
              <FadeIn key={i} delay={0.1 * i} className="flex flex-col items-center text-center bg-card/20 p-6 rounded-3xl border border-border-main/50">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-muted mb-6 border border-border-main overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-card"></div>
                  <img src={member.img} alt={member.name} className={`absolute inset-0 w-full h-full object-cover z-10 ${member.imgPosition}`} />
                  <div className="absolute inset-0 flex items-center justify-center text-dim z-0">
                    <Users size={40} className="md:w-12 md:h-12" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-main mb-1 md:mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-3 md:mb-4 text-sm md:text-base">{member.role}</p>
                <p className="text-muted text-sm md:text-base">{member.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.8}>
            <p className="text-base md:text-lg text-muted text-center mt-10 md:mt-14 bg-card/30 border border-border-main/50 px-6 py-4 rounded-2xl max-w-3xl mx-auto">
              Core engineering team currently operating under contract. CTO hire will transition ownership of technical build and lead the permanent engineering org.
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* The Ask — CTO */}
      <Slide>
        <div className="max-w-4xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-10 md:mb-16 leading-tight text-center">
              We're building this. We're looking for the person who <span className="text-accent">leads it.</span>
            </h2>
          </FadeIn>

          <div className="space-y-6 md:space-y-8 mb-10 md:mb-14">
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-2xl text-muted leading-relaxed">
                The technical foundation is scoped. The market architecture is designed. The liquidity strategy is in place.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg md:text-2xl text-muted leading-relaxed">
                What we need is a CTO who owns the full build — matching engine, oracle system, smart contracts, and the infrastructure that makes it run without downtime.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-lg md:text-2xl text-main leading-relaxed font-medium">
                This is a founding-level role. You'd be the first technical voice in every product decision from day one.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.8}>
            <p className="text-xl md:text-3xl font-light text-muted border-l-4 border-accent pl-4 md:pl-6 py-2">
              If this is the problem you want to spend the next three years on, <strong className="text-accent">let's talk.</strong>
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 14: Close */}
      <Slide className="bg-page">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.8)_0,transparent_50%)]"></div>
        
        <div className="max-w-4xl w-full text-center relative z-10">
          <FadeIn>
            <h1 className="font-display text-6xl md:text-9xl font-bold tracking-tighter mb-6 md:mb-8 text-main">
              GoMarket
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-4xl text-muted font-light leading-relaxed mb-12 md:mb-20 px-4">
              Building the future prediction market for the world's most opinionated audience.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="inline-flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-base md:text-lg text-accent font-medium bg-card/80 px-8 py-6 md:px-12 md:py-6 rounded-3xl md:rounded-full border border-border-main backdrop-blur-sm w-full md:w-auto">
            <span>Tural Kazimov</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-dim"></span>
            <a href="https://t.me/Tikoxbt" target="_blank" rel="noopener noreferrer" className="hover:text-main transition-colors">Contact</a>
          </FadeIn>
        </div>
      </Slide>

      </div>
    </div>
  );
}
