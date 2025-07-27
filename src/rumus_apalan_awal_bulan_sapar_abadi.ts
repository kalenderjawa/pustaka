/**
 * 📁rumus_apalan_awal_bulan_sapar_abadi.ts
 * Rumus untuk bulan Sapar selama 8 Tahun (Sewindu)
 */

import type { WulanTaunType } from "./types.js";
import { _SAPAR, ARANING_WULAN_SETAUN } from "./sasi.ts";
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
const _PAR_ALIP = Symbol.for("par_alip");
const _PAR_EHE = Symbol.for("par_ehe");
const _PAR_JIMAWAL = Symbol.for("par_jimawal");
const _PAR_JE = Symbol.for("par_je");
const _PAR_DAL = Symbol.for("par_dal");
const _PAR_BE = Symbol.for("par_be");
const _PAR_WAWU = Symbol.for("par_wawu");
const _PAR_JIMAKIR = Symbol.for("par_jimakir");

// Rumus abadi Sapar
const PAR_RO_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 2,
  pasaran: 2,
};

const PAR_NEM_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 6,
  pasaran: 1,
};

const PAR_PAT_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 4,
  pasaran: 1,
};

const PAR_JI_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 1,
  pasaran: 5,
};

const PAR_MO_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 5,
  pasaran: 4,
};

const PAR_LU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 3,
  pasaran: 4,
};

const PAR_TU_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 7,
  pasaran: 3,
};

const PAR_PAT_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  dino: 4,
  pasaran: 2,
};

// Kunci Sapar - Sewindu

const PAR_ALIP: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: PAR_RO_RO,
};

const PAR_EHE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: PAR_NEM_JI,
};

const PAR_JIMAWAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: PAR_PAT_JI,
};

const PAR_JE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: PAR_JI_MO,
};

const PAR_DAL: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: PAR_MO_PAT,
};

const PAR_BE: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: PAR_LU_PAT,
};

const PAR_WAWU: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: PAR_TU_LU,
};

const PAR_JIMAKIR: WulanTaunType = {
  wulan: ARANING_WULAN_SETAUN.get(_SAPAR),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: PAR_PAT_RO,
};

// Mapping Rumus abadi Sapar dengan Registry
const RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI: Map<symbol, WulanTaunType> = new Map();

RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_ALIP, PAR_ALIP);
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_EHE, PAR_EHE);
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_JIMAWAL, PAR_JIMAWAL);
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_JE, PAR_JE);
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_DAL, PAR_DAL);
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_BE, PAR_BE);
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_WAWU, PAR_WAWU);
RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI.set(_PAR_JIMAKIR, PAR_JIMAKIR);

export {
  RUMUS_APALAN_AWAL_BULAN_SAPAR_ABADI,
  _PAR_ALIP,
  _PAR_EHE,
  _PAR_JIMAWAL,
  _PAR_JE,
  _PAR_DAL,
  _PAR_BE,
  _PAR_WAWU,
  _PAR_JIMAKIR,
};
