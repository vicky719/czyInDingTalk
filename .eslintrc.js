// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    "indent": ["error", 2],
    "no-tabs": 0,
    "no-trailing-spaces": 0,
    "no-useless-escape": 0,
    "no-unused-vars": 1,
    "one-var": 0,
    "eqeqeq":0,
    "comma-dangle": [0, "always"],
    "semi": [0, "always"], // 语句强制分号结尾 改成warning方便调试
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  "globals": {
    "_bus": true,
    "process.env": true,
    "__DEBUG__": true,
    'MyUrl': true,
    "_": true
  }
};
