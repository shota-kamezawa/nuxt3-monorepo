import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      include: [
        'apps/client/src/**/*.ts',
        'packages/ui/src/**/*.ts',
        'packages/utils/src/**/*.ts',
      ],
      provider: 'v8',
      reporter: ['text-summary', 'json-summary', 'json'],
    },

    reporters: ['verbose', 'github-actions'],
  },
});
