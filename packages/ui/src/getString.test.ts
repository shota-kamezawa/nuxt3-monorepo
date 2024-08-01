import { describe, expect, test } from 'vitest';

import { getString, utilsGetString } from './getString';

describe(`${getString.name}`, () => {
  test('return value is valid', () => {
    expect(getString()).toBe('<@packages/ui>');
  });
});

describe('utilsGetString', () => {
  test('return value is valid', () => {
    expect(utilsGetString()).toBe('<@packages/utils>');
  });
});
