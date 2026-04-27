export type Lang = 'en' | 'ru';

export const translations = {
  en: {
    // Slide 2: The Gap
    gap: {
      heading1: "Polymarket is built for the West.",
      heading2: "The rest of the world is waiting.",
      stat1: "Untapped Russian speaking users",
      stat2: "growth in predictions markets from 2024-2025",
      stat3Label: "Polymarket:",
      stat3Value: "$1.4M CFTC fine, US blocked",
      footer: "The gap is real. The timing is now.",
      footerBrand: "That's GoMarket.",
    },

    // Slide 3: The Proof
    proof: {
      heading: "The highest crypto-adoption regions on earth have",
      headingAccent: "no prediction market.",
      russia: {
        name: "Russia",
        desc: "in crypto received in 2024–25 — #1 in all of Europe",
      },
      turkey: {
        name: "Turkey",
        desc: "people owns crypto, driven by",
        desc2: "annual inflation",
        fraction: "1 in 4",
      },
      easternEurope: {
        name: "Eastern Europe",
        desc1: "Ukraine ranked",
        desc1b: "#1 globally",
        desc2: "in per-capita crypto adoption. Eastern Europe received",
        desc3: "in crypto in 2024–25 — growing faster than any Western market.",
      },
      asia: {
        name: "Asia-Pacific",
        desc: "of the global crypto market, fastest growing region on earth",
      },
      footer1: "of prediction market volume is controlled by US platforms.",
      footer2: "None of this market is theirs.",
    },

    // Slide 4: The Plan
    plan: {
      heading1: "Four regions. One playbook.",
      headingAccent: "Starting now.",
      cis: {
        title: "CIS —",
        titleAccent: "Launch",
        desc: "300M+ Russian speakers. We go live here first.",
      },
      turkey: {
        title: "Turkey",
        desc: "1 in 4 owns crypto. Inflation is 50%+. USDT is their savings account.",
      },
      asia: {
        title: "Asia / SEA",
        desc: "Vietnam, India, Philippines. 150M users. No dominant platform.",
      },
      eastern: {
        title: "Eastern Europe",
        desc: "Ukraine is #1 per-capita globally. $206B in crypto across Eastern Europe in 2024–25. Zero prediction market infrastructure exists for this region.",
      },
    },

    // Slide 5: The Aha
    aha: {
      heading1: "The competition didn't lose this market.",
      headingAccent: "They never showed up.",
      point1Title: "No presence. No language support. No local context.",
      point1Desc: "No understanding of how these users actually think, save, and trade.",
      point2Title: "We speak their language — literally.",
      point2Desc: "Markets built in Russian, Turkish, Arabic. Resolution criteria tied to their news, their events, their reality.",
      footer: "This isn't a gap we're trying to close. It's a market we're building from scratch —",
      footerAccent: "on our terms.",
    },

    // Slide 6: Bridge
    bridge: {
      heading1: "The opportunity is obvious.",
      headingAccent: "The build is not.",
      desc: "Prediction markets failed globally for a decade — not because of demand, but because of three hard engineering problems nobody solved for this audience.",
      problem1: "Cold start liquidity",
      problem2: "Oracle disputes in adversarial environments",
      problem3: "Onboarding friction",
      desc2: "We've spent months mapping exactly how each one breaks — and exactly how to solve it.",
      cta: "Here's the platform we're building.",
    },

    // Slide 7: Built around three problems
    threeProblems: {
      heading: "Built around the three problems that",
      headingAccent: "kill platforms.",
      cold: {
        problemLabel: "Cold Start →",
        solutionLabel: "Protocol-Owned Liquidity",
        desc: "We seed every market ourselves at launch. LMSR AMM model, $1,500–3,000 per market. KOL-anchored positions create volume signal before organic trading arrives.",
      },
      oracle: {
        problemLabel: "Oracle Disputes →",
        solutionLabel: "Layered Resolution",
        desc: "Structured resolution criteria at market creation. Credentialed proposers with financial bonds. Expert arbitration panel for contested outcomes. Built for environments where state actors control the information.",
      },
      onboarding: {
        problemLabel: "Onboarding Friction →",
        solutionLabel: "Invisible Crypto",
        desc: "Embedded wallets. Session keys via ERC-4337. Users approve once, trade silently. No MetaMask popup on every order. Feels like a consumer app, settles on-chain.",
      },
    },

    // Slide 8: Markets
    markets: {
      heading: "High-conviction markets worth trading.",
      items: [
        "Will BTC surpass $120K before the next halving?",
        "Will a Solana ETF be approved in 2025?",
        "Will Russia and Ukraine sign a ceasefire by Dec 31?",
        "Will the Ruble weaken past 100 to the USD by Q3?",
        "Will the Weather in Moscow reach 28°F tomorrow?",
        "Will Telegram launch a native DEX in 2025?",
      ],
      footer: "Every market scored on 5 dimensions before listing. If it doesn't clear the bar, it doesn't go live.",
      yes: "YES",
      no: "NO",
    },

    // Slide 9: Hard Problems (2-column layout)
    hardProblems: {
      heading: "Three problems that kill prediction market platforms.",
      rows: [
        {
          problem: "Cold start — no liquidity, no traders",
          solution: "Protocol-owned seed liquidity + KOL-anchored positions on launch",
        },
        {
          problem: "Oracle disputes — who decides what's true?",
          solution: "Tiered sources, credentialed proposers, expert arbitration panel",
        },
        {
          problem: "Onboarding drop-off — wallets kill conversion",
          solution: "Embedded wallets, session keys, gas abstraction — approve once, trade silently",
        },
      ],
    },

    // Slide 10: Architecture
    architecture: {
      heading: "Six layers. Each one a real engineering problem.",
      layers: [
        { layer: "Frontend", desc: "Next.js, real-time order book, mobile-first" },
        { layer: "Backend Infra", desc: "PostgreSQL + Redis, WebSocket feeds, chain indexer" },
        { layer: "Wallet & Onboarding", desc: "Embedded wallets, ERC-4337 session keys, USDC on-ramp" },
        { layer: "Oracle System", desc: "Multisig v1 → UMA Optimistic Oracle v2" },
        { layer: "Matching Engine", desc: "Hybrid CLOB — off-chain order book, on-chain settlement" },
        { layer: "Smart Contracts", desc: "Trustless settlement — USDC collateral, YES/NO tokens, audited payouts" },
      ],
    },

    // Slide 11: Build vs Outsource
    buildVsBuy: {
      heading: "We know what to build and what to buy.",
      buildTitle: "We build",
      buyTitle: "We outsource",
      buildItems: ["Matching engine", "Resolution logic", "Order signing", "Chain indexer", "Ops tooling"],
      buyItems: [
        "Wallets → Privy / Dynamic",
        "Gas → Gelato",
        "Contracts base → Gnosis CTF",
        "Oracle base → UMA",
        "On-ramp → Moonpay",
      ],
      footer: "Most teams get this backwards. Over-engineer the contracts, under-build the exchange.",
      footerAccent: "We won't.",
    },

    // Slide 12: Roadmap Timeline
    roadmapTimeline: {
      heading1: "Testnet in 16 weeks.",
      headingAccent: "Mainnet in 6 months.",
      timelineSteps: ["Contracts", "Matching Engine", "Wallets + Oracle", "Frontend", "Testnet", "Audit", "Mainnet"],
      milestones: [
        "$100K–$250K seed liquidity committed",
        "$100K–$200K audit budget ring-fenced",
        "Gas float for sponsored transactions",
        "7+ Liquidity and spread providers",
      ],
    },

    // Slide 13: Foundation
    foundation: {
      heading1: "The foundation is built.",
      heading2: "Now we build the infrastructure.",
      doneTitle: "Done",
      nextTitle: "What's next",
      doneItems: [
        "Market design framework",
        "Oracle architecture",
        "Liquidity strategy",
        "300+ KOL relationships",
        "Full technical specification",
        "Legal analysis underway",
      ],
      nextItems: [
        "MVP launch & Testing",
        "GTM Strategy & Rollout",
        "Parlay Sports System",
        "Oracle & News partners",
        "Mainnet launch",
      ],
    },

    // Slide 14: Roadmap phases
    roadmap: {
      heading: "Roadmap",
      phases: [
        { phase: "Phase 1", title: "Foundation", time: "Q1 2026", done: true },
        { phase: "Phase 2", title: "Launch", time: "Q2 2026", done: false },
        { phase: "Phase 3", title: "Growth", time: "Q3 2026", done: false },
        { phase: "Phase 4", title: "Scale", time: "Q4 2026+", done: false },
      ],
      phaseItems: [
        [
          "Core platform live",
          "Team and operations in place",
          "Market framework and product scope defined",
          "Liquidity and market maker partnerships secured",
        ],
        [
          "Mainnet launch with curated opening markets",
          "Parlays live in time for FIFA World Cup 2026",
          "Referral program launched",
          "Liquidity staking introduced",
          "Community and KOL activation",
        ],
        [
          "Expanded market categories and deeper functionality",
          "Token farming program launched",
          "Eastern Europe market entry",
          "Increased liquidity depth and market maker coverage",
        ],
        [
          "Multi-region expansion",
          "Decentralized oracle integration",
          "Community-driven market creation",
          "Advanced trading features and incentive programs",
        ],
      ],
      phaseTitles: ["Foundation", "Launch", "Growth", "Scale"],
    },

    // Slide 15: Team
    team: {
      heading: "Team",
      members: [
        {
          name: "Tural K.",
          role: "Co-Founder",
          desc: "Crypto-native marketing strategist and ecosystem builder with hands-on experience across 20+ Web3 projects, specializing in KOL acquisition, growth campaigns, and launch execution.",
        },
        {
          name: "Nicholas J.",
          role: "Co-Founder",
          desc: "Crypto investor and growth operator with 7+ years in Web3. Scaled memecoins to $500M+ valuations via KOL-led growth across TRON and Sui. Built a Telegram mini-app driving user acquisition.",
        },
        {
          name: "Zamir K.",
          role: "Head of Operations",
          desc: "Operations leader with 12+ years building systems that scale. Led 30+ token launches, managed $200M+ portfolio, and built operational frameworks from PE to Web3.",
        },
        {
          name: "King Advisory",
          role: "Head of Marketing",
          desc: "Advisor and growth operator with 10+ years in marketing and corporate sales. Focused on driving revenue and closing high-value deals.",
        },
        {
          name: "Davey K.",
          role: "Head of Socials",
          desc: "Web3 growth operator (ex-Polygon, QuickSwap, Lunar Digital Assets) specializing in scaling crypto projects from 0 to market traction.",
        },
        {
          name: "Andrea LV.",
          role: "Project Manager",
          desc: "Connects product strategy, financial design, and engineering execution to build scalable digital products, most recently working with teams around EthicHub, Celo, and Migalabs.",
        },
      ],
    },
  },

  ru: {
    // Slide 2: The Gap — PDF Page 1
    gap: {
      heading1: "Polymarket создан для Запада.",
      heading2: "Остальной мир ждёт.",
      stat1: "Русскоязычных пользователей без охвата",
      stat2: "Рост рынков предсказаний 2024–2025",
      stat3Label: "Polymarket:",
      stat3Value: "штраф CFTC $1.4M, заблокирован в США",
      footer: "Разрыв реален. Момент настал.",
      footerBrand: "Это — GoMarket.",
    },

    // Slide 3: The Proof — PDF Page 2
    proof: {
      heading: "Регионы с наибольшим крипто-ресурсом",
      headingAccent: "не имеют рынков предсказаний.",
      russia: {
        name: "Россия",
        desc: "в крипте получено в 2024–25 — #1 в Европе",
      },
      turkey: {
        name: "Турция",
        desc: "жителей держит крипту. Инфляция",
        desc2: "годовая инфляция. USDT — их сберкнижка.",
        fraction: "1 из 4",
      },
      easternEurope: {
        name: "Восточная Европа",
        desc1: "Украина —",
        desc1b: "#1 в мире",
        desc2: "по крипте на душу населения. Восточная Европа получила",
        desc3: "в крипте в 2024–25 — быстрее любого западного рынка.",
      },
      asia: {
        name: "Азия / АТР",
        desc: "мирового крипторынка, самый быстрорастущий регион",
      },
      footer1: "объёма рынков предсказаний контролируют американские платформы.",
      footer2: "Ни один из этих регионов им не принадлежит.",
    },

    // Slide 4: The Plan — PDF Page 2
    plan: {
      heading1: "Четыре региона. Один план.",
      headingAccent: "Начинаем сейчас.",
      cis: {
        title: "СНГ —",
        titleAccent: "Запуск",
        desc: "300M+ русскоязычных пользователей. Выходим сюда первыми.",
      },
      turkey: {
        title: "Турция",
        desc: "Каждый 4-й владеет криптой. Инфляция 50%+. USDT — их счёт в банке.",
      },
      asia: {
        title: "Азия / ЮВА",
        desc: "Вьетнам, Индия, Филиппины. 150M пользователей. Нет доминирующей платформы.",
      },
      eastern: {
        title: "Восточная Европа",
        desc: "Украина — #1 по владению криптой. $206B крипты в регионе в 2024–25. Инфраструктуры предсказаний — ноль.",
      },
    },

    // Slide 5: The Aha — PDF Page 3
    aha: {
      heading1: "Конкуренты не проиграли этот рынок.",
      headingAccent: "Они сюда просто не пришли.",
      point1Title: "Нет присутствия. Нет языковой поддержки. Нет локального контекста.",
      point1Desc: "Не понимают, как эти пользователи думают, копят, преумножают и торгуют.",
      point2Title: "Мы говорим на их языке — буквально.",
      point2Desc: "Рынки на русском, турецком, арабском. Жизненные сценарии привязаны к их новостям, их событиям, их реальности.",
      footer: "Это не пропасть, которую мы закрываем. Это рынок, который мы строим с нуля —",
      footerAccent: "на своих условиях.",
    },

    // Slide 6: Bridge — PDF Page 3
    bridge: {
      heading1: "Возможность очевидна.",
      headingAccent: "Реализация — нет.",
      desc: "Рынки предсказаний терпели неудачу по всему миру десятилетиями — не из-за отсутствия спроса, а из-за трёх трудных инженерных проблем.",
      problem1: "Холодный старт ликвидности",
      problem2: "Споры оракула в агрессивной среде",
      problem3: "Трение при онбординге",
      desc2: "Мы потратили месяцы на анализ того, как каждая из них ломается — и как именно её решить.",
      cta: "Вот платформа, которую мы строим.",
    },

    // Slide 7: Built around three problems — PDF Page 3
    threeProblems: {
      heading: "Построено вокруг трёх проблем, которые",
      headingAccent: "убивают платформы.",
      cold: {
        problemLabel: "Холодный старт →",
        solutionLabel: "Протокол-ориентированная ликвидность",
        desc: "LMSR AMM, $1,500–3,000 на рынок. Позиции KOL создают сигнал объёма до прихода органической торговли.",
      },
      oracle: {
        problemLabel: "Споры оракула →",
        solutionLabel: "Слоистое разрешение",
        desc: "Структурированные критерии при создании рынка. Экспертная арбитражная панель.",
      },
      onboarding: {
        problemLabel: "Трение при онбординге →",
        solutionLabel: "Невидимая крипта",
        desc: "Встроенные кошельки. Session keys ERC-4337. Подтверждают один раз, торгуют бесшумно. Никаких MetaMask попапов.",
      },
    },

    // Slide 8: Markets — PDF Page 4
    markets: {
      heading: "Высокая заинтересованность на рынке — стоит торговать.",
      items: [
        "Превысит ли BTC $120K до следующего халвинга?",
        "Будет ли одобрен ETF на Solana в 2025?",
        "Подпишут ли Россия и Украина перемирие до 31 декабря?",
        "Ослабнет ли рубль до 100 к USD к Q3?",
        "Достигнет ли температура в Москве -2°C завтра?",
        "Запустит ли Telegram нативный DEX в 2025?",
      ],
      footer: "Каждый рынок оценивается по 5 параметрам перед листингом. Если не проходит порог — не выходит в эфир.",
      yes: "ДА",
      no: "НЕТ",
    },

    // Slide 9: Hard Problems — PDF Page 3
    hardProblems: {
      heading: "Три проблемы, которые убивают платформы предсказаний.",
      rows: [
        {
          problem: "Холодный старт ликвидности",
          solution: "Протокол-ориентированная ликвидность + позиции KOL на запуске",
        },
        {
          problem: "Споры оракула в агрессивной среде",
          solution: "Уровневые источники, аккредитованные пропоузеры, экспертная арбитражная панель",
        },
        {
          problem: "Трение при онбординге — кошельки убивают конверсию",
          solution: "Встроенные кошельки, session keys, абстракция газа — один раз подтвердил, торгуешь бесшумно",
        },
      ],
    },

    // Slide 10: Architecture — PDF Page 4
    architecture: {
      heading: "Шесть уровней. Каждый — реальная инженерная задача.",
      layers: [
        { layer: "Фронтенд", desc: "Next.js, стакан ордеров в реальном времени, mobile-first" },
        { layer: "Бэкенд", desc: "PostgreSQL + Redis, WebSocket-фиды, индексер цепи" },
        { layer: "Кошелёк и онбординг", desc: "Встроенные кошельки, ERC-4337 session keys, USDC on-ramp" },
        { layer: "Система оракулов", desc: "Multisig v1 → UMA Optimistic Oracle v2" },
        { layer: "Движок матчинга", desc: "Гибридный CLOB — офф-чейн стакан, он-чейн расчёт" },
        { layer: "Смарт-контракты", desc: "Безопасный расчёт — залог USDC, токены ДА/НЕТ, аудированные выплаты" },
      ],
    },

    // Slide 11: Build vs Outsource — PDF Page 5
    buildVsBuy: {
      heading: "Мы знаем, что создавать, а за что платить.",
      buildTitle: "Строим сами",
      buyTitle: "Аутсорсим",
      buildItems: ["Движок матчинга", "Логика разрешения", "Подпись ордеров", "Индексер цепи", "Операционный инструментарий"],
      buyItems: [
        "Кошельки → Privy / Dynamic",
        "Газ → Gelato",
        "База контрактов → Gnosis CTF",
        "База оракула → UMA",
        "On-ramp → Moonpay",
      ],
      footer: "Большинство компаний делают это наоборот: переусложняют контракты, недостраивают биржу.",
      footerAccent: "Мы — нет.",
    },

    // Slide 12: Roadmap Timeline — PDF Page 5
    roadmapTimeline: {
      heading1: "Тестнет за 16 недель.",
      headingAccent: "Мейннет за 6 месяцев.",
      timelineSteps: ["Контракты", "Движок матчинга", "Кошельки + Оракул", "Фронтенд", "Тестнет", "Аудит", "Мейннет"],
      milestones: [
        "$100K–$250K начальная ликвидность подтверждена",
        "$100K–$200K бюджет аудита зарезервирован",
        "Газ-флоат для спонсированных транзакций",
        "7+ провайдеров ликвидности и спреда",
      ],
    },

    // Slide 13: Foundation — PDF Page 6
    foundation: {
      heading1: "Фундамент заложен.",
      heading2: "Теперь строим инфраструктуру.",
      doneTitle: "Готово",
      nextTitle: "Следующие шаги",
      doneItems: [
        "Фреймворк дизайна рынков",
        "Архитектура оракулов",
        "Стратегия ликвидности",
        "300+ KOL-партнёрств",
        "Полная техническая спецификация",
        "Юридический анализ в процессе",
      ],
      nextItems: [
        "MVP-запуск и тестирование",
        "GTM-стратегия и развёртывание",
        "Система «Парлей» в спорте",
        "Партнёры по оракулу и новостям",
        "Запуск мейннета",
      ],
    },

    // Slide 14: Roadmap phases — PDF Page 6
    roadmap: {
      heading: "Дорожная карта",
      phases: [
        { phase: "Фаза 1", title: "Фундамент", time: "Q1 2026", done: true },
        { phase: "Фаза 2", title: "Запуск", time: "Q2 2026", done: false },
        { phase: "Фаза 3", title: "Рост", time: "Q3 2026", done: false },
        { phase: "Фаза 4", title: "Масштаб", time: "Q4 2026+", done: false },
      ],
      phaseItems: [
        [
          "Базовая платформа запущена",
          "Команда и операции на месте",
          "Фреймворк рынков определён",
          "Партнёрства с маркет-мейкерами",
        ],
        [
          "Мейннет с курируемыми рынками",
          "Парлеи к ЧМ по футболу 2026",
          "Реферальная программа запущена",
          "Введён стейкинг ликвидности",
          "Активация KOL и сообщества",
        ],
        [
          "Расширенные категории рынков",
          "Программа фарминга токенов",
          "Выход в Восточную Европу",
          "Глубина ликвидности увеличена",
        ],
        [
          "Мультирегиональное расширение",
          "Децентрализованный оракул",
          "Создание рынков сообществом",
          "Продвинутые функции торговли",
        ],
      ],
      phaseTitles: ["Фундамент", "Запуск", "Рост", "Масштаб"],
    },

    // Slide 15: Team — PDF Page 7
    team: {
      heading: "Команда",
      members: [
        {
          name: "Tural K.",
          role: "Со-основатель",
          desc: "Крипто-нативный маркетинг-стратег, 20+ Web3-проектов. KOL-привлечение, кампании роста, запуск.",
        },
        {
          name: "Nicholas J.",
          role: "Со-основатель",
          desc: "Крипто-инвестор и оператор роста, 7+ лет в Web3. Масштабировал мемкоины до $500M+ через KOL.",
        },
        {
          name: "Zamir K.",
          role: "Руководитель операций",
          desc: "12+ лет построения масштабируемых систем. 30+ запусков токенов, портфель $200M+.",
        },
        {
          name: "King Advisory",
          role: "Руководитель маркетинга",
          desc: "10+ лет в маркетинге и корпоративных продажах. Фокус: доход и крупные сделки.",
        },
        {
          name: "Davey K.",
          role: "Руководитель соцсетей",
          desc: "Web3-оператор роста (ex-Polygon, QuickSwap). Масштабирование крипто-проектов с 0 до рынка.",
        },
        {
          name: "Andrea LV.",
          role: "Менеджер проекта",
          desc: "Стратегия продукта, финансовый дизайн и инженерное исполнение. Опыт: EthicHub, Celo, Migalabs.",
        },
      ],
    },
  },
};

export type Translations = typeof translations.en;
