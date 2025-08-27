/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        f: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        's-text': '1.3rem',
        's-primary-title': '3.5rem',
        's-title-mobile': '2.7rem',
        's-title': '2rem',
        's-icon': '2rem',
      },
      fontWeight: {
        'w-b': '700',
        'w-l': '400',
      },
      colors: {
        dark: '#000000',
        gray: '#1f1f1f',
        'gray-light': '#dddddd',
        light: '#ffffff',
        bg: '#5975c9',
        title: '#8dc1fc',
        'btn-bg': '#123d6e',
        'btn-bg-hover': '#1111aa',
        'pill-html': '#f0652a',
        'pill-bt': '#7952b3',
        'pill-css': '#34aadc',
        'pill-git': '#f05133',
        'pill-js': '#e8d44c',
        'pill-react': '#61dbfb',
        'pill-sass': '#ca669c',
      },
      backgroundImage: () => ({
        'bg-gradient': 'linear-gradient(0deg, #000000 0%, #5975c9 93%)',
      }),
    },
  },
  plugins: [],
}


