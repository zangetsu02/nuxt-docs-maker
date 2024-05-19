import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  pages: true,
  modules: [
    // https://nuxt.studio
    '@nuxthq/studio',
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://pinceau.dev
    'pinceau/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    'nuxt-icon',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  components: [
    { path: resolve('./components'), global: true },
    { path: resolve('./components/app'), global: true },
    { path: resolve('./components/content'), global: true },
  ],
  css: [
    resolve('./assets/main.css'),
  ],
  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
  },
  content: {
    documentDriven: true,
  },
  pinceau: {
    studio: true,
  },
  typescript: {
    includeWorkspace: true,
  },
  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json'],
    },
  },
})
