import * as Lib from '../../lib/bundle.js'

const _TEST = {
    wulan: { wulan: 'romadon', celukan: 'don', urutan: 9 },
    taun: { taun: 'be', neptu: 2, urutan: 6 },
    rumus: {
      wulan: { wulan: 'romadon', celukan: 'don', urutan: 9 },
      dino: 7,
      pasaran: 4
    }
  }

describe('Lib', () => {
    test('Test Lib', () => {
        expect(Lib.cariRumusWulanTaun('don_be')).toEqual(_TEST)
    })
})
