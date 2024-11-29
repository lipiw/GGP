/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          950: '#1e1b4b',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          950: '#172554',
        },
      },
    },
  },
  plugins: [],
};