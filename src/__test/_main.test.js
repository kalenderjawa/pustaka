/**
 * Testing dengan Jest
 */

import * as KalenderJawa from '../index.mjs'
import { ANENHING } from '../kurup.mjs'

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

    test("cariRumusAbadi", () => {
        return KalenderJawa.cariRumusAbadi('romadon', 1952).then(d => {
            expect(d.taun.taun).toBe('be')
        }) 
    })
})
