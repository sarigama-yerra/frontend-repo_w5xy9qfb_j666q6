import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (doesn't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/80" />

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
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20 transition">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
