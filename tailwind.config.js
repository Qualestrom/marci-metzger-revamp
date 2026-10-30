/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#F9F8F6',
        obsidian: '#141414',
        champagne: {
          light: '#DFC182',
          DEFAULT: '#C5A059',
          dark: '#A8843F',
          soft: 'rgba(197, 160, 89, 0.12)'
        },
        muted: '#706E6B',
        charcoal: '#222222',
        surface: '#FFFFFF',
        'border-light': '#EAE6DF',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(20, 20, 20, 0.07)',
        'luxury-hover': '0 25px 50px -12px rgba(20, 20, 20, 0.15)',
        'docked': '0 25px 60px -15px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
