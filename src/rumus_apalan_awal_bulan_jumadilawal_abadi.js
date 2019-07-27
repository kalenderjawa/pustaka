/**
 * @flow
 *
 * 📁rumus_apalan_awal_bulan_jumadilawal_abadi.js
 * Rumus untuk bulan Jumadilawal selama 8 Tahun (Sewindu)
 *
 */

import type { WulanTaunType } from './type.js'
import { _JUMADILAWAL, ARANING_WULAN_SETAUN } from './wulan.js'
import { _ALIP, _EHE, _JIMAWAL, _JE, _DAL, _BE, _WAWU, _JIMAKIR, ARANING_TAHUN_SEWINDU } from './taun.js'

// Registry
const _JUWAL_ALIP = Symbol.for('juwal_alip')
const _JUWAL_EHE = Symbol.for('juwal_ehe')
const _JUWAL_JIMAWAL = Symbol.for('juwal_jimawal')
const _JUWAL_JE = Symbol.for('juwal_je')
const _JUWAL_DAL = Symbol.for('juwal_dal')
const _JUWAL_BE = Symbol.for('juwal_be')
const _JUWAL_WAWU = Symbol.for('juwal_wawu')
const _JUWAL_JIMAKIR = Symbol.for('juwal_jimakir')

// Rumus matematis
const JUWAL_TU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  dino: 7,
  pasaran: 4
}

