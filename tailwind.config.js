/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#1ED760',
        black: '#121212',      
      },
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
