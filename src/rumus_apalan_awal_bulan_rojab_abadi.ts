/**
 * 📁rumus_apalan_awal_bulan_rojab_abadi.ts
 * Rumus untuk bulan Rojab selama 8 Tahun (Sewindu)
 */

import type { WulanTaunType } from './types.js';
import { _ROJAB, ARANING_WULAN_SETAUN } from './sasi.js';
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
const _JAB_ALIP = Symbol.for('jab_alip');
const _JAB_EHE = Symbol.for('jab_ehe');
const _JAB_JIMAWAL = Symbol.for('jab_jimawal');
const _JAB_JE = Symbol.for('jab_je');
const _JAB_DAL = Symbol.for('jab_dal');
const _JAB_BE = Symbol.for('jab_be');
const _JAB_WAWU = Symbol.for('jab_wawu');
const _JAB_JIMAKIR = Symbol.for('jab_jimakir');

// Rumus

const JAB_LU_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  dino: 3,
  pasaran: 3,
};

const JAB_TU_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  dino: 7,
  pasaran: 2,
};

const JAB_MO_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  dino: 5,
  pasaran: 2,
};

const JAB_RO_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  dino: 2,
  pasaran: 1,
};

const JAB_NEM_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  dino: 6,
  pasaran: 5,
};

const JAB_PAT_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  dino: 4,
  pasaran: 5,
};

const JAB_JI_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  dino: 1,
  pasaran: 4,
};

const JAB_MO_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  dino: 5,
  pasaran: 3,
};

// Kunci Rojab - Sewindu
const JAB_ALIP: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: JAB_LU_LU,
};

const JAB_EHE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: JAB_TU_RO,
};

const JAB_JIMAWAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: JAB_MO_RO,
};

const JAB_JE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: JAB_RO_JI,
};

const JAB_DAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: JAB_NEM_MO,
};

const JAB_BE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: JAB_PAT_MO,
};

const JAB_WAWU: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: JAB_JI_PAT,
};

const JAB_JIMAKIR: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROJAB),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: JAB_MO_LU,
};

// Mapping Rumus abadi Rojab dengan Registry
const RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI: Map<symbol, WulanTaunType> =
  new Map();

RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI.set(_JAB_ALIP, JAB_ALIP);
RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI.set(_JAB_EHE, JAB_EHE);
RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI.set(_JAB_JIMAWAL, JAB_JIMAWAL);
RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI.set(_JAB_JE, JAB_JE);
RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI.set(_JAB_DAL, JAB_DAL);
RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI.set(_JAB_BE, JAB_BE);
RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI.set(_JAB_WAWU, JAB_WAWU);
RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI.set(_JAB_JIMAKIR, JAB_JIMAKIR);

export {
  RUMUS_APALAN_AWAL_BULAN_ROJAB_ABADI,
  _JAB_ALIP,
  _JAB_EHE,
  _JAB_JIMAWAL,
  _JAB_JE,
  _JAB_DAL,
  _JAB_BE,
  _JAB_WAWU,
  _JAB_JIMAKIR,
};
