'use client'
import { motion } from 'framer-motion'
import { useDeck } from '@/hooks/useDeck'

export default function TopBar() {
  const { setCurrentSlide } = useDeck()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 h-16 z-50 flex justify-between items-center px-8"
      style={{
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, transparent 100%)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-px h-6 bg-dm-gold/60" />
        <span className="font-display text-dm-white text-lg tracking-[0.3em] uppercase">
          Dubai Mall
        </span>
        <div className="w-px h-6 bg-dm-gold/60" />
      </div>

      {/* CTA Button */}
      <button
        id="topbar-cta"
        onClick={() => setCurrentSlide(9)}
        className="border border-dm-gold text-dm-gold text-xs px-5 py-2 tracking-widest uppercase font-body
          hover:bg-dm-gold hover:text-dm-black transition-all duration-300"
      >
        Start a Conversation →
      </button>
    </motion.header>
  )
}
