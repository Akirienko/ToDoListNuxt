// https://nuxt.com/docs/api/configuration/nuxt-config
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/main.scss'
  ],
  modules: ['@nuxtjs/supabase', "@pinia/nuxt"],
  components: {
    "dirs": [
      { "path": "~/components/", "global": true, pathPrefix: false, },
      // { "path": "~/components/modals", "global": true, pathPrefix: false, }
    ],
  },
  runtimeConfig: {
    // Приватні (тільки на сервері)
    SUPABASE_KEY: process.env.NUXT_SUPABASE_KEY,

    public: {
      SUPABASE_KEY: process.env.NUXT_SUPABASE_KEY
    }
  },
  supabase: {
    redirect: false,
    url: process.env.NUXT_SUPABASE_URL,
    key: process.env.NUXT_SUPABASE_KEY,

  }
})