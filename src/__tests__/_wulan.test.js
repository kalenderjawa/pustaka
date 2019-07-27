/**
 * Testing wulan.js
 */
import * as Wulan from '../wulan.js'

describe('Wulan Testing', () => {
  test('Wulan', () => {
    const _m = Wulan.ARANING_WULAN_SETAUN.get(Wulan._MUKAROM)
    expect(_m.wulan).toBe('mukarom')
  })
})
