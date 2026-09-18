import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, MessageCircle } from 'lucide-react'
import Button from './Button'
import { contactInfo } from '../data/contact'

const statusOptions = [
  'Student',
  'Graduate',
  'Working Professional',
  'Career Switcher',
  'Other',
]

const initialForm = {
  name: '',
  phone: '',
  email: '',
  status: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!/^[0-9+\s-]{7,15}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.status) errors.status = 'Please select your current status.'
  if (!values.message.trim()) errors.message = 'Please tell us a little about your enquiry.'
  return errors
}

function buildWhatsappUrl(values) {
  const message = `Hi IDEAX Academy,

I would like to enquire about the MERN Stack Development with AI Integration program.

Name: ${values.name}
Phone: ${values.phone}
Email: ${values.email}
Current Status: ${values.status}

Message:
${values.message}`

  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export default function ContactForm() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success
  const [whatsappUrl, setWhatsappUrl] = useState('')

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status === 'submitting') return

    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')

    window.setTimeout(() => {
      const url = buildWhatsappUrl(values)
      window.open(url, '_blank', 'noopener,noreferrer')
      setWhatsappUrl(url)
      setStatus('success')
      setValues(initialForm)
    }, 450)
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-4 rounded-xl2 border border-ideax-purple/25 bg-ideax-purple/5 px-8 py-16 text-center"
      >
        <CheckCircle2 size={40} className="text-ideax-purple" />
        <h3 className="text-xl font-bold text-ideax-black">Enquiry Ready</h3>
        <p className="max-w-sm text-sm text-ideax-black/60">
          Your enquiry is ready. Continue in WhatsApp to send it to IDEAX Academy.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl2 bg-ideax-black px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ideax-purple"
        >
          <MessageCircle size={16} />
          Open WhatsApp Again
        </a>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-ideax-purple underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <Field label="Full Name" htmlFor="name" error={errors.name}>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
          placeholder="Your full name"
          className={inputClasses(errors.name)}
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange('phone')}
            placeholder="+91 XXXXX XXXXX"
            className={inputClasses(errors.phone)}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            placeholder="you@example.com"
            className={inputClasses(errors.email)}
          />
        </Field>
      </div>

      <Field label="Current Status" htmlFor="status" error={errors.status}>
        <select
          id="status"
          value={values.status}
          onChange={handleChange('status')}
          className={inputClasses(errors.status)}
        >
          <option value="">Select your current status</option>
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={handleChange('message')}
          placeholder="Tell us what you'd like to know"
          className={`${inputClasses(errors.message)} resize-none`}
        />
      </Field>

      <Button
        type="submit"
        variant="primary"
        icon={status === 'idle'}
        disabled={status === 'submitting'}
        className={`mt-2 w-full justify-center ${
          status === 'submitting' ? 'cursor-not-allowed opacity-70' : ''
        }`}
      >
        {status === 'submitting' && <Loader2 size={16} className="animate-spin" />}
        {status === 'idle' && 'Send Enquiry'}
        {status === 'submitting' && 'Preparing Enquiry...'}
      </Button>
    </form>
  )
}

function Field({ label, htmlFor, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ideax-black">
        {label}
      </label>
      {children}
      {error && <span className="text-xs font-medium text-red-600">{error}</span>}
    </div>
  )
}

function inputClasses(error) {
  return `w-full rounded-xl2 border bg-white px-4 py-3 text-sm text-ideax-black outline-none transition-all duration-200 placeholder:text-ideax-black/35 focus:border-ideax-purple focus:shadow-[0_0_0_4px_rgba(143,0,255,0.08)] ${
    error ? 'border-red-400' : 'border-ideax-black/15'
  }`
}
