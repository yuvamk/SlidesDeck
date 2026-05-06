'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] bg-dm-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full max-w-4xl aspect-video mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full bg-dm-surface border border-dm-gold/20 relative overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/IRDY5nn_yk8?autoplay=1&mute=0&si=wbXXvPGwQJc37Xhl&start=95`}
                title="Dubai Mall Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-dm-white/60 hover:text-dm-gold transition-colors"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            {/* Border decoration */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t border-l border-dm-gold/60" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-dm-gold/60" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
