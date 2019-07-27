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

