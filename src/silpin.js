/**
 * @flow
 *
 */

import type { PasaranType, DintenType, RumusType } from './type.js'
import { PASARAN } from './pasaran.js'
import { DINTEN } from './dinten.js'

async function konversiHari (h: number, dn: number): Promise<DintenType | string> {
  const _xH = dn + h
  let xH = _xH % 7 // Dinten MAX=7

  if (xH !== 1) { xH = xH - 1 }

  return new Promise((resolve, reject) => {
    DINTEN.forEach((value, key, map) => {
      if (value.urutan === xH) {
        resolve(value)
      }
    })
  })
}

async function konversiPasaran (p: number, ps: number): Promise<PasaranType | string> {
  const _xP = ps + p
  let xP = _xP % 5 // Pasaran MAX=5
  if (xP !== 1) { if (xP === 0) { xP = _xP } else { xP = xP - 1 } }
  return new Promise((resolve, reject) => {
    PASARAN.forEach((value, key, map) => {
      /**
         * Hanya mengambil value sekali, gak perlu reject selama xP masih dalam range 1-5
         */
      if (value.urutan === xP) {
        resolve(value)
      }
    })
  })
}

async function konversiHariPasaran (h: number, p: number, k: RumusType) {
  const qH = await konversiHari(h, k.dino)
  const qP = await konversiPasaran(p, k.pasaran)
  return { h: qH, p: qP }
}

export {
  konversiPasaran,
  konversiHari,
  konversiHariPasaran
}
