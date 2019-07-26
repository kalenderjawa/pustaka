/**
 * @flow
 * 
 * 📁rumus_apalan_awal_bulan_robiulawal_abadi.js
 * Rumus untuk bulan Robiulawal selama 8 Tahun (Sewindu)
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

// Registry 
const _ROWAL_ALIP = Symbol.for("rowal_alip")
const _ROWAL_EHE = Symbol.for("rowal_ehe")
const _ROWAL_JIMAWAL = Symbol.for("rowal_jimawal")
const _ROWAL_JE = Symbol.for("rowal_je")
const _ROWAL_DAL = Symbol.for("rowal_dal")
const _ROWAL_BE = Symbol.for("rowal_be")
const _ROWAL_WAWU = Symbol.for("rowal_wawu")
const _ROWAL_JIMAKIR = Symbol.for("rowal_jimakir")

// 
const ROWAL_PAT_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 4,
  pasaran: 5
}

const ROWAL_JI_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 1,
  pasaran: 4
}

const ROWAL_NEM_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 6,
  pasaran: 4
}

const ROWAL_LU_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 3,
  pasaran: 3
}

const ROWAL_TU_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 7,
  pasaran: 2
}

const ROWAL_MO_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 5,
  pasaran: 2
}

const ROWAL_RO_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 2,
  pasaran: 1
}

const ROWAL_NEM_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 6,
  pasaran: 5
}

// 
const ROWAL_ALIP = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: ROWAL_PAT_MO
}

const ROWAL_EHE = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: ROWAL_JI_PAT
}

const ROWAL_JIMAWAL = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: ROWAL_NEM_PAT
}

const ROWAL_JE = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: ROWAL_LU_LU
}

const ROWAL_DAL = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: ROWAL_TU_RO
}

const ROWAL_BE = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: ROWAL_MO_RO
}

const ROWAL_WAWU = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: ROWAL_RO_JI
}

const ROWAL_JIMAKIR = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: ROWAL_NEM_MO
}

// Mapping 
const RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI: Map<Symbol, WulanTaunType> = new Map()

RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_ALIP, ROWAL_ALIP)
RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_EHE, ROWAL_EHE)
RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_JIMAWAL, ROWAL_JIMAWAL)
RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_JE, ROWAL_JE)
RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_DAL, ROWAL_DAL)
RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_BE, ROWAL_BE)
RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_WAWU, ROWAL_WAWU)

