# A very basic React site with Webpack - Five

Add usage of the HtmlWebpackPlugin to generate an `index.html` from a template. This allows us to use
hashes in our bundle and chunk file names for cache busting. So of course, update the production
config to use hashes in names. Also, add caching of static files, which is most files, in our
`server.js` when in production mode. And remove our static `index.html` file in favor of a template
at `src/index.tmpl.html`.

