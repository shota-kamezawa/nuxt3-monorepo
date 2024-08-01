// import pluginTsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'node:path';
import { defineProject } from 'vitest/config';

export default defineProject({
  plugins: [
    // pluginTsconfigPaths(),
  ],

  test: {
    alias: {
      '@packages/ui': resolve(import.meta.dirname, './src'),
      '@packages/utils': resolve(import.meta.dirname, '../utils/src'),
    },

    include: [
      './src/**/*.test.ts',
    ],

    sequence: {
      concurrent :true,
    },
  },
});
