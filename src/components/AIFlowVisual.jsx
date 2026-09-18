import { motion } from 'framer-motion'
import { User, LayoutTemplate, Server, Sparkles, MessageSquareText } from 'lucide-react'

const steps = [
  { label: 'User Request', icon: User },
  { label: 'React Application', icon: LayoutTemplate },
  { label: 'Node API', icon: Server },
  { label: 'AI Model', icon: Sparkles },
  { label: 'Smart Response', icon: MessageSquareText },
]

export default function AIFlowVisual() {
  return (
    <div className="rounded-xl2 border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="flex flex-col">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex flex-col items-start">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl2 border border-ideax-purple/30 bg-ideax-purple/10 text-ideax-purple-light">
                  <Icon size={19} />
                </span>
                <span className="text-sm font-semibold text-white sm:text-base">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="relative ml-[22px] h-8 w-[2px] overflow-hidden bg-white/10">
                  <motion.span
                    initial={{ y: '-100%' }}
                    animate={{ y: '100%' }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.3,
                    }}
                    className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-ideax-purple-light to-transparent"
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
