/**
 * 📁rumus_apalan_awal_bulan_robiulakir_abadi.ts
 * Rumus untuk bulan Robiulakir selama 8 Tahun (Sewindu)
 */

import type { WulanTaunType } from './types.js';
import { _ROBIULAKIR, ARANING_WULAN_SETAUN } from './sasi.js';
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

// Registry
const _ROKIR_ALIP = Symbol.for('rokir_alip');
const _ROKIR_EHE = Symbol.for('rokir_ehe');
const _ROKIR_JIMAWAL = Symbol.for('rokir_jimawal');
const _ROKIR_JE = Symbol.for('rokir_je');
const _ROKIR_DAL = Symbol.for('rokir_dal');
const _ROKIR_BE = Symbol.for('rokir_be');
const _ROKIR_WAWU = Symbol.for('rokir_wawu');
const _ROKIR_JIMAKIR = Symbol.for('rokir_jimakir');

// Rumus Matematis
const ROKIR_NEM_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 6,
  pasaran: 5,
};

const ROKIR_LU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 3,
  pasaran: 4,
};

const ROKIR_JI_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 1,
  pasaran: 4,
};

const ROKIR_MO_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 5,
  pasaran: 3,
};

const ROKIR_RO_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 2,
  pasaran: 2,
};

const ROKIR_TU_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 1,
  pasaran: 2,
};

const ROKIR_PAT_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 4,
  pasaran: 1,
};

const ROKIR_JI_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 1,
  pasaran: 5,
};

Object.freeze(ROKIR_NEM_MO);
Object.freeze(ROKIR_LU_PAT);
Object.freeze(ROKIR_JI_PAT);
Object.freeze(ROKIR_MO_LU);
Object.freeze(ROKIR_RO_RO);
Object.freeze(ROKIR_TU_RO);
Object.freeze(ROKIR_PAT_JI);
Object.freeze(ROKIR_JI_MO);

// Kunci Robiulakir - Sewindu
const ROKIR_ALIP: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: ROKIR_NEM_MO,
};

const ROKIR_EHE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: ROKIR_LU_PAT,
};

const ROKIR_JIMAWAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: ROKIR_JI_PAT,
};

const ROKIR_JE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: ROKIR_MO_LU,
};

const ROKIR_DAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: ROKIR_RO_RO,
};

const ROKIR_BE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: ROKIR_TU_RO,
};

const ROKIR_WAWU: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: ROKIR_PAT_JI,
};

const ROKIR_JIMAKIR: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: ROKIR_JI_MO,
};

Object.freeze(ROKIR_ALIP);
Object.freeze(ROKIR_EHE);
Object.freeze(ROKIR_JIMAWAL);
Object.freeze(ROKIR_JE);
Object.freeze(ROKIR_DAL);
Object.freeze(ROKIR_BE);
Object.freeze(ROKIR_WAWU);
Object.freeze(ROKIR_JIMAKIR);

// Mapping Rumus abadi Robiulakir dengan Registry
const _RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI: Map<symbol, WulanTaunType> =
  new Map();

_RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_ALIP, ROKIR_ALIP);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_EHE, ROKIR_EHE);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_JIMAWAL, ROKIR_JIMAWAL);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_JE, ROKIR_JE);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_DAL, ROKIR_DAL);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_BE, ROKIR_BE);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_WAWU, ROKIR_WAWU);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI.set(_ROKIR_JIMAKIR, ROKIR_JIMAKIR);

Object.freeze(_RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI);
const RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI: ReadonlyMap<
  symbol,
  WulanTaunType
> = _RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI;

export {
  RUMUS_APALAN_AWAL_BULAN_ROBIULAKIR_ABADI,
  _ROKIR_ALIP,
  _ROKIR_EHE,
  _ROKIR_JIMAWAL,
  _ROKIR_JE,
  _ROKIR_DAL,
  _ROKIR_BE,
  _ROKIR_WAWU,
  _ROKIR_JIMAKIR,
};
