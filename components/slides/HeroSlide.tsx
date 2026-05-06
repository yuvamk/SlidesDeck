'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useDeck } from '@/hooks/useDeck'
import VideoModal from '@/components/ui/VideoModal'

const HeroParticles = dynamic(() => import('@/components/three/HeroParticles'), { ssr: false })

const stagger = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
  },
}

export default function HeroSlide() {
  const { goNext } = useDeck()
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className="slide-base flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Dubai Mall Night"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-dm-black/40 via-dm-black/60 to-dm-black/95"
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,110,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />


      {/* Particles */}
      <HeroParticles opacity={1} />

      {/* Main Content */}
      <motion.div
        variants={stagger.container}
        initial="hidden"
        animate="show"
        className="absolute bottom-[18%] left-0 right-0 z-20 flex flex-col items-center text-center px-8"
      >
        <motion.div variants={stagger.item}>
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="w-12 h-px bg-dm-gold/60" />
            <span className="text-section-label text-dm-gold tracking-[0.3em]">
              THE WORLD&apos;S STAGE
            </span>
            <div className="w-12 h-px bg-dm-gold/60" />
          </div>
        </motion.div>

        <motion.div variants={stagger.item}>
          <h1
            className="font-display text-dm-white leading-none text-center"
            style={{ fontSize: 'clamp(52px, 7vw, 100px)' }}
          >
            Where 105 Million
            <br />
            <span className="text-gold-gradient">Visitors Come</span> Every Year.
          </h1>
        </motion.div>

        <motion.p
          variants={stagger.item}
          className="font-body text-xl text-dm-muted text-center mt-6 max-w-2xl"
        >
          The world&apos;s most visited retail destination — and the most powerful commercial platform on earth.
        </motion.p>

        <motion.div
          variants={stagger.item}
          className="flex items-center gap-4 mt-10 flex-wrap justify-center"
        >
          <button
            id="hero-explore-btn"
            onClick={goNext}
            className="bg-dm-gold text-dm-black px-8 py-4 text-sm tracking-widest uppercase font-body font-medium
              hover:bg-dm-gold-light transition-all duration-300 hover:scale-105 transform"
          >
            Explore the Deck →
          </button>
          <button
            id="hero-video-btn"
            onClick={() => setVideoOpen(true)}
            className="border border-dm-gold/60 text-dm-gold px-8 py-4 text-sm tracking-widest uppercase font-body
              hover:border-dm-gold hover:bg-dm-gold/10 transition-all duration-300"
          >
            Watch the Story
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-24 right-8 z-20"
      >
        <span className="text-dm-white/25 text-xs tracking-widest font-body">
          Use arrows or keyboard to explore
        </span>
      </motion.div>

      {/* Decorative corner accents */}
      <div className="absolute top-20 left-8 z-20 opacity-30">
        <div className="w-8 h-8 border-t border-l border-dm-gold" />
      </div>
      <div className="absolute top-20 right-8 z-20 opacity-30">
        <div className="w-8 h-8 border-t border-r border-dm-gold" />
      </div>

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  )
}
