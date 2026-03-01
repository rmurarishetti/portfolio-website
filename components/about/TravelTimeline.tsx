'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import createGlobe from 'cobe'
import { travelData } from '@/data/travel'
import type { TravelCity } from '@/types'

// ─── Group travel data by year, sort most recent first ──────────────────────

function groupByYear(data: TravelCity[]): { year: string; entries: TravelCity[] }[] {
  const map = new Map<string, TravelCity[]>()
  for (const entry of data) {
    const year = entry.startDate.split('-')[0]
    if (!map.has(year)) map.set(year, [])
    map.get(year)!.push(entry)
  }
  return Array.from(map.entries())
    .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
    .map(([year, entries]) => ({ year, entries }))
}

// ─── Convert lat/lng to cobe phi/theta ──────────────────────────────────────

function locationToAngles(lat: number, lng: number): [number, number] {
  return [
    Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
    (lat * Math.PI) / 180,
  ]
}

// ─── Interactive Globe ──────────────────────────────────────────────────────

function TravelGlobe({
  entries,
  activeIndex,
  isDark,
}: {
  entries: TravelCity[]
  activeIndex: number
  isDark: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const focusRef = useRef<[number, number]>(
    locationToAngles(entries[0].coordinates[0], entries[0].coordinates[1])
  )
  const phiRef = useRef(focusRef.current[0])
  const thetaRef = useRef(focusRef.current[1])

  // Update target when active entry changes
  useEffect(() => {
    const entry = entries[activeIndex]
    if (entry) {
      focusRef.current = locationToAngles(entry.coordinates[0], entry.coordinates[1])
    }
  }, [activeIndex, entries])

  useEffect(() => {
    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: isDark ? 1 : 0,
      diffuse: isDark ? 1.2 : 3,
      mapSamples: 16000,
      mapBrightness: isDark ? 2.5 : 1.5,
      baseColor: isDark ? [0.15, 0.18, 0.28] : [0.95, 0.93, 0.88],
      markerColor: isDark ? [0.83, 0.66, 0.28] : [0.91, 0.48, 0.16],
      glowColor: isDark ? [0.08, 0.10, 0.18] : [0.95, 0.93, 0.88],
      markers: entries.map((e) => ({
        location: [e.coordinates[0], e.coordinates[1]] as [number, number],
        size: 0.07,
      })),
      onRender: (state) => {
        const [targetPhi, targetTheta] = focusRef.current
        phiRef.current += (targetPhi - phiRef.current) * 0.06
        thetaRef.current += (targetTheta - thetaRef.current) * 0.06

        state.phi = phiRef.current
        state.theta = thetaRef.current
        state.width = 600 * 2
        state.height = 600 * 2
      },
    })

    return () => {
      globe.destroy()
    }
  }, [isDark, entries])

  const activeEntry = entries[activeIndex]

  return (
    <div className="relative">
      <div
        className="relative w-full aspect-square"
        style={{
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 68%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 68%)',
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ width: '100%', height: '100%', aspectRatio: '1' }}
        />
      </div>

      {/* Active city overlay */}
      <AnimatePresence mode="wait">
        {activeEntry && (
          <motion.div
            key={activeEntry.city}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl glass"
          >
            <span className="text-2xl">{activeEntry.countryEmoji}</span>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                {activeEntry.city}, {activeEntry.country}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] font-mono">
                {activeEntry.type === 'home' ? 'Lived here' : 'Visited'}
                {activeEntry.travelledFrom && ` from ${activeEntry.travelledFrom}`}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Photo mosaic ────────────────────────────────────────────────────────────

function PhotoMosaic({ images, city }: { images: string[]; city: string }) {
  const [loadErrors, setLoadErrors] = useState<Set<number>>(new Set())

  // Reset errors when images change
  useEffect(() => {
    setLoadErrors(new Set())
  }, [images])

  if (!images || images.length === 0) return null

  const validImages = images.filter((_, i) => !loadErrors.has(i))
  if (validImages.length === 0) return null

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 rounded-xl overflow-hidden" style={{ height: 200 }}>
      {/* Large image — spans 2 rows */}
      <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
        <Image
          src={images[0]}
          alt={`${city} photo 1`}
          fill
          className="object-cover"
          sizes="300px"
          onError={() => setLoadErrors((prev) => new Set(prev).add(0))}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <p className="absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow-md">
          {city}
        </p>
      </div>

      {/* Top right */}
      {images[1] && (
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={images[1]}
            alt={`${city} photo 2`}
            fill
            className="object-cover"
            sizes="150px"
            onError={() => setLoadErrors((prev) => new Set(prev).add(1))}
          />
        </div>
      )}

      {/* Bottom right */}
      {images[2] && (
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={images[2]}
            alt={`${city} photo 3`}
            fill
            className="object-cover"
            sizes="150px"
            onError={() => setLoadErrors((prev) => new Set(prev).add(2))}
          />
        </div>
      )}
    </div>
  )
}

