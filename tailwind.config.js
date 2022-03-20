const { blue } = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: [
    './dist/index.html',
    './src/index.js',
  ],
  content: [
    './dist/index.html',
    './src/index.js',
  ],
  theme: {

    extend: {
      colors: {
        cutlets_red: '#02198B',//'#FE3E2E',
        cutlets_green: '#8BC9C8',
        cutlets_gray: "#EBE5E3",
        // ...
      },
    },
  },
  plugins: [],
}
