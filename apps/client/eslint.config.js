// @ts-check

import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import pluginNuxt from '@nuxt/eslint-plugin';
// @ts-expect-error
import configPrettier from 'eslint-config-prettier';
import pluginVitest from 'eslint-plugin-vitest';
// @ts-expect-error
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

const compat = new FlatCompat();

export default tseslint.config(
  // NOTE: Apply shared rules before local rules
  eslint.configs.all,
  ...tseslint.configs.recommendedTypeChecked,
  ...compat.extends('airbnb-base', 'airbnb-typescript/base'),
  ...pluginVue.configs['flat/strongly-recommended'],
  ...compat.extends('plugin:storybook/recommended'),
  pluginVitest.configs.recommended,
  {
    plugins: { nuxt: pluginNuxt },
    rules: {
      'nuxt/prefer-import-meta': 'error',
    },
  },
  configPrettier,

  {
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },

  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: tseslint.parser,
        project: ['./tsconfig.json'],
        sourceType: 'module',
        tsconfigRootDir: '.',
        // EXPERIMENTAL_useProjectService: true,
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
      },
    },
  },

  {
    ignores: [
      // '../../packages',
      '.nuxt',
      '.output',
      'dist',
    ],
  },
);
