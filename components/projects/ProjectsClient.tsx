'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import { projectsData } from '@/data/projects'
import type { Project, ProjectType } from '@/types'
import { formatDateRange, cn } from '@/lib/utils'

const typeColors: Record<ProjectType, string> = {
  AI: 'var(--color-type-ai)',
  Software: 'var(--color-type-software)',
  Engineering: 'var(--color-type-engineering)',
  Medtech: 'var(--color-type-medtech)',
  Research: 'var(--color-type-research)',
}

const ALL_TYPES: Array<ProjectType | 'All'> = ['All', 'AI', 'Software', 'Engineering', 'Medtech', 'Research']

// ─── Horizontal project row ─────────────────────────────────────────────────

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block rounded-2xl glass hover:border-[var(--color-border-accent)] transition-all duration-300 hover:shadow-lg overflow-hidden"
    >
      <div className={cn(
        'flex flex-col md:flex-row items-stretch',
        !isEven && 'md:flex-row-reverse',
      )}>
        {/* Thumbnail */}
        <div className="relative md:w-[42%] flex-shrink-0 aspect-video md:aspect-auto overflow-hidden bg-[var(--color-surface-raised)]">
          <Image
            src={project.thumbnail.href}
            alt={project.thumbnail.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          {/* Type badge overlay */}
          <div className="absolute top-3 left-3">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg glass"
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: typeColors[project.type] }}
              />
              {project.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center p-6 md:p-8 gap-3">
          {/* Date + status */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[var(--color-text-muted)]">
              {formatDateRange(project.startDate, project.endDate)}
            </span>
            {!project.endDate && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full border border-[var(--color-accent-dim)] bg-[var(--color-accent-glow)] text-[10px] font-mono text-[var(--color-accent)]">
                <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] animate-pulse" />
                Active
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] leading-snug group-hover:text-[var(--color-accent)] transition-colors">
            {project.name}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
            {project.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View link */}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] mt-2 group-hover:gap-2.5 transition-all">
            View project
            <span className="transition-transform group-hover:translate-x-1">&#8594;</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

// ─── Main client ────────────────────────────────────────────────────────────

export default function ProjectsClient() {
  const [search, setSearch] = useState('')
  const [activeType, setActiveType] = useState<ProjectType | 'All'>('All')
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set())
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filterScrolled, setFilterScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setFilterScrolled(window.scrollY > 250)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const allTags = useMemo(() => {
    const set = new Set<string>()
    projectsData.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [])

  const filtered = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesType = activeType === 'All' || p.type === activeType
      const matchesSearch =
        search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      const matchesTags =
        activeTags.size === 0 || [...activeTags].every((t) => p.tags.includes(t))
      return matchesType && matchesSearch && matchesTags
    })
  }, [search, activeType, activeTags])

  function toggleTag(tag: string) {
    setActiveTags((prev) => {
      const next = new Set(prev)
      next.has(tag) ? next.delete(tag) : next.add(tag)
      return next
    })
  }

  function clearFilters() {
    setSearch('')
    setActiveType('All')
    setActiveTags(new Set())
  }

  const hasActiveFilters = search !== '' || activeType !== 'All' || activeTags.size > 0

  return (
    <div>
      {/* Header */}
      <section className="pt-28 pb-24 md:pt-36 md:pb-28 border-b border-[var(--color-border)]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <p className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h1 className="font-display text-5xl font-semibold text-[var(--color-text-primary)] mb-4">Projects</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl">
            {projectsData.length} projects across AI, distributed systems, full-stack engineering, and hardware.
          </p>
        </div>
      </section>

      {/* Sticky filter bar */}
      <motion.div
        className={cn(
          'sticky z-30',
          filterScrolled
            ? 'mx-4 md:mx-auto rounded-2xl border border-[var(--color-border)]'
            : 'border-b border-[var(--color-border)]',
        )}
        animate={{
          top: filterScrolled ? 80 : 64,
          maxWidth: filterScrolled ? 800 : 9999,
          boxShadow: filterScrolled
            ? '0 8px 32px rgba(0,0,0,0.08)'
            : '0 0px 0px rgba(0,0,0,0)',
        }}
        transition={{
          maxWidth: {
            duration: filterScrolled ? 0.5 : 0.4,
            ease: filterScrolled ? [0.22, 1, 0.36, 1] : [0.4, 0, 0.2, 1],
          },
          top: { duration: 0.3 },
          boxShadow: { duration: 0.3 },
        }}
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className={cn(
          'mx-auto',
          filterScrolled ? 'px-4' : 'max-w-[1100px] px-6 md:px-12',
        )}>
          {/* Compact bar: search + filter toggle + active count */}
          <div className="flex items-center gap-3 h-14">
            <div className="flex items-center gap-2 flex-1 max-w-xs px-3 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg focus-within:border-[var(--color-accent)] transition-colors">
              <Search size={14} className="text-[var(--color-text-muted)] flex-shrink-0" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none"
              />
            </div>

            <button
              onClick={() => setFiltersOpen((o) => !o)}
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border',
                filtersOpen || hasActiveFilters
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent-glow)] text-[var(--color-accent)]'
                  : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-text-secondary)]',
              )}
            >
              <SlidersHorizontal size={12} />
              Filters
              {(activeType !== 'All' || activeTags.size > 0) && (
                <span className="w-4 h-4 rounded-full bg-[var(--color-accent)] text-white text-[10px] flex items-center justify-center font-mono">
                  {(activeType !== 'All' ? 1 : 0) + activeTags.size}
                </span>
              )}
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
              >
                <X size={10} />
                Clear
              </button>
            )}

            <span className="text-xs font-mono text-[var(--color-text-muted)] ml-auto hidden sm:block">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Collapsible filter panel */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-4 flex flex-col gap-4 border-t border-[var(--color-border)] pt-4">
                  {/* Type filters */}
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Type</p>
                    <div className="flex flex-wrap gap-1.5">
                      {ALL_TYPES.map((type) => (
                        <button
                          key={type}
                          onClick={() => setActiveType(type)}
                          className={cn(
                            'px-3 py-1 rounded-full text-xs font-medium transition-all border',
                            activeType === type
                              ? 'border-[var(--color-accent)] bg-[var(--color-accent-glow)] text-[var(--color-accent)]'
                              : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-text-secondary)]',
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tag filters */}
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Tags</p>
                    <div className="flex flex-wrap gap-1.5">
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={cn(
                            'px-2.5 py-0.5 rounded-full text-xs transition-all border',
                            activeTags.has(tag)
                              ? 'border-[var(--color-ai)] bg-[var(--color-ai-dim)] text-[var(--color-ai)]'
                              : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-accent)]',
                          )}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Project list */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-12">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div layout className="flex flex-col gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <ProjectRow project={project} index={i} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-[var(--color-text-muted)]"
            >
              <p className="text-lg font-semibold mb-2">No projects found</p>
              <p className="text-sm">Try adjusting your filters</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
