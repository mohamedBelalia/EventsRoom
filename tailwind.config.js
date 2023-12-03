/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'purple-light': '#af71ff',
        'blue-light': '#48b2ff',
    },
    screens: {
      'custom-lg': '990px',
      'large-width': '1250px'
    },
    truncate: {
      '2-lines': '2',
    },
  },
  }
}

