'use client'

import Link from 'next/link'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { projectsData } from '@/data/projects'
import { skillsData } from '@/data/skills'

// ─── Animated counter ────────────────────────────────────────────────────────

function AnimatedCounter({
  from,
  to,
  prefix = '',
  suffix = '',
  duration = 1.2,
  inView,
}: {
  from: number
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  inView: boolean
}) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (v) => {
    if (to % 1 !== 0) return v.toFixed(2)
    return Math.round(v).toString()
  })
  const [display, setDisplay] = useState(to % 1 !== 0 ? from.toFixed(2) : from.toString())

  useEffect(() => {
    if (!inView) return
    const unsubscribe = rounded.on('change', (v) => setDisplay(v))
    const controls = animate(count, to, { duration, ease: 'linear' })
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [inView, count, to, duration, rounded])

  return (
    <span className="font-mono text-4xl md:text-5xl font-bold tabular-nums text-[var(--color-warm)]">
      {prefix}{display}{suffix}
    </span>
  )
}

const impactMetrics = [
  { value: 150, prefix: '$', suffix: 'K+', label: 'Contracts Closed' },
  { value: 60, prefix: '$', suffix: 'K+', label: 'AWS Savings / Year' },
  { value: 99.95, prefix: '', suffix: '%', label: 'Production Uptime' },
]

function MetricsStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <AnimSection delay={0.1}>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 pt-2 pb-6 border-b border-[var(--color-border)]">
        {impactMetrics.map((m, i) => (
          <div key={i} className="flex flex-col gap-2 text-center">
            <AnimatedCounter
              from={0}
              to={m.value}
              prefix={m.prefix}
              suffix={m.suffix}
              duration={1.0 + i * 0.15}
              inView={inView}
            />
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </AnimSection>
  )
}

function SectionLabel({ children, color = 'teal' }: { children: React.ReactNode; color?: 'teal' | 'warm' | 'ai' }) {
  const colorVar = color === 'warm' ? 'var(--color-warm)' : color === 'ai' ? 'var(--color-ai)' : 'var(--color-teal)'
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] mb-4" style={{ color: colorVar }}>
      {children}
    </p>
  )
}

function AnimSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55 }}
    >
      {children}
    </motion.div>
  )
}

const cloudsineHighlights = [
  {
    label: 'Weborion Monitor (Flagship Product)',
    detail:
      'Led product engineering and DevOps for Cloudsine\'s flagship web monitoring SaaS platform. Maintained high availability and supported enterprise client engagements, directly contributing to $150K+ in closed contracts.',
    metric: '$150K+',
    metricLabel: 'in contracts',
  },
  {
    label: 'AWS Infrastructure Optimization',
    detail:
      'Redesigned cloud infrastructure architecture, delivering 25% cost reduction through rightsizing, reserved capacity, and eliminating underutilized resources — without sacrificing performance.',
    metric: '$60K+',
    metricLabel: 'annual savings',
  },
  {
    label: 'DevOps & Platform Reliability',
    detail:
      'Led CI/CD pipeline and infrastructure-as-code initiatives for the Weborion SaaS platform. Monitoring, alerting, and automated rollback processes achieving consistent production stability.',
    metric: '99.95%',
    metricLabel: 'uptime achieved',
  },
  {
    label: 'GenAI Security Firewall',
    detail:
      'Architected a GenAI-powered security firewall for IoT/RTSP protocols using Go and ModSecurity, protecting against AI-augmented attack patterns targeting embedded systems and camera streams.',
    metric: 'Go + ModSecurity',
    metricLabel: 'tech stack',
  },
  {
    label: 'Vulnerability Triage Agent',
    detail:
      'Built an autonomous agentic AI pipeline that ingests security scan output, classifies vulnerabilities by severity and exploitability, and prioritizes remediation — replacing hours of manual triage.',
    metric: 'Agentic AI',
    metricLabel: 'automation',
  },
]

