const Dotenv = require("dotenv-webpack");
module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel",
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  plugins: [new Dotenv()],
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
  },
};
