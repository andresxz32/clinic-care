/** @type {import('tailwindcss').Config} */
const path = require('path');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'tertiary': '#f1f5f9'
      }
    },
  },
  plugins: [
    require('flowbite-typography'),
  ],
}
