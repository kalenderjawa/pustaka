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

// Registry
const _ROM_ALIP = Symbol.for("rom_alip")
const _ROM_EHE = Symbol.for("rom_ehe")
const _ROM_JIMAWAL = Symbol.for("rom_jimawal")
const _ROM_JE = Symbol.for("rom_je")
const _ROM_DAL = Symbol.for("rom_dal")
const _ROM_BE = Symbol.for("rom_be")
const _ROM_WAWU = Symbol.for("rom_wawu")
const _ROM_JIMAKIR = Symbol.for("rom_jimakir")

// Rumus abadi Mukarom
const ROM_JI_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 1,
  pasaran: 1
}

const ROM_MO_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 5,
  pasaran: 5
}

const ROM_LU_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 3,
  pasaran: 5
}

const ROM_TU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 7,
  pasaran: 4
}

const ROM_PAT_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 4,
  pasaran: 3
}

const ROM_RO_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 2,
  pasaran: 3
}

const ROM_NEM_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 6,
  pasaran: 2
}

const ROM_LU_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 3,
  pasaran: 1
}

// Kunci Mukarom - Sewindu

const ROM_ALIP = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: ROM_JI_JI
}

