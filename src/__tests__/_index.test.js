/**
 * Testing with Jest
 */
import * as DAT from './_data.js'
import * as KalenderJawa from '../index.js'
import { ANENHING } from '../kurup.js'

describe('Testing', () => {

  test('cariKurupTahunJawa', () => {
    return KalenderJawa.cariKurupTahunJawa(1994).then(r => {
      expect(r.taun.taun).toBe('jimakir')
      expect(r.kurup.pasaran).toBe(ANENHING.pasaran)
    }, e => {
      expect(e).toMatch('error')
    })
  })

  /**
  test('cariWulanRegistry', () => {
    expect((KalenderJawa.cariWulanRegistry('romadon')).celukan).toBe('don')
    expect(KalenderJawa.cariWulanRegistry('januari')).toBeNull()
  })

  test('cariTaunRegistry', () => {
    expect((KalenderJawa.cariTaunRegistry('be')).urutan).toBe(6)
    expect(KalenderJawa.cariTaunRegistry('kabisat')).toBeNull()
  })
  */

  /**
  test('cariRumusWulanTaun', () => {
    expect(KalenderJawa.cariRumusWulanTaun('don_be').rumus.dino).toBe(7)
    expect(KalenderJawa.cariRumusWulanTaun('ora_ono')).toBeNull()
  })

  test('konversiHariPasaran', async () => {
    const rumus = { dino: 2, pasaran: 3 }
    const { h, p } = await KalenderJawa.konversiHariPasaran(7, 4, rumus)
    expect(h.dino).toBe('senen')
    expect(p.pasaran).toBe('legi')
  })

  test('Rumus Map', () => {
    expect(SengkalaMap.get(Romadon._DON_ALIP).wulan.wulan).toBe('romadon')
  })

  test('cariHariAwalBulan', async () => {
    const x = await KalenderJawa.cariHariAwalBulan('romadon', 1952)
    expect(x.kH).toEqual({ dino: 'senen', urutan: 1 })
    expect(x.kP).toEqual({ pasaran: 'legi', neptu: 5, urutan: 1 })
  })

  */
})

describe('Testing cariRumusAbadiAwalBulanTahunJawa', () => {

  test('cariRumusAbadi Romadon, 1952 ', () => {
    return KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('romadon', 1952).then(d => {
      expect(d.rumus.pasaran).toBe(4)
    })
  })

  test('Test Jumlah Hari di Dulkijah (29), 1952 (Tahun Be)', () => {
    return KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('dulkijah', 1952).then(d => {
      expect(d.wulan.cacah).toStrictEqual([29])
    })
  })

  test('cariRumusAbadi Mukarom, 1953', () => {
    return KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('mukarom', 1953).then(d => {
      expect(d.rumus.dino).toBe(6)
    })
  })

  test('Test Jumlah Hari Dulkijah (30), 1911 (Tahun Dal)', () => {
    return KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('dulkijah', 1911).then(d => {
      expect(d.wulan.cacah).toStrictEqual([30])
    })
  })
})

describe('Testing cariHariPasaranAwalBulanTahunJawa', () => {
  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('romadon', 1952)).resolves.toStrictEqual(DAT.TESTDAT2)
  })

  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkodah', 1881)).resolves.toStrictEqual(DAT.TESTDAT3)
  })

  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkijah', 1981)).resolves.toStrictEqual(DAT.TESTDAT4)
  })
})
