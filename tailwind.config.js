/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        "4x":'0 0 20px white'
      }
    },
  },
  plugins: [],
}

