# A very basic React site with Webpack - Five

Here we add the `url-loader` and demonstrate its usage with a couple image files. We added a
`src/assets/img` directory and added two images to it. One is over 5K in size and the other is under
5K in size. We then tell the `url-loader` to inline images of the less 5K in size as base64 encoded
images but generate the URL for larger images.
