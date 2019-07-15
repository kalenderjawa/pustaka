/**
 * 📁rumus_apalan_awal_taun_sawal_abadi.js
 */

import {
    _MUKAROM,
    _SAPAR,
    _ROBIULAWAL,
    _ROBIULAKIR,
    _JUMADILAWAL,
    _JUMADILAKIR,
    _ROJAB,
    _SAKBAN,
    _ROMADON,
    _SAWAL,
    _DULKODAH,
    _DULKIJAH,
    ARANING_WULAN_SETAUN
} from './wulan.js'

import { _ALIP, _EHE, _JIMAWAL, _JE, _DAL, _BE, _WAWU, _JIMAKIR, ARANING_TAHUN_SEWINDU } from './taun.js'
import { _SENEN, _SELASA, _REBO, _KEMIS, _JEMAH, _SEBTU, _AKAD, DINTEN } from './dinten.js'

const _WAL_ALIP = Symbol.for("wal_alip")
const _WAL_EHE = Symbol.for("wal_ehe")
const _WAL_JIMAWAL = Symbol.for("wal_jimawal")
const _WAL_JE = SYmbol.for("wal_je")
const _WAL_DAL = Symbol.for("wal_dal")