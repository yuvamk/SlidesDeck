'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { useDeck } from '@/hooks/useDeck'
import { EVENT_TYPES } from '@/lib/constants'

const PANELS = ['The Platform', 'Event Types', 'Book']

function PlatformPanel({ isActive }: { isActive: boolean }) {
  const stats = [
    { val: '3,000+', label: 'Events / Year' },
    { val: '2M+', label: 'Attendees' },
    { val: '180+', label: 'Brand Partners' },
  ]
  return (
    <div className="flex flex-col items-center justify-center h-full px-12 text-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/event.png"
          alt="Dubai Mall Events"
          className="w-full h-full object-cover opacity-30"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-dm-navy/80 via-dm-navy/40 to-dm-navy/90"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="w-12 h-px bg-dm-gold/40" />
        <span className="text-section-label text-dm-gold">EVENTS & EXPERIENCES</span>
        <div className="w-12 h-px bg-dm-gold/40" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-dm-white leading-tight mb-6"
        style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
      >
        The World Comes Here to Launch.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-body text-dm-muted text-xl max-w-2xl leading-relaxed mb-16"
      >
        3,000+ events per year. 2 million attendees. The most captive, affluent,
        and diverse audience on earth.
      </motion.p>

      <div className="flex justify-center gap-24">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
            className="text-center"
          >
            <div className="font-display text-dm-gold" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
              {s.val}
            </div>
            <div className="text-section-label text-dm-muted mt-2">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function EventTypesPanel({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex flex-col justify-center h-full px-12 bg-dm-black">
      <h3 className="font-display text-dm-white text-4xl text-center mb-12">Event Categories</h3>
      <div className="grid grid-cols-3 gap-5 max-w-5xl mx-auto w-full">
        {EVENT_TYPES.map((evt, i) => (
          <motion.div
            key={evt.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-dm-surface border border-dm-gold/20 p-8 group hover:border-dm-gold/50 transition-all duration-300"
          >
            <div className="text-dm-gold text-3xl mb-5">{evt.icon}</div>
            <h4 className="font-display text-dm-white text-xl mb-3">{evt.title}</h4>
            <p className="font-body text-dm-muted text-sm leading-relaxed mb-5">{evt.description}</p>
            <div className="border-t border-dm-gold/20 pt-4">
              <span className="font-display text-dm-gold text-lg">{evt.stat}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function BookPanel({ isActive, onBook }: { isActive: boolean; onBook: () => void }) {
  const options = [
    {
      title: 'Brand Activation',
      desc: 'Pop-ups, product launches, and immersive brand experiences.',
      icon: '◈',
    },
    {
      title: 'Live Event',
      desc: 'Concerts, performances, and entertainment at the world\'s stage.',
      icon: '◆',
    },
    {
      title: 'Corporate Event',
      desc: 'Conferences, award shows, and industry gatherings.',
      icon: '✦',
    },
  ]

  return (
    <div className="flex flex-col justify-center h-full px-12 bg-dm-surface">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="font-display text-dm-white text-4xl text-center mb-12"
      >
        Ready to Activate?
      </motion.h3>
      <div className="grid grid-cols-3 gap-5 max-w-5xl mx-auto w-full">
        {options.map((opt, i) => (
          <motion.div
            key={opt.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            className="border border-dm-gold/30 p-8 group hover:border-dm-gold hover:bg-dm-gold/5 transition-all duration-300"
          >
            <div className="text-dm-gold text-3xl mb-5">{opt.icon}</div>
            <h4 className="font-display text-dm-white text-xl mb-3">{opt.title}</h4>
            <p className="font-body text-dm-muted text-sm leading-relaxed mb-8">{opt.desc}</p>
            <button
              onClick={onBook}
              className="w-full border border-dm-gold text-dm-gold py-3 text-xs tracking-widest uppercase font-body hover:bg-dm-gold hover:text-dm-black transition-all duration-300"
            >
              Start a Conversation →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function EventsSlide() {
  const { currentSlide, goNext, goBack, setCurrentSlide } = useDeck()
  const isActive = currentSlide === 7
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

  const panelComponents = [
    <PlatformPanel key="platform" isActive={isActive && activePanel === 0} />,
    <EventTypesPanel key="types" isActive={isActive && activePanel === 1} />,
    <BookPanel key="book" isActive={isActive && activePanel === 2} onBook={() => setCurrentSlide(9)} />,
  ]

  return (
    <div className="slide-base flex flex-col">
      {/* Tab nav */}
      <div className="flex items-center gap-0 pt-20 px-8 border-b border-dm-gold/10 z-20 bg-dm-black">
        {PANELS.map((panel, i) => (
          <button
            key={panel}
            id={`events-panel-${i}`}
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

      {/* Panel navigation arrows */}
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
