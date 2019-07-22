/**
 * 
 */
const KalenderJawaLib = require('../../lib/kalenderjawa-2d6051b7fb0da7107ecc-bundle.js')

describe("Library Testing", () => {
    // Library testing
  test("cariTaunSengkala", () => {
    return KalenderJawaLib.cariTaunSengkala(1881).then(r => {
      console.log(r)
    })
  })
})