const cloudsineTech = ['Go', 'TypeScript', 'React', 'Next.js', 'AWS', 'Docker', 'CI/CD', 'ModSecurity', 'GenAI', 'Agentic AI']

const aiProjectIds = ['hrag', 'nlp', 'hsclass', 'ddw']

export default function WorkPageContent() {
  const aiProjects = projectsData.filter((p) => aiProjectIds.includes(p.id))

  return (
    <div>
      {/* Page header */}
      <section className="pt-28 pb-24 md:pt-36 md:pb-32 border-b border-[var(--color-border)] relative overflow-hidden">
        <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs text-[var(--color-warm)] uppercase tracking-[0.2em] mb-5"
          >
            Agentic AI Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="font-display text-5xl md:text-6xl font-semibold text-[var(--color-text-primary)] leading-tight max-w-[680px] mb-6"
          >
            AI governance for the agent era.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed"
          >
            Agentic AI systems can&apos;t govern themselves. Someone has to build the infrastructure
            that makes them observable, secure, and accountable. That&apos;s what I do at CloudsineAI —
            and what I&apos;ve been building toward across every role I&apos;ve had.
          </motion.p>
        </div>
      </section>

      {/* CloudsineAI showcase */}
      <section className="py-24 max-w-[1100px] mx-auto px-6 md:px-12">
        <AnimSection>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
            <div>
              <SectionLabel color="warm">Current Role</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)]">
                CloudsineAI
              </h2>
              <p className="text-[var(--color-text-secondary)] mt-1">
                Lead Software Engineer &middot; March 2025 — Present
              </p>
            </div>
            <span className="flex items-center gap-1.5 self-start px-3 py-1 rounded-full border border-[var(--color-accent-dim)] bg-[var(--color-accent-glow)] text-xs font-mono text-[var(--color-accent)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Currently Here
            </span>
          </div>
        </AnimSection>

        {/* Impact metrics */}
        <MetricsStrip />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cloudsineHighlights.map((h, i) => (
            <AnimSection key={h.label} delay={i * 0.07}>
              <div
                className="group rounded-xl glass p-6 hover:border-[var(--color-border-accent)] transition-colors h-full"
                style={i === 0 ? { borderTopColor: 'var(--color-accent)', borderTopWidth: '2px' } : {}}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug">
                    {h.label}
                  </h3>
                  <div className="text-right flex-shrink-0">
                    <p className="font-mono text-lg font-bold text-[var(--color-gold)]">{h.metric}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{h.metricLabel}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {h.detail}
                </p>
              </div>
            </AnimSection>
          ))}

          <AnimSection delay={0.35}>
            <div className="rounded-xl glass p-6">
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">
                Tech Stack at CloudsineAI
              </h3>
              <div className="flex flex-wrap gap-2">
                {cloudsineTech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-border-accent)] text-[var(--color-text-secondary)] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* iTrust, SUTD — Previous Role */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <AnimSection>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
              <div>
                <SectionLabel color="teal">Previous Role</SectionLabel>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)]">
                  iTrust, SUTD
                </h2>
                <p className="text-[var(--color-text-secondary)] mt-1">
                  Software Engineer &middot; Aug 2024 – Feb 2025
                </p>
                <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                  Centre for Research in Cyber Security, Singapore University of Technology and Design
                </p>
              </div>
            </div>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimSection delay={0.08}>
              <div className="rounded-xl glass p-6 h-full" style={{ borderTopColor: 'var(--color-teal)', borderTopWidth: '2px' }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-teal)]" />
                  <span className="text-xs font-mono text-[var(--color-text-muted)]">Primary Project</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--color-text-primary)] leading-snug mb-2">
                  OT Data Visualization Platform
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Built a real-time Operational Technology data visualization platform using React,
                  Next.js, and ZeroMQ. Enhanced threat detection capabilities for critical
                  infrastructure operators through cross-functional collaboration with research teams.
                </p>
              </div>
            </AnimSection>

            <AnimSection delay={0.14}>
              <div className="rounded-xl glass p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-ai)]" />
                  <span className="text-xs font-mono text-[var(--color-text-muted)]">Deployment</span>
                </div>
                <h3 className="text-base font-semibold text-[var(--color-text-primary)] leading-snug mb-2">
                  Lockedshields CCDCOE 2024
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mb-3 font-mono">
                  NATO Cooperative Cyber Defence Centre &middot; 41 Nations
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Delivered the OT security platform for Lockedshields CCDCOE — the world&apos;s largest
                  live-fire cyber exercise — supporting critical infrastructure defense across 41 nations.
                </p>
              </div>
            </AnimSection>
          </div>

          {/* Published paper callout */}
          <AnimSection delay={0.2}>
            <div className="mt-5 flex items-center gap-4 px-5 py-4 rounded-xl glass">
              <span className="w-2 h-2 rounded-full bg-[var(--color-type-research)] flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--color-text-primary)] leading-snug">
                  Real-Time Detection of Data Manipulation Attacks in ICS
                </p>
                <p className="text-xs text-[var(--color-text-muted)] font-mono mt-0.5">
                  International Journal of Critical Infrastructure Protection (IJCIP) &middot; 2025
                </p>
              </div>
              <a
                href="https://link.springer.com/article/10.1007/s10207-025-01172-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-bright)] transition-colors flex-shrink-0"
              >
                Read paper
                <span className="text-[9px]">&#8599;</span>
              </a>
            </div>
          </AnimSection>

          {/* Tech stack */}
          <AnimSection delay={0.25}>
            <div className="mt-5 flex flex-wrap gap-2">
              {['React', 'Next.js', 'ZeroMQ', 'Python', 'Cybersecurity', 'ICS/SCADA'].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-border-accent)] text-[var(--color-text-secondary)] font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* AI projects */}
      <section className="py-24 max-w-[1100px] mx-auto px-6 md:px-12">
        <AnimSection>
          <SectionLabel color="ai">Earlier AI Work</SectionLabel>
          <h2 className="font-display text-3xl font-semibold text-[var(--color-text-primary)] mb-10">
            AI &amp; ML Projects
          </h2>
        </AnimSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {aiProjects.map((project, i) => (
            <AnimSection key={project.id} delay={i * 0.08}>
              <Link
                href={`/projects/${project.id}`}
                className="group flex flex-col gap-3 rounded-xl glass p-5 hover:border-[var(--color-border-accent)] transition-all hover:shadow-md h-full"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-type-ai)]" />
                  <span className="text-xs font-mono text-[var(--color-text-muted)]">AI</span>
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed flex-1">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-1.5 py-0.5 rounded border border-[var(--color-border)] text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <AnimSection>
            <SectionLabel color="teal">Capabilities</SectionLabel>
            <h2 className="font-display text-3xl font-semibold text-[var(--color-text-primary)] mb-10">
              Technical Stack
            </h2>
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'AI & ML', items: skillsData.ai },
              { label: 'Languages', items: skillsData.languages },
              { label: 'Frameworks', items: skillsData.frameworks },
              { label: 'Infrastructure', items: skillsData.infrastructure },
            ].map((group, i) => (
              <AnimSection key={group.label} delay={i * 0.08}>
                <div>
                  <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <AnimSection>
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                Interested in the full picture?
              </p>
              <p className="text-[var(--color-text-secondary)]">
                See all projects or get in touch directly.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all"
              >
                All Projects
              </Link>
              <a
                href="mailto:rmurarishetti@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent)] text-white text-sm font-semibold hover:bg-[var(--color-accent-bright)] transition-colors"
              >
                Get in Touch &#8594;
              </a>
            </div>
          </div>
        </AnimSection>
      </section>
    </div>
  )
}
