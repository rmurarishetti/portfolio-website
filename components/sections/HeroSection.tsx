'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion'

// ─── Hero section ───────────────────────────────────────────────────────────

const headlineLines = [
  'Engineer.',
  'Explorer.',
  'Builder of things',
  'that matter.',
]

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  // Mouse parallax for orbs
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 })
  const orbX1 = useTransform(smoothX, [-500, 500], [-15, 15])
  const orbY1 = useTransform(smoothY, [-500, 500], [-10, 10])
  const orbX2 = useTransform(smoothX, [-500, 500], [10, -10])
  const orbY2 = useTransform(smoothY, [-500, 500], [8, -8])

  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseX.set(e.clientX - cx)
      mouseY.set(e.clientY - cy)
    }
    window.addEventListener('mousemove', handleMouse, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--hero-canvas)' }}
    >
      {/* ── Animated gradient orbs (theme-aware) ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Orb 1 — orange (light) / lapis (dark) */}
        <motion.div
          className="hero-orb-1 absolute -top-[10%] -left-[5%] w-[600px] h-[500px] rounded-full opacity-[0.18] blur-[120px]"
          style={{
            background: 'radial-gradient(ellipse, var(--hero-orb-1) 0%, transparent 70%)',
            x: orbX1,
            y: orbY1,
          }}
        />
        {/* Orb 2 — lapis (light) / gold (dark) */}
        <motion.div
          className="hero-orb-2 absolute top-[20%] -right-[8%] w-[450px] h-[400px] rounded-full opacity-[0.15] blur-[100px]"
          style={{
            background: 'radial-gradient(ellipse, var(--hero-orb-2) 0%, transparent 70%)',
            x: orbX2,
            y: orbY2,
          }}
        />
        {/* Orb 3 — teal in both modes */}
        <motion.div
          className="hero-orb-3 absolute -bottom-[15%] left-[30%] w-[500px] h-[400px] rounded-full opacity-[0.12] blur-[100px]"
          style={{
            background: 'radial-gradient(ellipse, var(--hero-orb-3) 0%, transparent 70%)',
            x: orbX1,
            y: orbY2,
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12 py-32 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-xs uppercase tracking-[0.25em] mb-8 text-[var(--hero-muted)]"
        >
          Rohit Murarishetti
        </motion.p>

        {/* Headline — personality-driven, mask-reveal per line */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.08] tracking-tight mb-10">
          {headlineLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block text-[var(--hero-text)]"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{
                  delay: 0.35 + i * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Body — refined typography with balanced line lengths */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-xl mx-auto mb-12"
        >
          <p className="text-[17px] md:text-lg leading-[1.75] text-[var(--hero-muted)] tracking-[0.01em]">
            Lead Software Engineer at{' '}
            <span className="text-[var(--hero-text)] font-medium">CloudsineAI</span>,
            building agentic AI governance for the enterprise.
          </p>
          <p className="text-[17px] md:text-lg leading-[1.75] text-[var(--hero-muted)] tracking-[0.01em] mt-3">
            Tech enthusiast, EV fanatic, stock market dabbler, and a traveller
            chasing passport stamps across 14+ countries. The world is my classroom.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: 'var(--hero-cta-bg)',
              color: 'var(--hero-cta-text)',
            }}
          >
            View My Work
            <span className="text-xs">&#8594;</span>
          </Link>
          <a
            href="mailto:rmurarishetti@gmail.com"
            className="inline-flex items-center px-6 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              borderColor: 'var(--hero-border)',
              color: 'var(--hero-text)',
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
