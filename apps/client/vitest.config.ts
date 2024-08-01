// import pluginTsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'node:path';
import { defineProject } from 'vitest/config';

export default defineProject({
  plugins: [
    // pluginTsconfigPaths({ root: '.' }),
  ],

  test: {
    alias: {
      '~': resolve(import.meta.dirname, './src'),
      '@': resolve(import.meta.dirname, './src'),
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
