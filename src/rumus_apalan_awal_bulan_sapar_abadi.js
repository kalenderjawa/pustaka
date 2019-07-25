/**
 * @flow
 * 
 * 📁rumus_apalan_awal_bulan_sapar_abadi.js
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

// Registry
/**
 * "par_alip" = `${ARANING_WULAN_SETAUN.get(_SAPAR).celukan}_${ARANING_TAUN_SEWINDU.get(_ALIP).taun}`
 */
const _PAR_ALIP = Symbol.for("par_alip")
const _PAR_EHE = Symbol.for("par_ehe")
const _PAR_JIMAWAL = Symbol.for("par_jimawal")
const _PAR_JE = Symbol.for("par_je")
const _PAR_DAL = Symbol.for("par_dal")
const _PAR_BE = Symbol.for("par_be")
const _PAR_WAWU = Symbol.for("par_wawu")
const _PAR_JIMAKIR = Symbol.for("par_jimakir")

// Rumus abadi Sapar - Sewindu

const PAR_LU_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 3,
  pasaran: 1
}

const PAR_TU_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 7,
  pasaran: 5
}

const PAR_MO_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 5,
  pasaran: 5
}

const PAR_RO_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 2,
  pasaran: 4
}

const PAR_NEM_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 6, 
  pasaran: 3
}

const PAR_PAT_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 4,
  pasaran: 3
}

const PAR_JI_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 1,
  pasaran: 2
}

const PAR_MO_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  wulan: 5,
  pasaran: 1
}

// Wulan - Taun
const PAR_ALIP = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: PAR_LU_JI
}

const PAR_EHE = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: PAR_TU_MO
}

const PAR_JIMAWAL = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: PAR_MO_MO
}

const PAR_JE = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: PAR_RO_PAT
}

const PAR_DAL = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: PAR_NEM_LU
}

const PAR_BE = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: PAR_PAT_LU
}

const PAR_WAWU = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: PAR_JI_RO
}

const PAR_JIMAKIR = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: PAR_MO_JI
}

// Mapping
const RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI: Map<Symbol, WulanTaunType> = new Map()

RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_ALIP, PAR_ALIP)
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_EHE, PAR_EHE)
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_JIMAWAL, PAR_JIMAWAL)
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_JE, PAR_JE)
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_DAL, PAR_DAL)
