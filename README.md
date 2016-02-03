# Add Style Loading & Preprocessing with PostCSS

On this branch we add style loading with [`postcss-loader`](https://github.com/postcss/postcss-loader), which provides [several plugins](https://github.com/postcss/postcss#plugins) that aid in the development process.

To demonstrate, we add the `app.css` file that will be bundled by Webpack. Style changes to `app.css` will be reflected on-the-fly thanks to the dev server's Hot Module Replacement.

#### Other Changes
* Material Design Lite assets are brought into the `src` tree and bundle them into `main.js` instead of hardcoding them into `index.html`.
* Our React code is moved into its own `app.jsx` file.


