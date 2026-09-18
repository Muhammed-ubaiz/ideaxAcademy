import { Compass, BookOpen, Sparkles, Hammer } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

const pillars = [
  {
    icon: Compass,
    label: 'Our Vision',
    heading: 'Helping learners become confident, modern developers.',
    body: 'IDEAX Academy exists to help learners move from curiosity about technology to being able to build and ship real applications, using the tools that modern development teams actually rely on today.',
  },
  {
    icon: BookOpen,
    label: 'Our Learning Philosophy',
    heading: 'Understand deeply, then build.',
    body: 'Every topic is introduced with the reasoning behind it before it is practiced. Students move from concept to hands-on implementation quickly, so knowledge is reinforced by building rather than passive watching.',
  },
  {
    icon: Sparkles,
    label: 'Why MERN + AI',
    heading: 'A stack built for the modern web, extended with AI.',
    body: 'MongoDB, Express.js, React and Node.js form one of the most widely used full-stack combinations in the industry. Pairing it with AI integration prepares students to build the kind of intelligent products modern companies are creating.',
  },
  {
    icon: Hammer,
    label: 'How IDEAX Teaches',
    heading: 'Project-based, from day one.',
    body: 'Instead of isolated exercises, learners work through structured modules that build toward complete, real-world applications — including authentication systems, dashboards and AI-powered features.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About IDEAX Academy | MERN Stack Development with AI Integration"
        description="Learn about IDEAX Academy's vision, learning philosophy, and project-based approach to teaching MERN Stack Development with AI Integration."
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
              About IDEAX
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl text-hero-mobile font-extrabold leading-tight tracking-tight text-ideax-black sm:text-5xl lg:text-hero-desktop">
              Where Developers Begin Building Their Future.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ideax-black/60 sm:text-lg">
              IDEAX Academy is focused on one thing: teaching modern MERN Stack development
              with practical AI integration, through real, project-based learning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-ideax flex flex-col gap-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            const reversed = i % 2 === 1
            return (
              <div
                key={pillar.label}
                className="grid grid-cols-1 items-center gap-10 border-t border-ideax-black/10 pt-14 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal className={reversed ? 'lg:order-2' : ''}>
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl2 border border-ideax-purple/20 bg-ideax-purple/5 text-ideax-purple">
                    <Icon size={22} />
                  </span>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ideax-purple-deep">
                    {pillar.label}
                  </p>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ideax-black sm:text-3xl">
                    {pillar.heading}
                  </h2>
                </Reveal>
                <Reveal delay={0.1} className={reversed ? 'lg:order-1' : ''}>
                  <p className="text-base leading-relaxed text-ideax-black/60 sm:text-lg">
                    {pillar.body}
                  </p>
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      {/* PROJECT-BASED LEARNING */}
      <section data-cursor-theme="dark" className="bg-ideax-black py-24 sm:py-32">
        <div className="container-ideax">
          <SectionTitle
            dark
            align="center"
            label="Project-Based Learning"
            heading="Learning That Mirrors Real Development Work."
            description="Students move through the same stages a real product team would — planning, building, integrating and shipping — inside every module of the program."
            className="mx-auto"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ideax-soft py-24 sm:py-32">
        <div className="container-ideax flex flex-col items-center gap-8 text-center">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-ideax-black sm:text-4xl lg:text-5xl">
              Ready to start building with MERN and AI?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 sm:flex-row">
            <Button to="/program" variant="primary">
              View the Program
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
