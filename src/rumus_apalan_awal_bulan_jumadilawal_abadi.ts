/**
 * 📁rumus_apalan_awal_bulan_jumadilawal_abadi.ts
 * Rumus untuk bulan Jumadilawal selama 8 Tahun (Sewindu)
 */

import type { WulanTaunType } from "./types.js";
import { _JUMADILAWAL, ARANING_WULAN_SETAUN } from "./sasi.js";
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

// Registry
const _JUWAL_ALIP = Symbol.for("juwal_alip");
const _JUWAL_EHE = Symbol.for("juwal_ehe");
const _JUWAL_JIMAWAL = Symbol.for("juwal_jimawal");
const _JUWAL_JE = Symbol.for("juwal_je");
const _JUWAL_DAL = Symbol.for("juwal_dal");
const _JUWAL_BE = Symbol.for("juwal_be");
const _JUWAL_WAWU = Symbol.for("juwal_wawu");
const _JUWAL_JIMAKIR = Symbol.for("juwal_jimakir");

// Rumus matematis
const JUWAL_TU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  dino: 7,
  pasaran: 4,
};

const JUWAL_PAT_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  dino: 4,
  pasaran: 3,
};

const JUWAL_RO_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  dino: 2,
  pasaran: 3,
};

const JUWAL_NEM_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  dino: 6,
  pasaran: 2,
};

const JUWAL_LU_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  dino: 3,
  pasaran: 1,
};

const JUWAL_JI_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  dino: 1,
  pasaran: 1,
};

const JUWAL_MO_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  dino: 5,
  pasaran: 5,
};

const JUWAL_RO_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  dino: 2,
  pasaran: 4,
};

// Kunci Jumadilawal - Sewindu
const JUWAL_ALIP: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: JUWAL_TU_PAT,
};

const JUWAL_EHE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: JUWAL_PAT_LU,
};

const JUWAL_JIMAWAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: JUWAL_RO_LU,
};

const JUWAL_JE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: JUWAL_NEM_RO,
};

const JUWAL_DAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: JUWAL_LU_JI,
};

const JUWAL_BE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: JUWAL_JI_JI,
};

const JUWAL_WAWU: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: JUWAL_MO_MO,
};

const JUWAL_JIMAKIR: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAWAL),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: JUWAL_RO_PAT,
};

//
const RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI: Map<symbol, WulanTaunType> =
  new Map();

RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI.set(_JUWAL_ALIP, JUWAL_ALIP);
RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI.set(_JUWAL_EHE, JUWAL_EHE);
RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI.set(_JUWAL_JIMAWAL, JUWAL_JIMAWAL);
RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI.set(_JUWAL_JE, JUWAL_JE);
RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI.set(_JUWAL_DAL, JUWAL_DAL);
RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI.set(_JUWAL_BE, JUWAL_BE);
RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI.set(_JUWAL_WAWU, JUWAL_WAWU);
RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI.set(_JUWAL_JIMAKIR, JUWAL_JIMAKIR);

export {
  RUMUS_APALAN_AWAL_BULAN_JUMADILAWAL_ABADI,
  _JUWAL_ALIP,
  _JUWAL_EHE,
  _JUWAL_JIMAWAL,
  _JUWAL_JE,
  _JUWAL_DAL,
  _JUWAL_BE,
  _JUWAL_WAWU,
  _JUWAL_JIMAKIR,
};
