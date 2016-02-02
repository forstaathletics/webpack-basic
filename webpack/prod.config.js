var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var commonConfig = require('./common.config.js')

var indexHtml = Object.assign(commonConfig.indexHtml, {
  filename: path.join('..', '..', 'index.html')
})

// Override and extend the common config for our production server/environment
module.exports = Object.assign(commonConfig, {

  // Add hashes to the bundl names
  output: Object.assign(commonConfig.output, {
    filename: '[name]-[hash].bundle.js',
    chunkFilename: '[id]-[hash].bundle.js'
  }),

  plugins: commonConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true,
      minimize: true
    }),
    new HtmlWebpackPlugin(indexHtml),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors'})
  ]),

  // Set up just the Babel loader for jsx and js (no react-hot)
  module: {
    loaders: commonConfig.module.loaders.concat([
      {
        test: /\.js|\.jsx$/,
        loaders: ['babel-loader?compact=true'],
        exclude: /node_modules/
      }
    ])
  }

})
