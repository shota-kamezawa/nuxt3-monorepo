import { describe, expect, test } from 'vitest';

import { getString, getUserName, utilsGetString, utilsGetUserName } from './getString';

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

describe(`${getUserName.name}`, () => {
  test('return value is valid', () => {
    expect(getUserName()).toBe('Taro Tanaka');
  });
});

describe('utilsGetUserName', () => {
  test('return value is valid', () => {
    expect(utilsGetUserName()).toBe('Taro Tanaka');
  });
});
