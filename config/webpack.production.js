const merge = require('webpack-merge');
const parts = require('./webpack.parts');

/******************* Production config *********************/

const productionConfig = merge([
  parts.output('chunkhash'),
  parts.devServer({ host: '0.0.0.0', port: 8080 }),
  parts.babelLoader(),
  parts.extractCSS({ use: ['css-loader', parts.autoprefix()] }),
  parts.loadImages({
    options: { limit: 15000, name: 'img/[name].[hash].[ext]' },
  }),
  parts.uglifyJsPlugin(),
  parts.html200(),
]);

module.exports = productionConfig;
