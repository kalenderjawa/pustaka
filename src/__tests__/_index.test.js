/**
 * Testing Jest Yes!
 */
import * as DAT from './_data.js'
import * as KalenderJawa from '../index.js'
import { ANENHING, ASAPON } from '../kurup.js'

describe('Testing cariKurupTahunJawa', () => {
  test('cariKurupTahunJawa 1994', () => {
    return KalenderJawa.cariKurupTahunJawa(1994).then(r => {
      expect(r.taun.taun).toBe('jimakir')
      expect(r.kurup.pasaran).toBe(ANENHING.pasaran)
    }, e => {
      expect(e).toMatch('error')
    })
  })

  test('cariKurupTahunJawa 1881', () => {
    return KalenderJawa.cariKurupTahunJawa(1881).then(r => {
      expect(r.taun.taun).toBe('wawu')
      expect(r.kurup.pasaran).toBe(ASAPON.pasaran)
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

  test('Test Jumlah Hari Robiulawal (30), 1953 (Tahun Wawu)', () => {
    return KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('robiulawal', 1953).then(d => {
      expect(d.wulan.cacah).toStrictEqual([30])
    })
  })
})

describe('Testing cariHariPasaranAwalBulanTahunJawa, 1952', () => {
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

  test('Rojab, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('rojab', 1952)).resolves.toStrictEqual(DAT.TEST_ROJAB_HP_1952)
  })

  test('Sakban, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('sakban', 1952)).resolves.toStrictEqual(DAT.TEST_SAKBAN_HP_1952)
  })

  test('Romadon, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('romadon', 1952)).resolves.toStrictEqual(DAT.TEST_ROMADON_HP_1952)
  })

  test('Sawal, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('sawal', 1952)).resolves.toStrictEqual(DAT.TEST_SAWAL_HP_1952)
  })

  test('Dulkodah, 1952', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkodah', 1952)).resolves.toStrictEqual(DAT.TEST_DULKODAH_HP_1952)
  })
})

describe('Testing cariHariPasaranAwalBulanTahunJawa, 1881', () => {
  test('Dulkodah, 1881', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkodah', 1881)).resolves.toStrictEqual(DAT.TEST_DULKODAH_HP_1881)
  })

  test('Dulkijah, 1881', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkijah', 1881)).resolves.toStrictEqual(DAT.TEST_DULKIJAH_HP_1881)
    /**
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkijah', 1881).then(d => {
      console.log(d)
    })
    */
  })
})

describe('Testing cariHariPasaranAwalBulanTahunJawa Sewindu Sasi Mukarom 1907-1914', () => {
  test('mukarom, 1907', async () => {
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1907).then(({ kH, kP }) => {
      expect(`${kH.dino}_${kP.pasaran}`).toBe('selasa_pon')
    })
  })

  test('mukarom, 1908', async () => {
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1908).then((d) => {
      expect(`${d.kH.dino}_${d.kP.pasaran}`).toBe('sebtu_pahing')
    })
  })

  test('mukarom, 1909', async () => {
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1909).then((d) => {
      expect(`${d.kH.dino}_${d.kP.pasaran}`).toBe('kemis_pahing')
    })
  })

  test('mukarom, 1910', async () => {
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1910).then(({ kH, kP }) => {
      expect(`${kH.dino}_${kP.pasaran}`).toBe('senen_legi')
    })
  })

  test('mukarom, 1911', async () => {
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1911).then(({ kH, kP }) => {
      expect(`${kH.dino}_${kP.pasaran}`).toBe('jemah_kliwon')
    })
  })

  test('mukarom, 1912', async () => {
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1912).then(({ kH, kP }) => {
      expect(`${kH.dino}_${kP.pasaran}`).toBe('rebo_kliwon')
    })
  })
  test('mukarom, 1913', async () => {
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1913).then((d) => {
      expect(`${d.kH.dino}_${d.kP.pasaran}`).toBe('akad_wage')
    })
  })
  test('mukarom, 1914', async () => {
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1914).then(({ kH, kP }) => {
      expect(`${kH.dino}_${kP.pasaran}`).toBe('kemis_pon')
    })
  })
})

describe('Testing cariHariPasaranAwalBulanTahunJawa, 2077 Kurup Anenhing', () => {
  test('mukarom, 2077', async () => {
    return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 2077).then(d => {
      // console.log(d)
      expect(`${d.kH.dino}_${d.kP.pasaran}`).toBe('rebo_legi')
    })
  })

  /**
  test('Dulkijah, 1881', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkijah', 1881)).resolves.toStrictEqual(DAT.TEST_DULKIJAH_HP_1881)

  })
  */
})

describe('Test Sasi', () => {
  test('sasi', async () => {
    return KalenderJawa.sasi('sapar', 1952).then(d => {
      console.log(d)
    })
  })
})
