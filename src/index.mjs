// Pustaka Kalender Jawa
// Perhtungan, pengkonversian dan penanggalan Jawa
// 📁 index.mjs
// :ES6

import '@babel/polyfill'
import * as Kurup from './kurup_asapon_anenhing_statik.mjs'
import * as RumusAbadi from './rumus_apalan_awal_taun_abadi.mjs'
import * as Wulan from './wulan.mjs'
import { ARANING_WULAN_SETAUN } from './wulan.mjs';
import { ARANING_TAHUN_SEWINDU } from './taun.mjs';

/**
 * Mencari Taun Jawa
 * @param { number } input - 4 digit integer
 * @returns { Promise } data - hasil promise adalah object 
 */

async function cariTaunSengkala(_q) {
  let find_async = new Promise((resolve, reject) => {
    for (let _kurup of Kurup.KURUP_ASAPON_ANENHING) {
      _kurup.awal.find(query => {
        if (query == _q) resolve(_kurup)
      })
    }
  })

  let query_result = await find_async
  return query_result
}

async function cariRumusAbadi(wulan, taun) {
  let cariRumusPromise = new Promise((resolve, reject) => {
    cariTaunSengkala(taun).then(r => {
      let wulanMap = cariWulanRegistry(wulan) 
      let taunMap = cariTaunRegistry(r.taun.taun)
     
      // fungsi untuk cari rumus abadi disini

      resolve(r)
    })
  })

  let q_cariRumus = await cariRumusPromise
  return q_cariRumus
}

function cariTaunRegistry(taun) {
    return ARANING_TAHUN_SEWINDU.has(Symbol.for(taun)) ? ARANING_TAHUN_SEWINDU.get(Symbol.for(taun)) : null
}

function cariWulanRegistry(wulan) {
    return ARANING_WULAN_SETAUN.has(Symbol.for(wulan)) ? ARANING_WULAN_SETAUN.get(Symbol.for(wulan)) : null
}

export { cariTaunSengkala, cariRumusAbadi, cariWulanRegistry, cariTaunRegistry }
