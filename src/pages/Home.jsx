import { motion } from 'framer-motion'
import { ChevronDown, Phone, Mail, MapPin, Globe } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import HeroVisual from '../components/HeroVisual'
import TechMarquee from '../components/TechMarquee'
import StatsRow from '../components/StatsRow'
import ProgramOverview from '../components/ProgramOverview'
import SectionTitle from '../components/SectionTitle'
import CurriculumAccordion from '../components/CurriculumAccordion'
import AIFlowVisual from '../components/AIFlowVisual'
import ProcessSteps from '../components/ProcessSteps'
import WhyIdeax from '../components/WhyIdeax'
import JourneyTimeline from '../components/JourneyTimeline'
import WhoIsThisFor from '../components/WhoIsThisFor'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'
import { curriculum } from '../data/curriculum'
import { faqs } from '../data/faqs'
import { contactInfo } from '../data/contact'
import { staggerContainer, staggerItem, fadeUp } from '../utils/animations'
import SkillsSection from '../components/SkillsSection'

const heroLines = [['Build.'], ['Create.'], ['Innovate', 'with', 'AI.']]

export default function Home() {
  return (
    <>
      <SEO
        title="IDEAX Academy | MERN Stack Development with AI Integration"
        description="Learn MERN Stack Development with AI Integration through practical, project-based training at IDEAX Academy."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-ideax-purple/10 blur-3xl animate-blob"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-ideax-purple-light/10 blur-3xl animate-blob"
        />

        <div className="container-ideax relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ideax-purple/25 bg-ideax-purple/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ideax-purple-deep">
                MERN Stack + AI Integration
              </span>
            </Reveal>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={staggerContainer(0.08, 0.15)}
              className="mt-6 flex flex-col gap-1 text-hero-mobile font-extrabold tracking-tight text-ideax-black sm:text-5xl lg:text-hero-desktop"
            >
              {heroLines.map((line, li) => (
                <span key={li} className="flex flex-wrap gap-x-3">
                  {line.map((word, wi) => (
                    <span key={wi} className="overflow-hidden">
                      <motion.span
                        variants={staggerItem}
                        className={`inline-block ${word === 'AI.' ? 'text-gradient-purple' : ''}`}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </span>
              ))}
            </motion.h1>

            <Reveal delay={0.35} className="mt-6">
              <p className="max-w-xl text-base leading-relaxed text-ideax-black/60 sm:text-lg">
                Master full-stack web development using MongoDB, Express.js, React and Node.js
                while learning how to integrate modern <span className="font-semibold text-ideax-purple-deep">AI Integration</span>{' '}
                tools and APIs into real-world applications.
              </p>
            </Reveal>

            <Reveal delay={0.45} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact" variant="primary">
                Start Your Journey
              </Button>
              <Button to="/curriculum" variant="secondary">
                Explore Curriculum
              </Button>
            </Reveal>

            <Reveal delay={0.55} className="mt-7">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-ideax-black/40">
                Industry-focused &bull; Project-based &bull; AI-powered learning
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} variants={fadeUp} className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-16 flex justify-center"
        >
          <ChevronDown size={22} className="text-ideax-black/30" />
        </motion.div>
      </section>

      <TechMarquee />

      {/* ABOUT INTRO */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-ideax">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-ideax-purple/20 bg-ideax-purple/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ideax-purple-deep">
                About IDEAX
              </span>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ideax-black sm:text-4xl lg:text-5xl">
                Not Just Coding. Learn How Modern Products Are Built.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-center">
              <p className="text-base leading-relaxed text-ideax-black/60 sm:text-lg">
                IDEAX Academy focuses on practical full-stack development with AI integration.
                Students learn by building real applications, understanding development
                workflows and integrating modern artificial intelligence into web products.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <StatsRow />
          </div>
        </div>
      </section>

      {/* MAIN PROGRAM */}
      <ProgramOverview />

      {/* CURRICULUM */}
      <section id="curriculum" className="bg-white py-24 sm:py-32">
        <div className="container-ideax">
          <SectionTitle
            label="Curriculum"
            heading="Everything You Need to Build Modern Web Applications."
            description="A structured, progressive curriculum from foundations to AI-integrated full-stack development."
          />
          <div className="mt-14">
            <CurriculumAccordion modules={curriculum} />
          </div>
          <Reveal delay={0.1} className="mt-10">
            <Button to="/curriculum" variant="secondary">
              View Full Curriculum
            </Button>
          </Reveal>
        </div>
      </section>

      {/* AI INTEGRATION FEATURE */}
      <section data-cursor-theme="dark" className="bg-ideax-black py-24 sm:py-32">
        <div className="container-ideax grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ideax-purple-light">
                Development Meets AI
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Don&rsquo;t Just Learn to Code. Learn to Build with AI.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
                Modern developers need more than traditional coding skills. IDEAX Academy
                teaches students how to combine full-stack development with modern AI
                capabilities to create smarter products.
              </p>
            </Reveal>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer(0.07, 0.1)}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {[
                'AI API Integration',
                'Prompt Engineering',
                'AI Chat Experiences',
                'Smart Application Features',
                'Developer AI Tools',
                'Real-world AI Projects',
              ].map((point) => (
                <motion.li
                  key={point}
                  variants={staggerItem}
                  className="flex items-center gap-2.5 text-sm font-medium text-white/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-ideax-purple-light" />
                  {point}
                </motion.li>
              ))}
            </motion.ul>

            <Reveal delay={0.2} className="mt-9">
              <Button to="/program" variant="secondaryLight">
                Explore AI Learning
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <AIFlowVisual />
          </Reveal>
        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-ideax">
          <SectionTitle
            label="Learning Approach"
            heading="Learn By Building, Not By Watching."
            description="Every module follows a hands-on process that turns concepts into working applications."
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL BE ABLE TO DO */}
      <SkillsSection />

      {/* WHY IDEAX */}
      <section id="why-ideax" className="bg-white py-24 sm:py-32">
        <div className="container-ideax">
          <SectionTitle
            align="center"
            label="Why IDEAX"
            heading="Why Learn at IDEAX Academy?"
            className="mx-auto"
          />
          <div className="mt-14">
            <WhyIdeax />
          </div>
        </div>
      </section>

      {/* DEVELOPMENT JOURNEY */}
      <section className="bg-ideax-soft py-24 sm:py-32">
        <div className="container-ideax">
          <SectionTitle
            label="Development Journey"
            heading="Your Journey From Beginner to Full Stack Developer."
          />
          <div className="mt-16">
            <JourneyTimeline />
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-ideax">
          <SectionTitle align="center" heading="Is This Program For You?" className="mx-auto" />
          <div className="mt-14">
            <WhoIsThisFor />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section data-cursor-theme="dark" className="relative overflow-hidden bg-ideax-black py-28 sm:py-36">
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute right-[-10%] top-1/2 h-[480px] w-[480px] -translate-y-1/2 opacity-20"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <line x1="15" y1="15" x2="85" y2="85" stroke="#8F00FF" strokeWidth="4" strokeLinecap="round" />
            <line x1="85" y1="15" x2="15" y2="85" stroke="#B85CFF" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </motion.div>

        <div className="container-ideax relative flex flex-col items-center text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
              Your Developer Journey <span className="text-gradient-purple">Starts Here.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Learn MERN Stack Development and modern AI integration through practical,
              project-focused training at IDEAX Academy.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button to="/contact" variant="primaryLight">
              Join IDEAX Academy
            </Button>
            <Button to="/contact" variant="secondaryLight">
              Contact Us
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24 sm:py-32">
        <div className="container-ideax max-w-3xl">
          <SectionTitle label="FAQ" heading="Frequently Asked Questions" />
          <div className="mt-12">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-preview" className="bg-ideax-soft py-24 sm:py-32">
        <div className="container-ideax grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ideax-black sm:text-4xl lg:text-5xl">
              Let&rsquo;s Build Your Future.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ideax-black/60">
              Have a question about the program? Reach out and our team will help you take the
              next step toward becoming a full-stack developer.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <ContactRow icon={Phone} label={contactInfo.phoneDisplay} href={`tel:${contactInfo.phoneTel}`} />
              <ContactRow icon={Mail} label={contactInfo.email} href={`mailto:${contactInfo.email}`} />
              <ContactRow
                icon={Globe}
                label={contactInfo.websiteDisplay}
                href={contactInfo.website}
                external
              />
              <ContactRow icon={MapPin} label={contactInfo.location} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl2 border border-ideax-black/10 bg-white p-6 shadow-soft sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function ContactRow({ icon: Icon, label, href, external = false }) {
  const iconBadge = (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl2 border border-ideax-black/10 bg-white text-ideax-purple transition-colors duration-300 group-hover:border-ideax-purple/40">
      <Icon size={17} />
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex items-center gap-3"
      >
        {iconBadge}
        <span className="break-all text-sm font-semibold text-ideax-black transition-colors duration-300 group-hover:text-ideax-purple">
          {label}
        </span>
      </a>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {iconBadge}
      <span className="break-all text-sm font-semibold text-ideax-black">{label}</span>
    </div>
  )
}
