/**
 * 📁rumus_apalan_awal_bulan_robiulawal_abadi.ts
 * Rumus untuk bulan Robiulawal selama 8 Tahun (Sewindu)
 */

import type { WulanTaunType } from './types.js';
import { _ROBIULAWAL, ARANING_WULAN_SETAUN } from './sasi.js';
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
const _ROWAL_ALIP = Symbol.for('rowal_alip');
const _ROWAL_EHE = Symbol.for('rowal_ehe');
const _ROWAL_JIMAWAL = Symbol.for('rowal_jimawal');
const _ROWAL_JE = Symbol.for('rowal_je');
const _ROWAL_DAL = Symbol.for('rowal_dal');
const _ROWAL_BE = Symbol.for('rowal_be');
const _ROWAL_WAWU = Symbol.for('rowal_wawu');
const _ROWAL_JIMAKIR = Symbol.for('rowal_jimakir');

// Rumus abadi Robiulawal
const ROWAL_PAT_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 4,
  pasaran: 5,
};

const ROWAL_JI_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 1,
  pasaran: 4,
};

const ROWAL_NEM_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 6,
  pasaran: 4,
};

const ROWAL_LU_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 3,
  pasaran: 3,
};

const ROWAL_TU_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 7,
  pasaran: 2,
};

const ROWAL_MO_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 5,
  pasaran: 2,
};

const ROWAL_RO_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 2,
  pasaran: 1,
};

const ROWAL_NEM_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  dino: 6,
  pasaran: 5,
};

Object.freeze(ROWAL_PAT_MO);
Object.freeze(ROWAL_JI_PAT);
Object.freeze(ROWAL_NEM_PAT);
Object.freeze(ROWAL_LU_LU);
Object.freeze(ROWAL_TU_RO);
Object.freeze(ROWAL_MO_RO);
Object.freeze(ROWAL_RO_JI);
Object.freeze(ROWAL_NEM_MO);

// Kunci Robiulawal - Sewindu
const ROWAL_ALIP: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: ROWAL_PAT_MO,
};

const ROWAL_EHE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: ROWAL_JI_PAT,
};

const ROWAL_JIMAWAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: ROWAL_NEM_PAT,
};

const ROWAL_JE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: ROWAL_LU_LU,
};

const ROWAL_DAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: ROWAL_TU_RO,
};

const ROWAL_BE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: ROWAL_MO_RO,
};

const ROWAL_WAWU: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: ROWAL_RO_JI,
};

const ROWAL_JIMAKIR: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: ROWAL_NEM_MO,
};

Object.freeze(ROWAL_ALIP);
Object.freeze(ROWAL_EHE);
Object.freeze(ROWAL_JIMAWAL);
Object.freeze(ROWAL_JE);
Object.freeze(ROWAL_DAL);
Object.freeze(ROWAL_BE);
Object.freeze(ROWAL_WAWU);
Object.freeze(ROWAL_JIMAKIR);

// Mapping Rumus abadi Robiulawal dengan Registry
const _RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI: Map<symbol, WulanTaunType> =
  new Map();

_RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_ALIP, ROWAL_ALIP);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_EHE, ROWAL_EHE);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_JIMAWAL, ROWAL_JIMAWAL);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_JE, ROWAL_JE);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_DAL, ROWAL_DAL);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_BE, ROWAL_BE);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_WAWU, ROWAL_WAWU);
_RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI.set(_ROWAL_JIMAKIR, ROWAL_JIMAKIR);

Object.freeze(_RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI);
const RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI: ReadonlyMap<
  symbol,
  WulanTaunType
> = _RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI;

export {
  RUMUS_APALAN_AWAL_BULAN_ROBIULAWAL_ABADI,
  _ROWAL_ALIP,
  _ROWAL_EHE,
  _ROWAL_JIMAWAL,
  _ROWAL_JE,
  _ROWAL_DAL,
  _ROWAL_BE,
  _ROWAL_WAWU,
  _ROWAL_JIMAKIR,
};
