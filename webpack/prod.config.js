var webpack = require('webpack')
var commonConfig = require('./common.config.js')

// Override and extend the common config for our production server/environment
module.exports = Object.assign(commonConfig, {

  // A simple entry point
  entry: ['./src/index.js'],

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
    })
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
