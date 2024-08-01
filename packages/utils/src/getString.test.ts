import { describe, expect, test } from 'vitest';

import { getString } from './getString';

describe(`${getString.name}`, () => {
  test('return value is valid', () => {
    expect(getString()).toBe('<@packages/utils>');
  });
});
