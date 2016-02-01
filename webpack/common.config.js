var path = require('path')

module.exports = {

  // Create a bundle named main.js for our entry point at `src/index.js`
  entry: {
    main: path.join(__dirname, '..', 'src', 'index.js')
  },

  plugins: [],

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'build', 'static', 'js'),
    publicPath: '/static/js/'
  },

  // Empty common loader for now.
  module: {
    loaders: []
  }
}
