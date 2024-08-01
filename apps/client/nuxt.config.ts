import { resolve } from 'node:path';
import { defineNuxtConfig  } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-29',

  srcDir: "./src",

  ssr: false,

  router: {
    options: {
      hashMode: true,
    },
  },

  alias: {
    '~~': resolve(__dirname, '../..'),
    '@@': resolve(__dirname, '../..'),
    '@apps/client': resolve(__dirname, 'src'),
    '@packages/ui': resolve(__dirname, '../../packages/ui/src'),
    '@packages/utils': resolve(__dirname, '../../packages/utils/src'),
  },
})
