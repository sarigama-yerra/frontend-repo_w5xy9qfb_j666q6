import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-blue-100">
      {/* background gradient accents */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="py-10 text-center text-blue-200/70">
        <p>
          © {new Date().getFullYear()} Your Name. Built with love and a sprinkle of Spline.
        </p>
      </footer>
    </div>
  )
}

export default App
