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
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  // Vite
  vite: {
    plugins: [tailwindcss()],
  },
})
