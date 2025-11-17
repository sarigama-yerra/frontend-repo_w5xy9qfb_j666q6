import { Github, ExternalLink, Star } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description: 'Multiplayer cursor, CRDT-powered docs and presence using WebSockets and Postgres.' ,
    tags: ['TypeScript', 'React', 'CRDT', 'WebSockets'],
    stars: 482,
    github: 'https://github.com/',
    demo: '#'
  },
  {
    title: 'AI Code Assistant',
    description: 'Context-aware inline suggestions with semantic search and embeddings.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'Pinecone'],
    stars: 312,
    github: 'https://github.com/',
    demo: '#'
  },
  {
    title: 'Design System Kit',
    description: 'Accessible UI components built with Radix and Tailwind.',
    tags: ['Radix', 'Tailwind', 'Storybook'],
    stars: 205,
    github: 'https://github.com/',
    demo: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(14,165,233,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_90%_20%,rgba(59,130,246,0.12),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-2 text-blue-200/80">A few things I’ve shipped recently.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:border-white/20 transition relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <div className="flex items-center gap-2 text-blue-200/80">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{p.stars}</span>
                  </div>
                </div>
                <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-blue-100/90 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.github} target="_blank" className="inline-flex items-center gap-1 text-blue-200 hover:text-white transition">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a href={p.demo} target="_blank" className="inline-flex items-center gap-1 text-blue-200 hover:text-white transition">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
