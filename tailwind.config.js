/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './index.tsx', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        henria: {
          gold: '#CBA135',
          dark: '#1A1A1A',
          white: '#FFFFFF',
        },
        primary: {
          50: '#fafaf9',
          100: '#e7d7a5',
          800: '#2d2d2d',
          900: '#1A1A1A',
          950: '#111111',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
