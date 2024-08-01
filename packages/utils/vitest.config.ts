// import pluginTsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'node:path';
import { defineProject } from 'vitest/config';

export default defineProject({
  plugins: [
    // pluginTsconfigPaths(),
  ],

  test: {
    alias: {
      '~~': resolve(import.meta.dirname, '../..'),
      '@@': resolve(import.meta.dirname, '../..'),
      '@packages/utils': resolve(import.meta.dirname, './src'),
    },

    include: [
      './src/**/*.test.ts',
    ],

    sequence: {
      concurrent :true,
    },
  },
});
