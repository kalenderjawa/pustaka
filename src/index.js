// @flow
// Pustaka Kalender Jawa
// Perhtungan, pengkonversian dan penanggalan Jawa
// 📁 index.js
// :ES6

// $FlowFixMe
import 'core-js/stable'
// $FlowFixMe
import 'regenerator-runtime/runtime'
import * as Kurup from './kurup_asapon_anenhing_statik.js'
import type { RumusSasiTaunType, TaunKurupType } from './type.js'
import { konversiHari, konversiPasaran, cariWulanRegistry, cariTaunRegistry, cariRumusWulanTaun } from './silpin.js'

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
async function cariRumusAbadiAwalBulanTahunJawa (wulan: string, taun: number): Promise<?RumusSasiTaunType> {
  return new Promise((resolve, reject) => {
    cariKurupTaun(taun).then(r => {
      const wulanMap = cariWulanRegistry(wulan)
      const taunMap = cariTaunRegistry(r.taun.taun)

      // koreksi jumlah hari bulan dulkijah
      // berdasarkan tahun jawa
      if (wulanMap !== undefined || wulanMap !== undefined) {
        if (r.taun.cacah === 354) {
          const _correction = { cacah: [29] }
          if (wulanMap.urutan === 12) {
            Object.assign(wulanMap, _correction)
          }
        } else {
          const _correction = { cacah: [30] }
          if (wulanMap.urutan === 12) {
            Object.assign(wulanMap, _correction)
          }
        }
      }

      if (wulanMap !== undefined && taunMap !== undefined) {
        const KEY_RUMUS = `${wulanMap.celukan}_${taunMap.taun}`
        const RWT = cariRumusWulanTaun(KEY_RUMUS, { wulan: wulan, taun: taun })
        if (RWT !== undefined) {
          resolve(RWT)
        }
      }
      reject(new Error('error cariRumusAbadi'))
    })
  })
}

/**
 *
 * @param {string} w - string wulan (bulan)
 * @param {number} t - 4 digit integer
 */
async function _cariHariAwalBulan (w: string, t: number) {
  const sengkalaTaun = await cariKurupTaun(t)

  // $FlowFixMe
  const sengkalaRumus = await cariRumusAbadiAwalBulanTahunJawa(w, t)

  const kH = await konversiHari(sengkalaRumus.rumus.dino, sengkalaTaun.kurup.dinten.urutan)
  const kP = await konversiPasaran(sengkalaRumus.rumus.pasaran, sengkalaTaun.kurup.pasaran.urutan)

  const i = { taun: sengkalaTaun.taun.taun, kurup: `${sengkalaTaun.kurup.taun} ${sengkalaTaun.kurup.dinten.dino} ${sengkalaTaun.kurup.pasaran.pasaran}` }

  return { w, t, i, kH, kP }
}

async function cariHariPasaranAwalBulan (w: string, t: number) {
  return _cariHariAwalBulan(w, t)
}

/**
async function dataSasi(w: string, t: number) {
  // 1. Cari hari dan pasaran awal bulan
  // 2. Hitung dan simpan semua tanggal, hari & pasaran ke dalam Array

}
*/

export {
  cariRumusAbadiAwalBulanTahunJawa,
  cariKurupTaun as cariKurupTahunJawa,
  cariHariPasaranAwalBulan as cariHariPasaranAwalBulanTahunJawa
}
