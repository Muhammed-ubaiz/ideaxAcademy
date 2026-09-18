import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Layers, Hammer } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import Button from './Button'
import LearningTimeline from './LearningTimeline'
import { staggerContainer, staggerItem } from '../utils/animations'

const info = [
  { icon: Layers, label: 'Program', value: 'MERN Stack Development + AI Integration' },
  { icon: MapPin, label: 'Learning Mode', value: 'Offline / Classroom' },
  { icon: GraduationCap, label: 'Level', value: 'Beginner to Career Ready' },
  { icon: Hammer, label: 'Approach', value: 'Project-Based Learning' },
]

export default function ProgramOverview({ showCta = true }) {
  return (
    <section data-cursor-theme="dark" className="bg-ideax-black py-24 sm:py-32">
      <div className="container-ideax">
        <SectionTitle
          dark
          label="Our Program"
          heading="MERN Stack Development with AI Integration"
          description="One focused program designed to take learners from web fundamentals to modern AI-powered full-stack application development."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1, 0.1)}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {info.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="rounded-xl2 border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-ideax-purple/40"
            >
              <Icon size={22} className="mb-4 text-ideax-purple-light" />
              <p className="text-xs uppercase tracking-[0.14em] text-white/40">{label}</p>
              <p className="mt-2 text-sm font-semibold leading-snug text-white">{value}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <LearningTimeline />
        </div>

        {showCta && (
          <Reveal delay={0.1} className="mt-16">
            <Button to="/curriculum" variant="secondaryLight">
              View Full Curriculum
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  )
}
