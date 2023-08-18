// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      strapiUrl: 'http://127.0.0.1:1337'
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/strapi',
    '@nuxt/image'
  ],
  googleFonts: {
    families: {
      Inter: [400],
      Lobster: [400]
    }
  },
  strapi: {
    url: 'http://127.0.0.1:1337',
    prefix: '/api',
    version: 'v4'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' }
  }
})
