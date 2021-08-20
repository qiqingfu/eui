const baseConfig = require('./webpack.base');
const devConfig = require('./webpack.dev');
const demoConfig = require('./webpack.demo');
const prodConfig = require('./webpack.prod');
const { merge } = require('webpack-merge');

module.exports = () => {
  const env = process.env.NODE_ENV;
  switch (env) {
    case 'development':
      return merge(baseConfig, devConfig);
    case 'production':
      return merge(baseConfig, prodConfig);
    case 'demo':
      return merge(baseConfig, demoConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
