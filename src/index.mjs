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
  let cariTaunPromise = new Promise((resolve, reject) => {
    cariTaunSengkala(taun).then(r => {
      let wulanMap = cariWulanRegistry(wulan) // boolean
      //console.log(wulanMap)
      let taunMap = cariTaunRegistry(r.taun.taun) // boolean
      //console.log(r.taun.taun)
      //console.log(taunMap)
      resolve(r)
    })
  })

  let q_cariTaun = await cariTaunPromise
  return q_cariTaun
}

function cariTaunRegistry(taun) {
  return ARANING_TAHUN_SEWINDU.has(Symbol.for(taun))
}

function cariWulanRegistry(wulan) {
  return ARANING_WULAN_SETAUN.has(Symbol.for(wulan))
}

export { cariTaunSengkala, cariRumusAbadi, cariWulanRegistry, cariTaunRegistry }
