'use client'

import dynamic from 'next/dynamic'
import { travelData as rawTravel } from '@/data/travelData'

// Globe is heavy Three.js — load only client-side, no SSR
const GlobeScene = dynamic(() => import('./GlobeScene').then((m) => m.default ?? m), {
  ssr: false,
  loading: () => (
    <div
      style={{ height: '420px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="text-sm font-mono text-[var(--color-text-muted)] animate-pulse">
        Loading globe...
      </div>
    </div>
  ),
})

export default function GlobeClientWrapper() {
  const homeCities = rawTravel.filter((c: { type: string }) => c.type === 'home')
  const visitedCities = rawTravel.filter((c: { type: string }) => c.type === 'visited')

  return (
    <div style={{ height: '420px', width: '100%' }}>
      <GlobeScene homeCities={homeCities} visitedCities={visitedCities} />
    </div>
  )
}
