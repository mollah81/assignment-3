/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        
        'footer-texture': "url('/img/bg.jpg')",
        
      }
    }
    },
  },
  plugins: [],
}