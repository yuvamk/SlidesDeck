'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DeckContext } from '@/lib/deckContext'
import { Direction } from '@/lib/types'

import TopBar from '@/components/ui/TopBar'
import SlideNav from '@/components/ui/SlideNav'
import Preloader from '@/components/ui/Preloader'
import CustomCursor from '@/components/ui/CustomCursor'

import HeroSlide from '@/components/slides/HeroSlide'
import OverviewSlide from '@/components/slides/OverviewSlide'
import StatsSlide from '@/components/slides/StatsSlide'
import RetailSlide from '@/components/slides/RetailSlide'
import LuxurySlide from '@/components/slides/LuxurySlide'
import DiningSlide from '@/components/slides/DiningSlide'
import AttractionsSlide from '@/components/slides/AttractionsSlide'
import EventsSlide from '@/components/slides/EventsSlide'
import SponsorshipSlide from '@/components/slides/SponsorshipSlide'
import CTASlide from '@/components/slides/CTASlide'

const SLIDES = [
  { id: 'hero', label: 'Intro', component: HeroSlide },
  { id: 'overview', label: 'Overview', component: OverviewSlide },
  { id: 'stats', label: 'The Numbers', component: StatsSlide },
  { id: 'retail', label: 'Retail', component: RetailSlide },
  { id: 'luxury', label: 'Luxury', component: LuxurySlide },
  { id: 'dining', label: 'Dining', component: DiningSlide },
  { id: 'attractions', label: 'Entertainment', component: AttractionsSlide },
  { id: 'events', label: 'Events', component: EventsSlide },
  { id: 'sponsorship', label: 'Sponsorship', component: SponsorshipSlide },
  { id: 'cta', label: 'Contact', component: CTASlide },
]

const slideVariants = {
  enter: (direction: Direction) => ({
    x: direction === 'forward' ? '8%' : '-8%',
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: Direction) => ({
    x: direction === 'forward' ? '-8%' : '8%',
    opacity: 0,
    scale: 1.02,
  }),
}

export default function DeckController() {
  const [currentSlide, setCurrentSlideRaw] = useState(0)
  const [direction, setDirection] = useState<Direction>('forward')
  const [isLoading, setIsLoading] = useState(true)
  const touchStartX = useRef<number | null>(null)

  const setCurrentSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 'forward' : 'back')
    setCurrentSlideRaw(index)
  }, [currentSlide])

  const goNext = useCallback(() => {
    if (currentSlide < SLIDES.length - 1) {
      setDirection('forward')
      setCurrentSlideRaw((prev) => prev + 1)
    }
  }, [currentSlide])

  const goBack = useCallback(() => {
    if (currentSlide > 0) {
      setDirection('back')
      setCurrentSlideRaw((prev) => prev - 1)
    }
  }, [currentSlide])

  // Keyboard navigation (lower priority — internal panels capture first)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Internal panels handle their own events with capture phase
      if (e.defaultPrevented) return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goBack()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goBack])

  // Touch/Swipe support
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const delta = touchStartX.current - e.changedTouches[0].clientX
      if (Math.abs(delta) > 50) {
        delta > 0 ? goNext() : goBack()
      }
      touchStartX.current = null
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [goNext, goBack])

  const contextValue = {
    currentSlide,
    direction,
    goNext,
    goBack,
    setCurrentSlide,
    totalSlides: SLIDES.length,
    isLoading,
    setIsLoading,
  }

  return (
    <DeckContext.Provider value={contextValue}>
      <CustomCursor />

      {/* Preloader */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Deck */}
      <div
        className="relative w-screen h-screen overflow-hidden"
        style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
      >
        {/* Persistent UI */}
        <TopBar />
        <SlideNav />

        {/* Slide Container */}
        <AnimatePresence mode="wait" custom={direction}>
          {SLIDES.map((slide, i) => {
            if (i !== currentSlide) return null
            const SlideComponent = slide.component

            return (
              <motion.div
                key={slide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute inset-0 w-screen h-screen"
                style={{ willChange: 'transform, opacity' }}
              >
                <SlideComponent />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </DeckContext.Provider>
  )
}
