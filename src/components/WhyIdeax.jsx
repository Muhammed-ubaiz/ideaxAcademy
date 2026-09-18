import { motion } from 'framer-motion'
import {
  Hammer,
  Code2,
  Sparkles,
  Workflow,
  Users,
  FolderGit2,
  Target,
  GitBranch,
} from 'lucide-react'
import { whyIdeax } from '../data/curriculum'
import { staggerContainer, staggerItem } from '../utils/animations'

const icons = [Hammer, Code2, Sparkles, Workflow, Users, FolderGit2, Target, GitBranch]

export default function WhyIdeax() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer(0.08, 0.05)}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {whyIdeax.map((item, i) => {
        const Icon = icons[i % icons.length]
        return (
          <motion.div
            key={item.title}
            variants={staggerItem}
            className="group rounded-xl2 border border-ideax-black/10 bg-white p-6 transition-all duration-300 hover:border-ideax-purple/50 hover:bg-ideax-soft"
          >
            <Icon
              size={22}
              className="mb-5 text-ideax-purple transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <h3 className="text-base font-bold text-ideax-black">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ideax-black/55">{item.description}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
