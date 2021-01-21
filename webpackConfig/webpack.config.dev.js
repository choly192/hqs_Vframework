/**
 * 开发环境 webpack 配置
 */
const { merge } = require('webpack-merge');
const os = require('os'); // node 内置模块
const baseWebpackConfig = require('./webpack.config.base');

// 获取本机ip
const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (let item in interfaces) {
    let iface = interfaces[item];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
};

const port = 8080;
const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    host: getLocalIP(),
    port: port,
    hot: true, // 实时刷新
    overlay: true, // 全屏覆盖浏览器
    open: true // 服务启动时打开浏览器
  },
  devtool: 'source-map'
};

module.exports = merge(baseWebpackConfig, devConfig);