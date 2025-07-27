/**
 * 📁rumus_apalan_awal_bulan_dulkijah_abadi.ts
 * Rumus untuk bulan Dulkijah selama 8 Tahun (Sewindu)
 */

import type { WulanTaunType } from "./types.js";
import { _DULKIJAH, ARANING_WULAN_SETAUN } from "./sasi.js";
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
} from "./taun.js";

// Registry Symbol
const _JAH_ALIP = Symbol.for("jah_alip");
const _JAH_EHE = Symbol.for("jah_ehe");
const _JAH_JIMAWAL = Symbol.for("jah_jimawal");
const _JAH_JE = Symbol.for("jah_je");
const _JAH_DAL = Symbol.for("jah_dal");
const _JAH_BE = Symbol.for("jah_be");
const _JAH_WAWU = Symbol.for("jah_wawu");
const _JAH_JIMAKIR = Symbol.for("jah_jimakir");

// Rumus
const JAH_PAT_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 4,
  pasaran: 1,
};

const JAH_JI_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 1,
  pasaran: 5,
};

const JAH_NEM_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 6,
  pasaran: 5,
};

const JAH_LU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 3,
  pasaran: 4,
};

const JAH_TU_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 7,
  pasaran: 3,
};

const JAH_MO_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 5,
  pasaran: 3,
};

const JAH_RO_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 2,
  pasaran: 2,
};

const JAH_NEM_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  dino: 6,
  pasaran: 1,
};

// Kunci Dulkijah - Sewindu
const JAH_ALIP: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: JAH_PAT_JI,
};

const JAH_EHE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: JAH_JI_MO,
};

const JAH_JIMAWAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: JAH_NEM_MO,
};

const JAH_JE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: JAH_LU_PAT,
};

const JAH_DAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: JAH_TU_LU,
};

const JAH_BE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: JAH_MO_LU,
};

const JAH_WAWU: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: JAH_RO_RO,
};

const JAH_JIMAKIR: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_DULKIJAH),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: JAH_NEM_JI,
};

// Mapping Rumus abadi Dulkijah dengan Registry
const RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI: Map<symbol, WulanTaunType> =
  new Map();

RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI.set(_JAH_ALIP, JAH_ALIP);
RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI.set(_JAH_EHE, JAH_EHE);
RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI.set(_JAH_JIMAWAL, JAH_JIMAWAL);
RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI.set(_JAH_JE, JAH_JE);
RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI.set(_JAH_DAL, JAH_DAL);
RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI.set(_JAH_BE, JAH_BE);
RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI.set(_JAH_WAWU, JAH_WAWU);
RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI.set(_JAH_JIMAKIR, JAH_JIMAKIR);

export {
  RUMUS_APALAN_AWAL_BULAN_DULKIJAH_ABADI,
  _JAH_ALIP,
  _JAH_EHE,
  _JAH_JIMAWAL,
  _JAH_JE,
  _JAH_DAL,
  _JAH_BE,
  _JAH_WAWU,
  _JAH_JIMAKIR,
};
