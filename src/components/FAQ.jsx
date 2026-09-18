import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="flex flex-col divide-y divide-ideax-black/10 border-y border-ideax-black/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <Reveal key={item.question} as="div" delay={Math.min(i * 0.04, 0.2)}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-base font-semibold text-ideax-black sm:text-lg">
                {item.question}
              </span>
              <Plus
                size={20}
                className={`shrink-0 text-ideax-purple transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm leading-relaxed text-ideax-black/60 sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        )
      })}
    </div>
  )
}
