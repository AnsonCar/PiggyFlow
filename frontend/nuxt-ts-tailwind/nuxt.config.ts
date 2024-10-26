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
      titleTemplate: `%s | ${process.env.PROJECT_NAME}`,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  runtimeConfig: {
    public: {
      PROJECT_NAME: process.env.PROJECT_NAME,
      DJANGO_URL: process.env.DJANGO_URL,
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    vueI18n: './i18n/i18n.config.ts'
  },
  compatibilityDate: '2024-08-06',
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxtjs/i18n']
})