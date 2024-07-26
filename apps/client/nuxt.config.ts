import { defineNuxtConfig  } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-29',

  srcDir: "./src",

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '@packages/utils/*': ['../node_modules/@packages/utils/*'],
        },
      },
    },
  },
})
