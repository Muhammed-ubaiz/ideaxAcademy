import { motion } from 'framer-motion'
import { Layers, ShieldCheck, Sparkles, Rocket } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { staggerContainer } from '../utils/animations'

const capabilityItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const capabilities = [
  {
    number: '01',
    icon: Layers,
    title: 'Build Full-Stack Applications',
    description: 'Create complete applications using React, Node.js, Express and MongoDB.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Create Secure Backends',
    description:
      'Build REST APIs, authentication systems, role-based access and production-ready backend workflows.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Integrate AI',
    description: 'Connect modern AI APIs to MERN applications and build smarter product experiences.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy Real Projects',
    description: 'Use Git, GitHub and modern deployment workflows to publish complete applications.',
  },
]

export default function SkillsSection() {
  return (
    <section className="bg-ideax-soft py-24 sm:py-32">
      <div className="container-ideax">
        <SectionTitle
          label="Skills You Build"
          heading={
            <>
              Go From Learning Code to Building <span className="text-ideax-purple">Real Products.</span>
            </>
          }
          description="By the end of the learning journey, students will understand how modern full-stack applications are planned, built, connected with AI and deployed for real-world use."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.12, 0.1)}
          className="mt-16 grid grid-cols-1 border-l border-t border-ideax-black/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map(({ number, icon: Icon, title, description }) => (
            <motion.div
              key={number}
              variants={capabilityItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group relative border-b border-r border-ideax-black/10 bg-ideax-soft p-7 transition-colors duration-300 hover:bg-white sm:p-8"
            >
              <span className="text-4xl font-extrabold tracking-tight text-ideax-black/10 transition-colors duration-300 group-hover:text-ideax-purple/15">
                {number}
              </span>

              <Icon
                size={22}
                className="mt-6 text-ideax-purple transition-transform duration-300 group-hover:-translate-y-1"
              />

              <h3 className="mt-5 text-base font-bold uppercase tracking-[0.02em] text-ideax-black">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ideax-black/60">{description}</p>

              <span className="mt-6 block h-[2px] w-8 bg-ideax-purple transition-all duration-300 ease-out group-hover:w-16" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 flex items-center gap-4">
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="h-[2px] bg-ideax-purple"
          />
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ideax-black/50">
            Learn the stack. Understand the workflow. Build the product.
          </p>
        </div>
      </div>
    </section>
  )
}
