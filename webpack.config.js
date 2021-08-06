const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./lib/index.tsx",
  },
  // 输出的格式为一个 library
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    library: {
      name: "Eui",
      type: "umd",
    },
  },
  devServer: {
    port: 9000,
    host: "localhost",
  },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      path: path.resolve(__dirname, "dist"),
    }),
  ],
};
