import { describe, expect, test } from 'vitest';

import { getString, uiGetString, utilsGetString } from './getString';

describe(`${getString.name}`, () => {
  test('return value is valid', () => {
    expect(getString()).toBe('<client-app>');
  });
});

describe('uiGetString', () => {
  test('return value is valid', () => {
    expect(uiGetString()).toBe('<@packages/ui>');
  });
});

describe('utilsGetString', () => {
  test('return value is valid', () => {
    expect(utilsGetString()).toBe('<@packages/utils>');
  });
});
