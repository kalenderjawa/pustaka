/**
 * Testing with Jest
 */
import * as KalenderJawa from '../index.js'
import * as Romadon from '../rumus_apalan_awal_bulan_romadon_abadi.js'
import { SengkalaMap } from '../rupa_ati.js'
import { ANENHING } from '../kurup.js'

const _TESTDAT_2 = { i: { kurup: 'alip selasa pon', taun: 'be' }, kH: { dino: 'senen', urutan: 1 }, kP: { neptu: 5, pasaran: 'legi', urutan: 1 }, t: 1952, w: 'romadon' }
const _TESTDAT_3 = { i: { kurup: 'alip selasa pon', taun: 'wawu' }, kH: { dino: 'senen', urutan: 1 }, kP: { neptu: 8, pasaran: 'kliwon', urutan: 5 }, t: 1881, w: 'dulkodah' }
const _TESTDAT_4 = { i: { kurup: 'alip selasa pon', taun: 'jimawal' }, kH: { dino: 'senen', urutan: 1 }, kP: { neptu: 9, pasaran: 'pahing', urutan: 2 }, t: 1981, w: 'dulkijah' }

describe('Testing', () => {
  test('cariWulanRegistry', () => {
    expect((KalenderJawa.cariWulanRegistry('romadon')).celukan).toBe('don')
    expect(KalenderJawa.cariWulanRegistry('januari')).toBeNull()
  })

  test('cariTaunRegistry', () => {
    expect((KalenderJawa.cariTaunRegistry('be')).urutan).toBe(6)
    expect(KalenderJawa.cariTaunRegistry('kabisat')).toBeNull()
  })

  test('cariKurupTahunJawa', () => {
    return KalenderJawa.cariKurupTahunJawa(1994).then(r => {
      expect(r.taun.taun).toBe('jimakir')
      expect(r.kurup.pasaran).toBe(ANENHING.pasaran)
    }, e => {
      expect(e).toMatch('error')
    })
  })

  test('cariRumusWulanTaun', () => {
    expect(KalenderJawa.cariRumusWulanTaun('don_be').rumus.dino).toBe(7)
    expect(KalenderJawa.cariRumusWulanTaun('ora_ono')).toBeNull()
  })

  test('cariRumusAbadi Romadon, 1952 ', () => {
    return KalenderJawa.cariRumusAbadi('romadon', 1952).then(d => {
      expect(d.rumus.pasaran).toBe(4)
    })
  })

  test('Test Jumlah Hari di Dulkijah (29), 1952 (Tahun Be)', () => {
    return KalenderJawa.cariRumusAbadi('dulkijah', 1952).then(d => {
      expect(d.wulan.cacah).toStrictEqual([29])
    })
  })

  test('cariRumusAbadi Mukarom, 1953', () => {
    return KalenderJawa.cariRumusAbadi('mukarom', 1953).then(d => {
      expect(d.rumus.dino).toBe(6)
    })
  })

  test('Test Jumlah Hari Dulkijah (30), 1911 (Tahun Dal)', () => {
    return KalenderJawa.cariRumusAbadi('dulkijah', 1911).then(d => {
      expect(d.wulan.cacah).toStrictEqual([30])
    })
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

  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('romadon', 1952)).resolves.toStrictEqual(_TESTDAT_2)
  })

  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkodah', 1881)).resolves.toStrictEqual(_TESTDAT_3)
  })

  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkijah', 1981)).resolves.toStrictEqual(_TESTDAT_4)
  })
})
