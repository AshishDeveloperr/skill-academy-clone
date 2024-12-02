/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{php,html,js}",
  "./*.{html,php}",
  "./src/css/**/*.css",],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'primary-orange': '#E2802F',
        'primary-gray': '#201C1B',
        'primary-red': '#65031E',
      },
     
    },
  },
  plugins: [],
}