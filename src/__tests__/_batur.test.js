/**
 * Testing batur.ts
 */

import { periksaBatasan } from '../batur.ts';

describe('Batur Testing', () => {
  test('Valid year within range (1867-2106)', () => {
    // Test years within valid range
    expect(periksaBatasan(1867)).toEqual({ status: true, message: '' });
    expect(periksaBatasan(1900)).toEqual({ status: true, message: '' });
    expect(periksaBatasan(2000)).toEqual({ status: true, message: '' });
    expect(periksaBatasan(2106)).toEqual({ status: true, message: '' });
  });

  test('Year below minimum range (< 1867)', () => {
    expect(periksaBatasan(1866)).toEqual({
      status: false,
      message: 'out of scope',
    });
    expect(periksaBatasan(1800)).toEqual({
      status: false,
      message: 'out of scope',
    });
    expect(periksaBatasan(1000)).toEqual({
      status: false,
      message: 'out of scope',
    });
    expect(periksaBatasan(0)).toEqual({
      status: false,
      message: 'out of scope',
    });
  });

  test('Year above maximum range (> 2106)', () => {
    expect(periksaBatasan(2107)).toEqual({
      status: false,
      message: 'out of scope',
    });
    expect(periksaBatasan(2200)).toEqual({
      status: false,
      message: 'out of scope',
    });
    expect(periksaBatasan(3000)).toEqual({
      status: false,
      message: 'out of scope',
    });
  });

  test('Edge case years (boundary testing)', () => {
    // Just outside the range
    expect(periksaBatasan(1866)).toEqual({
      status: false,
      message: 'out of scope',
    });
    expect(periksaBatasan(2107)).toEqual({
      status: false,
      message: 'out of scope',
    });

    // Just inside the range
    expect(periksaBatasan(1867)).toEqual({ status: true, message: '' });
    expect(periksaBatasan(2106)).toEqual({ status: true, message: '' });
  });

  test('Negative years', () => {
    expect(periksaBatasan(-1)).toEqual({
      status: false,
      message: 'out of scope',
    });
    expect(periksaBatasan(-100)).toEqual({
      status: false,
      message: 'out of scope',
    });
    expect(periksaBatasan(-1867)).toEqual({
      status: false,
      message: 'out of scope',
    });
  });

  test('Decimal years (non-integer)', () => {
    expect(periksaBatasan(1900.5)).toEqual({ status: true, message: '' });
    expect(periksaBatasan(1866.9)).toEqual({
      status: false,
      message: 'out of scope',
    });
    expect(periksaBatasan(2106.1)).toEqual({
      status: false,
      message: 'out of scope',
    });
  });
});
