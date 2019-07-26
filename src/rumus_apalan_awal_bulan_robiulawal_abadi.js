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