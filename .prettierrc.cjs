/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
module.exports = {
  semi: false, // 結尾分號：關閉
  singleQuote: true, // 引號：單引號
  quoteProps: 'as-needed', // 物件屬性引號：需要時
  tabWidth: 2, // Tab 寬度：2
  useTabs: false, // 縮排：使用空格
  trailingComma: 'es5', // 尾隨逗號：ES5
  printWidth: 100, // 單行長度：100
  endOfLine: 'lf', // 換行符：LF
  arrowParens: 'always', // 箭頭函式參數括號：需要
  bracketSpacing: true, // 物件大括號空格：需要
  vueIndentScriptAndStyle: true, // Vue <script>/<style> 縮排：啟用
  htmlWhitespaceSensitivity: 'ignore', // HTML 空白敏感性：忽略

  plugins: [
    'prettier-plugin-tailwindcss', // Plugin: Tailwind class 排序
    'prettier-plugin-packagejson', // Plugin: package.json 格式化
    'prettier-plugin-jsdoc', // Plugin: JSDoc 格式化
    'prettier-plugin-organize-imports', // Plugin: import 排序
  ],
}
