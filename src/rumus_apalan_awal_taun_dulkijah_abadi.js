/**
 * @flow
 * 
 * 📁rumus_apalan_awal_taun_dulkijah_abadi.js
 * Rumus untuk bulan Dulkijah selama 8 Tahun (Sewindu)
 *
 */

import type { WulanTaunType } from './type.js'

import {
  _MUKAROM,
  _SAPAR,
  _ROBIULAWAL,
  _ROBIULAKIR,
  _JUMADILAWAL,
  _JUMADILAKIR,
  _ROJAB,
  _SAKBAN,
  _ROMADON,
  _SAWAL,
  _DULKODAH,
  _DULKIJAH,
  ARANING_WULAN_SETAUN
} from './wulan.js'

import { _ALIP, _EHE, _JIMAWAL, _JE, _DAL, _BE, _WAWU, _JIMAKIR, ARANING_TAHUN_SEWINDU } from './taun.js'
import { _SENEN, _SELASA, _REBO, _KEMIS, _JEMAH, _SEBTU, _AKAD, DINTEN } from './dinten.js'

// Registry Symbol
const _JAH_ALIP = Symbol.for("jah_alip")
const _JAH_EHE = Symbol.for("jah_ehe")
const _JAH_JIMAWAL = Symbol.for("jah_jimawal")
const _JAH_JE = Symbol.for("jah_je")
const _JAH_DAL = Symbol.for("jah_dal")
const _JAH_BE = Symbol.for("jah_be")
const _JAH_WAWU = Symbol.for("jah_wawu")
const _JAH_JIMAKIR = Symbol.for("jah_jimakir")

// Rumus
const JAH_PAT_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 4,
  pasaran: 1
}

const JAH_JI_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 1,
  pasaran: 5
}

const JAH_NEM_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 6,
  pasaran: 5
}

const JAH_LU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 3,
  pasaran: 4
}

const JAH_TU_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 7,
  pasaran: 3
}

const JAH_MO_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 5,
  pasaran: 3
}

const JAH_RO_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 2,
  pasaran: 2
}

const JAH_NEM_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 6,
  pasaran: 1
}

// 
const JAH_ALIP = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: JAH_PAT_JI
}

const JAH_EHE = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: JAH_JI_MO
}

const JAH_JIMAWAL = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: JAH_NEM_MO
}

const JAH_JE = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: JAH_LU_PAT
}

const JAH_DAL = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: JAH_TU_LU
}

const JAH_BE = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: JAH_MO_LU
}

const JAH_WAWU = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: JAH_RO_RO
}

const JAH_JIMAKIR = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: JAH_NEM_JI
}

// Mapping
const RUMUS_APALAN_AWAL_TAUN_DULKIJAH_ABADI: Map<Symbol, WulanTaunType> = new Map()

RUMUS_APALAN_AWAL_TAUN_DULKIJAH_ABADI.set(_JAH_ALIP, JAH_ALIP)
RUMUS_APALAN_AWAL_TAUN_DULKIJAH_ABADI.set(_JAH_EHE, JAH_EHE)
RUMUS_APALAN_AWAL_TAUN_DULKIJAH_ABADI.set(_JAH_JIMAWAL, JAH_JIMAWAL)
RUMUS_APALAN_AWAL_TAUN_DULKIJAH_ABADI.set(_JAH_JE, JAH_JE)
RUMUS_APALAN_AWAL_TAUN_DULKIJAH_ABADI.set(_JAH_DAL, JAH_DAL)
RUMUS_APALAN_AWAL_TAUN_DULKIJAH_ABADI.set(_JAH_BE, JAH_BE)
