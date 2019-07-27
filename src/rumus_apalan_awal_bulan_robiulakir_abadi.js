/**
 * @flow
 *
 * 📁rumus_apalan_awal_bulan_robiulakir_abadi.js
 * Rumus untuk bulan Robiulakir selama 8 Tahun (Sewindu)
 *
 */

import type { WulanTaunType } from './type.js'
import { _ROBIULAKIR, ARANING_WULAN_SETAUN } from './wulan.js'
import { _ALIP, _EHE, _JIMAWAL, _JE, _DAL, _BE, _WAWU, _JIMAKIR, ARANING_TAHUN_SEWINDU } from './taun.js'

// Registry
const _ROKIR_ALIP = Symbol.for('rokir_alip')
const _ROKIR_EHE = Symbol.for('rokir_ehe')
const _ROKIR_JIMAWAL = Symbol.for('rokir_jimawal')
const _ROKIR_JE = Symbol.for('rokir_je')
const _ROKIR_DAL = Symbol.for('rokit_dal')
const _ROKIR_BE = Symbol.for('rokir_be')
const _ROKIR_WAWU = Symbol.for('rokir_wawu')
const _ROKIR_JIMAKIR = Symbol.for('rokir_jimakir')