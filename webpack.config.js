const { resolve } = require("path");
const MdToHtmlPlugin = require("./plugins/md-to-html-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
  },
  plugins: [
    new MdToHtmlPlugin({
      template: resolve(__dirname, "./docs/test.md"),
      filename: "test.html",
    }),
  ],
};
