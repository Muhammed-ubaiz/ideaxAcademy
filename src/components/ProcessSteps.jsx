import { motion } from 'framer-motion'
import { learningApproach } from '../data/curriculum'
import { staggerContainer, staggerItem } from '../utils/animations'

export default function ProcessSteps() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer(0.1, 0.05)}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
    >
      {learningApproach.map((item, i) => (
        <motion.div key={item.number} variants={staggerItem} className="relative flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-ideax-purple/25">{item.number}</span>
            {i < learningApproach.length - 1 && (
              <span className="hidden h-[1.5px] flex-1 bg-gradient-to-r from-ideax-purple/40 to-transparent lg:block" />
            )}
          </div>
          <h3 className="text-lg font-bold text-ideax-black">{item.title}</h3>
          <p className="text-sm text-ideax-black/55">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
