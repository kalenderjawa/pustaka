/**
 * Testing Jest Yes!
 */

import * as Silpin from '../silpin.js'

describe('Test Silpin.js', () => {
  test('cariWulanRegistry', () => {
    expect((Silpin.cariWulanRegistry('romadon')).celukan).toBe('don')
    expect(Silpin.cariWulanRegistry('januari')).toBeUndefined()
  })

  test('cariTaunRegistry', () => {
    expect((Silpin.cariTaunRegistry('be')).urutan).toBe(6)
    expect(Silpin.cariTaunRegistry('kabisat')).toBeUndefined()
  })

  test('cariRumusWulanTaun', () => {
    expect(Silpin.cariRumusWulanTaun('don_be').rumus.dino).toBe(7)
    expect(Silpin.cariRumusWulanTaun('ora_ono')).toBeUndefined()
  })

  test('konversiHariPasaran', async () => {
    const rumus = { dino: 2, pasaran: 3 }
    const { h, p } = await Silpin.konversiHariPasaran(7, 4, rumus)
    expect(h.dino).toBe('senen')
    expect(p.pasaran).toBe('legi')
  })

  /**
  test('Rumus Map', () => {
    expect(SengkalaMap.get(Romadon._DON_ALIP).wulan.wulan).toBe('romadon')
  })
  */
})
