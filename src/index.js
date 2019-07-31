// @flow
// Pustaka Kalender Jawa
// Perhtungan, pengkonversian dan penanggalan Jawa
// 📁 index.js
// :ES6

// $FlowFixMe
import 'core-js/stable'
// $FlowFixMe
import 'regenerator-runtime/runtime'

import * as Dinten from './dinten.js'
import { PASARAN } from './pasaran.js'
import * as Kurup from './kurup_asapon_anenhing_statik.js'

import { ARANING_WULAN_SETAUN } from './sasi.js'
import { ARANING_TAHUN_SEWINDU } from './taun.js'
import { SengkalaMap } from './rupa_ati.js'

import type { PasaranType, DintenType, WulanType, TaunType, KurupType, RumusType, WulanTaunQueryType, RumusSasiTaunType } from './type.js'

type TaunKurupType = {| taun: TaunType, kurup: KurupType, awal: Array<number>|}

/**
   * Mencari Kurup dan Taun Jawa
   * @param { number } input - 4 digit integer
   * @returns { Promise } data - hasil promise adalah object
   */

async function cariKurupTaun (_q: number): Promise<TaunKurupType> {
  return new Promise((resolve, reject) => {
    for (const _kurup of Kurup.KURUP_ASAPON_ANENHING) {
      _kurup.awal.find(query => {
        if (query === _q) resolve(_kurup)
      })
    }
  })
}

/**
 * Fungsi untuk mencari rumus perhitungan abadi
 * @param {string} wulan
 * @param {number} taun
 */
async function cariRumusAbadi (wulan: string, taun: number): Promise<?RumusSasiTaunType> {
  return new Promise((resolve, reject) => {
    cariKurupTaun(taun).then(r => {
      const wulanMap = cariWulanRegistry(wulan)
      const taunMap = cariTaunRegistry(r.taun.taun)
      if (wulanMap != null && taunMap != null) {
        const KEY_RUMUS = `${wulanMap.celukan}_${taunMap.taun}`
        resolve(cariRumusWulanTaun(KEY_RUMUS, { wulan: wulan, taun: taun }))
      } else {
        reject(new Error('error cariRumusAbadi'))
      }
    })
  })
}

function cariRumusWulanTaun (key: string, q: WulanTaunQueryType): ?RumusSasiTaunType {
  if (SengkalaMap.has(Symbol.for(key))) {
    const _RWT = SengkalaMap.get(Symbol.for(key))
    const _K = { query: q }
    return { ..._RWT, ..._K }
  } else {
    return null
  }
}

function cariTaunRegistry (taun: string): ?TaunType {
  return ARANING_TAHUN_SEWINDU.has(Symbol.for(taun)) ? ARANING_TAHUN_SEWINDU.get(Symbol.for(taun)) : null
}

function cariWulanRegistry (wulan: string): ?WulanType {
  return ARANING_WULAN_SETAUN.has(Symbol.for(wulan)) ? ARANING_WULAN_SETAUN.get(Symbol.for(wulan)) : null
}

async function konversiHariPasaran (h: number, p: number, k: RumusType) {
  const qH = await konversiHari(h, k.dino)
  const qP = await konversiPasaran(p, k.pasaran)
  return { h: qH, p: qP }
}

async function konversiHari (h: number, dn: number): Promise<DintenType | string> {
  const _xH = dn + h
  let xH = _xH % 7 // Dinten MAX=7

  if (xH !== 1) { xH = xH - 1 }

  return new Promise((resolve, reject) => {
    Dinten.DINTEN.forEach((value, key, map) => {
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

/**
 *
 * @param {string} w - string wulan (bulan)
 * @param {number} t - 4 digit integer
 */
async function cariHariAwalBulan (w: string, t: number) {
  const sengkalaTaun = await cariKurupTaun(t)

  // $FlowFixMe
  const sengkalaRumus = await cariRumusAbadi(w, t)

  const kH = await konversiHari(sengkalaRumus.rumus.dino, sengkalaTaun.kurup.dinten.urutan)
  const kP = await konversiPasaran(sengkalaRumus.rumus.pasaran, sengkalaTaun.kurup.pasaran.urutan)

  const i = { taun: sengkalaTaun.taun.taun, kurup: `${sengkalaTaun.kurup.taun} ${sengkalaTaun.kurup.dinten.dino} ${sengkalaTaun.kurup.pasaran.pasaran}` }

  return { w, t, i, kH, kP }
}

async function cariHariPasaranAwalBulan (w: string, t: number) {
  return cariHariAwalBulan(w, t)
}

export {
  cariKurupTaun as cariKurupTahunJawa,
  cariRumusAbadi,
  cariRumusAbadi as cariRumusAbadiAwalBulanTahunJawa,
  cariWulanRegistry,
  cariTaunRegistry,
  cariRumusWulanTaun,
  konversiHariPasaran,
  cariHariAwalBulan,
  cariHariPasaranAwalBulan as cariHariPasaranAwalBulanTahunJawa
}
