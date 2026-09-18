import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import Logo from './Logo'
import SocialLink from './SocialLink'
import { InstagramIcon, LinkedinIcon, FacebookIcon } from './SocialIcons'
import { contactInfo, socialLinks } from '../data/contact'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Program', path: '/program' },
  { label: 'Curriculum', path: '/curriculum' },
  { label: 'Contact', path: '/contact' },
]

const socials = [
  { label: 'Instagram', icon: InstagramIcon, href: socialLinks.instagram },
  { label: 'Facebook', icon: FacebookIcon, href: socialLinks.facebook },
  { label: 'LinkedIn', icon: LinkedinIcon, href: socialLinks.linkedin },
]

export default function Footer() {
  return (
    <footer data-cursor-theme="dark" className="bg-ideax-black text-white">
      <div className="container-ideax grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center rounded-[10px] bg-white px-3.5 py-2.5">
            <Logo className="h-auto w-[150px] object-contain sm:w-[170px] lg:w-[195px]" />
          </div>
          <p className="max-w-xs text-sm text-white/55">Build. Create. Innovate.</p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-sm text-white/70 transition-colors duration-300 hover:text-ideax-purple-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Contact
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`tel:${contactInfo.phoneTel}`}
                className="flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-300 hover:text-ideax-purple-light"
              >
                <Phone size={15} className="shrink-0 text-ideax-purple-light" />
                {contactInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2.5 break-all text-sm text-white/70 transition-colors duration-300 hover:text-ideax-purple-light"
              >
                <Mail size={15} className="shrink-0 text-ideax-purple-light" />
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-300 hover:text-ideax-purple-light"
              >
                <Globe size={15} className="shrink-0 text-ideax-purple-light" />
                {contactInfo.websiteDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/70">
              <MapPin size={15} className="shrink-0 text-ideax-purple-light" />
              {contactInfo.location}
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, icon, href }) => (
              <SocialLink key={label} label={label} icon={icon} href={href} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-ideax flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/45 sm:flex-row">
          <p>&copy; 2026 IDEAX Academy. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white/70">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
