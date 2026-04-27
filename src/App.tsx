import React, { useEffect, useRef, useState } from 'react';
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
  Fingerprint,
  Snowflake,
  Scale,
  DoorOpen,
  Landmark,
  ShieldCheck,
  Fuel,
  Droplets
} from 'lucide-react';
import {
  FadeIn,
  StaggerGroup,
  StaggerItem,
  AnimatedNumber,
  DrawLine,
  FloatIn,
  GlowPulse,
  RevealText,
} from './animations';
import coverVideo from '../Assets/hf_20260418_144819_b34e5911-85e6-479c-b036-c6e84bd0004d.mp4';
import { translations, type Lang } from './translations';

const Slide = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`min-h-[100dvh] w-full flex flex-col items-center justify-center p-6 py-16 md:p-12 lg:p-24 relative ${className}`}>
    {children}
  </section>
);

function RoadmapTimeline({ steps }: { steps: string[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={timelineRef} className="mb-16 md:mb-24 relative px-4 md:px-0">
      <div className="absolute left-[23px] top-2 bottom-2 w-1 bg-gradient-to-b from-[#8954F2] to-[#2EE1B1] rounded-full md:hidden" />
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-[3px] bg-border-main -translate-y-1/2 rounded-full" />
      <DrawLine
        containerRef={timelineRef}
        color="linear-gradient(to right, #8954F2, #2EE1B1)"
        className="hidden md:block"
      />
      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6 md:gap-0">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          const isDone = i < 5;
          return (
            <FadeIn key={step} delay={0.08 * i} className="flex flex-row md:flex-col items-center gap-4 md:gap-4 relative z-10">
              <motion.div
                className={`w-4 h-4 rounded-full shrink-0 ${isLast ? 'md:scale-150' : ''}`}
                style={{
                  backgroundColor: isDone ? '#8954F2' : isLast ? '#2EE1B1' : 'var(--text-dim)',
                }}
                animate={isLast
                  ? { boxShadow: ['0 0 10px rgba(46,225,177,0.5)', '0 0 24px rgba(46,225,177,0.9)', '0 0 10px rgba(46,225,177,0.5)'] }
                  : isDone
                  ? { boxShadow: ['0 0 4px rgba(137,84,242,0.4)', '0 0 12px rgba(137,84,242,0.7)', '0 0 4px rgba(137,84,242,0.4)'] }
                  : {}
                }
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
              />
              <span className={`text-base font-medium md:absolute md:top-8 md:whitespace-nowrap ${isLast ? 'text-main font-bold' : 'text-muted'}`}>{step}</span>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}

const MarketCard = ({ market, i }: { market: string, i: number }) => {
  const [selected, setSelected] = useState<'yes' | 'no' | null>(null);
  
  return (
    <FadeIn 
      key={i} 
      delay={0.05 * i} 
      className={`border rounded-2xl p-5 md:p-6 flex flex-col justify-between h-auto min-h-[160px] md:h-48 transition-all duration-500 ${
        selected === 'yes' ? 'bg-accent/10 border-accent/40 shadow-[0_0_20px_rgba(137,84,242,0.1)]' : 
        selected === 'no' ? 'bg-zinc-500/10 border-zinc-500/40 shadow-[0_0_20px_rgba(113,113,122,0.1)]' : 
        'bg-card border-border-main hover:border-accent/50'
      }`}
    >
      <h4 className="text-lg md:text-xl font-medium leading-snug">{market}</h4>
      <div className="flex gap-2 mt-4 pt-2 border-t border-border-main/50">
        <button 
          onClick={() => setSelected('yes')}
          className={`text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex-1 text-center transition-all cursor-pointer ${
            selected === 'yes' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-accent/10 text-accent hover:bg-accent/20'
          }`}
        >
          YES
        </button>
        <button 
          onClick={() => setSelected('no')}
          className={`text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex-1 text-center transition-all cursor-pointer ${
            selected === 'no' ? 'bg-zinc-500 text-white shadow-lg shadow-zinc-500/20' : 'bg-zinc-500/10 text-zinc-500 hover:bg-zinc-500/20'
          }`}
        >
          NO
        </button>
      </div>
    </FadeIn>
  );
};

const TeamMemberCard = ({ member, i }: { member: any, i: number }) => {
  return (
    <FloatIn delay={0.08 * i} className="perspective-1000 group min-h-[420px]">
      <div 
        className="relative w-full h-full preserve-3d transition-all duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front Side */}
        <div className="flex flex-col items-center text-center bg-card/20 p-6 rounded-3xl border border-border-main/50 h-full backface-hidden shadow-sm">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-muted mb-6 border border-border-main overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-card"></div>
            <img src={member.img} alt={member.name} className={`absolute inset-0 w-full h-full object-cover z-10 ${member.imgPosition}`} />
            <div className="absolute inset-0 flex items-center justify-center text-dim z-0">
              <Users size={40} className="md:w-12 md:h-12" />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-main mb-1 md:mb-2">{member.name}</h3>
          <p className="text-accent font-medium mb-3 md:mb-4 text-sm md:text-base">{member.role}</p>
          <p className="text-muted text-sm md:text-base leading-relaxed">{member.desc}</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-card/80 backdrop-blur-md rounded-3xl border-2 border-accent/20 rotate-y-180 backface-hidden p-8 shadow-2xl">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(137,84,242,0.4)_0,transparent_70%)]"></div>
           <GlowPulse color="rgba(137,84,242,0.25)">
             <img src="/logo.svg" alt="GoMarket" className="w-24 md:w-32 drop-shadow-[0_0_15px_rgba(137,84,242,0.3)]" />
           </GlowPulse>
           <div className="mt-8 space-y-1 text-center">
             <p className="text-accent font-display font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">GoMarket</p>
             <p className="text-dim font-medium text-[9px] md:text-[10px] uppercase">{member.role}</p>
           </div>
        </div>
      </div>
    </FloatIn>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<Lang>('en');
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const T = translations[lang];

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
            <img src="/logo.svg" alt="GoMarket" className="w-32 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(137,84,242,0.4)]" />
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
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8954F2] to-[#2EE1B1] text-white font-medium hover:opacity-90 transition-opacity"
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
    <div className="min-h-screen w-full font-sans selection:bg-[#8954F2]/30 overflow-x-hidden">
      <div className="bg-page text-main min-h-screen w-full transition-colors duration-300">

        {/* Top-right controls */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
          {/* Language Toggle */}
          <div className="flex items-center bg-card border border-border-main rounded-full overflow-hidden shadow-lg">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-2 text-sm font-medium transition-all ${
                lang === 'en'
                  ? 'bg-accent text-white'
                  : 'text-muted hover:text-main'
              }`}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('ru')}
              className={`px-3 py-2 text-sm font-medium transition-all ${
                lang === 'ru'
                  ? 'bg-accent text-white'
                  : 'text-muted hover:text-main'
              }`}
              aria-label="Русский"
            >
              RU
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-3 rounded-full bg-card border border-border-main text-main hover:border-accent transition-all shadow-lg focus:outline-none"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

      {/* Slide 1: Cover - English only (not in Russian PDF) */}
      <Slide className="bg-page overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={coverVideo}
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8954F212_1px,transparent_1px),linear-gradient(to_bottom,#8954F212_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(137,84,242,0.4)_0,transparent_65%)]"></div>

        <div className="z-10 text-center max-w-4xl mt-auto mb-auto flex flex-col items-center">
          <FadeIn direction="none" delay={0.1}>
            <GlowPulse color="rgba(137,84,242,0.4)">
              <img
                src="/logo.svg"
                alt="GoMarket"
                className="w-56 md:w-80 mb-8 md:mb-10"
              />
            </GlowPulse>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="text-lg md:text-3xl text-muted font-light leading-relaxed px-4">
              {T.cover.taglinePre}{' '}
              <span className="text-accent font-medium">{T.cover.taglineAccent}</span>{' '}
              {T.cover.taglinePost}
            </p>
          </FadeIn>
        </div>

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
              {T.gap.heading1} <br/>
              <span className="text-muted">{T.gap.heading2}</span>
            </h2>
          </FadeIn>

          <StaggerGroup className="space-y-6 md:space-y-8 mb-12 md:mb-16" delay={0.2}>
            <StaggerItem className="flex items-start md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card flex items-center justify-center shrink-0 border border-border-main mt-1 md:mt-0">
                <Globe className="text-accent w-6 h-6 md:w-8 md:h-8" />
              </div>
              <p className="text-xl md:text-4xl font-medium leading-tight">
                <AnimatedNumber value={300} suffix="M+" className="text-accent block md:inline" />
                {' '}{T.gap.stat1}
              </p>
            </StaggerItem>

            <StaggerItem className="flex items-start md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card flex items-center justify-center shrink-0 border border-border-main mt-1 md:mt-0">
                <BarChart3 className="text-accent w-6 h-6 md:w-8 md:h-8" />
              </div>
              <p className="text-xl md:text-4xl font-medium leading-tight">
                <AnimatedNumber value={400} suffix="%" className="text-accent block md:inline" />
                {' '}{T.gap.stat2}
              </p>
            </StaggerItem>

            <StaggerItem className="flex items-start md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card flex items-center justify-center shrink-0 border border-border-main mt-1 md:mt-0">
                <Gavel className="text-accent w-6 h-6 md:w-8 md:h-8" />
              </div>
              <p className="text-xl md:text-4xl font-medium leading-tight">
                <span className="text-accent block md:inline">{T.gap.stat3Label}</span>{' '}{T.gap.stat3Value}
              </p>
            </StaggerItem>
          </StaggerGroup>

          <FadeIn delay={0.6}>
            <p className="text-xl md:text-3xl font-light text-muted border-l-4 border-accent pl-4 md:pl-6 py-2">
              {T.gap.footer} <strong className="text-main block md:inline mt-2 md:mt-0">{T.gap.footerBrand}</strong>
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 3 (was Slide 4): The Proof */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-10 md:mb-16 leading-tight text-center">
              {T.proof.heading} <span className="text-accent">{T.proof.headingAccent}</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-10 md:mb-14">
            <FloatIn delay={0.1} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl md:text-3xl">🇷🇺</span>
                <h3 className="text-xl md:text-2xl font-display font-bold">{T.proof.russia.name}</h3>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                <AnimatedNumber value={376} prefix="$" suffix="B" className="text-accent font-bold" /> {T.proof.russia.desc}
              </p>
            </FloatIn>

            <FloatIn delay={0.2} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl md:text-3xl">🇹🇷</span>
                <h3 className="text-xl md:text-2xl font-display font-bold">{T.proof.turkey.name}</h3>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                <span className="text-accent font-bold">{T.proof.turkey.fraction}</span> {T.proof.turkey.desc} <AnimatedNumber value={50} suffix="%+" className="text-accent font-bold" /> {T.proof.turkey.desc2}
              </p>
            </FloatIn>

            <FloatIn delay={0.3} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl md:text-3xl">🇺🇦</span>
                <h3 className="text-xl md:text-2xl font-display font-bold">{T.proof.easternEurope.name}</h3>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                {T.proof.easternEurope.desc1} <span className="text-accent font-bold">{T.proof.easternEurope.desc1b}</span> {T.proof.easternEurope.desc2}{' '}
                <AnimatedNumber value={206} prefix="$" suffix="B" className="text-accent font-bold" /> {T.proof.easternEurope.desc3}
              </p>
            </FloatIn>

            <FloatIn delay={0.4} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl md:text-3xl">🌏</span>
                <h3 className="text-xl md:text-2xl font-display font-bold">{T.proof.asia.name}</h3>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                <AnimatedNumber value={37.6} suffix="%" decimals={1} className="text-accent font-bold" /> {T.proof.asia.desc}
              </p>
            </FloatIn>
          </div>

          <FadeIn delay={0.6}>
            <p className="text-xl md:text-3xl font-light text-muted border-l-4 border-accent pl-4 md:pl-6 py-2">
              <span className="text-accent font-bold">97.5%</span> {T.proof.footer1} <strong className="text-main">{T.proof.footer2}</strong>
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 4 (was Slide 5): The Plan */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-10 md:mb-16 leading-tight text-center">
              {T.plan.heading1} <span className="text-accent">{T.plan.headingAccent}</span>
            </h2>
          </FadeIn>

          <div className="space-y-5 md:space-y-8">
            <FadeIn delay={0.15} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl flex items-start gap-4 md:gap-6">
              <Globe className="text-[#8954F2] w-8 h-8 md:w-10 md:h-10 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-1">{T.plan.cis.title} <span className="text-accent">{T.plan.cis.titleAccent}</span></h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">{T.plan.cis.desc}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl flex items-start gap-4 md:gap-6">
              <Globe className="text-[#8954F2] w-8 h-8 md:w-10 md:h-10 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-1">{T.plan.turkey.title}</h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">{T.plan.turkey.desc}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.35} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl flex items-start gap-4 md:gap-6">
              <Globe className="text-[#8954F2] w-8 h-8 md:w-10 md:h-10 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-1">{T.plan.asia.title}</h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">{T.plan.asia.desc}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.45} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl flex items-start gap-4 md:gap-6">
              <Globe className="text-[#8954F2] w-8 h-8 md:w-10 md:h-10 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-1">{T.plan.eastern.title}</h3>
                <p className="text-base md:text-lg text-muted leading-relaxed">{T.plan.eastern.desc}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* Slide 5 (was Slide 6): The Aha */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-10 md:mb-16 leading-tight text-center">
              {T.aha.heading1} <span className="text-accent">{T.aha.headingAccent}</span>
            </h2>
          </FadeIn>

          <div className="space-y-8 md:space-y-12">
            <FadeIn delay={0.2} className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="mt-1 shrink-0">
                <Target className="text-accent w-8 h-8 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{T.aha.point1Title}</h3>
                <p className="text-base md:text-xl text-muted">{T.aha.point1Desc}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="mt-1 shrink-0">
                <Languages className="text-accent w-8 h-8 md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{T.aha.point2Title}</h3>
                <p className="text-base md:text-xl text-muted">{T.aha.point2Desc}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-xl md:text-3xl font-light text-muted border-l-4 border-accent pl-4 md:pl-6 py-2">
                {T.aha.footer} <strong className="text-main">{T.aha.footerAccent}</strong>
              </p>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* Slide 6 (was Slide 7): Bridge - The opportunity */}
      <Slide>
        <div className="max-w-4xl w-full text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-10 md:mb-16 leading-tight overflow-hidden">
              <RevealText>{T.bridge.heading1}</RevealText>
              <RevealText delay={0.2} className="text-accent">{T.bridge.headingAccent}</RevealText>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-2xl text-muted leading-relaxed mb-8 md:mb-12">
              {T.bridge.desc}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-10 md:mb-14">
              <div className="bg-card/50 border border-border-main px-6 py-4 rounded-2xl flex items-center gap-3 hover-shiver hover:cursor-default">
                <Snowflake className="text-[#2EE1B1] w-6 h-6 shrink-0" />
                <span className="text-base md:text-lg font-medium text-muted">{T.bridge.problem1}</span>
              </div>
              <div className="bg-card/50 border border-border-main px-6 py-4 rounded-2xl flex items-center gap-3 hover-pivot-tipping hover:cursor-default">
                <Scale className="text-[#2EE1B1] w-6 h-6 shrink-0" />
                <span className="text-base md:text-lg font-medium text-muted">{T.bridge.problem2}</span>
              </div>
              <div className="bg-card/50 border border-border-main px-6 py-4 rounded-2xl flex items-center gap-3 hover-shake hover:cursor-default">
                <DoorOpen className="text-[#2EE1B1] w-6 h-6 shrink-0" />
                <span className="text-base md:text-lg font-medium text-muted">{T.bridge.problem3}</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-base md:text-xl text-muted leading-relaxed mb-10 md:mb-14">
              {T.bridge.desc2}
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="text-xl md:text-3xl font-medium text-accent">
              {T.bridge.cta}
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 7 (was Slide 8): Built around the three problems */}
      <Slide>
        <div className="max-w-6xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-12 md:mb-20 text-center">
              {T.threeProblems.heading} <span className="text-accent">{T.threeProblems.headingAccent}</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <FloatIn delay={0.15} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Snowflake className="text-[#2EE1B1] w-8 h-8 shrink-0" />
                <ArrowRight className="text-dim w-4 h-4" />
                <TrendingUp className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-1 text-muted">{T.threeProblems.cold.problemLabel}</h3>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-accent">{T.threeProblems.cold.solutionLabel}</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">{T.threeProblems.cold.desc}</p>
            </FloatIn>

            <FloatIn delay={0.3} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Scale className="text-[#2EE1B1] w-8 h-8 shrink-0" />
                <ArrowRight className="text-dim w-4 h-4" />
                <Shield className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-1 text-muted">{T.threeProblems.oracle.problemLabel}</h3>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-accent">{T.threeProblems.oracle.solutionLabel}</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">{T.threeProblems.oracle.desc}</p>
            </FloatIn>

            <FloatIn delay={0.45} className="bg-card/50 border border-border-main p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <DoorOpen className="text-[#2EE1B1] w-8 h-8 shrink-0" />
                <ArrowRight className="text-dim w-4 h-4" />
                <Fingerprint className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold mb-1 text-muted">{T.threeProblems.onboarding.problemLabel}</h3>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-accent">{T.threeProblems.onboarding.solutionLabel}</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">{T.threeProblems.onboarding.desc}</p>
            </FloatIn>
          </div>
        </div>
      </Slide>

      {/* Slide 8: The Markets */}
      <Slide>
        <div className="max-w-6xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
              {T.markets.heading}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {T.markets.items.map((market, i) => (
              <MarketCard key={i} market={market} i={i} />
            ))}
          </div>

          <FadeIn delay={0.6}>
            <p className="text-center text-dim text-xs md:text-sm uppercase tracking-widest px-4">
              {T.markets.footer}
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 9: Hard Problems (2-column) */}
      <Slide>
        <div className="max-w-6xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center">
              {T.hardProblems.heading}
            </h2>
          </FadeIn>

          <div className="space-y-4 md:space-y-6">
            {T.hardProblems.rows.map((row, i) => (
              <FadeIn key={i} delay={0.2 * (i + 1)} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-card/30 border border-border-main/50 p-6 md:p-8 rounded-3xl items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-muted flex items-center justify-center text-xl md:text-2xl">
                    {['🧊', '⚖️', '🚪'][i]}
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-muted">{row.problem}</h3>
                </div>
                <div className="text-lg md:text-xl font-medium text-accent md:text-right pl-14 md:pl-0">
                  {row.solution}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 10: Technical Architecture */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 md:mb-12">
              {T.architecture.heading}
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-3">
            {T.architecture.layers.map((item, i) => (
              <FadeIn key={i} delay={0.05 * i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-card/80 border border-border-main p-4 md:p-6 rounded-2xl hover:border-accent/30 transition-colors">
                <div className="w-full md:w-48 shrink-0 font-display font-bold text-accent text-base md:text-lg">{item.layer}</div>
                <div className="text-muted text-sm md:text-lg">{item.desc}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 11: Build vs. Outsource */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 md:mb-16">
              {T.buildVsBuy.heading}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16">
            <FadeIn delay={0.2}>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 text-main border-b border-border-main pb-4">{T.buildVsBuy.buildTitle}</h3>
              <ul className="space-y-3 md:space-y-4 text-lg md:text-xl text-muted">
                {T.buildVsBuy.buildItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><CheckCircle2 className="text-accent shrink-0" size={20}/> {item}</li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 text-dim border-b border-border-main pb-4">{T.buildVsBuy.buyTitle}</h3>
              <ul className="space-y-3 md:space-y-4 text-lg md:text-xl text-dim">
                {T.buildVsBuy.buyItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><ArrowRight className="text-dim/60 shrink-0" size={20}/> {item}</li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <p className="text-lg md:text-2xl font-light text-center text-muted bg-card/50 p-5 md:p-6 rounded-2xl border border-border-main">
              {T.buildVsBuy.footer} <strong className="text-accent font-medium block md:inline mt-2 md:mt-0">{T.buildVsBuy.footerAccent}</strong>
            </p>
          </FadeIn>
        </div>
      </Slide>

      {/* Slide 12: Road to Mainnet */}
      <Slide>
        <div className="max-w-6xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-12 md:mb-20 text-center">
              {T.roadmapTimeline.heading1} <br className="md:hidden" /><span className="text-accent-secondary">{T.roadmapTimeline.headingAccent}</span>
            </h2>
          </FadeIn>

          <RoadmapTimeline steps={T.roadmapTimeline.timelineSteps} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
            <FadeIn delay={0.4} className="text-center bg-card/30 p-6 rounded-2xl border border-border-main/50 flex flex-col items-center">
              <Landmark className="text-[#8954F2] w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
              <p className="text-lg md:text-xl font-medium text-main">{T.roadmapTimeline.milestones[0]}</p>
            </FadeIn>
            <FadeIn delay={0.5} className="text-center bg-card/30 p-6 rounded-2xl border border-border-main/50 flex flex-col items-center">
              <ShieldCheck className="text-[#8954F2] w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
              <p className="text-lg md:text-xl font-medium text-main">{T.roadmapTimeline.milestones[1]}</p>
            </FadeIn>
            <FadeIn delay={0.6} className="text-center bg-card/30 p-6 rounded-2xl border border-border-main/50 flex flex-col items-center">
              <Fuel className="text-[#8954F2] w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
              <p className="text-lg md:text-xl font-medium text-main">{T.roadmapTimeline.milestones[2]}</p>
            </FadeIn>
            <FadeIn delay={0.7} className="text-center bg-card/30 p-6 rounded-2xl border border-border-main/50 flex flex-col items-center">
              <Droplets className="text-[#8954F2] w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
              <p className="text-lg md:text-xl font-medium text-main">{T.roadmapTimeline.milestones[3]}</p>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* Slide 13: What We Have - Foundation */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 md:mb-16">
              {T.foundation.heading1} <span className="block md:inline">{T.foundation.heading2}</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <FadeIn delay={0.2} className="bg-card/50 p-6 md:p-8 rounded-3xl border border-border-main">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 text-main flex items-center gap-3">
                <CheckCircle2 className="text-accent w-8 h-8" /> {T.foundation.doneTitle}
              </h3>
              <ul className="space-y-3 md:space-y-4 text-lg md:text-xl text-muted">
                {T.foundation.doneItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-muted"></div> {item}</li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-accent/10 p-6 md:p-8 rounded-3xl border border-accent/50">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8 text-accent flex items-center gap-3">
                <ArrowRight className="text-accent w-8 h-8" /> {T.foundation.nextTitle}
              </h3>
              <ul className="space-y-3 md:space-y-4 text-lg md:text-xl text-muted">
                {T.foundation.nextItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {item}</li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Slide>

      {/* Slide 14: Roadmap */}
      <Slide>
        <div className="max-w-5xl w-full">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-7xl font-bold mb-12 md:mb-20 text-center">
              {T.roadmap.heading}
            </h2>
          </FadeIn>

          {/* Horizontal line desktop */}
          <div className="relative hidden md:block mb-12">
            <div className="absolute top-1.5 left-0 right-0 h-px bg-border-main/50" />
            <div className="grid grid-cols-4 gap-6">
              {T.roadmap.phases.map((p, i) => (
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
            {T.roadmap.phaseItems.map((items, i) => (
              <FadeIn key={i} delay={0.15 * i}>
                {/* Mobile-only header */}
                <div className="md:hidden flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full border-2 ${T.roadmap.phases[i].done ? 'bg-accent border-accent' : 'bg-card border-border-main/80'}`} />
                  <span className="text-accent font-bold text-xs uppercase tracking-wider">{T.roadmap.phases[i].phase}</span>
                  <span className="text-main font-display font-bold text-lg">{T.roadmap.phaseTitles[i]}</span>
                  {T.roadmap.phases[i].done && <CheckCircle2 className="text-accent w-4 h-4" />}
                </div>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${T.roadmap.phases[i].done ? 'bg-accent/60' : 'bg-muted/60'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </Slide>

      {/* Slide 15: Team */}
      <Slide>
        <div className="max-w-6xl w-full">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-7xl font-bold mb-12 md:mb-20 text-center">
              {T.team.heading}
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {T.team.members.map((member, i) => {
              const teamImgs = [
                { img: "/team/Tural Kazimov.jpg", imgPosition: "object-top" },
                { img: "/team/Nicholas Jorden.jpg", imgPosition: "object-top" },
                { img: "/team/zamir k.jpg", imgPosition: "object-top" },
                { img: "/team/King.jpg", imgPosition: "object-top" },
                { img: "/team/Davey Keuvelaar.jpg", imgPosition: "object-top" },
                { img: "/team/andrea lv.jpg", imgPosition: "object-top" },
              ];
              return <TeamMemberCard key={i} member={{...member, ...teamImgs[i]}} i={i} />;
            })}
          </div>

        </div>
      </Slide>

      {/* Slide 16: Close - English only (not in Russian PDF) */}
      <Slide className="bg-page">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(137,84,242,0.8)_0,transparent_50%)]"></div>

        <div className="max-w-4xl w-full text-center relative z-10">
          <FadeIn className="flex justify-center">
            <GlowPulse color="rgba(137,84,242,0.45)">
              <img
                src="/logo.svg"
                alt="GoMarket"
                className="w-48 md:w-72 mb-6 md:mb-8"
              />
            </GlowPulse>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-4xl text-muted font-light leading-relaxed mb-12 md:mb-20 px-4">
              {T.close.tagline}
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
