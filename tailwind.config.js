/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-lg': '990px',
        'large-width': '1250px'
      },
      truncate: {
        '2-lines': '2',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
