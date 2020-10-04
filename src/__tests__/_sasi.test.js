/**
 * Testing wulan.js
 */

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import * as Sasi from '../sasi.js'
import * as KalenderJawa from '../index.js'

describe('Sasi Testing', () => {
  test('Mukarom', () => {
    const _m = Sasi.ARANING_WULAN_SETAUN.get(Sasi._MUKAROM)
    expect(_m.wulan).toBe('mukarom')
  })

  test('Robiulawal', () => {
    const _m = Sasi.ARANING_WULAN_SETAUN.get(Sasi._ROBIULAWAL)
    expect(_m.wulan).toBe('robiulawal')
  })
})

describe('Test Sasi', () => {
  test('Sasi Mukarom', async () => {
    return KalenderJawa.sasi('mukarom', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi Sapar', async () => {
    return KalenderJawa.sasi('sapar', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi RobiulAwal', async () => {
    return KalenderJawa.sasi('robiulawal', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi RobiulAkir', async () => {
    return KalenderJawa.sasi('robiulakir', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi JumadilAwal', async () => {
    return KalenderJawa.sasi('jumadilawal', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi JumadilAkir', async () => {
    return KalenderJawa.sasi('jumadilakir', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi Rojab', async () => {
    return KalenderJawa.sasi('rojab', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi Sakban', async () => {
    return KalenderJawa.sasi('sakban', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi Romadon', async () => {
    return KalenderJawa.sasi('romadon', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi Sawal', async () => {
    return KalenderJawa.sasi('sawal', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi Dulkodah', async () => {
    return KalenderJawa.sasi('dulkodah', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })

  test('Sasi Dulkijah', async () => {
    return KalenderJawa.sasi('dulkijah', 1953).then(({ k, s }) => {
      console.log(s)
      console.log(s.get(k))
    })
  })
})
