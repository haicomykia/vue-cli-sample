module.exports = {
  configureWebpack: {
    output: {
      filename: "app.js",
      chunkFilename: "chunk-vendors.js",
    },
  },
  css: {
    extract: {
      filename: "style.css",
    },
  },
};
