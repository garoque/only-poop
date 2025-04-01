export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module', '@nuxtjs/supabase', '@nuxtjs/color-mode', '@nuxtjs/seo'],

  css: ['primeicons/primeicons.css'],

  primevue: {
    importTheme: { from: '@/themes/default.js' },
  },

  imports: {
    dirs: ['./composables/useMarkdown', './composables/useServices', './composables/useLogger'],
  },

  site: {
    url: process.env.SITE_URL,
  },

  supabase: {
    redirect: false,
  },

  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      siteUrl: process.env.SITE_URL,
    },
  },
})
