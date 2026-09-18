import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { curriculum } from '../data/curriculum'

export default function Curriculum() {
  const [activeMobile, setActiveMobile] = useState(curriculum[0].id)

  const scrollToModule = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 96
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <SEO
        title="Full Curriculum | MERN Stack + AI Integration | IDEAX Academy"
        description="Explore the complete module-by-module curriculum for the MERN Stack Development with AI Integration program at IDEAX Academy."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-ideax-purple/10 blur-3xl animate-blob"
        />
        <div className="container-ideax relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ideax-purple/20 bg-ideax-purple/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ideax-purple-deep">
              Full Curriculum
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-hero-mobile font-extrabold leading-tight tracking-tight text-ideax-black sm:text-5xl">
              Everything You Need to Build Modern Web Applications.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ideax-black/60 sm:text-lg">
              Nine modules, from web fundamentals to AI integration, Git and real-world
              projects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MOBILE DROPDOWN NAV */}
      <div className="sticky top-20 z-20 border-y border-ideax-black/10 bg-white/95 backdrop-blur-md lg:hidden">
        <div className="container-ideax py-3">
          <div className="relative">
            <select
              value={activeMobile}
              onChange={(e) => {
                setActiveMobile(e.target.value)
                scrollToModule(e.target.value)
              }}
              className="w-full appearance-none rounded-xl2 border border-ideax-black/15 bg-white px-4 py-3 pr-10 text-sm font-semibold text-ideax-black outline-none focus:border-ideax-purple"
              aria-label="Jump to curriculum module"
            >
              {curriculum.map((mod) => (
                <option key={mod.id} value={mod.id}>
                  Module {mod.number} — {mod.title}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ideax-black/40"
            />
          </div>
        </div>
      </div>

      {/* CURRICULUM BODY */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-ideax grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ideax-black/40">
                Modules
              </p>
              {curriculum.map((mod) => (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => scrollToModule(mod.id)}
                  className="group flex items-center gap-3 rounded-xl2 px-3 py-2.5 text-left text-sm font-medium text-ideax-black/60 transition-colors duration-200 hover:bg-ideax-soft hover:text-ideax-black"
                >
                  <span className="text-xs font-bold text-ideax-purple">{mod.number}</span>
                  <span>{mod.title}</span>
                </button>
              ))}
              <div className="mt-4">
                <Button to="/contact" variant="secondary" className="w-full justify-center !py-3">
                  Join IDEAX
                </Button>
              </div>
            </div>
          </aside>

          <div className="flex flex-col gap-16">
            {curriculum.map((mod) => (
              <motion.div
                key={mod.id}
                id={mod.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="scroll-mt-24 border-t border-ideax-black/10 pt-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-bold text-ideax-purple">Module {mod.number}</span>
                </div>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ideax-black sm:text-3xl">
                  {mod.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ideax-black/60 sm:text-base">
                  {mod.outcome}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {mod.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-lg border border-ideax-black/10 bg-ideax-soft px-3.5 py-2 text-sm text-ideax-black/75"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {mod.note && (
                  <p className="mt-5 max-w-2xl text-sm italic text-ideax-purple-deep/80">
                    {mod.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-cursor-theme="dark" className="bg-ideax-black py-24 sm:py-28">
        <div className="container-ideax flex flex-col items-center gap-8 text-center">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Ready to work through the full curriculum?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" variant="primaryLight">
              Join IDEAX Academy
            </Button>
            <Button to="/program" variant="secondaryLight">
              View Program Overview
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
