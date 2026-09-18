import { MessageCircle } from 'lucide-react'
import { contactInfo } from '../data/contact'

export default function WhatsAppButton() {
  const url = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with IDEAX Academy on WhatsApp"
      className="fixed bottom-[18px] right-[18px] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ideax-black text-white shadow-premium transition-all duration-300 hover:scale-105 hover:bg-ideax-purple sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={24} />
    </a>
  )
}
