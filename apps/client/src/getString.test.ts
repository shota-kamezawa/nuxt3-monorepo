import { describe, expect, test } from 'vitest';

import { getString, uiGetString, uiGetUserName, getUserName, utilsGetString, utilsGetUserName } from './getString';

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

describe(`${getUserName.name}`, () => {
  test('return value is valid', () => {
    expect(getUserName()).toBe('Taro Tanaka');
  });
});

describe('uiGetUserName', () => {
  test('return value is valid', () => {
    expect(uiGetUserName()).toBe('Taro Tanaka');
  });
});

describe('utilsGetUserName', () => {
  test('return value is valid', () => {
    expect(utilsGetUserName()).toBe('Taro Tanaka');
  });
});
