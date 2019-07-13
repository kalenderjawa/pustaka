/**
 * Testing dengan Jest
 */

import * as KalenderJawa from '../index.mjs'
import { ANENHING } from '../kurup.mjs';
import { _JIMAKIR } from '../taun.mjs';

describe('Sengkala', () => {
    test("cariTaunSengkala", () => {
        return KalenderJawa.cariTaunSengkala(1994).then(r => {
            expect(r.taun.taun).toBe(_JIMAKIR)
            expect(r.kurup.pasaran).toBe(ANENHING.pasaran)
        }, e => {
            expect(e).toMatch('error')
        })
    })

    test("cariWulanRegistry", () => {
        expect(KalenderJawa.cariWulanRegistry("romadon")).toBeTruthy()
    })

    test("cariTaunRegistry", () => {
        expect(KalenderJawa.cariTaunRegistry("be")).toBeTruthy()
    })

    test("cariRumusAbadi", () => {
        return KalenderJawa.cariRumusAbadi('romadon', 1952).then(d => {
            expect(d.taun.taun).toBe('be')
        }) 
    })
})
