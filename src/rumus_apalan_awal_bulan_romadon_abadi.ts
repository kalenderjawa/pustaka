/**
 * 📁rumus_apalan_awal_bulan_romadon_abadi.ts
 * Rumus untuk bulan Romadon selama 8 Tahun (Sewindu)
 */

import type { WulanTaunType } from "./types.js";
import { _ROMADON, ARANING_WULAN_SETAUN } from "./sasi.ts";
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

// Registry Wulan Romadon Sewindu (8 Taun)
const _DON_ALIP = Symbol.for("don_alip");
const _DON_EHE = Symbol.for("don_ehe");
const _DON_JIMAWAL = Symbol.for("don_jimawal");
const _DON_JE = Symbol.for("don_je");
const _DON_DAL = Symbol.for("don_dal");
const _DON_BE = Symbol.for("don_be");
const _DON_WAWU = Symbol.for("don_wawu");
const _DON_JIMAKIR = Symbol.for("don_jimakir");

// Rumus Matematis

/**
 * Don Nem Ro - Romadon Enem Loro
 */
const DON_NEM_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  dino: 6,
  pasaran: 2,
};

const DON_LU_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  dino: 3,
  pasaran: 1,
};

const DON_JI_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  dino: 1,
  pasaran: 1,
};

const DON_MO_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  dino: 5,
  pasaran: 5,
};

const DON_RO_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  dino: 2,
  pasaran: 4,
};

/**
 * Don Tu Pat - Romadon Pitu Papat
 * Wulan Romadon Dino ke-Pitu (7) Pasaran ke-papat (4)
 */
const DON_TU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  dino: 7,
  pasaran: 4,
};

const DON_PAT_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  dino: 4,
  pasaran: 3,
};

const DON_JI_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  dino: 1,
  pasaran: 2,
};

/**
 * Don Alip -> Don Nem Ro
 * Wulan Romadon Taun Alip
 */
const DON_ALIP: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: DON_NEM_RO,
};

/**
 * Don Ehe -> Don Lu Ji
 * Wulan Romadon Taun Ehe
 */
const DON_EHE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: DON_LU_JI,
};

/**
 * Don Jimawal -> Don Ji Ji
 * Wulan Romadon Taun Jimawal
 */
const DON_JIMAWAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: DON_JI_JI,
};

/**
 * Don Je -> Don Mo Mo
 * Wulan Romadon Taun Je
 */
const DON_JE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: DON_MO_MO,
};

/**
 * Don Dal -> Don Ro Pat
 * Wulan Romadon Taun Dal
 */
const DON_DAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: DON_RO_PAT,
};

/**
 * Don Be -> Don Tu Pat
 * Wulan Romadon Taun Be
 */
const DON_BE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: DON_TU_PAT,
};

/**
 * Don Wawu -> Don Pat Lu
 * Wulan Romadon Taun Wawu
 */
const DON_WAWU: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: DON_PAT_LU,
};

/**
 * Don Jimakir -> Don Ji Ro
 * Wulan Romadon Taun Jimakir
 */
const DON_JIMAKIR: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: DON_JI_RO,
};

// Mapping
const RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI: Map<symbol, WulanTaunType> =
  new Map();

RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI.set(_DON_ALIP, DON_ALIP);
RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI.set(_DON_EHE, DON_EHE);
RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI.set(_DON_JIMAWAL, DON_JIMAWAL);
RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI.set(_DON_JE, DON_JE);
RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI.set(_DON_DAL, DON_DAL);
RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI.set(_DON_BE, DON_BE);
RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI.set(_DON_WAWU, DON_WAWU);
RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI.set(_DON_JIMAKIR, DON_JIMAKIR);

export {
  RUMUS_APALAN_AWAL_BULAN_ROMADON_ABADI,
  _DON_ALIP,
  _DON_BE,
  _DON_DAL,
  _DON_EHE,
  _DON_JE,
  _DON_JIMAKIR,
  _DON_JIMAWAL,
  _DON_WAWU,
};
