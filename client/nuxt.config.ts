// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/strapi',
    '@nuxt/content'
  ],
  googleFonts: {
    families: {
      Inter: [400],
      Lobster: [400]
    }
  },
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    version: 'v4'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' }
  }
})
