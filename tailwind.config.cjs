/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        celeste: 'var(--celeste)',
        azul: 'var(--azul)',
        naranja: 'var(--naranja)',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
      transitionProperty: {
        'base': 'all',
      },
      keyframes: {
        fadeIn: {
          'to': { opacity: '1' },
        },
        slideUp: {
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(.4,0,.2,1) forwards',
      },
    },
  },
  plugins: [],
};
