import * as Entry from '../index.mjs'

describe('Pustaka Sengkala', () => {
    test("cariTaunSengkala", () => {
        return Entry.findSengkalaYear(1994).then(r => {
            expect(r.taun).toBe("jimakir")
        }, e => {
            expect(e).toMatch('error')
        })
    })
})
