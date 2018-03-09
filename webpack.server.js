const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackWebExternals = require('webpack-node-externals');

const config = {
  mode: 'development',
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackWebExternals()],
};
module.exports = merge(baseConfig, config);
