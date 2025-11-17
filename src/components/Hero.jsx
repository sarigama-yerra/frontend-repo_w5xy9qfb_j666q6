import { useRef, useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import SceneToggles from './SceneToggles'
import Portal from './Portal'

export default function Hero() {
  const splineRef = useRef(null)
  const [portalOpen, setPortalOpen] = useState(false)

  // simple reactive effects to make it feel alive
  useEffect(() => {
    const onBurst = () => {
      // create a temporary burst with CSS variables for glow
      const root = document.documentElement
      root.style.setProperty('--glow', '1')
      setTimeout(() => root.style.setProperty('--glow', '0'), 800)
    }
    const onFocus = () => {
      // could hook to Spline API if needed later
    }
    window.addEventListener('scene:burst', onBurst)
    window.addEventListener('scene:focus', onFocus)
    return () => {
      window.removeEventListener('scene:burst', onBurst)
      window.removeEventListener('scene:focus', onFocus)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      {/* animated glow overlays */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0" aria-hidden>
          <Spline ref={splineRef} scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/80" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur text-blue-200 text-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for freelance & full-time
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Building delightful software for the web
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg">
            I’m a software engineer crafting interactive, scalable experiences. I love TypeScript, React, and elegant backends.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30 hover:opacity-90 transition-opacity">View projects</a>
            <button onClick={() => setPortalOpen(true)} className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20 transition">Enter portal</button>
          </div>

          <SceneToggles onOpenPortal={() => setPortalOpen(true)} />
        </div>
      </div>

      <Portal open={portalOpen} onClose={() => setPortalOpen(false)} />
    </section>
  )
}
