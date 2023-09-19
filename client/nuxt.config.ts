// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL || 'http://127.0.0.1:1337'
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/strapi',
    '@nuxt/image'
  ],
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'bg',
        name: 'Български',
        file: 'bg.json',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      }
    ],
    defaultLocale: 'bg',
    detectBrowserLanguage: false
  },
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      Lobster: true
    }
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
    prefix: '/api',
    version: 'v4'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' }
  }
})
