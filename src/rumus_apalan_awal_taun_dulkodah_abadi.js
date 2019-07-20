/**
 * @flow
 * 
 * 📁rumus_apalan_awal_taun_dulkodah_abadi.js
 * Rumus untuk bulan Dulkodah selama 8 Tahun (Sewindu)
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

// Registry Symbol untuk Dulkodah Sewindu
const _DAH_ALIP = Symbol.for("dah_alip")
const _DAH_EHE = Symbol.for("dah_ehe")
const _DAH_JIMAWAL = Symbol.for("dah_jimawal")