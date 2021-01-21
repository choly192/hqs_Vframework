/**
 * 生产环境 webpack 配置
 */

const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

module.exports = merge(baseWebpackConfig,{
  mode:'production'
});