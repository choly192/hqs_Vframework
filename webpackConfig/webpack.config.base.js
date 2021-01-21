/**
 * webpack 打包基础模块
 */

 const path = require('path');
 const modulePlugins = require('./common/modulePlugins');
 const moduleRules = require('./common/moduleRules');
 const optimization = require('./common/optiminzation');
 module.exports = {
   entry:'./src/index.js',
   output: {
     filename: './static/js/[name]-bundle.js',
     path: path.resolve(__dirname, '../dist')
   },
   module:{
     rules:moduleRules
   },
   optimization,
   plugins: modulePlugins,
   // 解析
   resolve: {
     extensions: ['.js','.vue','.json','.mjs','.wasm','.tsx'],
     mainFiles: ['index','module'],
     alias: {
       '@': path.join(__dirname, '..', 'src'), // 映射到src目录
       static: path.join(__dirname, '..', '/src/static')
     }
   }
 }