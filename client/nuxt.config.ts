// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  }
})
