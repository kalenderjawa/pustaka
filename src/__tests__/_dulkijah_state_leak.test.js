/**
 * Ensure Dulkijah day-count is correct across consecutive calls
 * and no shared state leaks from registry.
 */

import * as KalenderJawa from '../index.ts';
import * as Sasi from '../sasi.ts';

describe('Dulkijah day-count does not leak state between years (354 vs 355)', () => {
  test('1952 (Be, 354) → 29; 1911 (Dal, 355) → 30; registry stays [29,30]; re-call 1952 remains 29', async () => {
    // 1952 = Tahun Be (cacah 354) → Dulkijah 29
    const r1952 = await KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('dulkijah', 1952);
    expect(r1952.wulan?.cacah).toEqual([29]);

    // 1911 = Tahun Dal (cacah 355) → Dulkijah 30
    const r1911 = await KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('dulkijah', 1911);
    expect(r1911.wulan?.cacah).toEqual([30]);

    // Registry remains unmodified (original definition keeps [29, 30])
    const dulRegistry = Sasi.ARANING_WULAN_SETAUN.get(Sasi._DULKIJAH);
    expect(dulRegistry?.cacah).toEqual([29, 30]);

    // Re-invoking 1952 should still yield 29 (no influence from 1911 call)
    const r1952Again = await KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('dulkijah', 1952);
    expect(r1952Again.wulan?.cacah).toEqual([29]);
  });
});


