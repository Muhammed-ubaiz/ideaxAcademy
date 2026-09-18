import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'

export default function CurriculumAccordion({ modules, defaultOpen = null }) {
  const [openId, setOpenId] = useState(defaultOpen)

  return (
    <div className="flex flex-col divide-y divide-ideax-black/10 border-y border-ideax-black/10">
      {modules.map((mod) => {
        const isOpen = openId === mod.id
        return (
          <Reveal key={mod.id} as="div">
            <div id={mod.id}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${mod.id}-panel`}
                onClick={() => setOpenId(isOpen ? null : mod.id)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="flex items-center gap-5">
                  <span className="text-sm font-bold text-ideax-purple">{mod.number}</span>
                  <span className="text-lg font-bold text-ideax-black sm:text-xl">{mod.title}</span>
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-ideax-black/50 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-ideax-purple' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`${mod.id}-panel`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-0 sm:pl-10">
                      {mod.outcome && (
                        <p className="mb-4 text-sm text-ideax-black/55">{mod.outcome}</p>
                      )}
                      <div className="flex flex-wrap gap-2.5">
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
                        <p className="mt-5 text-sm italic text-ideax-purple-deep/80">{mod.note}</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
