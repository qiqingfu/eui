const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../demo/index.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../demo/template.html'),
      filename: 'index.html',
      path: path.resolve(__dirname, '../dist'),
    }),
  ],
};
