'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { xpData } from '@/data/experience'
import { eduData, certifications } from '@/data/education'
import { skillsData } from '@/data/skills'
import { formatDateRange } from '@/lib/utils'
import TravelTimeline from '@/components/about/TravelTimeline'

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

export default function AboutContent() {
  return (
    <div>
      {/* Header / Bio */}
      <section className="pt-28 pb-24 md:pt-36 md:pb-28 border-b border-[var(--color-border)]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-xs text-[var(--color-teal)] uppercase tracking-widest mb-5"
              >
                About
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-text-primary)] mb-6"
              >
                Rohit Murarishetti
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-4 text-[var(--color-text-secondary)] leading-relaxed max-w-2xl"
              >
                <p>
                  Hi! I&apos;m Rohit — a software engineer originally from Hyderabad, India, now based in
                  Singapore. I graduated from SUTD with Honours with Highest Distinction (GPA 4.57/5.0)
                  in Computer Science and Design, and I currently work as Lead Software Engineer at
                  CloudsineAI, where I&apos;m building the infrastructure for agentic AI governance.
                </p>
                <p>
                  My work sits at the intersection of AI systems, cloud infrastructure, and security.
                  I care deeply about building things that are observable, reliable, and secure —
                  whether that&apos;s an AI governance platform, a GenAI security firewall, or a research
                  platform deployed at NATO&apos;s largest live-fire cyber exercise.
                </p>
                <p>
                  Outside of engineering: I&apos;m a traveller who&apos;s visited 14+ countries (with many more
                  on the list), a curious reader of geopolitics and fintech, and someone who genuinely
                  believes that the best problems to work on are the ones that feel slightly too hard.
                </p>
              </motion.div>

              {/* Fast facts */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {[
                  'Singapore',
                  'SUTD 4.57 GPA',
                  'AWS Certified',
                  '14+ countries',
                ].map((fact) => (
                  <span
                    key={fact}
                    className="text-xs px-3 py-1.5 rounded-full glass text-[var(--color-text-secondary)] font-mono"
                  >
                    {fact}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative w-36 h-36 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-[var(--color-border-accent)] flex-shrink-0 ring-1 ring-[var(--color-accent)]/20"
            >
              <Image
                src="/images/profile/profile-pic.jpg"
                alt="Rohit Murarishetti"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Travel Timeline + Interactive Map */}
      <section className="py-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <AnimSection>
            <p className="font-mono text-xs text-[var(--color-warm)] uppercase tracking-widest mb-4">
              Travels
            </p>
            <h2 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
              Places I&apos;ve Been
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] mb-10">
              14+ countries visited &middot; Home in Singapore, originally from Hyderabad
            </p>
          </AnimSection>
          <TravelTimeline />
        </div>
      </section>

      {/* Experience timeline */}
      <section id="experience" className="py-24 max-w-[1100px] mx-auto px-6 md:px-12">
        <AnimSection>
          <p className="font-mono text-xs text-[var(--color-teal)] uppercase tracking-widest mb-4">
            Career
          </p>
          <h2 className="font-display text-3xl font-semibold text-[var(--color-text-primary)] mb-12">Experience</h2>
        </AnimSection>

        <div className="relative flex flex-col gap-0">
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-[var(--color-border-accent)] hidden md:block" />
          {xpData.map((xp, i) => {
            const role = xp.roles[0]
            const isCurrent = !role.endDate
            return (
              <AnimSection key={xp.id} delay={i * 0.06}>
                <div className="relative flex gap-6 pb-8 last:pb-0">
                  <div className="hidden md:flex flex-col items-center flex-shrink-0 w-3.5 mt-1">
                    <div
                      className="w-3 h-3 rounded-full border-2 flex-shrink-0"
                      style={{
                        borderColor: isCurrent ? 'var(--color-accent)' : 'var(--color-border-accent)',
                        background: isCurrent ? 'var(--color-accent)' : 'var(--color-surface)',
                      }}
                    />
                  </div>
                  <div className="flex-1 rounded-xl glass p-6 hover:border-[var(--color-border-accent)] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                          {role.position}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <a
                            href={xp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-bright)] transition-colors"
                          >
                            {xp.company}
                          </a>
                          <span className="text-xs text-[var(--color-text-muted)]">&middot; {xp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {isCurrent && (
                          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[var(--color-accent-dim)] bg-[var(--color-accent-glow)] text-xs font-mono text-[var(--color-accent)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                            Now
                          </span>
                        )}
                        <span className="text-xs font-mono text-[var(--color-text-muted)]">
                          {formatDateRange(role.startDate, role.endDate)}
                        </span>
                      </div>
                    </div>
                    {Array.isArray(role.description) ? (
                      <ul className="flex flex-col gap-1.5 mb-4">
                        {(role.description as string[]).map((d, j) => (
                          <li key={j} className="flex gap-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                            <span className="text-[var(--color-border-accent)] flex-shrink-0 mt-1">—</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        {role.description as string}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimSection>
            )
          })}
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <AnimSection>
            <p className="font-mono text-xs text-[var(--color-warm)] uppercase tracking-widest mb-4">
              Academic
            </p>
            <h2 className="font-display text-3xl font-semibold text-[var(--color-text-primary)] mb-10">Education</h2>
          </AnimSection>

          <div className="flex flex-col gap-5">
            {eduData.map((edu, i) => (
              <AnimSection key={edu.id} delay={i * 0.08}>
                <div className="rounded-xl glass p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                        {edu.degree}
                      </h3>
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-bright)] transition-colors"
                      >
                        {edu.institution}
                      </a>
                    </div>
                    <span className="text-xs font-mono text-[var(--color-text-muted)] flex-shrink-0">
                      {formatDateRange(edu.startDate, edu.endDate)}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="text-[var(--color-border-accent)] flex-shrink-0">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimSection>
            ))}

            {certifications.map((cert, i) => (
              <AnimSection key={cert.name} delay={(eduData.length + i) * 0.08}>
                <div className="rounded-xl glass p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-[var(--color-text-muted)] font-mono">
                        {cert.issuer} &middot; {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 max-w-[1100px] mx-auto px-6 md:px-12">
        <AnimSection>
          <p className="font-mono text-xs text-[var(--color-teal)] uppercase tracking-widest mb-4">
            Skills
          </p>
          <h2 className="font-display text-3xl font-semibold text-[var(--color-text-primary)] mb-10">
            Technical Stack
          </h2>
        </AnimSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Languages', items: skillsData.languages },
            { label: 'Frameworks', items: skillsData.frameworks },
            { label: 'Infrastructure', items: skillsData.infrastructure },
            { label: 'AI & ML', items: skillsData.ai },
          ].map((group, i) => (
            <AnimSection key={group.label} delay={i * 0.08}>
              <div>
                <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                  {group.label}
                </p>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--color-text-secondary)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>
    </div>
  )
}
