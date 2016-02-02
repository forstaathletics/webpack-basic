# A very basic React site with Webpack - Three

On this branch we add a bundle split by breaking off a vendor bundle from the main bundle.
The result is instead of just one bundle, `main.js`, we have two bundles; `main.js` and `vendor.js`
where the vendor bundle has a core set of libraries and main has our application code. This can be
usefull for cachine where you want to have long cache time on a large vendor bundle and be able
separately update a smaller main bundle or main bundles. Of course, you can split the build into
many bundles and for different purposes and load them on an as needed basis during runtime.


