/**
 * Testing dengan Jest
 */

import * as KalenderJawa from '../index.mjs'

describe('Sengkala', () => {
    test("cariTaunSengkala", () => {
        return KalenderJawa.cariTaunSengkala(1994).then(r => {
            expect(r.taun).toBe("jimakir")
            expect(r.kurup.pasaran).toBe("pahing")
        }, e => {
            expect(e).toMatch('error')
        })
    })
})
