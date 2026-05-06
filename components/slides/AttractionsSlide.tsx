'use client'
import { motion } from 'framer-motion'
import { useDeck } from '@/hooks/useDeck'
import { ATTRACTIONS } from '@/lib/constants'

const ATTRACTION_COLORS = [
  { from: '#0A2040', to: '#0A0A1A' },
  { from: '#101A10', to: '#0A0A0A' },
  { from: '#1A1010', to: '#0A0A0A' },
  { from: '#1A1520', to: '#0A0A0A' },
  { from: '#0A1520', to: '#0A0A0A' },
]

const ATTRACTION_ICONS = ['🦈', '⛸️', '🎭', '🥽', '⛲']

export default function AttractionsSlide() {
  const { currentSlide } = useDeck()
  const isActive = currentSlide === 6

  return (
    <div className="slide-base flex flex-col bg-dm-black overflow-hidden">
      {/* Top section */}
      <div className="relative flex flex-col items-center justify-center text-center px-8 pt-20 pb-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-display text-dm-white leading-tight"
            style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
          >
            This Is Not a Mall.
          </h2>
          <p
            className="font-display text-dm-gold italic mt-2"
            style={{ fontSize: 'clamp(28px, 3.5vw, 56px)' }}
          >
            It is a destination planet.
          </p>
        </motion.div>
      </div>

      {/* Bento grid */}
      <div className="flex-1 p-4 grid grid-cols-3 grid-rows-2 gap-2 overflow-hidden">
        {/* Aquarium — col-span-1, row-span-2 (tall left card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-1 row-span-2 relative overflow-hidden rounded-sm group cursor-default"
        >
          <img
            src="/images/aquarium.png"
            alt="Dubai Aquarium"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <AttractionCard
            data={ATTRACTIONS[0]}
            icon={ATTRACTION_ICONS[0]}
            index={0}
            isActive={isActive}
          />
        </motion.div>

        {/* Ice Rink */}
        <BentoCard data={ATTRACTIONS[1]} icon={ATTRACTION_ICONS[1]} colorIndex={1} index={1} isActive={isActive} imagePath="/images/ice_rink.png" />
        {/* KidZania */}
        <BentoCard data={ATTRACTIONS[2]} icon={ATTRACTION_ICONS[2]} colorIndex={2} index={2} isActive={isActive} imagePath="/images/kidzania.png" />
        {/* VR Park */}
        <BentoCard data={ATTRACTIONS[3]} icon={ATTRACTION_ICONS[3]} colorIndex={3} index={3} isActive={isActive} imagePath="/images/vr_park.png" />
        {/* Fountain */}
        <BentoCard data={ATTRACTIONS[4]} icon={ATTRACTION_ICONS[4]} colorIndex={4} index={4} isActive={isActive} imagePath="/images/fountain.png" />
      </div>
    </div>
  )
}

function AttractionCard({
  data,
  icon,
  index,
  isActive,
}: {
  data: (typeof ATTRACTIONS)[0]
  icon: string
  index: number
  isActive: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="absolute inset-0 flex flex-col justify-end p-6"
    >
      {/* Default state */}
      <motion.div className="relative z-10">
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="font-display text-dm-white text-xl">{data.title}</h3>
        <div className="mt-2 text-dm-gold text-xs tracking-widest font-body">{data.stat}</div>
      </motion.div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-dm-black/85 flex flex-col items-center justify-center p-6 text-center z-20"
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-display text-dm-white text-2xl mb-3">{data.title}</h3>
        <p className="font-body text-dm-muted text-sm leading-relaxed">{data.description}</p>
        <div className="mt-4 border border-dm-gold/40 text-dm-gold text-xs tracking-widest px-4 py-2 font-body">
          {data.stat}
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}
      />
    </motion.div>
  )
}

function BentoCard({
  data,
  icon,
  colorIndex,
  index,
  isActive,
  imagePath,
}: {
  data: (typeof ATTRACTIONS)[0]
  icon: string
  colorIndex: number
  index: number
  isActive: boolean
  imagePath: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
      className="relative overflow-hidden rounded-sm group cursor-default"
      style={{
        background: `linear-gradient(135deg, ${ATTRACTION_COLORS[colorIndex].from}, ${ATTRACTION_COLORS[colorIndex].to})`,
      }}
    >
      {/* Background Image */}
      <img
        src={imagePath}
        alt={data.title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
      />
      {/* Icon background */}
      <div className="absolute top-4 right-4 text-4xl opacity-30 z-10">{icon}</div>

      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div className="relative z-10">
          <h3 className="font-display text-dm-white text-lg">{data.title}</h3>
          <div className="text-dm-gold text-xs tracking-widest font-body mt-1">{data.stat}</div>
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-dm-black/85 flex flex-col items-center justify-center p-5 text-center z-20"
      >
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="font-display text-dm-white text-lg mb-2">{data.title}</h3>
        <p className="font-body text-dm-muted text-xs leading-relaxed">{data.description}</p>
      </motion.div>

      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }}
      />
    </motion.div>
  )
}
