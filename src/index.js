// @flow
// Pustaka Kalender Jawa
// Perhtungan, pengkonversian dan penanggalan Jawa
// 📁 index.js
// :ES6

// $FlowFixMe
import "core-js/stable"
// $FlowFixMe
import "regenerator-runtime/runtime"

import * as Dinten from './dinten.js'
import { PASARAN } from './pasaran.js'
import * as Kurup from './kurup_asapon_anenhing_statik.js'

import { ARANING_WULAN_SETAUN } from './wulan.js'
import { ARANING_TAHUN_SEWINDU } from './taun.js'
import { SengkalaMap } from './rupa_ati.js'

import type { PasaranType, DintenType, WulanType, TaunType, KurupType, WulanTaunType } from './type.js'

type TaunKurupType = {| taun: TaunType, kurup: KurupType, awal: Array<number>|}
  /**
   * Data yang dikembalikan oleh fungsi cariTaunSengkala(w,t)
   * 
      {
          taun: { taun: 'jimakir', neptu: 3, urutan: 8 },
          kurup: {
            taun: 'alip',
            dinten: { dino: 'senen', urutan: 1 },
            pasaran: { pasaran: 'pahing', neptu: 9, urutan: 2 }
          },
          awal: [
            1994, 2002, 2010,
            2018, 2026, 2034,
            2042, 2050, 2058,
            2066, 2074, 2081,
            2089, 2098, 2106
          ]
        }
   */


  /**
   * Mencari Taun Jawa
   * @param { number } input - 4 digit integer
   * @returns { Promise } data - hasil promise adalah object 
   */

  async function cariTaunSengkala(_q: number): Promise<TaunKurupType> {
    return new Promise((resolve, reject) => {
      for (let _kurup of Kurup.KURUP_ASAPON_ANENHING) {
        _kurup.awal.find(query => {
          if (query == _q) resolve(_kurup)
        })
      }
    })
  }

/**
 * Fungsi untuk mencari rumus perhitungan abadi
 * @param {string} wulan 
 * @param {number} taun 
 */
async function cariRumusAbadi(wulan: string, taun: number): Promise<?WulanTaunType> {
    return new Promise((resolve, reject) => {
      cariTaunSengkala(taun).then(r => {
        let wulanMap = cariWulanRegistry(wulan)
        let taunMap = cariTaunRegistry(r.taun.taun)
        if (wulanMap != null && taunMap != null) {
          const KEY_RUMUS = `${wulanMap.celukan}_${taunMap.taun}`
          resolve(cariRumusWulanTaun(KEY_RUMUS))
        } else {
          reject(new Error('error cariRumusAbadi'))
        }
      })
    })
  }

async function cariRumusAbadiAwait(wulan, taun) {
    let qWT = await cariRumusAbadi(wulan, taun)
    return qWT
  }

function cariRumusWulanTaun(key: string): ?WulanTaunType {
    return SengkalaMap.has(Symbol.for(key)) ? SengkalaMap.get(Symbol.for(key)) : null
  }

function cariTaunRegistry(taun: string): ?TaunType {
    return ARANING_TAHUN_SEWINDU.has(Symbol.for(taun)) ? ARANING_TAHUN_SEWINDU.get(Symbol.for(taun)) : null
  }

function cariWulanRegistry(wulan: string): ?WulanType {
    return ARANING_WULAN_SETAUN.has(Symbol.for(wulan)) ? ARANING_WULAN_SETAUN.get(Symbol.for(wulan)) : null
  }

async function konversiHariPasaran(h, p, k) {
    let qH = await konversiHari(h, k.dinten)
    let qP = await konversiPasaran(p, k.pasaran)
    return { h: qH, p: qP }
  }

async function konversiHari(h, dn) {
    let xH = (dn + h) % 7 //Dinten MAX=7
    if (xH == 1) { xH } else { xH = xH - 1 }
    return new Promise((resolve, reject) => {
      Dinten.DINTEN.forEach((value, key, map) => {
        (value.urutan == xH) ? resolve(value) : reject(new Error('error'))
      })
    })
  }

async function konversiPasaran(p, ps) {
    let xP = (ps + p) % 5 //Pasaran MAX=5
    if (xP == 1) { xP } else { xP = xP - 1 }
    return new Promise((resolve, reject) => {
      PASARAN.forEach((value, key, map) => {
        (value.urutan == xP) ? resolve(value) : reject(new Error('error'))
      })
    })
  }

/**
 * 
 * @param {string} w - string wulan (bulan)
 * @param {number} t - 4 digit integer 
 */
async function cariHariAwalBulan(w, t) {
    let sengkalaTaun = await cariTaunSengkala(t)
    
    //$FlowFixMe
    let sengkalaRumus = await cariRumusAbadi(w, t)
    
    let kH = await konversiHari(sengkalaRumus.rumus.dino, sengkalaTaun.kurup.dinten.urutan)
    let kP = await konversiPasaran(sengkalaRumus.rumus.pasaran, sengkalaTaun.kurup.pasaran.urutan)

    const i = { taun: sengkalaTaun.taun.taun, kurup: `${sengkalaTaun.kurup.taun} ${sengkalaTaun.kurup.dinten.dino} ${sengkalaTaun.kurup.pasaran.pasaran}` }

    return { w, t, i, kH, kP }
  }

async function cariHariPasaranAwalBulan(w, t) {
    return cariHariAwalBulan(w, t)
  }

export {
  cariTaunSengkala,
  cariRumusAbadiAwait,
  cariWulanRegistry,
  cariTaunRegistry,
  cariRumusWulanTaun,
  konversiHariPasaran,
  cariHariAwalBulan,
  cariHariPasaranAwalBulan
}
