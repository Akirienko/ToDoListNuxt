// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/main.scss'
  ],
  components: {
    "dirs": [
      { "path": "~/components/", "global": true, pathPrefix: false, },
      // { "path": "~/components/modals", "global": true, pathPrefix: false, }
    ],
  },
})
