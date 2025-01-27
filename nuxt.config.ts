export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
  css: ['primeicons/primeicons.css'],
  primevue: {
    importTheme: { from: '@/themes/default.js' },
  },
  imports: {
    dirs: ['./composables/useMarkdown'],
  },
})
