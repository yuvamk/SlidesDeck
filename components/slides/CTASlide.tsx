'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useDeck } from '@/hooks/useDeck'

const HeroParticles = dynamic(() => import('@/components/three/HeroParticles'), { ssr: false })

const BUTTONS = [
  { id: 'cta-lease', label: 'Lease a Space', filled: false },
  { id: 'cta-sponsor', label: 'Explore Sponsorship', filled: false },
  { id: 'cta-venue', label: 'Book a Venue', filled: true },
]

export default function CTASlide() {
  const { currentSlide } = useDeck()
  const isActive = currentSlide === 9

  return (
    <div className="slide-base flex flex-col items-center justify-center bg-dm-black overflow-hidden">
      {/* Particles at 30% opacity */}
      <HeroParticles opacity={0.3} />

      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 40%, rgba(201,169,110,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 80%, rgba(201,169,110,0.03) 0%, transparent 40%),
            #0A0A0A
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-16 h-px bg-dm-gold/40" />
          <span className="text-section-label text-dm-gold tracking-[0.3em]">THE OPPORTUNITY</span>
          <div className="w-16 h-px bg-dm-gold/40" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="overflow-hidden"
        >
          <h2
            className="font-display text-dm-white leading-none"
            style={{ fontSize: 'clamp(56px, 7vw, 110px)' }}
          >
            Your Brand
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden"
        >
          <h2
            className="font-display leading-none"
            style={{ fontSize: 'clamp(56px, 7vw, 110px)' }}
          >
            <span className="text-gold-gradient">Belongs Here.</span>
          </h2>
        </motion.div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-xl text-dm-muted mt-6 mb-14 max-w-2xl"
        >
          105 million reasons to start the conversation today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          {BUTTONS.map((btn) => (
            <motion.button
              key={btn.id}
              id={btn.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-8 py-4 text-sm tracking-widest uppercase font-body transition-all duration-300
                ${btn.filled
                  ? 'bg-dm-gold text-dm-black hover:bg-dm-gold-light'
                  : 'border border-dm-gold text-dm-gold hover:bg-dm-gold/10'
                }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-dm-muted/50 text-sm font-body">
            partnerships@dubaimall.com · +971 4 362 7500
          </p>
          <p className="text-dm-muted/30 text-xs mt-1 font-body">
            Demo placeholder — not an actual contact
          </p>
        </motion.div>
      </div>

      {/* Decorative frame */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-dm-gold/20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-dm-gold/20 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-dm-gold/20 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-dm-gold/20 pointer-events-none" />
    </div>
  )
}
