const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const _ = require('lodash');

const pkg = require('../package.json');

const VENDOR_LIBS = _.transform(pkg.dependencies, (result, value, key) => (
  result.push(key)
), []);

module.exports = merge([
  {
    entry: {
      bundle: './src/index.js',
      vendor: VENDOR_LIBS,
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  }
]);
