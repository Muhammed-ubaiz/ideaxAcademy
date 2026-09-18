import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { journeySteps } from '../data/curriculum'
import Reveal from './Reveal'

export default function JourneyTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.6'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 26 })

  return (
    <div ref={ref} className="relative pl-10 sm:pl-14">
      <div className="absolute left-[7px] top-1 bottom-1 w-[2px] bg-ideax-black/10 sm:left-[11px]" />
      <motion.div
        style={{ scaleY: progress }}
        className="absolute left-[7px] top-1 bottom-1 w-[2px] origin-top bg-gradient-to-b from-ideax-purple-deep via-ideax-purple to-ideax-purple-light sm:left-[11px]"
      />

      <div className="flex flex-col gap-10">
        {journeySteps.map((item, i) => (
          <Reveal key={item.step} delay={Math.min(i * 0.04, 0.2)} className="relative">
            <span className="absolute -left-10 top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-ideax-purple bg-white sm:-left-14 sm:h-[22px] sm:w-[22px]" />
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ideax-purple">
              Step {item.step}
            </p>
            <h3 className="mt-1 text-lg font-bold text-ideax-black sm:text-xl">{item.title}</h3>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
