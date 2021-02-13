const color = require('tailwindcss/colors');
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#333333',
        'secondary': '#52CA3D',
        'forest': '#58d242',
        fuchsia: color.fuchsia
      },
      fontFamily: {
        'core': ['Ubuntu', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
