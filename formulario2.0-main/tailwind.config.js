/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: '#0057FF',
          emerald: '#00E676',
          dark: '#0A0F2C',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 87, 255, 0.3)',
        'glow-emerald': '0 0 20px rgba(0, 230, 118, 0.3)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
      }
    },
  },
  plugins: [],
};