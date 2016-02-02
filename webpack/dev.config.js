var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var commonConfig = require('./common.config.js')

// Override the default indexHtml config to output the index.html
// into our dist directory. This is simply based on opinion. I like the build
// directory to only contain production build output while dist contains pre-build
// assets that we also use during development. Also, the dev server is already set to serve
// the dev index out of dist. So, we put the index.html in dist during dev.
// NOTE: That narly path is relative to the build output dir.
var indexHtml = Object.assign(commonConfig.indexHtml, {
  filename: path.join('..', '..', '..', 'dist', 'index.html')
})

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
    new HtmlWebpackPlugin(indexHtml),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
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
