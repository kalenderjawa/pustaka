/**
 * @flow
 *
 * 📁rumus_apalan_awal_bulan_mukarom_abadi.js
 * Rumus untuk bulan Mukarom selama 8 Tahun (Sewindu)
 *
 */

import type { WulanTaunType } from "./type.js";
import { _MUKAROM, ARANING_WULAN_SETAUN } from "./sasi.js";
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
const _ROM_ALIP = Symbol.for("rom_alip");
const _ROM_EHE = Symbol.for("rom_ehe");
const _ROM_JIMAWAL = Symbol.for("rom_jimawal");
const _ROM_JE = Symbol.for("rom_je");
const _ROM_DAL = Symbol.for("rom_dal");
const _ROM_BE = Symbol.for("rom_be");
const _ROM_WAWU = Symbol.for("rom_wawu");
const _ROM_JIMAKIR = Symbol.for("rom_jimakir");

// Rumus abadi Mukarom
const ROM_JI_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 1,
  pasaran: 1,
};

const ROM_MO_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 5,
  pasaran: 5,
};

const ROM_LU_MO = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 3,
  pasaran: 5,
};

const ROM_TU_PAT = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 7,
  pasaran: 4,
};

const ROM_PAT_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 4,
  pasaran: 3,
};

const ROM_RO_LU = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 2,
  pasaran: 3,
};

const ROM_NEM_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 6,
  pasaran: 2,
};

const ROM_LU_JI = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  dino: 3,
  pasaran: 1,
};

// Kunci Mukarom - Sewindu

const ROM_ALIP = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
  rumus: ROM_JI_JI,
};

const ROM_EHE = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  taun: ARANING_TAHUN_SEWINDU.get(_EHE),
  rumus: ROM_MO_MO,
};

const ROM_JIMAWAL = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL),
  rumus: ROM_LU_MO,
};

const ROM_JE = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  taun: ARANING_TAHUN_SEWINDU.get(_JE),
  rumus: ROM_TU_PAT,
};

const ROM_DAL = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  taun: ARANING_TAHUN_SEWINDU.get(_DAL),
  rumus: ROM_PAT_LU,
};

const ROM_BE = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  taun: ARANING_TAHUN_SEWINDU.get(_BE),
  rumus: ROM_RO_LU,
};

const ROM_WAWU = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  taun: ARANING_TAHUN_SEWINDU.get(_WAWU),
  rumus: ROM_NEM_RO,
};

const ROM_JIMAKIR = {
  wulan: ARANING_WULAN_SETAUN.get(_MUKAROM),
  taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR),
  rumus: ROM_LU_JI,
};

// Mapping Rumus abadi Mukarom dengan Registry
const RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI: Map<symbol,WulanTaunType> = new Map();

RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI.set(_ROM_ALIP, ROM_ALIP);
RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI.set(_ROM_EHE, ROM_EHE);
RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI.set(_ROM_JIMAWAL, ROM_JIMAWAL);
RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI.set(_ROM_JE, ROM_JE);
RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI.set(_ROM_DAL, ROM_DAL);
RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI.set(_ROM_BE, ROM_BE);
RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI.set(_ROM_WAWU, ROM_WAWU);
RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI.set(_ROM_JIMAKIR, ROM_JIMAKIR);

export {
  RUMUS_APALAN_AWAL_BULAN_MUKAROM_ABADI,
  _ROM_ALIP,
  _ROM_EHE,
  _ROM_JIMAWAL,
  _ROM_JE,
  _ROM_DAL,
  _ROM_BE,
  _ROM_WAWU,
  _ROM_JIMAKIR,
};
