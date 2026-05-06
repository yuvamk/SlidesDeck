'use client'
import { motion } from 'framer-motion'
import { useDeck } from '@/hooks/useDeck'

export default function OverviewSlide() {
  const { goNext } = useDeck()

  return (
    <div className="slide-base flex bg-dm-black">
      {/* Left: Image Panel */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <img
            src="/images/overview.png"
            alt="Dubai Mall Aerial"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, transparent 60%, #0A0A0A 100%)',
          }}
        />

        {/* Gold label overlay */}
        <div className="absolute bottom-12 left-8 z-20">
          <div className="font-display text-dm-gold/40 text-6xl leading-none">2008</div>
          <div className="text-section-label text-dm-gold/60 mt-1">Est. Downtown Dubai</div>
        </div>
      </div>

      {/* Right: Content Panel */}
      <div className="w-1/2 h-full flex flex-col justify-center px-16 relative">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-dm-gold" />
            <span className="text-section-label text-dm-gold">THE PROPERTY</span>
          </div>

          <h2
            className="font-display text-dm-white leading-tight"
            style={{ fontSize: 'clamp(40px, 4.5vw, 72px)' }}
          >
            The World&apos;s Greatest
            <br />
            <span className="text-gold-gradient">Commercial Stage.</span>
          </h2>

          <p className="font-body text-lg text-dm-muted leading-relaxed mt-6 max-w-lg">
            Located at the base of the Burj Khalifa in Downtown Dubai,
            The Dubai Mall is the world&apos;s most visited destination —
            a 5.9 million square foot city within a city, drawing
            visitors from 90+ countries every single year.
          </p>

          {/* Key facts */}
          <div className="mt-10 border-t border-dm-gold/20 pt-8 grid grid-cols-2 gap-4">
            <div>
              <div className="font-display text-dm-white text-2xl">Est. 2008</div>
              <div className="text-dm-muted/60 text-xs tracking-widest uppercase mt-1 font-body">Emaar Properties</div>
            </div>
            <div>
              <div className="font-display text-dm-white text-2xl">Downtown</div>
              <div className="text-dm-muted/60 text-xs tracking-widest uppercase mt-1 font-body">Dubai · UAE</div>
            </div>
            <div>
              <div className="font-display text-dm-gold text-2xl">5.9M</div>
              <div className="text-dm-muted/60 text-xs tracking-widest uppercase mt-1 font-body">Square Feet</div>
            </div>
            <div>
              <div className="font-display text-dm-gold text-2xl">90+</div>
              <div className="text-dm-muted/60 text-xs tracking-widest uppercase mt-1 font-body">Countries</div>
            </div>
          </div>

          <button
            id="overview-next-btn"
            onClick={goNext}
            className="mt-10 text-dm-gold text-sm tracking-widest font-body hover:text-dm-gold-light transition-colors group"
          >
            → Next: The Numbers
            <div className="w-0 group-hover:w-full h-px bg-dm-gold mt-1 transition-all duration-300" />
          </button>
        </motion.div>

        {/* Background number decoration */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 font-display text-[200px] text-dm-gold/[0.03] leading-none select-none pointer-events-none">
          02
        </div>
      </div>
    </div>
  )
}
