import * as KalenderJawa from '../index.js'

describe('Async Testing', () => {
    fit("cariHariAwalBulan", async () => {
        const x = await KalenderJawa.cariHariAwalBulan('romadon', 1952)
        expect(x.kH).toEqual({ dino: 'senen', urutan: 1 })
        expect(x.kP).toEqual({ pasaran: 'legi', neptu: 5, urutan: 1 })
    })

    test("cariHariPasaranAwalBulan", async () => {
        return KalenderJawa.cariHariPasaranAwalBulan('romadon', 1955).then(x => {
            expect(x.kH).toEqual({ dino: 'senen', urutan: 1 })
            expect(x.kP).toEqual({ pasaran: 'legi', neptu: 5, urutan: 1 })
        })           
    })

})
