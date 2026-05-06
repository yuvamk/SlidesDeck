'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useDeck } from '@/hooks/useDeck'

const SLIDE_LABELS = [
  'Intro', 'Overview', 'The Numbers', 'Retail', 'Luxury',
  'Dining', 'Entertainment', 'Events', 'Sponsorship', 'Contact'
]

export default function SlideNav() {
  const { currentSlide, goNext, goBack, setCurrentSlide, totalSlides } = useDeck()
  const isFirst = currentSlide === 0
  const isLast = currentSlide === totalSlides - 1

  return (
    <>
      {/* Left Arrow */}
      <AnimatePresence>
        {!isFirst && (
          <motion.button
            id="nav-prev"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            onClick={goBack}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 p-3 group"
            aria-label="Previous slide"
          >
            <ChevronLeft
              size={32}
              className="text-dm-white/50 group-hover:text-dm-gold transition-all duration-200 group-hover:scale-125 transform"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Right Arrow or Start Over on last slide */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
        {isLast ? (
          <motion.button
            onClick={() => setCurrentSlide(0)}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-dm-gold text-xs tracking-widest uppercase font-body px-3 py-2 border border-dm-gold/40 hover:border-dm-gold hover:bg-dm-gold/10 transition-all"
          >
            Start Over
          </motion.button>
        ) : (
          <motion.button
            id="nav-next"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={goNext}
            className="p-3 group"
            aria-label="Next slide"
          >
            <ChevronRight
              size={32}
              className="text-dm-white/50 group-hover:text-dm-gold transition-all duration-200 group-hover:scale-125 transform"
            />
          </motion.button>
        )}
      </div>

      {/* Slide Dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <motion.button
            key={i}
            id={`slide-dot-${i}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}: ${SLIDE_LABELS[i]}`}
            className="relative group"
          >
            <motion.div
              animate={{
                width: currentSlide === i ? 24 : 8,
                backgroundColor: currentSlide === i
                  ? '#C9A96E'
                  : 'rgba(245, 240, 232, 0.3)',
              }}
              whileHover={{
                backgroundColor: currentSlide === i
                  ? '#C9A96E'
                  : 'rgba(245, 240, 232, 0.6)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="h-2 rounded-full"
            />
          </motion.button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 right-8 z-50">
        <span className="font-body text-xs text-dm-white/30 tracking-widest">
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
      </div>
    </>
  )
}
