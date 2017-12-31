const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const _ = require('lodash');

const pkg = require('../package.json');

const EXCLUDE_LIBS = [
  'font-awesome',
  'animate.css',
];

const VENDOR_LIBS = _.chain(pkg.dependencies)
  .keys()
  .filter(lib => _.indexOf(EXCLUDE_LIBS, lib) < 0)
  .value();

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
