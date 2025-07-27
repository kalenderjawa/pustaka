/**
 * Testing edge cases and error scenarios for better coverage
 */

import * as KalenderJawa from '../index.ts';
import { periksaBatasan } from '../batur.ts';

describe('Edge Cases and Error Scenarios', () => {
  test('cariKurupTahunJawa with invalid year (error scenario)', async () => {
    // Test year that should trigger error
    await expect(KalenderJawa.cariKurupTahunJawa(9999))
      .rejects
      .toThrow('Error cariKurupTaun');
  });

  test('cariRumusAbadiAwalBulanTahunJawa with invalid month name', async () => {
    // Test with invalid month name
    await expect(KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('invalidMonth', 1952))
      .rejects
      .toThrow('error cariRumusAbadi');
  });

  test('cariRumusAbadiAwalBulanTahunJawa with valid month but invalid year', async () => {
    // Test with valid month but year that causes kurup error
    await expect(KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('mukarom', 9999))
      .rejects
      .toThrow('Error cariKurupTaun');
  });

  test('batur periksaBatasan function edge cases', () => {
    // Test boundary conditions
    expect(periksaBatasan(1866)).toEqual({ status: false, message: 'out of scoope' });
    expect(periksaBatasan(1867)).toEqual({ status: true, message: '' });
    expect(periksaBatasan(2106)).toEqual({ status: true, message: '' });
    expect(periksaBatasan(2107)).toEqual({ status: false, message: 'out of scoope' });
  });

  test('Test function with negative year', async () => {
    await expect(KalenderJawa.cariKurupTahunJawa(-100))
      .rejects
      .toThrow('Error cariKurupTaun');
  });

  test('Test function with decimal year', async () => {
    // Should work since parseInt will handle conversion
    const result = await KalenderJawa.cariKurupTahunJawa(1994.7);
    expect(result.taun.taun).toBe('jimakir');
  });

  test('Test with year at edge of valid range', async () => {
    // Test with years just outside supported range
    await expect(KalenderJawa.cariKurupTahunJawa(1800))
      .rejects
      .toThrow('Error cariKurupTaun');
    
    await expect(KalenderJawa.cariKurupTahunJawa(2200))
      .rejects
      .toThrow('Error cariKurupTaun');
  });

  test('Test sasi function with valid inputs (coverage improvement)', async () => {
    const result = await KalenderJawa.sasi('mukarom', 1952);
    expect(result.k.sasi).toBe('mukarom');
    expect(result.k.taun).toBe(1952);
    expect(result.s.size).toBe(1);
  });

  test('Test functions with boundary years in different kurups', async () => {
    // Test ASAPON kurup boundary
    const asaponResult = await KalenderJawa.cariKurupTahunJawa(1881);
    expect(asaponResult.kurup.pasaran.pasaran).toBe('pon');
    
    // Test ANENHING kurup boundary  
    const anenhingResult = await KalenderJawa.cariKurupTahunJawa(1994);
    expect(anenhingResult.kurup.pasaran.pasaran).toBe('pahing');
  });

  test('Test version function', () => {
    const version = KalenderJawa.versi();
    expect(version).toMatch(/^v\d+\.\d+\.\d+/);
    expect(typeof version).toBe('string');
  });
});