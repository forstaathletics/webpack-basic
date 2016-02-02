# A very basic React site with Webpack

The first branch demonstrates a very basic Webpack config and Express server.

#### Webpack Config

The Webpack config directory has three config files:
  * common.config.js
  * dev.config.js
  * prod.config.js

The `common` config contains shared config data, and the `dev` and `prod` configs contain the development and production config additions and overlays respectively.

#### `server.js` Config

The Express server in `server.js` functions as both a development and production server, depending on the value of `NODE_ENV`.


* `npm start` will run express in development mode if `NODE_ENV` is _not_ 'production'
    * `NODE_ENV=dev && npm start` will explicitly run express in dev mode
* `npm start` will run express in production mode if `NODE_ENV` is _equal to_ 'production'
    * `NODE_ENV=production && npm start` will explicitly run express in production mode

#### Middleware 
There are Webpack loaders for `js` and `jsx` file extensions, and at this point of our project Webpack will create a single `main.js` bundle file.

The development server uses [`webpack-dev-middleware`](https://github.com/webpack/webpack-dev-middleware) and [`webpack-hot-middleware`](https://github.com/glenjamin/webpack-hot-middleware) to reflect changes live and on-the-fly.

Static assets are in the `dist` directory, and output goes to the `build` directory.




