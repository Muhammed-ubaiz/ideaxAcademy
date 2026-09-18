import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Program', path: '/program' },
  { label: 'Curriculum', path: '/curriculum' },
  { label: 'Why IDEAX', path: '/', hash: '#why-ideax' },
  { label: 'FAQ', path: '/', hash: '#faq' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (e, link) => {
    if (link.hash) {
      e.preventDefault()
      if (location.pathname === '/') {
        const el = document.querySelector(link.hash)
        el?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate(`/${link.hash}`)
      }
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/85 backdrop-blur-lg shadow-soft' : 'bg-transparent'
        }`}
      >
        <div className="container-ideax flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="IDEAX Academy home">
            <Logo className="h-12 w-auto sm:h-14" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.hash ? `${link.path}${link.hash}` : link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="text-sm font-medium text-ideax-black/75 transition-colors duration-200 hover:text-ideax-purple"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" variant="primary" className="!py-3">
              Join IDEAX
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl2 border border-ideax-black/10 text-ideax-black lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex h-full flex-col justify-between px-6 pb-10 pt-28"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile primary">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
                  >
                    <Link
                      to={link.hash ? `${link.path}${link.hash}` : link.path}
                      onClick={(e) => {
                        handleNavClick(e, link)
                        setOpen(false)
                      }}
                      className="flex items-center justify-between border-b border-ideax-black/8 py-4 text-2xl font-bold text-ideax-black"
                    >
                      {link.label}
                      <ArrowRight size={18} className="text-ideax-purple" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Button to="/contact" variant="primary" className="w-full justify-center">
                Join IDEAX
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
