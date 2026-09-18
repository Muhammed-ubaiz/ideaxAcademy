import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl2 px-6 py-3.5 text-sm font-semibold transition-colors duration-300'

const variants = {
  primary: 'bg-ideax-black text-white',
  primaryLight: 'bg-white text-ideax-black',
  secondary: 'bg-transparent text-ideax-black border border-ideax-black/25 hover:text-white',
  secondaryLight: 'bg-transparent text-white border border-white/30 hover:text-ideax-black',
}

const Button = forwardRef(function Button(
  { children, variant = 'primary', to, href, icon = true, className = '', onClick, type = 'button', ...rest },
  ref
) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  const content = (
    <>
      {(variant === 'secondary' || variant === 'secondaryLight') && (
        <span
          className={`absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 ${
            variant === 'secondaryLight' ? 'bg-white' : 'bg-ideax-black'
          }`}
        />
      )}
      {(variant === 'primary' || variant === 'primaryLight') && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-ideax-purple-deep to-ideax-purple transition-transform duration-300 ease-out group-hover:translate-x-0" />
      )}
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button ref={ref} type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  )
})

export default Button
