/**
 * 📁taun.mjs
 * @desc Araning Tahun Ing Dalem Sewindu
 */

const _ALIP = 'alip'
const _EHE = 'ehe'
const _JIMAWAL = 'jimawal'
const _JE = 'je'
const _DAL = 'dal'
const _BE = 'be'
const _WAWU = 'wawu'
const _JIMAKIR = 'jimakir'

const ALIP = { taun: _ALIP, neptu: 1, urutan: 1 }
const EHE = { taun: _EHE, neptu: 5, urutan: 2 }
const JIMAWAL = { taun: _JIMAWAL, neptu: 3, urutan: 3 }
const JE = { taun: _JE, neptu: 7, urutan: 4 }
const DAL = { taun: _DAL, neptu: 4, urutan: 5 }
const BE = { taun: _BE, neptu: 2, urutan: 6 }
const WAWU = { taun: _WAWU, neptu: 6, urutan: 7 }
const JIMAKIR = { taun: _JIMAKIR, neptu: 3, urutan: 8 }

const ARANING_TAHUN_SEWINDU = new Map()

ARANING_TAHUN_SEWINDU.set(_ALIP, ALIP)
ARANING_TAHUN_SEWINDU.set(_EHE, EHE)
ARANING_TAHUN_SEWINDU.set(_JIMAWAL, JIMAWAL)
ARANING_TAHUN_SEWINDU.set(_JE, JE)
ARANING_TAHUN_SEWINDU.set(_DAL, DAL)
ARANING_TAHUN_SEWINDU.set(_BE, BE)
ARANING_TAHUN_SEWINDU.set(_WAWU, WAWU)
ARANING_TAHUN_SEWINDU.set(_JIMAKIR, JIMAKIR)

export default { ALIP, EHE, JIMAWAL, JE, DAL, BE, WAWU, JIMAKIR, ARANING_TAHUN_SEWINDU }
