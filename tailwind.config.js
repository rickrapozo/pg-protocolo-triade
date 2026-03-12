/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#050505',
        'brand-green': {
          DEFAULT: '#FFD700',
          dark: '#B8860B',
          light: '#FFE566',
        },
        'zinc': {
          950: '#09090b',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"SF Pro Display"', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow 3s infinite ease-in-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        }
      }
    },
  },
  plugins: [],
}
