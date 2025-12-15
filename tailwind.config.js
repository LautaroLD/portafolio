/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',

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
        gray: {
          DEFAULT: '#1f1f1f',
          light: '#dddddd',
        },
        light: '#ffffff',
        bg: '#f5f5f5',
        title: '#1f1f1f',
        'btn-bg': '#333333',
        'btn-bg-hover': '#555555',
      },
      backgroundImage: () => ({
        'bg-gradient': 'linear-gradient(0deg, #ffffff 0%, #f5f5f5 100%)',
        'bg-gradient-light': 'linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)',
      }),
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '.5',
          },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-10px)',
          },
          '60%': {
            transform: 'translateY(-5px)',
          },
        },
      },
    },
  },
  plugins: [],
};
