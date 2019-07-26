/**
 * @flow
 * 
 * 📁rumus_apalan_awal_taun_sakban_abadi.js
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

// Registry
const _BAN_ALIP = Symbol.for("ban_alip")
const _BAN_EHE = Symbol.for("ban_ehe")
const _BAN_JIMAWAL = Symbol.for("ban_jimawal")
const _BAN_JE = Symbol.for("ban_je")
const _BAN_DAL = Symbol.for("ban_dal")
const _BAN_BE = Symbol.for("ban_be")
const _BAN_WAWU = Symbol.for("ban_wawu")
const _BAN_JIMAKIR = Symbol.for("ban_jimakir")

// Rumus 
const BAN_MO_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  dino: 5,
  pasaran: 3
}

const BAN_RO_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  dino: 2,
  pasaran: 2
}

const BAN_TU_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  dino: 7,
  pasaran: 2
}

const BAN_PAT_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  dino: 4,
  pasaran: 1
}

const BAN_JI_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  dino: 1,
  pasaran: 5
}

const BAN_NEM_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  dino: 6,
  pasaran: 5
}

const BAN_LU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  dino: 3,
  pasaran: 4
}

const BAN_TU_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  dino: 7,
  pasaran: 3
}

//

const BAN_ALIP = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: BAN_MO_LU
}

const BAN_EHE = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: BAN_RO_RO
}

const BAN_JIMAWAL = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: BAN_TU_RO
}

const BAN_JE = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: BAN_PAT_JI
}

const BAN_DAL = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: BAN_JI_MO
}

const BAN_BE = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: BAN_NEM_MO
}

const BAN_WAWU = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: BAN_LU_PAT
}

const BAN_JIMAKIR = {
  wulan: ARANING_WULAN_SETAUN.get(_SAKBAN),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: BAN_TU_LU
}

// Mapping
const RUMUS_APALAN_AWAL_BULAN_SAKBAN_ABADI: Map<Symbol, WulanTaunType> = new Map()

RUMUS_APALAN_AWAL_BULAN_SAKBAN_ABADI.set(_BAN_ALIP, BAN_ALIP)
RUMUS_APALAN_AWAL_BULAN_SAKBAN_ABADI.set(_BAN_EHE, BAN_EHE)
RUMUS_APALAN_AWAL_BULAN_SAKBAN_ABADI.set(_BAN_JIMAWAL, BAN_JIMAWAL)
