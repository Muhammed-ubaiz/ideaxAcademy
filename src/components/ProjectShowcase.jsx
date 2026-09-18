import { motion } from 'framer-motion'
import { projects } from '../data/curriculum'
import { staggerContainer, staggerItem } from '../utils/animations'

export default function ProjectShowcase() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer(0.14, 0.05)}
      className="grid grid-cols-1 gap-6 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={staggerItem}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="group rounded-xl2 border border-white/10 bg-white/[0.03] p-3 transition-colors duration-300 hover:border-ideax-purple/50"
        >
          <BrowserMock projectId={project.id} />
          <div className="px-3 pb-3 pt-5">
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-ideax-purple-light"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

function BrowserMock({ projectId }) {
  const barWidths = {
    'project-01': ['70%', '45%', '85%', '55%'],
    'project-02': ['50%', '80%', '35%', '65%'],
    'project-03': ['60%', '30%', '75%', '40%'],
  }[projectId]

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-ideax-black">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className="flex h-44 flex-col gap-3 p-5">
        {barWidths.map((width, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width }}
            className={`h-3 rounded-full ${
              i === 0 ? 'bg-ideax-purple/60' : 'bg-white/10'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
