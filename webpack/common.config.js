var path = require('path')
var webpack = require('webpack')

module.exports = {

  // Create a bundle named main.js for our entry point at `src/index.js`
  // Create a vendor bundle that has the bulk or all of our library/dependencies
  // in it.
  entry: {
    main: path.join(__dirname, '..', 'src', 'index.js'),
    vendors: ['vendor/material', 'react', 'react-dom', 'react-redux',
      'react-router', 'react-router-redux', 'react-mdl',
      'immutable', 'redux', 'redux-thunk',
      'redux-promise', 'redux-actions'
    ]
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[id].bundle.js',
    path: path.join(__dirname, '..', 'build', 'static', 'js'),
    publicPath: '/static/js/'
  },

  resolve: {
    root: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'src')],
    extensions: ['', '.jsx', '.js', '.json', '.css'],
    modulesDirectories: ['node_modules', 'src']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],

  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  }
}
