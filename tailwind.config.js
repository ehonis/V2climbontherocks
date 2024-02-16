/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./dist/index.html', './dist/*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        logobg: '#141418',
        bg0: '#282b2f',
        bg1: '#343542',
        bg2: '#4c4f5a',
        iconbg: '#8b8c8f',
        orange: '#ff8a00',
        red: '#e52e71',
        blue: '#3cb1e7',
      },
    },
  },
  plugins: [],
};
