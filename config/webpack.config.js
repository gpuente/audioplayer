const merge = require('webpack-merge');
const colors = require('colors/safe');

const commonConfig = require('./webpack.common');
const developmentConfig = require('./webpack.development');
const productionConfig = require('./webpack.production');


module.exports = (env = process.env.NODE_ENV) => {
  console.log(colors.yellow('┌----------------------------------┐'));
  console.log(colors.yellow(`   ENV: ${env}`));
  console.log(colors.yellow('└----------------------------------┘'));

  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
}
