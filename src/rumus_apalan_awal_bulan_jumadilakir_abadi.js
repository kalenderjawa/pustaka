/**
 * @flow
 *
 * 📁rumus_apalan_awal_bulan_jumadilakir_abadi.js
 * Rumus untuk bulan Jumadilakir selama 8 Tahun (Sewindu)
 *
 */

import type { WulanTaunType } from './type.js'
import { _JUMADILAKIR, ARANING_WULAN_SETAUN } from './wulan.js'
import { _ALIP, _EHE, _JIMAWAL, _JE, _DAL, _BE, _WAWU, _JIMAKIR, ARANING_TAHUN_SEWINDU } from './taun.js'

// Registry
const _JUKIR_ALIP = Symbol.for('jukir_alip')
const _JUKIR_EHE = Symbol.for('jukir_ehe')
const _JUKIR_JIMAWAL = Symbol.for('jukir_jimawal')
const _JUKIR_JE = Symbol.for('jukir_je')
const _JUKIR_DAL = Symbol.for('jukir_dal')

