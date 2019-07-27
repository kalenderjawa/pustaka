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

// Rumus Matematis
const ROKIR_NEM_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 6,
  pasaran: 5
}

const ROKIR_LU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 3,
  pasaran: 4
}

const ROKIR_JI_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 1,
  pasaran: 4
}

const ROKIR_MO_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 5,
  pasaran: 3
}

const ROKIR_RO_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 2,
  pasaran: 2
}

const ROKIR_TU_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 1,
  pasaran: 2
}

const ROKIR_PAT_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 4,
  pasaran: 1
}

const ROKIR_JI_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 1,
  pasaran: 5
}

//
const ROKIR_ALIP = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: ROKIR_NEM_MO
}

const ROKIR_EHE = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: ROKIR_LU_PAT
} 

const ROKIR_JIMAWAL = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: ROKIR_JI_PAT
}

const ROKIR_JE = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: ROKIR_MO_LU
}

const ROKIR_DAL = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: ROKIR_RO_RO
}

const ROKIR_BE = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: ROKIR_TU_RO
}

const ROKIR_WAWU = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: ROKIR_PAT_JI
}

const ROKIR_JIMAKIR = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: ROKIR_JI_MO
}

// Mapping
const RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI: Map<Symbol, WulanTaunType> = new Map()

RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_ALIP, ROKIR_ALIP)
RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_EHE, ROKIR_EHE)
RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_JIMAWAL, ROKIR_JIMAWAL)
RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_JE, ROKIR_JE)
RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_DAL, ROKIR_DAL)
RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_BE, ROKIR_BE)
RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_WAWU, ROKIR_WAWU)
RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_JIMAKIR, ROKIR_JIMAKIR)

export {
  RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI,
  _ROKIR_ALIP,
  _ROKIR_EHE,
  _ROKIR_JIMAWAL,
  _ROKIR_JE,
  _ROKIR_DAL,
  _ROKIR_BE,
  _ROKIR_WAWU,
  _ROKIR_JIMAKIR
}
