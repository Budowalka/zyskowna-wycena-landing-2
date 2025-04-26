/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#82c9fc',
          400: '#43acf9',
          500: '#1a91f0',
          600: '#0874e0',
          700: '#0761c9',
          800: '#0c52a3',
          900: '#0f4583',
          950: '#0a2a52',
        },
        orange: {
          50: '#fff8ed',
          100: '#ffefd6',
          200: '#ffdcad',
          300: '#ffc377',
          400: '#ff9e41',
          500: '#ff8019',
          600: '#fb6507',
          700: '#cc4c07',
          800: '#a23d0f',
          900: '#833410',
          950: '#461906',
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};