import { motion } from 'framer-motion'

const nodes = [
  { label: 'MongoDB', x: 8, y: 12 },
  { label: 'Express', x: 82, y: 8 },
  { label: 'Node.js', x: 88, y: 62 },
  { label: 'AI', x: 10, y: 78 },
]

export default function HeroVisual() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[480px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((node) => (
          <line
            key={node.label}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="#8F00FF"
            strokeOpacity="0.28"
            strokeWidth="0.4"
          />
        ))}
      </svg>

      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ideax-purple/30 bg-gradient-to-br from-ideax-purple/15 to-white shadow-premium"
      >
        <span className="text-sm font-extrabold tracking-tight text-ideax-black">React</span>
      </motion.div>

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl2 border border-ideax-black/10 bg-white px-4 py-2.5 text-xs font-semibold text-ideax-black shadow-soft sm:text-sm"
        >
          {node.label}
        </motion.div>
      ))}

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ideax-purple/10 blur-3xl"
      />
    </div>
  )
}
