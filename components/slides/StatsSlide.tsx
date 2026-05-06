'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useDeck } from '@/hooks/useDeck'
import { STATS, BRANDS_MARQUEE } from '@/lib/constants'
import { gsap } from 'gsap'

export default function StatsSlide() {
  const { currentSlide } = useDeck()
  const isActive = currentSlide === 2
  const hasAnimated = useRef(false)
  const [counts, setCounts] = useState(STATS.map(() => '0'))

  useEffect(() => {
    if (isActive && !hasAnimated.current) {
      hasAnimated.current = true

      STATS.forEach((stat, i) => {
        const endVal = parseFloat(stat.value)
        const isDecimal = stat.value.includes('.')
        const obj = { val: 0 }

        gsap.to(obj, {
          val: endVal,
          duration: 2,
          delay: i * 0.15,
          ease: 'power2.out',
          onUpdate: () => {
            setCounts((prev) => {
              const next = [...prev]
              next[i] = isDecimal ? obj.val.toFixed(1) : Math.floor(obj.val).toString()
              return next
            })
          },
          onComplete: () => {
            setCounts((prev) => {
              const next = [...prev]
              next[i] = stat.value
              return next
            })
          },
        })
      })
    }
    if (!isActive) {
      hasAnimated.current = false
      setCounts(STATS.map(() => '0'))
    }
  }, [isActive])

  const marqueeItems = [...BRANDS_MARQUEE, ...BRANDS_MARQUEE]

  return (
    <div className="slide-base flex flex-col justify-center bg-dm-surface overflow-hidden">
      {/* Background number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[300px] text-dm-gold/[0.03] leading-none select-none pointer-events-none whitespace-nowrap">
        105M+
      </div>

      <div className="relative z-10 px-8 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.7 }}
          className="font-display text-dm-white text-center mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          The Numbers Don't Lie.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-dm-muted text-center text-xl mb-12 font-body"
        >
          This isn't a mall. It's the world's most powerful commercial platform.
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-5 max-w-5xl mx-auto">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="bg-dm-black border border-dm-gold/20 p-8 rounded-sm relative overflow-hidden group hover:border-dm-gold/40 transition-colors duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-dm-gold/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-dm-gold/40" />

              <div className="font-display text-dm-gold" style={{ fontSize: 'clamp(40px, 4vw, 60px)' }}>
                {stat.prefix}{counts[i]}{stat.suffix}
              </div>
              <div className="text-section-label text-dm-muted uppercase mt-2">
                {stat.label}
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-dm-gold/0 group-hover:bg-dm-gold/[0.03] transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden h-12 flex items-center border-t border-b border-dm-gold/10">
        <div className="flex animate-marquee whitespace-nowrap gap-12">
          {marqueeItems.map((brand, i) => (
            <span key={i} className="text-section-label text-dm-gold/30 tracking-[0.3em] shrink-0">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
