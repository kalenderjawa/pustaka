// Pustaka Kalender Jawa
// Perhtungan, pengkonversian dan penanggalan Jawa
// 📁 index.js
// :ES6

//import '@babel/polyfill'
import "core-js/stable";
import "regenerator-runtime/runtime";

import * as Dinten from './dinten.js'
import { PASARAN } from './pasaran.js'
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
  return new Promise((resolve, reject) => {
    for (let _kurup of Kurup.KURUP_ASAPON_ANENHING) {
      _kurup.awal.find(query => {
        if (query == _q) resolve(_kurup)
      })
    }
  })
}

async function cariTaunSengkalaAwait(_q) {
  let qTaun = await cariTaunSengkala(_q)
  return qTaun
}

/**
 * Fungsi untuk mencari rumus perhitungan abadi
 * @param {string} wulan 
 * @param {string} taun 
 */
async function cariRumusAbadi(wulan, taun) {
  return new Promise((resolve, reject) => {
    cariTaunSengkalaAwait(taun).then(r => {
      let wulanMap = cariWulanRegistry(wulan)
      let taunMap = cariTaunRegistry(r.taun.taun)

      const KEY_RUMUS = `${wulanMap.celukan}_${taunMap.taun}`
      resolve(cariRumusWulanTaun(KEY_RUMUS))
    })
  })
}

async function cariRumusAbadiAwait(wulan, taun) {
  let qWT = await cariRumusAbadi(wulan, taun)
  return qWT
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
  let sengkalaRumus = await cariRumusAbadi(w, t)
  let kH = await konversiHari(sengkalaRumus.rumus.dino, sengkalaTaun.kurup.dinten.urutan)
  let kP = await konversiPasaran(sengkalaRumus.rumus.pasaran, sengkalaTaun.kurup.pasaran.urutan)

  const i = { taun: sengkalaTaun.taun.taun, kurup: `${sengkalaTaun.kurup.taun} ${sengkalaTaun.kurup.dinten.dino} ${sengkalaTaun.kurup.pasaran.pasaran}` }

  return { w, t, i, kH, kP }
}

export {
  cariTaunSengkalaAwait,
  cariRumusAbadiAwait,
  cariWulanRegistry,
  cariTaunRegistry,
  cariRumusWulanTaun,
  konversiHariPasaran,
  cariHariAwalBulan
}
