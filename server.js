/**
 * A basic server that will use the webpack middleware during
 * development and a simple production server otherwise.
 */
var path = require('path')
var express = require('express')
var app = express()

var root_path = path.join(__dirname, 'build')
var static_path = root_path
var isDevelopment = (process.env.NODE_ENV !== 'production')
// Default port is 8080 but can be overriden with the environmental variable PORT.
// This works in Heroku for automated port selection
var port = process.env.PORT || 8080

if (isDevelopment) {
  // Set up our middleware for a development server
  var webpack = require('webpack')
  var WebpackConfig = require('./webpack/dev.config')
  var compiler = webpack(WebpackConfig)
  var webpackDevMiddleware = require('webpack-dev-middleware')

  // Logging middleware
  app.use(require('morgan')('short'))

  // Add the webpack compiler middleware and use our webpack config
  // to help out.
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: WebpackConfig.output.publicPath,
    hot: true
  }))

  // Enable hot reloading via webpack
  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }))
} else {
  // Production specific stuff will go here
  console.log('Production Server!')
}

// Treat everything as static for this simple site.
app.use('/', express.static(static_path))

// Create our express/node server and start it.
var server = app.listen(port, function onListen (err) {
  if (err) console.log(err)

  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s, Ctrl+C to stop', host, port)
})
