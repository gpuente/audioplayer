const merge = require('webpack-merge');
const parts = require('./webpack.parts');

/******************* Development config *********************/

const developmentConfig = merge([
  parts.devTools(),
  parts.devServer({
    host: process.env.PORT,
    port: process.env.HOST,
  }),
  parts.babelLoader(),
  parts.cssLoader(),
]);

module.exports = developmentConfig;
