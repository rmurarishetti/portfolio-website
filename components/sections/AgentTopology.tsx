'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Compass, User, Briefcase, FolderOpen, Globe, MessageCircle } from 'lucide-react'

// ─── Node data ──────────────────────────────────────────────────────────────

type NodeType = 'orchestrator' | 'page' | 'external'

interface TopoNode {
  id: string
  label: string
  sublabel: string
  type: NodeType
  icon: React.ReactNode
  row: number
  col: number
}

interface Connection {
  from: string
  to: string
  label: string
}

const nodes: TopoNode[] = [
  { id: 'visitor', label: 'You', sublabel: 'Visitor', type: 'external', icon: <User size={18} />, row: 0, col: 0 },
  { id: 'navigator', label: 'Navigator', sublabel: 'Orchestrator', type: 'orchestrator', icon: <Compass size={18} />, row: 0, col: 1 },
  { id: 'chat', label: 'Chat Agent', sublabel: 'Gemini 3', type: 'page', icon: <MessageCircle size={18} />, row: 0, col: 2 },
  { id: 'work', label: 'Work', sublabel: '/work', type: 'page', icon: <Briefcase size={18} />, row: 1, col: 0 },
  { id: 'projects', label: 'Projects', sublabel: '/projects', type: 'page', icon: <FolderOpen size={18} />, row: 1, col: 1 },
  { id: 'about', label: 'About', sublabel: '/about', type: 'page', icon: <Globe size={18} />, row: 1, col: 2 },
]

const connections: Connection[] = [
  { from: 'visitor', to: 'navigator', label: 'ask' },
  { from: 'navigator', to: 'chat', label: 'respond' },
  { from: 'navigator', to: 'work', label: 'route' },
  { from: 'navigator', to: 'projects', label: 'explore' },
  { from: 'navigator', to: 'about', label: 'discover' },
]

const typeStyles: Record<NodeType, { border: string; dot: string; bg: string }> = {
  orchestrator: {
    border: 'var(--color-ai)',
    dot: 'var(--color-ai)',
    bg: 'rgba(6, 182, 212, 0.10)',
  },
  page: {
    border: 'var(--color-accent)',
    dot: 'var(--color-accent)',
    bg: 'rgba(99, 102, 241, 0.08)',
  },
  external: {
    border: 'var(--color-warm)',
    dot: 'var(--color-warm)',
    bg: 'rgba(212, 101, 42, 0.08)',
  },
}

// ─── Grid positions (SVG coords) ───────────────────────────────────────────

const GRID = {
  colWidth: 240,
  rowHeight: 180,
  offsetX: 60,
  offsetY: 50,
  nodeW: 150,
  nodeH: 90,
}

function nodeCenter(node: TopoNode) {
  return {
    x: GRID.offsetX + node.col * GRID.colWidth + GRID.nodeW / 2,
    y: GRID.offsetY + node.row * GRID.rowHeight + GRID.nodeH / 2,
  }
}

