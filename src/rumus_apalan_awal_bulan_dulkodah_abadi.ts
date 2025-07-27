/**
 * 📁rumus_apalan_awal_bulan_dulkodah_abadi.ts
 * Rumus untuk bulan Dulkodah selama 8 Tahun (Sewindu)
 */

import type { WulanTaunType } from './types.js';
import { _DULKODAH, ARANING_WULAN_SETAUN } from './sasi.js';
import {
  _ALIP,
  _EHE,
  _JIMAWAL,
  _JE,
  _DAL,
  _BE,
  _WAWU,
  _JIMAKIR,
  ARANING_TAHUN_SEWINDU,
} from './taun.js';

// Registry Symbol untuk Dulkodah Sewindu
const _DAH_ALIP = Symbol.for('dah_alip');
const _DAH_EHE = Symbol.for('dah_ehe');
const _DAH_JIMAWAL = Symbol.for('dah_jimawal');
const _DAH_JE = Symbol.for('dah_je');
const _DAH_DAL = Symbol.for('dah_dal');
const _DAH_BE = Symbol.for('dah_be');
const _DAH_WAWU = Symbol.for('dah_wawu');
const _DAH_JIMAKIR = Symbol.for('dah_jimakir');

// Rumus Matematis

/**
 * Dah Ro Ji - Dulkodah Loro Siji
 */
const DAH_RO_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  dino: 2,
  pasaran: 1,
};

const DAH_NEM_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  dino: 6,
  pasaran: 5,
};

const DAH_PAT_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  dino: 4,
  pasaran: 5,
};

const DAH_JI_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  dino: 1,
  pasaran: 4,
};

const DAH_MO_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  dino: 5,
  pasaran: 3,
};

const DAH_LU_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  dino: 3,
  pasaran: 3,
};

const DAH_TU_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  dino: 7,
  pasaran: 2,
};

const DAH_PAT_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  dino: 4,
  pasaran: 1,
};

// Wulan - Taun
// Kunci Dulkodah - Sewindu

const DAH_ALIP: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: DAH_RO_JI,
};

const DAH_EHE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: DAH_NEM_MO,
};

const DAH_JIMAWAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: DAH_PAT_MO,
};

const DAH_JE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: DAH_JI_PAT,
};

const DAH_DAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: DAH_MO_LU,
};

const DAH_BE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: DAH_LU_LU,
};

const DAH_WAWU: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: DAH_TU_RO,
};

const DAH_JIMAKIR: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKODAH),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: DAH_PAT_JI,
};

// Mapping Rumus abadi Dulkodah dengan Registry
const RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI: Map<symbol, WulanTaunType> =
  new Map();

RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI.set(_DAH_ALIP, DAH_ALIP);
RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI.set(_DAH_EHE, DAH_EHE);
RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI.set(_DAH_JIMAWAL, DAH_JIMAWAL);
RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI.set(_DAH_JE, DAH_JE);
RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI.set(_DAH_DAL, DAH_DAL);
RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI.set(_DAH_BE, DAH_BE);
RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI.set(_DAH_WAWU, DAH_WAWU);
RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI.set(_DAH_JIMAKIR, DAH_JIMAKIR);

export {
  RUMUS_APALAN_AWAL_BULAN_DULKODAH_ABADI,
  _DAH_ALIP,
  _DAH_EHE,
  _DAH_JIMAWAL,
  _DAH_JE,
  _DAH_DAL,
  _DAH_BE,
  _DAH_WAWU,
  _DAH_JIMAKIR,
};
