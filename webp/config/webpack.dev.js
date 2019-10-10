const HWP = require("html-webpack-plugin");

process.env.NODE_ENV = "development";
process.env.BABEL_ENV = "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "/",
    filename: "bundle.js"
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
  ],
  devServer: {
    port: 3000,
    overlay: true
  }
};
