import { motion } from 'framer-motion'
import { UserCheck } from 'lucide-react'
import { whoIsThisFor } from '../data/curriculum'
import { staggerContainer, staggerItem } from '../utils/animations'

export default function WhoIsThisFor() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.08, 0.05)}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {whoIsThisFor.map((item) => (
        <motion.div
          key={item}
          variants={staggerItem}
          className="flex items-center gap-3 rounded-xl2 border border-ideax-black/10 bg-white px-5 py-4 transition-colors duration-300 hover:border-ideax-purple/40"
        >
          <UserCheck size={18} className="shrink-0 text-ideax-purple" />
          <span className="text-sm font-semibold text-ideax-black">{item}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
