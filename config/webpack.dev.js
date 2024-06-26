const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");
const path = require("path");

module.exports = merge(config, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../public"),
    },
    hot: true,
    open: true,
    port: 7777,
  },
});
