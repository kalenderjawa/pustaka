/**
 * Sample Code untuk Node.js environment
 */
const KalenderJawa = require('../../lib/kalenderjawa-2d6051b7fb0da7107ecc-bundle.js')

describe('Test Pustaka Bundle', () => {
    const _TESTDAT = {
        wulan: { wulan: 'romadon', celukan: 'don', urutan: 9 },
        taun: { taun: 'be', neptu: 2, urutan: 6 },
        rumus: {
            wulan: { wulan: 'romadon', celukan: 'don', urutan: 9 },
            dino: 7,
            pasaran: 4
        }
    }
    test('cariRumusWulanTaun', () => {
        expect(KalenderJawa.cariRumusWulanTaun('don_be')).toEqual(_TESTDAT)
    })

    test("cariTaunSengkala", () => {
        return KalenderJawa.cariTaunSengkala(1881).then(r => {
            console.log(r)
        })
    })

    test("cariHariPasaranAwalBulan", () => {
        return KalenderJawa.cariHariPasaranAwalBulan('romadon', 1952).then(({ kH, kP }) => {
            console.log(`${kH.dino} ${kP.pasaran}`) // senen legi
        })
    })
})

