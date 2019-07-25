/**
 * @flow
 * 
 * 📁rumus_apalan_awal_taun_sawal_abadi.js
 * Rumus untuk bulan Sawal selama 8 Tahun (Sewindu)
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

// Registry Symbol untuk Sawal Sewindu

const _WAL_ALIP = Symbol.for("wal_alip")
const _WAL_EHE = Symbol.for("wal_ehe")
const _WAL_JIMAWAL = Symbol.for("wal_jimawal")
const _WAL_JE = Symbol.for("wal_je")
const _WAL_DAL = Symbol.for("wal_dal")
const _WAL_BE = Symbol.for("wal_be")
const _WAL_WAWU = Symbol.for("wal_wawu")
const _WAL_JIMAKIR = Symbol.for("wal_jimakir")

// Rumus matematis

const WAL_JI_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  dino: 1,
  pasaran: 2
}

const WAL_MO_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  dino: 5,
  pasaran: 1
}

const WAL_LU_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  dino: 3,
  pasaran: 1
}

const WAL_TU_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  dino: 3,
  pasaran: 1
}

const WAL_PAT_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  dino: 4,
  pasaran: 4
}

const WAL_RO_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  dino: 2,
  pasaran: 4
}

const WAL_NEM_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  dino: 6,
  pasaran: 3
}

const WAL_LU_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  dino: 3,
  pasaran: 2
}

// Intersection [row x column -> rumus]

const WAL_ALIP = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: WAL_JI_RO
}

const WAL_EHE = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: WAL_MO_JI
}

const WAL_JIMAWAL = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: WAL_LU_JI
}

const WAL_JE = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: WAL_TU_MO
}

const WAL_DAL = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: WAL_PAT_PAT
}

const WAL_BE = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: WAL_RO_PAT
}

const WAL_WAWU = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: WAL_NEM_LU
}

const WAL_JIMAKIR = {
  wulan: ARANING_WULAN_SETAUN.get(_SAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: WAL_LU_RO
}

const RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI: Map<Symbol, WulanTaunType> = new Map()

RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI.set(_WAL_ALIP, WAL_ALIP)
RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI.set(_WAL_EHE, WAL_EHE)
RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI.set(_WAL_JIMAWAL, WAL_JIMAWAL)
RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI.set(_WAL_JE, WAL_JE)
RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI.set(_WAL_DAL, WAL_DAL)
RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI.set(_WAL_BE, WAL_BE)
RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI.set(_WAL_WAWU, WAL_WAWU)
RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI.set(_WAL_JIMAKIR, WAL_JIMAKIR)

export {
  RUMUS_APALAN_AWAL_BULAN_SAWAL_ABADI, 
  _WAL_ALIP, 
  _WAL_BE, 
  _WAL_DAL, 
  _WAL_EHE, 
  _WAL_JE, 
  _WAL_JIMAKIR, 
  _WAL_JIMAWAL, 
  _WAL_WAWU 
}