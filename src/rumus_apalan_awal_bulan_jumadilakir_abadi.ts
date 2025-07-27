/**
 * 📁rumus_apalan_awal_bulan_jumadilakir_abadi.ts
 * Rumus untuk bulan Jumadilakir selama 8 Tahun (Sewindu)
 */

import type { WulanTaunType } from "./types.js";
import { _JUMADILAKIR, ARANING_WULAN_SETAUN } from "./sasi.ts";
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
} from "./taun.ts";

// Registry
const _JUKIR_ALIP = Symbol.for("jukir_alip");
const _JUKIR_EHE = Symbol.for("jukir_ehe");
const _JUKIR_JIMAWAL = Symbol.for("jukir_jimawal");
const _JUKIR_JE = Symbol.for("jukir_je");
const _JUKIR_DAL = Symbol.for("jukir_dal");
const _JUKIR_BE = Symbol.for("jukir_be");
const _JUKIR_WAWU = Symbol.for("jukir_wawu");
const _JUKIR_JIMAKIR = Symbol.for("jukir_jimakir");

// Rumus Matematis
const JUKIR_RO_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  dino: 2,
  pasaran: 4,
};

const JUKIR_NEM_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  dino: 6,
  pasaran: 3,
};

const JUKIR_PAT_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  dino: 4,
  pasaran: 3,
};

const JUKIR_JI_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  dino: 1,
  pasaran: 2,
};

const JUKIR_MO_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  dino: 5,
  pasaran: 1,
};

const JUKIR_LU_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  dino: 3,
  pasaran: 1,
};

const JUKIR_TU_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  dino: 7,
  pasaran: 5,
};

const JUKIR_PAT_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  dino: 4,
  pasaran: 4,
};

// Kunci Jumadilakir - Sewindu
const JUKIR_ALIP: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: JUKIR_RO_PAT,
};

const JUKIR_EHE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: JUKIR_NEM_LU,
};

const JUKIR_JIMAWAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: JUKIR_PAT_LU,
};

const JUKIR_JE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: JUKIR_JI_RO,
};

const JUKIR_DAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: JUKIR_MO_JI,
};

const JUKIR_BE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: JUKIR_LU_JI,
};

const JUKIR_WAWU: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: JUKIR_TU_MO,
};

const JUKIR_JIMAKIR: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_JUMADILAKIR),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: JUKIR_PAT_PAT,
};

// Mapping
const RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI: Map<symbol, WulanTaunType> =
  new Map();

RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI.set(_JUKIR_ALIP, JUKIR_ALIP);
RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI.set(_JUKIR_EHE, JUKIR_EHE);
RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI.set(_JUKIR_JIMAWAL, JUKIR_JIMAWAL);
RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI.set(_JUKIR_JE, JUKIR_JE);
RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI.set(_JUKIR_DAL, JUKIR_DAL);
RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI.set(_JUKIR_BE, JUKIR_BE);
RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI.set(_JUKIR_WAWU, JUKIR_WAWU);
RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI.set(_JUKIR_JIMAKIR, JUKIR_JIMAKIR);

export {
  RUMUS_APALAN_AWAL_BULAN_JUMADILAKIR_ABADI,
  _JUKIR_ALIP,
  _JUKIR_EHE,
  _JUKIR_JIMAWAL,
  _JUKIR_JE,
  _JUKIR_DAL,
  _JUKIR_BE,
  _JUKIR_WAWU,
  _JUKIR_JIMAKIR,
};
