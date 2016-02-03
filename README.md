# Splitting Vendor & Main Bundles

On this branch we add a bundle split by breaking off a vendor bundle from the main bundle.

##### `vendor.js` Bundle
This bundle contains the core libraries we use. Having a separate `vendor.js` bundle can be useful, for example to set a longer cache time.

##### `main.js` Bundle
The application code we write.

Note that there isn't a limit to the number of bundles you can make. Webpack is able to load bundles on an as-needed basis.


