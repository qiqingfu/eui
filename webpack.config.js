const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
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
  // https://segmentfault.com/a/1190000012113011
  externals: {
    react: {
      root: "React", // 可以通过一个全局变量访问 library（例如，通过 script 标签）
      commonjs: "react", // 可以将 library 作为一个 CommonJS 模块访问
      commonjs2: "react", // 和上面的类似，但导出的是 module.exports.default
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
    },
  },
};
