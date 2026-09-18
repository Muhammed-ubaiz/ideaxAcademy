import logo from '../assets/logo.png'

export default function Logo({ className = 'h-9 w-auto', dark = false }) {
  return (
    <img
      src={logo}
      alt="IDEAX Academy"
      className={`${className} ${dark ? 'brightness-0 invert' : ''}`}
    />
  )
}
