export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-blue-200/85 leading-relaxed">
            I’m a full‑stack engineer focused on building delightful, resilient products. I care about craftsmanship, performance, and developer experience.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
              <p className="text-3xl font-bold text-white">7+</p>
              <p className="text-blue-200/80 text-sm">Years Experience</p>
            </div>
            <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
              <p className="text-3xl font-bold text-white">25+</p>
              <p className="text-blue-200/80 text-sm">Projects Shipped</p>
            </div>
            <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
              <p className="text-3xl font-bold text-white">99.9%</p>
              <p className="text-blue-200/80 text-sm">Uptime on Prod</p>
            </div>
            <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="text-blue-200/80 text-sm">Curiosity</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 blur opacity-30" aria-hidden />
          <div className="relative rounded-3xl p-8 bg-slate-900 ring-1 ring-white/10">
            <ul className="grid grid-cols-2 gap-3 text-blue-100/90">
              {['React', 'TypeScript', 'Node', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'].map((s) => (
                <li key={s} className="px-3 py-2 rounded bg-white/5 ring-1 ring-white/10">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
