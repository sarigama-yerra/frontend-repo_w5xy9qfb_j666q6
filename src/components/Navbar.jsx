import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-tight">Software Engineer</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30 hover:opacity-90 transition-opacity">
              Let’s talk
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-blue-100/90 hover:text-white">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com" target="_blank" className="text-blue-100/70 hover:text-white">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" className="text-blue-100/70 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#contact" className="text-blue-100/70 hover:text-white">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
