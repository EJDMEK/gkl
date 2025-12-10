/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#8B7355',
          DEFAULT: '#A68B6F',
          light: '#C4A882'
        },
        secondary: {
          DEFAULT: '#D4AF37',
          light: '#C5A572'
        },
        neutral: {
          cream: '#F8F6F2',
          beige: '#EDE7DC',
          dark: '#2C2C2C',
          darker: '#1A1A1A',
          light: '#F5F5F5'
        }
      },
      fontFamily: {
        'display': ['Crimson Text', 'serif'],
        'heading': ['Crimson Text', 'serif'],
        'body': ['Crimson Text', 'serif'], // Změněno na Crimson Text (Font Preview 3)
        'preview-1': ['Lora', 'serif'],
        'preview-2': ['Merriweather', 'serif'],
        'preview-3': ['Crimson Text', 'serif'],
        'preview-4': ['Libre Baskerville', 'serif'],
        'preview-5': ['EB Garamond', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

