/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dorado': {
          50: '#fffbe7',
          100: '#ffe082',
          200: '#bfa14a',
          300: '#d4af37',
          400: '#ffe082',
          500: '#bfa14a',
          600: '#d4af37',
          700: '#b8941f',
          800: '#8b6914',
          900: '#5d470e'
        },
        'vallenato': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulso': 'pulso 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'brillo': 'brillo 3s ease-in-out infinite',
        'flotar': 'flotar 6s ease-in-out infinite',
        'aparecer': 'aparecer 0.6s ease-out',
        'deslizar': 'deslizar 0.8s ease-out'
      },
      keyframes: {
        pulso: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        brillo: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.1)' }
        },
        flotar: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        aparecer: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        deslizar: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
} 