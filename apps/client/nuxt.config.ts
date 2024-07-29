import { defineNuxtConfig  } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-29',

  srcDir: "./src",

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '@packages/ui/*': ['../../../packages/ui/*'],
          '@packages/utils/*': ['../../../packages/utils/*'],
        },
      },
      include: [
        '../../../packages/ui/**/*',
        '../../../packages/utils/**/*',
      ],
    },
  },
})
