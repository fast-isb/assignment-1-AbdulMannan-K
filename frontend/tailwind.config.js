/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: '#root',
  theme: {
    extend: {
      fontFamily:{
        'arial':['"Arial"','sans-serif']
      }
    },
  },
  plugins: [],
  corePlugins: {
  preflight: false,
  },
}
