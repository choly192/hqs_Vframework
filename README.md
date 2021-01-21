# 项目搭建流程

## 1. 项目初始化---package.json 
    npm init

## 2. 构建webpack打包环境

### 2.1 安装webpack依赖
```
 npm install -D webpack webpack-cli html-webpack-plugin webpack-dev-serve cross-env
 npm install -D babel-loader @babel/core @babel/preset-env
```
## 3. ISSUES
  -   当执行 `npm run dev` 报错 ---> `Cannot find module 'webpack-cli/bin/config-yargs' `   这是由于当前版本是webpack5，而webpack-cli是在4.0.0以上  ;因此需要将webpack-cli的版本改为3.3.12的版本呢

## 4. 使用的相关技术点
  `
  webpack、webpack-cli、html、css3、less、vue、vue-router、js、vuex、eslint、babel.js、prettier
  `
## 5. 代码检查规则
  `
  npm install -D eslint babel-eslint eslint-plugin-vue eslint-plugin-prettier eslint-loader eslint-friendly-formatter prettier eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-config-prettier
  `