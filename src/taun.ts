/**
 * 📁taun.ts
 * @desc Araning Tahun Ing Dalem Sewindu
 */

import type { TaunType } from "./types.js";

const _ALIP = Symbol.for("alip");
const _EHE = Symbol.for("ehe");
const _JIMAWAL = Symbol.for("jimawal");
const _JE = Symbol.for("je");
const _DAL = Symbol.for("dal");
const _BE = Symbol.for("be");
const _WAWU = Symbol.for("wawu");
const _JIMAKIR = Symbol.for("jimakir");

const ALIP: TaunType = { taun: "alip", neptu: 1, urutan: 1, cacah: 354 };
const EHE: TaunType = { taun: "ehe", neptu: 5, urutan: 2, cacah: 355 };
const JIMAWAL: TaunType = { taun: "jimawal", neptu: 3, urutan: 3, cacah: 354 };
const JE: TaunType = { taun: "je", neptu: 7, urutan: 4, cacah: 354 };
const DAL: TaunType = { taun: "dal", neptu: 4, urutan: 5, cacah: 355 };
const BE: TaunType = { taun: "be", neptu: 2, urutan: 6, cacah: 354 };
const WAWU: TaunType = { taun: "wawu", neptu: 6, urutan: 7, cacah: 354 };
const JIMAKIR: TaunType = { taun: "jimakir", neptu: 3, urutan: 8, cacah: 355 };

const TAHUN_ARR: TaunType[] = [ALIP, EHE, JIMAWAL, JE, DAL, BE, WAWU, JIMAKIR];
const ARANING_TAHUN_SEWINDU: Map<symbol, TaunType> = new Map();

ARANING_TAHUN_SEWINDU.set(_ALIP, ALIP);
ARANING_TAHUN_SEWINDU.set(_EHE, EHE);
ARANING_TAHUN_SEWINDU.set(_JIMAWAL, JIMAWAL);
ARANING_TAHUN_SEWINDU.set(_JE, JE);
ARANING_TAHUN_SEWINDU.set(_DAL, DAL);
ARANING_TAHUN_SEWINDU.set(_BE, BE);
ARANING_TAHUN_SEWINDU.set(_WAWU, WAWU);
ARANING_TAHUN_SEWINDU.set(_JIMAKIR, JIMAKIR);

export {
  _ALIP,
  _EHE,
  _JIMAWAL,
  _JE,
  _DAL,
  _BE,
  _WAWU,
  _JIMAKIR,
  ARANING_TAHUN_SEWINDU,
  TAHUN_ARR,
};
