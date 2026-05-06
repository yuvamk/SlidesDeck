'use client'
import { motion } from 'framer-motion'
import { useDeck } from '@/hooks/useDeck'

const DINING_STATS = [
  { value: '22', label: 'Restaurants with Burj Khalifa Views', suffix: '' },
  { value: '50+', label: 'Concepts in Gold Souk Food Hall', suffix: '' },
  { value: '34%', label: 'F&B Revenue Growth YoY', suffix: '' },
]

export default function DiningSlide() {
  const { currentSlide } = useDeck()
  const isActive = currentSlide === 5

  return (
    <div className="slide-base flex bg-dm-surface">
      {/* Left: Image Panel */}
      <div className="relative w-[45%] h-full overflow-hidden shrink-0">
        <img
          src="/images/dining.png"
          alt="Dining at Dubai Mall"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay to right */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, transparent 50%, #111111 100%)',
          }}
        />

        {/* Label */}
        <div className="absolute bottom-12 left-8 z-20">
          <div className="font-display text-dm-gold/30 text-7xl leading-none">200+</div>
          <div className="text-section-label text-dm-muted/40 mt-1">Dining Concepts</div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center px-14">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 40 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-dm-gold" />
            <span className="text-section-label text-dm-gold">DINING & LIFESTYLE</span>
          </div>

          <h2
            className="font-display text-dm-white leading-tight"
            style={{ fontSize: 'clamp(40px, 4.5vw, 80px)' }}
          >
            Where Dubai
            <br />
            <span className="text-gold-gradient">Comes to Eat.</span>
          </h2>

          <p className="font-body text-dm-muted mt-6 mb-12 text-lg leading-relaxed max-w-lg">
            200+ dining concepts across every cuisine, price point,
            and experience format — from street food to Michelin-starred.
          </p>

          {/* Stat cards */}
          <div className="space-y-3">
            {DINING_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 40 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="bg-dm-black border-l-4 border-dm-gold p-5 flex items-center gap-6 group hover:bg-dm-black/80 transition-colors"
              >
                <span className="font-display text-dm-gold shrink-0" style={{ fontSize: '3rem', lineHeight: 1 }}>
                  {stat.value}
                </span>
                <span className="text-dm-muted text-sm font-body leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
