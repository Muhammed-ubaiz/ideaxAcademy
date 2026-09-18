/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        xl: '1360px',
        '2xl': '1360px',
      },
    },
    extend: {
      colors: {
        ideax: {
          black: '#050505',
          white: '#FFFFFF',
          purple: '#8F00FF',
          'purple-deep': '#6D00CC',
          'purple-light': '#B85CFF',
          soft: '#F8F7FA',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.65rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        xl2: '14px',
      },
      boxShadow: {
        premium: '0 20px 60px -20px rgba(143, 0, 255, 0.25)',
        soft: '0 8px 30px -8px rgba(5, 5, 5, 0.08)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.98)' },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
