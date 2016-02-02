var path = require('path')

module.exports = {

  // Create a bundle named main.js for our entry point at `src/index.js`
  entry: {
    main: path.join(__dirname, '..', 'src', 'index.js')
  },

  resolve: {
    root: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'src')],
    modulesDirectories: ['node_modules', 'src']
    // extensions: ['', '.jsx', '.js', '.json', '.css'],
  },

  plugins: [],

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'build', 'static', 'js'),
    publicPath: '/static/js/'
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  }
}
