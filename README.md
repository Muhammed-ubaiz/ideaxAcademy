# IDEAX Academy

Marketing website for IDEAX Academy's MERN Stack Development with AI Integration program.

## Tech Stack

- React 19 + Vite
- Tailwind CSS 3
- React Router DOM
- Framer Motion
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
  assets/        Logo and static assets
  components/     Reusable UI components
  data/           Curriculum, FAQ and contact content
  hooks/          Custom React hooks
  pages/          Route-level pages (Home, About, Program, Curriculum, Contact)
  utils/          Shared animation variants
```

## Notes

- The brand mark at `src/assets/logo.svg` is a placeholder wordmark built to match the
  described brand system (black type, white background, purple "X" accent). Swap it out for
  the official IDEAX Academy logo file when available — `Logo.jsx` just points at that one file.
- Contact details (phone number, WhatsApp number) in `src/data/contact.js` are placeholders —
  update them with real values before launch.
