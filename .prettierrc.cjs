/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
module.exports = {
  semi: false, // 行尾不加分號
  singleQuote: true, // 使用單引號
  quoteProps: 'as-needed', // 需要時才加引號
  tabWidth: 2, // 縮排 2 空格
  useTabs: false, // 使用空格縮排
  trailingComma: 'es5', // 對 ES5 支援的結構加尾逗號
  printWidth: 100, // 每行最長字數
  endOfLine: 'lf', // 使用 LF 換行符
  arrowParens: 'always', // 箭頭函式參數總是加括號
  bracketSpacing: true, // 大括號內保留空格
  vueIndentScriptAndStyle: true, // 縮排 <script> 和 <style>
  htmlWhitespaceSensitivity: 'ignore', // 忽略 HTML 空白敏感性
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-packagejson',
    'prettier-plugin-jsdoc',
    'prettier-plugin-organize-imports',
  ],
  tailwindStylesheet: './assets/css/main.css',
}
