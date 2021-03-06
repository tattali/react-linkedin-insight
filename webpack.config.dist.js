const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "linkedin-insight.js",
    libraryTarget: "umd",
    library: "LinkedInTag",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    react: "react",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
