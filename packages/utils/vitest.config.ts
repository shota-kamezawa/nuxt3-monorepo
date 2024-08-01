// import pluginTsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'node:path';
import { defineProject } from 'vitest/config';

export default defineProject({
  plugins: [
    // pluginTsconfigPaths(),
  ],

  test: {
    alias: {
      '@root/examples': resolve(import.meta.dirname, '../../examples'),
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
