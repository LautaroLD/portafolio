/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'f': ['Poppins', 'sans-serif']
      },
      fontSize: {
        's-text': '1.2rem',
        's-title': '1.8rem',
        's-icon': '2.5rem'
      },
      fontWeight: {
        'w-b': '700',
        'w-l': '400'
      },
      colors: {
        'dark': '#000000',
        'gray': '#585858',
        'gray-light': '#dddddd',
        'light': '#ffffff',
        'bg': '#5975c9',
        'btn-bg': '#3a7dc9',
        'btn-bg-hover': '#1111ad',
        'pill-html': '#f0652a',
        'pill-bt': '#7952b3',
        'pill-css': '#34aadc',
        'pill-git': '#f05133',
        'pill-js': '#e8d44c',
        'pill-react': '#61dbfb',
        'pill-sass': '#ca669c'
      },
      backgroundImage: () => ({
        'bg-gradient': 'linear-gradient(0deg, #000000 0%, #5975c9 93%)'
      })
    }
  },
  plugins: [],
}