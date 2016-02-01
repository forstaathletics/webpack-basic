var webpack = require('webpack')
var commonConfig = require('./common.config.js')

// Override and extend the common config for our dev server/environment
module.exports = Object.assign(commonConfig, {

  // Use a dev mode source map
  devtool: 'cheap-module-eval-source-map',

  // Use webpack hot reloader with out entry point
  entry: ['webpack-hot-middleware/client', './src/index.js'],

  plugins: commonConfig.plugins.concat([
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]),

  // use react-hot loader with our babel-loader for js and jsx
  module: {
    loaders: commonConfig.module.loaders.concat([
      {
        test: /\.js|\.jsx$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/
      }
    ])
  }

})
