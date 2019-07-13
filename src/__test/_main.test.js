/**
 * Testing dengan Jest
 */

import * as KalenderJawa from '../index.js'
import { ANENHING } from '../kurup.js'

describe('Sengkala', () => {
    test("cariTaunSengkala", () => {
        return KalenderJawa.cariTaunSengkalaAwait(1994).then(r => {
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
        return KalenderJawa.cariRumusAbadiAwait('romadon', 1952).then(d => {
            expect(d.rumus.pasaran).toBe(4)
        })
    })

    test("konversiHariPasaran", () => {
        /**
         * 
         {
             taun: { taun: 'jimakir', neptu: 3, urutan: 8 },
             kurup: {
             taun: 'alip',
             dinten: { dino: 'senen', urutan: 1 },
             pasaran: { pasaran: 'pahing', neptu: 9, urutan: 2 }
             },
             awal: [
             1994, 2002, 2010,
             2018, 2026, 2034,
             2042, 2050, 2058,
             2066, 2074, 2081,
             2089, 2098, 2106
             ]
         }
         */
        let kurup = { dinten: 2, pasaran: 3 }

        return KalenderJawa.konversiHariPasaran(7, 4, kurup).then(({ h, p }) => {
            expect(h.dino).toBe('senen')
            expect(p.pasaran).toBe('legi')
        })
    })

    test("cariHariAwalBulan", () => {
        return KalenderJawa.cariHariAwalBulan('romadon', 1952).then(({ w, t, i, kH, kP }) => {
            console.log(`1 ${w} ${t} (${i.taun}, ${i.kurup}) - ${kH.dino} ${kP.pasaran}`)
        })
    })
})
