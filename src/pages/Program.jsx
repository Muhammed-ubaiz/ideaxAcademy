import { Layers, MapPin, GraduationCap, Hammer } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import LearningTimeline from '../components/LearningTimeline'
import AIFlowVisual from '../components/AIFlowVisual'
import WhoIsThisFor from '../components/WhoIsThisFor'
import FAQ from '../components/FAQ'
import { faqs } from '../data/faqs'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../utils/animations'

const info = [
  { icon: Layers, label: 'Program', value: 'MERN Stack Development + AI Integration' },
  { icon: MapPin, label: 'Learning Mode', value: 'Offline / Classroom' },
  { icon: GraduationCap, label: 'Level', value: 'Beginner to Career Ready' },
  { icon: Hammer, label: 'Approach', value: 'Project-Based Learning' },
]

const techStack = [
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
  'REST APIs',
  'Git & GitHub',
  'AI APIs',
  'Prompt Engineering',
]

export default function Program() {
  return (
    <>
      <SEO
        title="MERN Stack + AI Integration Program | IDEAX Academy"
        description="A detailed look at the MERN Stack Development with AI Integration program at IDEAX Academy — overview, technologies, journey and projects."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white pb-20 pt-32 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-ideax-purple/10 blur-3xl animate-blob"
        />
        <div className="container-ideax relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ideax-purple/20 bg-ideax-purple/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ideax-purple-deep">
              Our Program
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl text-hero-mobile font-extrabold leading-tight tracking-tight text-ideax-black sm:text-5xl lg:text-hero-desktop">
              MERN Stack Development with <span className="text-gradient-purple">AI Integration</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ideax-black/60 sm:text-lg">
              One focused program designed to take learners from web fundamentals to modern,
              AI-powered full-stack application development.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button to="/curriculum" variant="primary">
              View Curriculum
            </Button>
            <Button to="/contact" variant="secondary">
              Join IDEAX
            </Button>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-ideax">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer(0.1, 0.05)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {info.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="rounded-xl2 border border-ideax-black/10 bg-white p-6 transition-colors duration-300 hover:border-ideax-purple/40"
              >
                <Icon size={22} className="mb-4 text-ideax-purple" />
                <p className="text-xs uppercase tracking-[0.14em] text-ideax-black/40">{label}</p>
                <p className="mt-2 text-sm font-semibold leading-snug text-ideax-black">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-ideax-soft py-20 sm:py-24">
        <div className="container-ideax">
          <SectionTitle label="Technologies" heading="Tools You Will Learn to Work With." />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer(0.06, 0.1)}
            className="mt-10 flex flex-wrap gap-3"
          >
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                variants={staggerItem}
                className="rounded-xl2 border border-ideax-black/10 bg-white px-5 py-3 text-sm font-semibold text-ideax-black"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section data-cursor-theme="dark" className="bg-ideax-black py-24 sm:py-32">
        <div className="container-ideax">
          <SectionTitle
            dark
            label="Learning Journey"
            heading="From Foundation to Full Stack, Step by Step."
          />
          <div className="mt-16">
            <LearningTimeline />
          </div>
        </div>
      </section>

      {/* AI INTEGRATION */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-ideax grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ideax-purple/20 bg-ideax-purple/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ideax-purple-deep">
              AI Integration
            </span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ideax-black sm:text-4xl">
              Add Intelligence to Full-Stack Applications.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ideax-black/60 sm:text-lg">
              Students learn how modern AI APIs fit into a MERN application — from a user
              request in React, through a secure Node.js API layer, to an AI model and back as
              a smart response. API integration concepts are taught generically, without ever
              requiring API keys to be exposed in frontend code.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-xl2 border border-ideax-black/10 bg-ideax-black p-2">
            <AIFlowVisual />
          </Reveal>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-ideax">
          <SectionTitle align="center" heading="Who Can Join This Program?" className="mx-auto" />
          <div className="mt-14">
            <WhoIsThisFor />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ideax-soft py-24 sm:py-32">
        <div className="container-ideax max-w-3xl">
          <SectionTitle label="FAQ" heading="Program Questions, Answered." />
          <div className="mt-12">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-ideax flex flex-col items-center gap-8 rounded-xl2 border border-ideax-black/10 bg-ideax-black px-8 py-16 text-center">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Ready to join the program?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" variant="primaryLight">
              Join IDEAX Academy
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
