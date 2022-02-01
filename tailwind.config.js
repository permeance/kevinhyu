// 1b314d, 152538

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fff',
      'black': '#000',
      'midnight': {
        100: '#0b141f',
        200: '#101e2e',
      },
      'teal': {
        100: '#81e5d9',
        200: '#4fd1c5',
      },
        gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    extend: {
      animation: {
        floating: 'floating 3s infinite cubic-bezier(0.5, 0.15, 0.5, 0.85)',
        stretch: 'stretch 1.5s 1 cubic-bezier(0.075, 0.82, 0.165, 1)',
        appear: "appear 1.5s 1 linear"
      },
      keyframes: {
        floating: {
          '0%': {
            transform: 'translate(0, 0px)'
          },
          '50%': {
            transform: 'translate(0, 10px)'
          },
          '100%': {
            transform: 'translate(0, -0px)'
          }
        },    
        stretch: {
          '0%': {
            transform: 'scaleX(0.5)',
            opacity: 0.5
          },
          '100%': {
            transform: 'scaleX(1)',
            opacity: 1
          }
        },
        appear: {
          '0%': {
            opacity: 0
          },
          '30%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      }
    }

  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  plugins: [],
}
