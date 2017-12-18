const merge = require('webpack-merge');
const parts = require('./webpack.parts');

/******************* Development config *********************/

const developmentConfig = merge([
  parts.output('hash'),
  parts.devTools(),
  parts.devServer({
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT,
  }),
  parts.babelLoader(),
  parts.cssLoader(),
]);

module.exports = developmentConfig;
