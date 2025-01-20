/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundP:'#003652',
        backgroundS:'#246D91',
        backgroundT:'#69AED1',
        contrastP:'#522D00',
        contrastS:'#A77538',
        contrastT:'#FCD6A8',
      }
    },
  },
  plugins: [],
})