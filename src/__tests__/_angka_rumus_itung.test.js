/**
 * Testing angka_rumus_itung.ts
 */

import * as AngkaRumus from '../angka_rumus_itung.ts';

describe('Angka Rumus Itung Testing', () => {
  test('Constants are exported correctly', () => {
    expect(AngkaRumus._SIJI).toBe('siji');
    expect(AngkaRumus._LORO).toBe('loro');
    expect(AngkaRumus._TELU).toBe('telu');
    expect(AngkaRumus._PAPAT).toBe('papat');
    expect(AngkaRumus._LIMO).toBe('limo');
    expect(AngkaRumus._ENEM).toBe('enem');
    expect(AngkaRumus._PITU).toBe('pitu');
  });

  test('ANGKA_RUMUS_ITUNG Map contains all entries', () => {
    const angkaMap = AngkaRumus.ANGKA_RUMUS_ITUNG;

    expect(angkaMap.size).toBe(7);
    expect(angkaMap.has('siji')).toBe(true);
    expect(angkaMap.has('loro')).toBe(true);
    expect(angkaMap.has('telu')).toBe(true);
    expect(angkaMap.has('papat')).toBe(true);
    expect(angkaMap.has('limo')).toBe(true);
    expect(angkaMap.has('enem')).toBe(true);
    expect(angkaMap.has('pitu')).toBe(true);
  });

  test('SIJI entry structure', () => {
    const siji = AngkaRumus.ANGKA_RUMUS_ITUNG.get('siji');

    expect(siji).toBeDefined();
    expect(siji.angka).toBe('siji');
    expect(siji.celukan).toBe('ji');
    expect(siji.abot).toBe(1);
  });

  test('LORO entry structure', () => {
    const loro = AngkaRumus.ANGKA_RUMUS_ITUNG.get('loro');

    expect(loro).toBeDefined();
    expect(loro.angka).toBe('loro');
    expect(loro.celukan).toBe('ro');
    expect(loro.abot).toBe(2);
  });

  test('TELU entry structure', () => {
    const telu = AngkaRumus.ANGKA_RUMUS_ITUNG.get('telu');

    expect(telu).toBeDefined();
    expect(telu.angka).toBe('telu');
    expect(telu.celukan).toBe('lu');
    expect(telu.abot).toBe(3);
  });

  test('PAPAT entry structure', () => {
    const papat = AngkaRumus.ANGKA_RUMUS_ITUNG.get('papat');

    expect(papat).toBeDefined();
    expect(papat.angka).toBe('papat');
    expect(papat.celukan).toBe('pat');
    expect(papat.abot).toBe(4);
  });

  test('LIMO entry structure', () => {
    const limo = AngkaRumus.ANGKA_RUMUS_ITUNG.get('limo');

    expect(limo).toBeDefined();
    expect(limo.angka).toBe('limo');
    expect(limo.celukan).toBe('mo');
    expect(limo.abot).toBe(5);
  });

  test('ENEM entry structure', () => {
    const enem = AngkaRumus.ANGKA_RUMUS_ITUNG.get('enem');

    expect(enem).toBeDefined();
    expect(enem.angka).toBe('enem');
    expect(enem.celukan).toBe('nem');
    expect(enem.abot).toBe(6);
  });

  test('PITU entry structure', () => {
    const pitu = AngkaRumus.ANGKA_RUMUS_ITUNG.get('pitu');

    expect(pitu).toBeDefined();
    expect(pitu.angka).toBe('pitu');
    expect(pitu.celukan).toBe('tu');
    expect(pitu.abot).toBe(7);
  });

  test('Non-existent entries return undefined', () => {
    expect(AngkaRumus.ANGKA_RUMUS_ITUNG.get('wolu')).toBeUndefined();
    expect(AngkaRumus.ANGKA_RUMUS_ITUNG.get('songo')).toBeUndefined();
    expect(AngkaRumus.ANGKA_RUMUS_ITUNG.get('')).toBeUndefined();
  });

  test('All entries have correct sequential abot values', () => {
    const expectedSequence = [1, 2, 3, 4, 5, 6, 7];
    const actualSequence = [];

    AngkaRumus.ANGKA_RUMUS_ITUNG.forEach(entry => {
      actualSequence.push(entry.abot);
    });

    actualSequence.sort((a, b) => a - b);
    expect(actualSequence).toEqual(expectedSequence);
  });
});
