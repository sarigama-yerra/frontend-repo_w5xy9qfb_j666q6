import { motion } from 'framer-motion'

export default function SceneToggles({ onOpenPortal }) {
  const buttons = [
    { label: 'Enter Portal', action: onOpenPortal },
    { label: 'Explore Nodes', action: () => window.dispatchEvent(new CustomEvent('scene:focus', { detail: 'nodes' })) },
    { label: 'Light Burst', action: () => window.dispatchEvent(new CustomEvent('scene:burst')) },
  ]

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {buttons.map((b) => (
        <motion.button
          key={b.label}
          onClick={b.action}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white ring-1 ring-white/10 hover:from-cyan-500/30 hover:to-blue-500/30 transition"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          {b.label}
        </motion.button>
      ))}
    </div>
  )
}
