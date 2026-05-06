'use client'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useDeck } from '@/hooks/useDeck'
import { SPONSORSHIP_TIERS } from '@/lib/constants'

export default function SponsorshipSlide() {
  const { currentSlide } = useDeck()
  const isActive = currentSlide === 8

  return (
    <div className="slide-base flex flex-col justify-center bg-dm-surface overflow-auto internal-scroll">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-dm-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-dm-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 px-8 py-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-12 h-px bg-dm-gold/40" />
            <span className="text-section-label text-dm-gold">PARTNERSHIP TIERS</span>
            <div className="w-12 h-px bg-dm-gold/40" />
          </div>
          <h2
            className="font-display text-dm-white"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Choose Your Platform.
          </h2>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-3 gap-4">
          {SPONSORSHIP_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              whileHover={tier.featured ? { scale: 1.02 } : { scale: 1.01 }}
              className={`relative p-6 rounded-sm border transition-all duration-300 ${
                tier.featured
                  ? 'bg-dm-gold/5 border-dm-gold shadow-lg shadow-dm-gold/10'
                  : 'bg-dm-black border-dm-gold/30 hover:border-dm-gold/50'
              }`}
            >
              {/* Most popular badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-dm-gold text-dm-black text-[10px] tracking-[0.25em] uppercase font-body font-medium px-4 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <span className="text-section-label text-dm-gold">{tier.tagline}</span>
                <h3 className="font-display text-dm-white text-2xl mt-2">{tier.name}</h3>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-dm-gold/60 mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <ChevronRight size={14} className="text-dm-gold shrink-0 mt-0.5" />
                    <span className="text-dm-muted text-sm font-body leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 text-xs tracking-widest uppercase font-body transition-all duration-300 border
                  ${tier.featured
                    ? 'border-dm-gold bg-dm-gold text-dm-black hover:bg-dm-gold-light'
                    : 'border-dm-gold text-dm-gold hover:bg-dm-gold hover:text-dm-black'
                  }`}
              >
                Get Started →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-center"
        >
          <p className="text-dm-muted text-sm font-body mb-4">
            Want to see audience data and activation examples?
          </p>
          <button className="border border-dm-gold/50 text-dm-gold px-8 py-3 text-xs tracking-widest uppercase font-body hover:border-dm-gold hover:bg-dm-gold/10 transition-all duration-300">
            Download the Sponsorship Pack →
          </button>
        </motion.div>
      </div>
    </div>
  )
}
