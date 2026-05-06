'use client'
import { motion } from 'framer-motion'
import { useDeck } from '@/hooks/useDeck'
import { LUXURY_BRANDS } from '@/lib/constants'

export default function LuxurySlide() {
  const { currentSlide } = useDeck()
  const isActive = currentSlide === 4

  return (
    <div className="slide-base flex flex-col items-center justify-center overflow-hidden bg-dm-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/luxury.png"
          alt="Fashion Avenue"
          className="w-full h-full object-cover opacity-40"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-dm-black/60 via-transparent to-dm-black/90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-16 h-px bg-dm-gold/40" />
          <span className="text-section-label text-dm-gold">FASHION AVENUE</span>
          <div className="w-16 h-px bg-dm-gold/40" />
        </motion.div>

        {/* Headline with clip path reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: isActive ? 'inset(0% 0 0 0)' : 'inset(100% 0 0 0)' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-dm-white leading-none"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
          >
            The Fashion Avenue.
          </motion.h2>
        </div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-dm-muted text-lg max-w-2xl leading-relaxed mb-12"
        >
          The only address in the Middle East where the world's most
          prestigious houses all live together.
        </motion.p>

        {/* Brand grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-4 gap-3 mb-8 w-full max-w-3xl"
        >
          {LUXURY_BRANDS.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.05 }}
              whileHover={{ y: -2, borderColor: 'rgba(201,169,110,0.8)' }}
              className="border border-dm-gold/20 px-4 py-3 text-center transition-all duration-200 cursor-default group"
            >
              <span className="font-display text-dm-white text-xs tracking-widest group-hover:text-dm-gold transition-colors">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pull quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-0 right-0 py-6 border-t border-b border-dm-gold/10 bg-dm-gold/[0.04] z-10 px-12"
      >
        <p className="font-display text-dm-white text-xl italic text-center leading-relaxed">
          "Fashion Avenue isn't just a wing. It's the most concentrated expression
          <br />of global luxury in one physical space."
        </p>
      </motion.div>
    </div>
  )
}
