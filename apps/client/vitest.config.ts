// import pluginTsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'node:path';
import { defineProject } from 'vitest/config';

export default defineProject({
  plugins: [
    // pluginTsconfigPaths({ root: '.' }),
  ],

  test: {
    alias: {
      '@root/examples': resolve(import.meta.dirname, '../../examples'),
      '@apps/client': resolve(__dirname, 'src'),
      '@packages/ui': resolve(import.meta.dirname, '../../packages/ui/src'),
      '@packages/utils': resolve(import.meta.dirname, '../../packages/utils/src'),
    },

    include: [
      './src/**/*.test.ts',
    ],

    sequence: {
      concurrent :true,
    },
  },
});