// ─── Timeline entry ─────────────────────────────────────────────────────────

function TimelineEntry({
  entry,
  index,
  isActive,
  onActivate,
}: {
  entry: TravelCity
  index: number
  isActive: boolean
  onActivate: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onActivate() },
      { threshold: 0.6, rootMargin: '-20% 0px -20% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [onActivate])

  return (
    <div
      ref={ref}
      className={`relative flex gap-4 pl-6 py-4 rounded-xl transition-all duration-300 cursor-pointer ${
        isActive
          ? 'glass border-[var(--color-accent)]'
          : 'border border-transparent hover:bg-[var(--color-surface-raised)]'
      }`}
      onClick={onActivate}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div
          className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            isActive
              ? 'border-[var(--color-warm)] bg-[var(--color-warm)]'
              : 'border-[var(--color-border-accent)] bg-[var(--color-surface)]'
          }`}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">{entry.countryEmoji}</span>
          <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">
            {entry.city}, {entry.country}
          </h4>
        </div>
        <p className="text-xs font-mono text-[var(--color-text-muted)] mb-1">
          {entry.startDate}{entry.endDate ? ` — ${entry.endDate}` : entry.type === 'home' ? ' — Present' : ''}
        </p>
        {entry.description && (
          <p className="text-xs text-[var(--color-text-secondary)]">{entry.description}</p>
        )}
        {entry.travelledFrom && (
          <p className="text-xs text-[var(--color-text-muted)] italic">
            Travelled from {entry.travelledFrom}
          </p>
        )}
      </div>
    </div>
  )
}

// ─── Main component ─────────────────────────────────────────────────────────

export default function TravelTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDark, setIsDark] = useState(false)
  const grouped = groupByYear(travelData)

  // Detect dark mode
  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'))
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // Flatten for globe — all entries sorted most recent first
  const allEntries = grouped.flatMap((g) => g.entries)

  // Map flat index from grouped structure
  let flatIndex = 0
  function getAndIncrementIndex() {
    return flatIndex++
  }

  // Reset flatIndex for render
  flatIndex = 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-start">
      {/* Left: scrollable timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-4 bottom-4 w-px" style={{ background: 'linear-gradient(to bottom, var(--color-warm), var(--color-border-accent))' }} />

        <div className="flex flex-col gap-6">
          {grouped.map((group) => (
            <div key={group.year}>
              {/* Year heading */}
              <div className="flex items-center gap-3 mb-3 pl-6">
                <span className="text-xs font-mono font-bold text-[var(--color-warm)] uppercase tracking-widest">
                  {group.year}
                </span>
                <div className="flex-1 h-px bg-[var(--color-border)]" />
              </div>

              {/* Entries for this year */}
              <div className="flex flex-col gap-2">
                {group.entries.map((entry) => {
                  const idx = getAndIncrementIndex()
                  return (
                    <TimelineEntry
                      key={`${entry.city}-${idx}`}
                      entry={entry}
                      index={idx}
                      isActive={activeIndex === idx}
                      onActivate={() => setActiveIndex(idx)}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: sticky globe */}
      <div className="md:sticky md:top-24">
        <TravelGlobe entries={allEntries} activeIndex={activeIndex} isDark={isDark} />

        {/* Photo mosaic — expands when active entry has images */}
        <AnimatePresence mode="wait">
          {allEntries[activeIndex]?.images && allEntries[activeIndex].images!.length > 0 && (
            <motion.div
              key={allEntries[activeIndex].city + '-photos'}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <PhotoMosaic
                images={allEntries[activeIndex].images!}
                city={allEntries[activeIndex].city}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { value: new Set(travelData.map((t) => t.country)).size, label: 'Countries' },
            { value: travelData.length, label: 'Cities' },
            { value: travelData.filter((t) => t.type === 'home').length, label: 'Lived In' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded-xl glass">
              <p className="font-mono text-lg font-bold text-[var(--color-warm)]">{stat.value}</p>
              <p className="text-xs text-[var(--color-text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
