import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // 開發工具
  devtools: { enabled: true },

  // 全域 CSS
  css: ['~/assets/css/main.css'],

  // TypeScript
  typescript: {
    typeCheck: true,
  },

  // 模組
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n'],

  // Vite
  vite: {
    plugins: [tailwindcss()],
  },

  // i18n
  i18n: {
    langDir: 'locales/',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh-tw', name: 'Chinese', file: 'zh-tw.json' },
    ],
  },
})
