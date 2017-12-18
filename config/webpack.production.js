const merge = require('webpack-merge');
const parts = require('./webpack.parts');

/******************* Production config *********************/

const productionConfig = merge([
  parts.output('chunkhash'),
  parts.devServer({ host: '0.0.0.0', port: 8080 }),
  parts.babelLoader(),
  parts.cssLoader(),
  parts.uglifyJsPlugin(),
  parts.html200(),
]);

module.exports = productionConfig;
