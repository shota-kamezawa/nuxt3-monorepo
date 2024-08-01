import { describe, expect, test } from 'vitest';

import { getString, getUserName } from './getString';

describe(`${getString.name}`, () => {
  test('return value is valid', () => {
    expect(getString()).toBe('<@packages/utils>');
  });
});

describe(`${getUserName.name}`, () => {
  test('return value is valid', () => {
    expect(getUserName()).toBe('Taro Tanaka');
  });
});
