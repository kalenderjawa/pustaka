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
const PAR_ALIP = Symbol.for("par_alip")
const PAR_EHE = Symbol.for("par_ehe")
const PAR_JIMAWAL = Symbol.for("par_jimawal")
const PAR_JE = Symbol.for("par_je")
const PAR_DAL = Symbol.for("par_dal")
const PAR_BE = Symbol.for("par_be")
const PAR_WAWU = Symbol.for("par_wawu")
