const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv").config({ path: "./.env.local" });

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.GEODB_API_KEY": JSON.stringify(dotenv.parsed.REACT_APP_GEODB_API_KEY || ""),
    }),
  ],
  devServer: {
    static: path.join(__dirname, "public"),
    hot: true,
    historyApiFallback: true,
  },
};