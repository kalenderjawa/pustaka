/**
 * Testing wulan.js
 */
import * as Sasi from '../sasi.js'

describe('Sasi Testing', () => {
  test('Sasi', () => {
    const _m = Sasi.ARANING_WULAN_SETAUN.get(Sasi._MUKAROM)
    expect(_m.wulan).toBe('mukarom')
  })
})
