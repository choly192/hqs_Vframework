module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  }, // 解析器
  env: {
    node: true,
    es6: true,
    amd: true,
    browser: true,
  },
  plugins: ['vue'],
  extends: [
    'standard',
    'prettier',
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    'prettier/babel',
    'prettier/standard',
    'prettier/vue',
  ],
  rules: {
    'prettier/prettier': 'off'
  },
};
