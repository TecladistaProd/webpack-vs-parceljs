const path = require("path");
const HWP = require("html-webpack-plugin");

process.env.NODE_ENV = "production";
process.env.BABEL_ENV = "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "../build"),
    filename: "src/js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HWP({
      template: "./public/index.html"
    })
  ]
};
