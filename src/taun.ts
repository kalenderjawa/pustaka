/**
 * 📁taun.ts
 * @desc Araning Tahun Ing Dalem Sewindu
 */

import type { TaunType } from './types.js';

const _ALIP = Symbol.for('alip');
const _EHE = Symbol.for('ehe');
const _JIMAWAL = Symbol.for('jimawal');
const _JE = Symbol.for('je');
const _DAL = Symbol.for('dal');
const _BE = Symbol.for('be');
const _WAWU = Symbol.for('wawu');
const _JIMAKIR = Symbol.for('jimakir');

const ALIP: TaunType = { taun: 'alip', neptu: 1, urutan: 1, cacah: 354 };
Object.freeze(ALIP);
const EHE: TaunType = { taun: 'ehe', neptu: 5, urutan: 2, cacah: 355 };
Object.freeze(EHE);
const JIMAWAL: TaunType = { taun: 'jimawal', neptu: 3, urutan: 3, cacah: 354 };
Object.freeze(JIMAWAL);
const JE: TaunType = { taun: 'je', neptu: 7, urutan: 4, cacah: 354 };
Object.freeze(JE);
const DAL: TaunType = { taun: 'dal', neptu: 4, urutan: 5, cacah: 355 };
Object.freeze(DAL);
const BE: TaunType = { taun: 'be', neptu: 2, urutan: 6, cacah: 354 };
Object.freeze(BE);
const WAWU: TaunType = { taun: 'wawu', neptu: 6, urutan: 7, cacah: 354 };
Object.freeze(WAWU);
const JIMAKIR: TaunType = { taun: 'jimakir', neptu: 3, urutan: 8, cacah: 355 };
Object.freeze(JIMAKIR);

const TAHUN_ARR: ReadonlyArray<TaunType> = Object.freeze([
  ALIP,
  EHE,
  JIMAWAL,
  JE,
  DAL,
  BE,
  WAWU,
  JIMAKIR,
]);
const _ARANING_TAHUN_SEWINDU: Map<symbol, TaunType> = new Map();

_ARANING_TAHUN_SEWINDU.set(_ALIP, ALIP);
_ARANING_TAHUN_SEWINDU.set(_EHE, EHE);
_ARANING_TAHUN_SEWINDU.set(_JIMAWAL, JIMAWAL);
_ARANING_TAHUN_SEWINDU.set(_JE, JE);
_ARANING_TAHUN_SEWINDU.set(_DAL, DAL);
_ARANING_TAHUN_SEWINDU.set(_BE, BE);
_ARANING_TAHUN_SEWINDU.set(_WAWU, WAWU);
_ARANING_TAHUN_SEWINDU.set(_JIMAKIR, JIMAKIR);

const ARANING_TAHUN_SEWINDU: ReadonlyMap<symbol, TaunType> = _ARANING_TAHUN_SEWINDU;

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
