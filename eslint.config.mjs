// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

// Nuxt 專案 ESLint 設定
export default withNuxt([
  // 一般 JS/TS 規則
  {
    rules: {
      'prefer-const': 'error', // 能用 const 就不用 let
      'no-unused-vars': 'warn', // 未使用的變數警告
      'no-console': 'warn', // 禁止 console，僅警告
    },
  },
  // TypeScript 專用規則
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn', // 避免使用 any
      '@typescript-eslint/explicit-function-return-type': 'off', // 可視需求開啟
    },
  },
  // Vue 專用規則
  {
    files: ['**/*.vue'],
    rules: {
      'vue/no-unused-components': 'warn', // 未使用的元件警告
      'vue/multi-word-component-names': 'off', // 單字元件名不報錯
      // 自動排序 template 屬性
      'vue/attributes-order': ['warn', { alphabetical: true }],
    },
  },
])
