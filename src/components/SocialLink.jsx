export default function SocialLink({ icon: Icon, href, label, size = 17 }) {
  const baseClasses =
    'flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300'

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={`${label} coming soon`}
        className={`${baseClasses} cursor-not-allowed border-white/10 text-white/25`}
      >
        <Icon size={size} />
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`${baseClasses} cursor-pointer border-white/12 text-white/70 hover:scale-110 hover:border-ideax-purple hover:text-ideax-purple-light`}
    >
      <Icon size={size} />
    </a>
  )
}
