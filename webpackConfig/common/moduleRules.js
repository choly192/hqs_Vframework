/**
 * webpack 打包规则
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取css为一个单独的文件， 为每一个包含css的js文件创建一个css文件

module.exports = moduleRules = [
  { // 处理es6
    test: /\.js(x?)$/,
    exclude: /(node_modules,bower_components)/,
    use: [
      {
        loader: 'babel-loader',
        options:{}
      },
      {
        loader: 'eslint-loader',
        options: {
          options: {
            formatter: require("eslint-friendly-formatter") // eslint检查格式的报告规范
           }
        }
      }
    ]
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  },
  { // 处理css
    test: /\.css/i,
    use: [
      process.env.NODE_ENV === 'development'? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: false
        }
      }
    ]
  },
  {
    test: /\.less$/,
    use: [
      process.env.NODE_ENV === 'development'? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: false
        }
      },
      {
        loader: 'postcss-loader', // 解决浏览器兼容性  添加前缀
        options: {
          postcssOptions: {
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              require('autoprefixer')({
                overrideBrowserslist: ['last 2 versions', '> 5%']
              })
            ]
          }
        }
      },
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    ]
  }
];