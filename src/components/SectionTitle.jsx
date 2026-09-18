import Reveal from './Reveal'

export default function SectionTitle({
  label,
  heading,
  description,
  align = 'left',
  dark = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignClass} ${className}`}>
      {label && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
              dark
                ? 'border-white/15 text-ideax-purple-light bg-white/5'
                : 'border-ideax-purple/20 text-ideax-purple-deep bg-ideax-purple/5'
            }`}
          >
            {label}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
            dark ? 'text-white' : 'text-ideax-black'
          }`}
        >
          {heading}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className={`text-base leading-relaxed sm:text-lg ${dark ? 'text-white/65' : 'text-ideax-black/60'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
