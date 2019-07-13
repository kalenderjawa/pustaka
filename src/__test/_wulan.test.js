import * as Wulan from '../wulan.js'

describe('WULAN', () => {
    test('_1', () => {
        let _m = Wulan.ARANING_WULAN_SETAUN.get(Wulan._MUKAROM)
        expect(_m.wulan).toBe('mukarom') 
    })
})