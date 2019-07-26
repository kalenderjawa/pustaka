/**
 * @flow
 * 
 * 📁rumus_apalan_awal_bulan_rojab_abadi.js
 * Rumus untuk bulan Rojab selama 8 Tahun (Sewindu)
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
const _JAB_ALIP = Symbol.for("jab_alip")
const _JAB_EHE = Symbol.for("jab_ehe")
const _JAB_JIMAWAL = Symbol.for("jab_jimawal")
const _JAB_JE = Symbol.for("jab_je")
const _JAB_DAL = Symbol.for("jab_dal")
const _JAB_BE = Symbol.for("jab_be")
const _JAB_WAWU = Symbol.for("jab_wawu")
const _JAB_JIMAKIR = Symbol.for("jab_jimakir")

// Rumus

const JAB_LU_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  dino: 3,
  pasaran: 3
}

