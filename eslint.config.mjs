// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vuejsA11y from 'eslint-plugin-vuejs-accessibility'

export default withNuxt([
  // Plugin: vuejs-accessibility
  vuejsA11y.configs['flat/recommended'],

  // General Rules
  {
    rules: {
      'prefer-const': 'error', // const 使用：要求
      'no-unused-vars': 'warn', // 未使用變數：警告
      // 開發時允許 console，生產環境則報錯
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },

  // TypeScript Rules
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn', // any 型別：警告
      '@typescript-eslint/explicit-function-return-type': 'off', // 函式回傳型別：關閉
    },
  },

  // Vue Rules
  {
    files: ['**/*.vue'],
    rules: {
      'vue/no-unused-components': 'warn', // 未使用元件：警告
      // 元件名：建議使用多字組合
      'vue/multi-word-component-names': 'warn',
      'vue/attributes-order': ['warn', { alphabetical: true }], // template 屬性排序：字母序
    },
  },
])