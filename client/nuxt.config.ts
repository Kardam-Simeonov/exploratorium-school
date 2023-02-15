// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/strapi'
  ],
  googleFonts: {
    families: {
      Inter: [400],
      Lobster: [400]
    }
  }
})
