import { Phone, Mail, MapPin, Globe, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { contactInfo } from '../data/contact'

export default function Contact() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`

  return (
    <>
      <SEO
        title="Contact IDEAX Academy | MERN Stack + AI Integration"
        description="Get in touch with IDEAX Academy to learn more about the MERN Stack Development with AI Integration program."
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-ideax-purple/10 blur-3xl animate-blob"
        />
        <div className="container-ideax relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ideax-purple/20 bg-ideax-purple/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ideax-purple-deep">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-hero-mobile font-extrabold leading-tight tracking-tight text-ideax-black sm:text-5xl">
              Let&rsquo;s Talk About Your Developer Journey.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-ideax grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-ideax-black sm:text-3xl">
              Let&rsquo;s Build Your Future.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ideax-black/60">
              Have a question about the MERN Stack Development with AI Integration program?
              Send us an enquiry or reach out directly — our team is happy to help.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <ContactRow icon={Phone} label={contactInfo.phoneDisplay} href={`tel:${contactInfo.phoneTel}`} />
              <ContactRow icon={Mail} label={contactInfo.email} href={`mailto:${contactInfo.email}`} />
              <ContactRow
                icon={Globe}
                label={contactInfo.websiteDisplay}
                href={contactInfo.website}
                external
              />
              <ContactRow icon={MapPin} label={contactInfo.location} />
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-xl2 bg-ideax-black px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ideax-purple"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl2 border border-ideax-black/10 bg-white p-6 shadow-soft sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function ContactRow({ icon: Icon, label, href, external = false }) {
  const iconBadge = (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl2 border border-ideax-black/10 bg-ideax-soft text-ideax-purple transition-colors duration-300 group-hover:border-ideax-purple/40">
      <Icon size={17} />
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex items-center gap-3"
      >
        {iconBadge}
        <span className="break-all text-sm font-semibold text-ideax-black transition-colors duration-300 group-hover:text-ideax-purple">
          {label}
        </span>
      </a>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {iconBadge}
      <span className="break-all text-sm font-semibold text-ideax-black">{label}</span>
    </div>
  )
}
