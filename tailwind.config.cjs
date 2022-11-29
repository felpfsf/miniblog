/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        miniBlog: {
          primary: '#3B71FE',
          text: '#0E0E2C',
          grey: '#A0A4AB',
          greySoft: '#B1B1B1',
          dark: '#262A31',
          bg2: '#121214',
          bg3: '#2A2634',
          poison: '#a33ea1',
          grass: '#7ac74c',
          normal: '#a8a77a',
          fire: '#ee8130',
          water: '#6390f0',
          electric: '#f7d02c',
          ice: '#96d9d6',
          fairy: '#d685ad',
          dragon: '#6f35fc'
        }
      }
    }
  },
  plugins: []
}
