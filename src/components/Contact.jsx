import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something</h2>
        <p className="mt-3 text-blue-200/80">Have a project in mind or want to say hi? I’d love to hear from you.</p>

        <div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <form className="grid sm:grid-cols-2 gap-4 text-left">
            <div>
              <label className="text-sm text-blue-200/80">Name</label>
              <input type="text" placeholder="Ada Lovelace" className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 ring-1 ring-white/10 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label className="text-sm text-blue-200/80">Email</label>
              <input type="email" placeholder="you@example.com" className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 ring-1 ring-white/10 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-blue-200/80">Message</label>
              <textarea rows="4" placeholder="Tell me about your idea..." className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 ring-1 ring-white/10 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div className="sm:col-span-2 flex justify-center">
              <button type="button" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30 hover:opacity-90 transition">
                <Send className="h-4 w-4" />
                Send message
              </button>
            </div>
          </form>

          <div className="mt-6 flex items-center justify-center gap-3 text-blue-200/80">
            <Mail className="h-4 w-4" /> you@portfolio.dev
          </div>
        </div>
      </div>
    </section>
  )
}
