// Pustaka Kalender Jawa
// Perhtungan, pengkonversian dan penanggalan Jawa
// 📁 index.js
// :ES6

import '@babel/polyfill'

import * as RumusAbadi from './rumus_apalan_awal_taun_abadi.js'
import * as Wulan from './wulan.js'
import * as Dinten from './dinten.js'
import * as Pasaran from './pasaran.js'
import * as Kurup from './kurup_asapon_anenhing_statik.js'

import { ARANING_WULAN_SETAUN } from './wulan.js';
import { ARANING_TAHUN_SEWINDU } from './taun.js';
import { RUMUS_APALAN_AWAL_TAUN_ABADI } from './rumus_apalan_awal_taun_abadi.js';

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

      const KEY_RUMUS = `${wulanMap.celukan}_${taunMap.taun}`
      resolve(cariRumusWulanTaun(KEY_RUMUS))
    })
  })

  let q_cariRumus = await cariRumusPromise
  return q_cariRumus
}

function cariRumusWulanTaun(key) {
  return RUMUS_APALAN_AWAL_TAUN_ABADI.has(Symbol.for(key)) ? RUMUS_APALAN_AWAL_TAUN_ABADI.get(Symbol.for(key)) : null
}

function cariTaunRegistry(taun) {
  return ARANING_TAHUN_SEWINDU.has(Symbol.for(taun)) ? ARANING_TAHUN_SEWINDU.get(Symbol.for(taun)) : null
}

function cariWulanRegistry(wulan) {
  return ARANING_WULAN_SETAUN.has(Symbol.for(wulan)) ? ARANING_WULAN_SETAUN.get(Symbol.for(wulan)) : null
}

async function konversiHariPasaran(h, p, k) {
  let qH = await konversiHari(h, k.dinten)
  let qP = await konversiPasaran(p, k.pasaran)
  return { h: qH, p: qP }
}

async function konversiHari(h, dn) {
  let xH = (dn + h) % 7 //Dinten MAX=7
  
  return new Promise((resolve, reject) => {
    Dinten.DINTEN.forEach((value, key, map) => {
      (value.urutan == xH) ? resolve(value) : reject(new Error('error'))
    })
  })

  //return await xH_Promise
}

async function konversiPasaran(p, ps) {
  let xP = (ps + p) % 5 //Pasaran MAX=5
  return new Promise((resolve, reject) => {
    Pasaran.PASARAN.forEach((value, key, map) => {
      (value.urutan == xP) ? resolve(value) : reject(new Error('error'))
    })
  })

  //return await xP_Promise
}

export {
  cariTaunSengkala,
  cariRumusAbadi,
  cariWulanRegistry,
  cariTaunRegistry,
  cariRumusWulanTaun,
  konversiHariPasaran
}