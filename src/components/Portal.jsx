import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Portal({ open, onClose }) {
  // lock scroll when portal open
  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* cosmic backdrop */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_50%,rgba(14,165,233,0.25),transparent)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md" />

          {/* portal ring effects */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <motion.div
              className="relative h-[70vh] w-[70vw] max-w-6xl rounded-[50%] overflow-hidden"
              style={{ boxShadow: '0 0 120px 20px rgba(59,130,246,0.25) inset, 0 0 80px rgba(14,165,233,0.25)' }}
              initial={{ clipPath: 'circle(0% at 50% 50%)' }}
              animate={{ clipPath: 'circle(75% at 50% 50%)' }}
              exit={{ clipPath: 'circle(0% at 50% 50%)' }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </motion.div>

            <div className="absolute -inset-6 -z-10 animate-spin-slow rounded-full border-2 border-cyan-400/20" />
            <div className="absolute -inset-10 -z-10 animate-spin-slower rounded-full border border-blue-400/20" />
          </motion.div>

          {/* controls */}
          <motion.button
            onClick={onClose}
            className="relative z-20 mt-6 px-5 py-2.5 rounded-xl bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20 transition"
            whileTap={{ scale: 0.96 }}
          >
            Return to site
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
