/**
 * Testing Jest Yes!
 */

import * as Silpin from '../silpin.ts';

describe('Test Silpin.js', () => {
  test('cariWulanRegistry Parameter string', () => {
    expect(Silpin.cariWulanRegistry('romadon').celukan).toBe('don');
    expect(Silpin.cariWulanRegistry('januari')).toBeUndefined();
  });

  test('cariWulanRegistry Parameter number', () => {
    expect(Silpin.cariWulanRegistry(1).celukan).toBe('rom');
    expect(Silpin.cariWulanRegistry(14)).toBeUndefined();
  });

  test('cariTaunRegistry', () => {
    expect(Silpin.cariTaunRegistry('be').urutan).toBe(6);
    expect(Silpin.cariTaunRegistry('kabisat')).toBeUndefined();
  });

  test('cariRumusWulanTaun', () => {
    expect(Silpin.cariRumusWulanTaun('don_be').rumus.dino).toBe(7);
    expect(Silpin.cariRumusWulanTaun('ora_ono')).toBeUndefined();
  });

  test('konversiHariPasaran', async () => {
    const rumus = { dino: 2, pasaran: 3 };
    const { h, p } = await Silpin.konversiHariPasaran(7, 4, rumus);
    expect(h.dino).toBe('senen');
    expect(p.pasaran).toBe('legi');
  });

  /**
  test('Rumus Map', () => {
    expect(SengkalaMap.get(Romadon._DON_ALIP).wulan.wulan).toBe('romadon')
  })
  */
});
