// @ts-check

import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
// @ts-expect-error
import configPrettier from 'eslint-config-prettier';
import pluginVitest from 'eslint-plugin-vitest';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat();

export default tseslint.config(
  // NOTE: Apply shared rules before local rules
  eslint.configs.all,
  ...tseslint.configs.recommendedTypeChecked,
  ...compat.extends('airbnb-base', 'airbnb-typescript/base'),
  pluginVitest.configs.recommended,
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
      parser: tseslint.parser,
      parserOptions: {
        parser: tseslint.parser,
        project: ['./tsconfig.json', './tsconfig.dev.json'],
        sourceType: 'module',
        tsconfigRootDir: '.',
        // EXPERIMENTAL_useProjectService: true,
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
      },
    },
  },

  {
    ignores: [
      'dist',
    ],
  },
);
