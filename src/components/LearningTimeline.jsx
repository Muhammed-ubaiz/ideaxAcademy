import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { learningPath } from '../data/curriculum'

export default function LearningTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.4'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[13px] top-2 bottom-2 w-[2px] bg-white/10 lg:left-1/2 lg:right-0 lg:top-1/2 lg:h-[2px] lg:w-auto lg:bottom-auto lg:-translate-y-1/2" />
      <motion.div
        style={{ scaleY: progress }}
        className="absolute left-[13px] top-2 bottom-2 w-[2px] origin-top bg-gradient-to-b from-ideax-purple to-ideax-purple-light lg:hidden"
      />
      <motion.div
        style={{ scaleX: progress }}
        className="absolute left-0 right-0 top-1/2 hidden h-[2px] origin-left -translate-y-1/2 bg-gradient-to-r from-ideax-purple-deep via-ideax-purple to-ideax-purple-light lg:block"
      />

      <ol className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-2">
        {learningPath.map((step, i) => (
          <li key={step} className="relative flex items-center gap-4 lg:flex-col lg:items-center lg:gap-3 lg:text-center">
            <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ideax-purple bg-ideax-black text-[11px] font-bold text-ideax-purple-light">
              {i + 1}
            </span>
            <span className="text-sm font-semibold tracking-wide text-white/85 lg:text-xs lg:uppercase lg:tracking-[0.14em]">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
