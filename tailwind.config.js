/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlue: 'hsl(214, 96%, 27%)',
        dusty: 'hsl(0, 0%, 95%)',
        textDusty: 'hsl(0, 0%, 50%)',
        headingRed: 'hsl(17, 100%, 37%)',
        textSky: 'hsl(202, 100%, 31%)'
      }
    },
  },
  plugins: [],
}