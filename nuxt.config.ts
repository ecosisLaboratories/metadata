import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/fontawesome',
    'nuxt-windicss',
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      brands: [
        'faEthereum',
      ],
    },
  },
})
