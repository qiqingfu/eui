const path = require("path");

module.exports = {
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
        loader: "ts-loader",
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  },
};
