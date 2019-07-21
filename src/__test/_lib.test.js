import * as KalenderJawa from '../../lib/kalenderjawa-42b52e539ad1b866d591-bundle'

const _TESTDAT = {
    wulan: { wulan: 'romadon', celukan: 'don', urutan: 9 },
    taun: { taun: 'be', neptu: 2, urutan: 6 },
    rumus: {
      wulan: { wulan: 'romadon', celukan: 'don', urutan: 9 },
      dino: 7,
      pasaran: 4
    }
  }

describe('Test Pustaka Bundle', () => {
    test('cariRumusWulanTaun', () => {
        expect(KalenderJawa.cariRumusWulanTaun('don_be')).toEqual(_TESTDAT)
    })
})
