// Pustaka Kalender Jawa
// Perhtungan, pengkonversian dan penanggalan Jawa
// 📁 index.mjs
// :ES6

import '@babel/polyfill'
import * as Kurup from './kurup_asapon_anenhing_statik.mjs'
import * as RumusAbadi from './rumus_apalan_awal_taun_abadi.mjs'

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
      console.log(r)

    })
  })

  let q_cariTaun = await cariTaunPromise

  // mock test
  let const_dumb = "don tu pat"
  return const_dumb
}

export { cariTaunSengkala, cariRumusAbadi }
