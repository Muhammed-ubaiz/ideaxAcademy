import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../utils/animations'

const stats = [
  { value: '01', label: 'Focused Career Program' },
  { value: 'MERN', label: 'Full Stack Development' },
  { value: 'AI', label: 'Integrated Learning' },
]

export default function StatsRow() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer(0.15, 0.1)}
      className="grid grid-cols-1 gap-8 border-t border-ideax-black/10 pt-10 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={staggerItem}>
          <p className="text-4xl font-extrabold tracking-tight text-ideax-purple sm:text-5xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm font-medium text-ideax-black/55">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
