# A very basic React site with Webpack

This branch demonstrates a very basic webpack config and express server.
The express server in `server.js` functions as both a production server and development
server depending on the value of `NODE_ENV`.

The development server use the Webpack dev compiler and hot reloader middleware so code changes
will be reflected on a live page.

The static assets are in the `dist` directory. The build output will be in the `build` directory.  
There is only a webpack loader for `js` and `jsx` and the build creates a single `main.js` output
bundle.


* The Webpack config directory has three config files
    * common.config.js
    * dev.config.js
    * prod.config.js

The common config having shared config data and the `dev` and `prod` configs containing the
development and production config additions and overlays respectively.

* `npm start` will run express in development mode if `NODE_ENV` is _not_ 'production'
    * `NODE_ENV=dev && npm start` will explicitly run express in dev mode
* `npm start` will run express in production mode if `NODE_ENV` is _equal to_ 'production'
    * `NODE_ENV=production && npm start` will explicitly run express in production mode
