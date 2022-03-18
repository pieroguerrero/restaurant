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
    extend: {},
  },
  plugins: [],
}
