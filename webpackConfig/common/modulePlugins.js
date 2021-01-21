/**
 * plugins 打包所需要的插件
 */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取css文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpackbar = require('webpackbar');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 将定义过的其他语言的规则 复制并应用 到 .vue文件中对应的块中
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 生成代码分析报告
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 从webpack拷贝文件或者文件夹
const OptimizeCss = require('optimize-css-assets-webpack-plugin'); // 压缩css

 let modulePlugins = [
   new MiniCssExtractPlugin({
     filename: 'static/css/[name]-[id].[chunkhash:8].bundle.css'
   }),
   new CleanWebpackPlugin(),
   new HtmlWebpackPlugin({
     template: './src/index.html'
   }),
   // 复制 static 文件到dist目录下
   new CopyWebpackPlugin({
    patterns:[{
      from: path.join(__dirname, '../../src/static'), // 打包的静态资源目录地址
      to: './static' // 打包到dist下面的static
    }]
  }),
   new Webpackbar({
     color:'pink'
   }),
   new VueLoaderPlugin()
 ];

 if(process.env.NODE_ENV === 'development') {
   let devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
   ];
   modulePlugins = [...modulePlugins, ...devPlugins];
 }else if(process.env.NODE_ENV === 'production') {
   let proPlugins = [
    new BundleAnalyzerPlugin(),
    new OptimizeCss(),
   ];
   modulePlugins = [...modulePlugins, ...proPlugins];
 }

 module.exports = modulePlugins;
