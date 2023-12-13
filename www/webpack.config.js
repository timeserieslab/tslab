const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "../docs"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "assets" },
        "index.html"
      ],
    })
  ],
  experiments: {
    syncWebAssembly: true,
  },
};
