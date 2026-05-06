'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<'line' | 'text' | 'done'>('line')

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('deck-loaded')
    if (hasLoaded) {
      setPhase('done')
      onComplete()
      return
    }

    const t1 = setTimeout(() => setPhase('text'), 600)
    const t2 = setTimeout(() => {
      setPhase('done')
      sessionStorage.setItem('deck-loaded', 'true')
    }, 2000)
    const t3 = setTimeout(() => onComplete(), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-dm-black flex flex-col items-center justify-center"
        >
          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase === 'text' ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="w-48 h-px bg-dm-gold origin-left mb-12"
          />

          {/* Brand text */}
          <AnimatePresence>
            {phase === 'text' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <span className="font-display text-3xl text-dm-white tracking-[0.5em] uppercase">
                  Dubai Mall
                </span>
                <div className="mt-3 text-section-label text-dm-gold tracking-[0.4em]">
                  The World&apos;s Greatest Commercial Stage
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase === 'text' ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="w-48 h-px bg-dm-gold origin-right mt-12"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
