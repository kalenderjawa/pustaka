/**
 * @flow
 * Silpin (Bahasa Sanskrit) artinya Seniman
 * 📁 silpin.js
 */
// $FlowFixMe
// import 'core-js/stable'
// $FlowFixMe
// import 'regenerator-runtime/runtime'

import type { PasaranType, DintenType, RumusType, SasiReturnType, TaunReturnType, WulanTaunQueryType, RumusSasiTaunType } from './type.js'
import { PASARAN } from './pasaran.js'
import { DINTEN } from './dinten.js'
import { ARANING_WULAN_SETAUN, SASI_ARR } from './sasi.js'
import { ARANING_TAHUN_SEWINDU } from './taun.js'
import { SengkalaMap } from './rupa_ati.js'

/**
 *
 * @param {*} h Dinten adjustment dari Kurup Dino -> dn + h
 * @param {*} dn Kurup Dino. Misal Selasa -> Urutan 2
 */
async function konversiHari (h: number, dn: number): Promise<DintenType | string> {
  const _xH = dn + h - 1
  let xH = 0

  if (_xH > 7) { xH = _xH - 7 } else { xH = _xH }

  return new Promise((resolve, reject) => {
    DINTEN.forEach((value, key, map) => {
      if (value.urutan === xH) {
        resolve(value)
      }
    })
    reject(new Error('Error konversiHari'))
  })
}

async function konversiPasaran (p: number, ps: number): Promise<PasaranType | string> {
  const _xP = ps + p - 1
  let xP = 0

  if (_xP > 5) { xP = _xP - 5 } else { xP = _xP }

  return new Promise((resolve, reject) => {
    PASARAN.forEach((value, key, map) => {
      // Hanya mengambil value sekali, gak perlu reject selama xP masih dalam range 1-5
      if (value.urutan === xP) {
        resolve(value)
      }
    })
    reject(new Error('Error konversiPasaran'))
  })
}

async function konversiHariPasaran (h: number, p: number, k: RumusType) {
  const qH = await konversiHari(h, k.dino)
  const qP = await konversiPasaran(p, k.pasaran)
  return { h: qH, p: qP }
}

function cariTaunRegistry (taun: string): TaunReturnType {
  return ARANING_TAHUN_SEWINDU.has(Symbol.for(taun)) ? ARANING_TAHUN_SEWINDU.get(Symbol.for(taun)) : undefined
}

function cariWulanRegistry (wulan: string): SasiReturnType {
  // console.log(ARANING_WULAN_SETAUN.get(Symbol.for(wulan)))
  // cek wulan type number or string
  var _wulan = ''

  if (typeof wulan === 'string') {
    _wulan = wulan
  } else if (typeof wulan === 'number') {
    const _sasi = SASI_ARR[wulan - 1]
    if (_sasi) {
      _wulan = _sasi.wulan
    }
  }

  return ARANING_WULAN_SETAUN.has(Symbol.for(_wulan)) ? ARANING_WULAN_SETAUN.get(Symbol.for(_wulan)) : undefined
}

function cariRumusWulanTaun (key: string, q: WulanTaunQueryType): RumusSasiTaunType | void {
  if (SengkalaMap.has(Symbol.for(key))) {
    const _RWT = SengkalaMap.get(Symbol.for(key))
    const _K = { query: q }
    return { ..._RWT, ..._K }
  } else {
    return undefined
  }
}

export {
  konversiPasaran,
  konversiHari,
  konversiHariPasaran,
  cariWulanRegistry,
  cariTaunRegistry,
  cariRumusWulanTaun
}
