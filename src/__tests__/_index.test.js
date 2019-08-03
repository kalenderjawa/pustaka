/**
 * Testing Jest Yes!
 */
import * as DAT from './_data.js'
import * as KalenderJawa from '../index.js'
import { ANENHING } from '../kurup.js'

describe('Testing cariKurupTahunJawa', () => {
  test('cariKurupTahunJawa', () => {
    return KalenderJawa.cariKurupTahunJawa(1994).then(r => {
      expect(r.taun.taun).toBe('jimakir')
      expect(r.kurup.pasaran).toBe(ANENHING.pasaran)
    }, e => {
      expect(e).toMatch('error')
    })
  })
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
  test('Mukarom, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1952)).resolves.toStrictEqual(DAT.TEST_MUKAROM_HP_1952)
  })

  test('Sapar, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('sapar', 1952)).resolves.toStrictEqual(DAT.TEST_SAPAR_HP_1952)
  })

  test('Robiulawal, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('robiulawal', 1952)).resolves.toStrictEqual(DAT.TEST_ROBIULAWAL_HP_1952)
  })

  test('Dulkijah, 1952', () => {
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkijah', 1952).then(d => {
      expect(d).toStrictEqual(DAT.TEST_DULKIJAH_HP_1952)
    })
  })

  test('Jumadilawal, 1881', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('jumadilawal', 1952)).resolves.toStrictEqual(DAT.TEST_JUMADILAWAL_HP_1952)
  })

  test('Jumadilakir, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('jumadilakir', 1952)).resolves.toStrictEqual(DAT.TEST_JUMADILAKIR_HP_1952)
  })
/**
  test('Rojab, 1952', async () => {
    //await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('rojab', 1952)).resolves.toStrictEqual(DAT.TESTDAT5)
   return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('jumadilakir', 1952).then(d => {
      console.log(d)
    })
  })

  test('Sakban, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('sakban', 1952)).resolves.toStrictEqual(DAT.TESTDAT5)
  })

  test('Romadon, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('romadon', 1952)).resolves.toStrictEqual(DAT.TEST_ROMADON_HP_1952)
  })

  test('Sawal, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('sawal', 1952)).resolves.toStrictEqual(DAT.TESTDAT5)
  })

  test('Dulkodah, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkodah', 1952)).resolves.toStrictEqual(DAT.TESTDAT5)
  })

  test('Dulkijah, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkijah', 1952)).resolves.toStrictEqual(DAT.TESTDAT5)
  })

  test('Dulkodah, 1881', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkodah', 1881)).resolves.toStrictEqual(DAT.TEST_DULKODAH_HP_1881)
  })

  test('Dulkijah, 1981', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkijah', 1981)).resolves.toStrictEqual(DAT.TEST_DULKIJAH_HP_1981)
  })
  */
})
