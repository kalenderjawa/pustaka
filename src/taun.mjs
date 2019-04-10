/**
 * 📁taun.mjs
 * @desc Araning Tahun Ing Dalem Sewindu
 */

const _ALIP = ['alip', 1]
const _EHE = ['ehe', 5]
const _JIMAWAL = ['jimawal', 3]
const _JE = ['je', 7]
const _DAL = ['dal', 4]
const _BE = ['be', 2]
const _WAWU = ['wawu', 6]
const _JIMAKIR = ['jimakir', 3]

const ALIP = new Map(_ALIP)
const EHE = new Map(_EHE)
const JIMAWAL = new Map(_JIMAWAL)
const JE = new Map(_JE)
const DAL = new Map(_DAL)
const BE = new Map(_BE)
const WAWU = new Map(_WAWU)
const JIMAKIR = new Map(_JIMAKIR)

const ARANING_TAHUN_SEWINDU = new Map()

ARANING_TAHUN_SEWINDU.set(1, _ALIP)
ARANING_TAHUN_SEWINDU.set(2, _EHE)
ARANING_TAHUN_SEWINDU.set(3, _JIMAWAL)
ARANING_TAHUN_SEWINDU.set(4, _JE)
ARANING_TAHUN_SEWINDU.set(5, _DAL)
ARANING_TAHUN_SEWINDU.set(6, _BE)
ARANING_TAHUN_SEWINDU.set(7, _WAWU)
ARANING_TAHUN_SEWINDU.set(8, JIMAKIR)

export default { ALIP, EHE, JIMAWAL, JE, DAL, BE, WAWU, JIMAKIR, ARANING_TAHUN_SEWINDU }
