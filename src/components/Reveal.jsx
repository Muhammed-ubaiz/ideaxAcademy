import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

export default function Reveal({
  as = 'div',
  children,
  variants = fadeUp,
  delay = 0,
  className = '',
  once = true,
  amount = 0.25,
}) {
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}
