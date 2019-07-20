/**
 * Testing dengan Jest
 */

import * as KalenderJawa from '../index.js'
import { ANENHING } from '../kurup.js'
import { SengkalaMap } from '../rupa_ati.js'

import * as Romadon from '../rumus_apalan_awal_taun_romadon_abadi.js'
import * as Sawal from '../rumus_apalan_awal_taun_sawal_abadi'

describe('Sengkala', () => {
  test("cariTaunSengkala", () => {
    return KalenderJawa.cariTaunSengkala(1994).then(r => {
      expect(r.taun.taun).toBe("jimakir")
      expect(r.kurup.pasaran).toBe(ANENHING.pasaran)
    }, e => {
      expect(e).toMatch('error')
    })
  })

  test("cariWulanRegistry", () => {
    expect((KalenderJawa.cariWulanRegistry("romadon")).celukan).toBe('don')
    expect(KalenderJawa.cariWulanRegistry("januari")).toBeNull()
  })

  test("cariTaunRegistry", () => {
    expect((KalenderJawa.cariTaunRegistry("be")).urutan).toBe(6)
    expect(KalenderJawa.cariTaunRegistry("kabisat")).toBeNull()
  })

  test("cariRumusWulanTaun", () => {
    expect(KalenderJawa.cariRumusWulanTaun('don_be').rumus.dino).toBe(7)
    expect(KalenderJawa.cariRumusWulanTaun('ora_ono')).toBeNull()
  })

  test("cariRumusAbadi", () => {
    return KalenderJawa.cariRumusAbadi('romadon', 1952).then(d => {
      expect(d.rumus.pasaran).toBe(4)
    })
  })

  test("konversiHariPasaran", async () => {
    let rumus = { dino: 2, pasaran: 3 }
    const { h, p } = await KalenderJawa.konversiHariPasaran(7, 4, rumus)
    expect(h.dino).toBe('senen')
    expect(p.pasaran).toBe('legi')
  })

  test("Rumus Map", () => {
    expect(SengkalaMap.get(Romadon._DON_ALIP).wulan.wulan).toBe('romadon')
  })
})
