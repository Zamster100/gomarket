import React, { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  animate,
  Variants,
} from 'motion/react';

// ─── Easing curves ────────────────────────────────────────────────────────────
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

// ─── Variant factories ────────────────────────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: EASE_OUT_EXPO },
  }),
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay, ease: EASE_OUT_EXPO },
  }),
};

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: EASE_OUT_EXPO },
  }),
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: EASE_OUT_EXPO },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

// ─── FadeIn ──────────────────────────────────────────────────────────────────
// Drop-in replacement for the old FadeIn — `once: true` prevents re-trigger
export function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
}) {
  const variants =
    direction === 'left'
      ? slideInLeftVariants
      : direction === 'right'
      ? slideInRightVariants
      : direction === 'none'
      ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay, ease: EASE_OUT_EXPO } } }
      : fadeUpVariants;

  return (
    <motion.div
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerGroup ─────────────────────────────────────────────────────────────
// Wraps children; each direct child using staggerItemVariants will cascade in
export function StaggerGroup({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ─────────────────────────────────────────────────────────────
export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// ─── AnimatedNumber ───────────────────────────────────────────────────────────
// Counts up from 0 to `value` when it enters the viewport
export function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  className = '',
  duration = 1.8,
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString()
  );
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration, ease: 'easeOut' });
    }
  }, [inView, value, duration, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// ─── DrawLine ─────────────────────────────────────────────────────────────────
// A horizontal line that draws itself as the parent section scrolls into view.
// Wrap the timeline section in a ref and pass it as `containerRef`.
export function DrawLine({
  containerRef,
  className = '',
  color = 'var(--accent)',
}: {
  containerRef: React.RefObject<Element | null>;
  className?: string;
  color?: string;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ['start 70%', 'end 30%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 18,
    restDelta: 0.001,
  });

  const width = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      style={{ width, background: color }}
      className={`absolute top-1/2 left-0 h-[3px] -translate-y-1/2 rounded-full ${className}`}
    />
  );
}

// ─── RevealText ───────────────────────────────────────────────────────────────
// Reveals text with a clip-path wipe from left to right
export function RevealText({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── FloatIn ─────────────────────────────────────────────────────────────────
// Card that floats up with a spring (more physical feel than linear easing)
export function FloatIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        opacity: { duration: 0.4, delay },
        y: { type: 'spring', stiffness: 100, damping: 15, delay },
        scale: { duration: 0.4, delay, ease: EASE_OUT_EXPO },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── GlowPulse ───────────────────────────────────────────────────────────────
// Ambient glow that pulses — use on hero logo or accent elements
export function GlowPulse({
  children,
  color = 'rgba(137,84,242,0.35)',
  className = '',
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        filter: [
          `drop-shadow(0 0 20px ${color})`,
          `drop-shadow(0 0 50px ${color})`,
          `drop-shadow(0 0 20px ${color})`,
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
