'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { useDeck } from '@/hooks/useDeck'
import { RETAIL_CATEGORIES, VISITOR_DATA } from '@/lib/constants'
import { ChevronRight } from 'lucide-react'

const PANELS = ['The Scale', 'The Mix', 'Formats', 'Momentum']

const FORMATS = [
  {
    icon: '◈',
    title: 'Flagship Store',
    desc: 'Premium positioning in the world\'s most visited destination.',
    id: 'flagship',
  },
  {
    icon: '◆',
    title: 'Pop-Up Space',
    desc: 'Flexible short-term activations from 7 days to 3 months.',
    id: 'popup',
  },
  {
    icon: '✦',
    title: 'F&B Concept',
    desc: '200+ options to join the ultimate dining ecosystem.',
    id: 'fb',
  },
  {
    icon: '◉',
    title: 'Brand Activation',
    desc: 'High-footfall experiential zones across all 5.9M sqft.',
    id: 'activation',
  },
]

function Panel1() {
  return (
    <div className="flex h-full">
      <div className="relative w-1/2 h-full overflow-hidden">
        <img
          src="/images/retail.png"
          alt="Dubai Mall Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, #0A0A0A 100%)' }} />
        <div className="absolute bottom-8 left-8 z-10">
          <div className="font-display text-dm-gold/40 text-5xl">4</div>
          <div className="text-section-label text-dm-muted/60 mt-1">Floors</div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center px-14">
        <h3 className="font-display text-dm-white leading-tight" style={{ fontSize: 'clamp(36px, 3.5vw, 60px)' }}>
          Four floors.<br />
          <span className="text-gold-gradient">5.9 million</span><br />
          square feet.
        </h3>
        <p className="font-body text-dm-muted mt-6 text-lg leading-relaxed">
          Every format. Every category. Every opportunity. Dubai Mall is the
          single most complete retail environment in the world.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            { val: '1,200+', label: 'Brands' },
            { val: '4', label: 'Floors' },
            { val: '56M', label: 'Regional Catchment' },
            { val: 'No.1', label: 'Most Visited' },
          ].map((item) => (
            <div key={item.label} className="border-l-2 border-dm-gold/30 pl-4">
              <div className="font-display text-dm-gold text-2xl">{item.val}</div>
              <div className="text-section-label text-dm-muted/60 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Panel2() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-12">
      <h3 className="font-display text-dm-white text-4xl mb-10 text-center">The Retail Mix</h3>
      <div className="flex items-center gap-16 w-full max-w-4xl">
        {/* Bar chart */}
        <div className="flex-1">
          {RETAIL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <div className="flex justify-between mb-1">
                <span className="text-dm-muted text-sm font-body">{cat.label}</span>
                <span className="text-dm-gold text-sm font-display">{cat.percentage}%</span>
              </div>
              <div className="h-2 bg-dm-black rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${cat.percentage}%` }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Donut SVG */}
        <div className="shrink-0">
          <svg width="220" height="220" viewBox="0 0 220 220">
            <circle cx="110" cy="110" r="80" fill="none" stroke="#1a1a1a" strokeWidth="30" />
            {(() => {
              let offset = 0
              const circumference = 2 * Math.PI * 80
              return RETAIL_CATEGORIES.map((cat, i) => {
                const dash = (cat.percentage / 100) * circumference
                const gap = circumference - dash
                const rotate = (offset / 100) * 360 - 90
                offset += cat.percentage
                return (
                  <motion.circle
                    key={i}
                    cx="110" cy="110" r="80"
                    fill="none"
                    stroke={cat.color}
                    strokeWidth="30"
                    strokeDasharray={`${dash} ${gap}`}
                    transform={`rotate(${rotate} 110 110)`}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ delay: i * 0.1, duration: 1, ease: 'easeOut' }}
                  />
                )
              })
            })()}
            <text x="110" y="105" textAnchor="middle" fill="#C9A96E"
              style={{ fontFamily: 'Cormorant Garamond', fontSize: '28px' }}>
              100%
            </text>
            <text x="110" y="130" textAnchor="middle" fill="#8A8070"
              style={{ fontFamily: 'Inter', fontSize: '10px', letterSpacing: '2px' }}>
              COVERED
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

function Panel3() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-12">
      <h3 className="font-display text-dm-white text-4xl mb-10 text-center">Available Formats</h3>
      <div className="grid grid-cols-2 gap-5 w-full max-w-3xl">
        {FORMATS.map((fmt, i) => (
          <motion.div
            key={fmt.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-dm-black border border-dm-gold/20 p-7 group hover:border-dm-gold/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="text-dm-gold text-2xl mb-3">{fmt.icon}</div>
            <h4 className="font-display text-dm-white text-xl mb-2">{fmt.title}</h4>
            <p className="text-dm-muted text-sm font-body leading-relaxed">{fmt.desc}</p>
            <button className="mt-4 text-dm-gold text-xs tracking-widest font-body flex items-center gap-1 group-hover:gap-2 transition-all">
              <ChevronRight size={12} /> Inquire
            </button>
            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-dm-gold/40 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Panel4() {
  const maxVal = Math.max(...VISITOR_DATA.map((d) => d.value))
  const chartW = 500
  const chartH = 200
  const points = VISITOR_DATA.map((d, i) => ({
    x: (i / (VISITOR_DATA.length - 1)) * chartW,
    y: chartH - (d.value / maxVal) * chartH,
    ...d,
  }))
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <div className="flex flex-col items-center justify-center h-full px-12">
      <h3 className="font-display text-dm-white text-4xl mb-3 text-center">Visitor Momentum</h3>
      <p className="text-dm-muted text-center mb-10 font-body">Annual visitors 2019–2024 (millions)</p>

      <div className="w-full max-w-2xl">
        <svg viewBox={`0 0 ${chartW} ${chartH + 40}`} className="w-full">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
            <line key={i}
              x1={0} y1={chartH * (1 - t)}
              x2={chartW} y2={chartH * (1 - t)}
              stroke="rgba(201,169,110,0.1)" strokeWidth="1"
            />
          ))}
          {/* Animated path */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="#C9A96E"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          {/* Area fill */}
          <motion.path
            d={`${pathD} L ${chartW} ${chartH} L 0 ${chartH} Z`}
            fill="rgba(201,169,110,0.06)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
          {/* Points */}
          {points.map((p, i) => (
            <motion.g key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.2 }}
            >
              <circle cx={p.x} cy={p.y} r={4} fill="#C9A96E" />
              <text x={p.x} y={chartH + 20} textAnchor="middle"
                fill="#8A8070" style={{ fontSize: '10px', fontFamily: 'Inter' }}>
                {p.year}
              </text>
              <text x={p.x} y={p.y - 10} textAnchor="middle"
                fill="#C9A96E" style={{ fontSize: '11px', fontFamily: 'Cormorant Garamond' }}>
                {p.value}M
              </text>
            </motion.g>
          ))}
        </svg>
      </div>

      <button className="mt-10 border border-dm-gold text-dm-gold px-8 py-3 text-sm tracking-widest uppercase font-body hover:bg-dm-gold hover:text-dm-black transition-all duration-300">
        Request Leasing Information →
      </button>
    </div>
  )
}

export default function RetailSlide() {
  const { currentSlide, goNext, goBack } = useDeck()
  const isActive = currentSlide === 3
  const [activePanel, setActivePanel] = useState(0)

  const handlePanelKey = useCallback((e: KeyboardEvent) => {
    if (!isActive) return
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      if (activePanel < PANELS.length - 1) {
        e.stopPropagation()
        setActivePanel((p) => p + 1)
      } else {
        goNext()
      }
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (activePanel > 0) {
        e.stopPropagation()
        setActivePanel((p) => p - 1)
      } else {
        goBack()
      }
    }
  }, [isActive, activePanel, goNext, goBack])

  useEffect(() => {
    window.addEventListener('keydown', handlePanelKey, true)
    return () => window.removeEventListener('keydown', handlePanelKey, true)
  }, [handlePanelKey])

  const panelComponents = [<Panel1 key="1" />, <Panel2 key="2" />, <Panel3 key="3" />, <Panel4 key="4" />]

  return (
    <div className="slide-base flex flex-col bg-dm-black">
      {/* Tab nav */}
      <div className="flex items-center gap-0 pt-20 px-8 border-b border-dm-gold/10 z-20">
        {PANELS.map((panel, i) => (
          <button
            key={panel}
            id={`retail-panel-${i}`}
            onClick={() => setActivePanel(i)}
            className={`px-6 py-4 text-xs tracking-widest uppercase font-body transition-all duration-200 border-b-2 -mb-px
              ${activePanel === i
                ? 'text-dm-gold border-dm-gold'
                : 'text-dm-muted/60 border-transparent hover:text-dm-muted'
              }`}
          >
            {panel}
          </button>
        ))}
        <div className="ml-auto text-xs text-dm-muted/30 font-body tracking-widest pr-2">
          {activePanel + 1} / {PANELS.length}
        </div>
      </div>

      {/* Panel content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0"
          >
            {panelComponents[activePanel]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Panel arrows */}
      <div className="absolute bottom-24 right-16 flex items-center gap-3 z-20">
        {activePanel > 0 && (
          <button onClick={() => setActivePanel((p) => p - 1)}
            className="border border-dm-gold/30 text-dm-gold/60 px-3 py-1 text-xs hover:border-dm-gold hover:text-dm-gold transition-all font-body">
            ←
          </button>
        )}
        {activePanel < PANELS.length - 1 && (
          <button onClick={() => setActivePanel((p) => p + 1)}
            className="border border-dm-gold/30 text-dm-gold/60 px-3 py-1 text-xs hover:border-dm-gold hover:text-dm-gold transition-all font-body">
            →
          </button>
        )}
      </div>
    </div>
  )
}
