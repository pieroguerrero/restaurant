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
        cutlets_red: '#FE3E2E',
        cutlets_green: '#8BC9C8',
        // ...
      },
    },
  },
  plugins: [],
}