function nodeEdge(from: TopoNode, to: TopoNode) {
  const fc = nodeCenter(from)
  const tc = nodeCenter(to)
  const dx = tc.x - fc.x
  const dy = tc.y - fc.y
  const angle = Math.atan2(dy, dx)

  return {
    x1: fc.x + Math.cos(angle) * (GRID.nodeW / 2 + 4),
    y1: fc.y + Math.sin(angle) * (GRID.nodeH / 2 + 4),
    x2: tc.x - Math.cos(angle) * (GRID.nodeW / 2 + 4),
    y2: tc.y - Math.sin(angle) * (GRID.nodeH / 2 + 4),
  }
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function AgentTopology() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const svgW = GRID.offsetX * 2 + GRID.colWidth * 2 + GRID.nodeW
  const svgH = GRID.offsetY * 2 + GRID.rowHeight + GRID.nodeH

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]))

  return (
    <div ref={ref}>
      {/* Dot grid background */}
      <div
        className="relative rounded-2xl overflow-hidden border border-[var(--color-border)]"
        style={{
          background: 'var(--color-surface)',
          backgroundImage: 'radial-gradient(circle, var(--color-border-accent) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        {/* Desktop: SVG topology */}
        <div className="hidden md:block">
          <svg
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="w-full"
            style={{ maxHeight: 420 }}
          >
            {/* Connections */}
            {connections.map((conn, i) => {
              const from = nodeMap[conn.from]
              const to = nodeMap[conn.to]
              if (!from || !to) return null
              const edge = nodeEdge(from, to)
              const midX = (edge.x1 + edge.x2) / 2
              const midY = (edge.y1 + edge.y2) / 2

              return (
                <g key={`${conn.from}-${conn.to}`}>
                  <motion.line
                    x1={edge.x1}
                    y1={edge.y1}
                    x2={edge.x2}
                    y2={edge.y2}
                    stroke="var(--color-border-accent)"
                    strokeWidth="1.5"
                    strokeDasharray="6,4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
                  />
                  <motion.text
                    x={midX}
                    y={midY - 8}
                    textAnchor="middle"
                    fill="var(--color-text-muted)"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 0.5 } : {}}
                    transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    {conn.label}
                  </motion.text>
                  <circle cx={edge.x1} cy={edge.y1} r="3" fill="var(--color-border-accent)" opacity="0.5" />
                  <circle cx={edge.x2} cy={edge.y2} r="3" fill="var(--color-border-accent)" opacity="0.5" />
                </g>
              )
            })}

            {/* Nodes */}
            {nodes.map((node, i) => {
              const x = GRID.offsetX + node.col * GRID.colWidth
              const y = GRID.offsetY + node.row * GRID.rowHeight
              const style = typeStyles[node.type]
              const isOrch = node.type === 'orchestrator'

              return (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: `${x + GRID.nodeW / 2}px ${y + GRID.nodeH / 2}px` }}
                >
                  <rect
                    x={x}
                    y={y}
                    width={GRID.nodeW}
                    height={GRID.nodeH}
                    rx="12"
                    fill={style.bg}
                    stroke={style.border}
                    strokeWidth={isOrch ? '2' : '1'}
                    opacity={isOrch ? 1 : 0.7}
                  />

                  {isOrch && (
                    <rect
                      x={x - 3}
                      y={y - 3}
                      width={GRID.nodeW + 6}
                      height={GRID.nodeH + 6}
                      rx="14"
                      fill="none"
                      stroke={style.border}
                      strokeWidth="1"
                      opacity="0.2"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.3;0.05;0.3"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  )}

                  <circle
                    cx={x + GRID.nodeW / 2}
                    cy={y + 28}
                    r="14"
                    fill={style.bg}
                    stroke={style.border}
                    strokeWidth="1.5"
                  />

                  <foreignObject
                    x={x + GRID.nodeW / 2 - 9}
                    y={y + 19}
                    width="18"
                    height="18"
                  >
                    <div style={{ color: style.dot, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {node.icon}
                    </div>
                  </foreignObject>

                  <text
                    x={x + GRID.nodeW / 2}
                    y={y + 58}
                    textAnchor="middle"
                    fill="var(--color-text-primary)"
                    fontSize="13"
                    fontWeight="600"
                    fontFamily="var(--font-sans)"
                  >
                    {node.label}
                  </text>

                  <text
                    x={x + GRID.nodeW / 2}
                    y={y + 74}
                    textAnchor="middle"
                    fill="var(--color-text-muted)"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                  >
                    {node.sublabel}
                  </text>
                </motion.g>
              )
            })}
          </svg>
        </div>

        {/* Mobile: simplified node list */}
        <div className="md:hidden p-6 flex flex-col gap-3">
          {nodes.map((node, i) => {
            const style = typeStyles[node.type]
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: style.bg, border: `1px solid color-mix(in srgb, ${style.border} 50%, transparent)` }}
              >
                <div style={{ color: style.dot }}>{node.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{node.label}</p>
                  <p className="text-xs font-mono text-[var(--color-text-muted)]">{node.sublabel}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 py-4 border-t border-[var(--color-border)]">
          {[
            { label: 'You', color: 'var(--color-warm)' },
            { label: 'Orchestrator', color: 'var(--color-ai)' },
            { label: 'Pages', color: 'var(--color-accent)' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              <span className="text-xs font-mono text-[var(--color-text-muted)]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
