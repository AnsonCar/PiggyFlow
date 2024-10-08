// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },

  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false, // [!code ++]
    },
  ],
  app: {
    head: {
      titleTemplate: 'PiggyFlow | %s',
      // title: 'PiggyFlow',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  runtimeConfig: {
    public: {
      DB_API_BASE_URL: process.env.DB_API_BASE_URL,
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-08-06'
})