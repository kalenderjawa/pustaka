/**
 * 📁rumus_apalan_awal_taun_abadi.js
 */

import { _MUKAROM, _SAPAR, _ROBIULAWAL, _ROBIULAKIR, _JUMADILAWAL, _JUMADILAKIR, _ROJAB, _SAKBAN, _ROMADON, _SAWAL, _DULKODAH, _DULKIJAH, ARANING_WULAN_SETAUN
} from './wulan.js'
import { _ALIP, _EHE, _JIMAWAL, _JE, _DAL, _BE, _WAWU, _JIMAKIR, ARANING_TAHUN_SEWINDU } from './taun.js'
import { _SENEN, _SELASA, _REBO, _KEMIS, _JEMAH, _SEBTU, _AKAD, DINTEN } from './dinten.js'


// Rumus Matematis

/**
 * Don Nem Ro - Romadon Enem Loro
 */
const DON_NEM_RO = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    dino: 6,
    pasaran: 2
}

/**
 * Don Tu Pat - Romadon Pitu Papat
 * Wulan Romadon Dino ke-Pitu (7) Pasaran ke-papat (4) 
 */
const DON_TU_PAT = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    dino: 7,
    pasaran: 4
}


// Wulan Romadon Sewindu (8 Taun)
let _DON_BE = Symbol.for("don_be")
let _DON_ALIP = Symbol.for("don_alip")
/**
 * Don Alip
 * Wulan Romadon Taun Alip
 */
const DON_ALIP = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_ALIP),
    rumus: DON_NEM_RO
}

/**
 * Don Ehe
 * Wulan Romadon Taun Ehe
 */
const DON_EHE = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_EHE)
}

/**
 * Don Jimawal
 * Wulan Romadon Taun Jimawal
 */
const DON_JIMAWAL = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL)
}

/**
 * Don Je
 * Wulan Romadon Taun Je
 */
const DON_JE = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_JE)
}

/**
 * Don Dal
 * Wulan Romadon Taun Dal
 */
const DON_DAL = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_DAL)
}

/**
 * Don Be 
 * Wulan Romadon Taun Be
 */
const DON_BE = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_BE),
    rumus: DON_TU_PAT
}

/**
 * Don Wawu
 * Wulan Romadon Taun Wawu
 */
const DON_WAWU = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_WAWU)
}

/**
 * Don Jimakir
 * Wulan Romadon Taun Jimakir
 */
const DON_JIMAKIR = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR)
}

const RUMUS_APALAN_AWAL_TAUN_ABADI = new Map()

RUMUS_APALAN_AWAL_TAUN_ABADI.set(_DON_BE, DON_BE)
RUMUS_APALAN_AWAL_TAUN_ABADI.set(_DON_ALIP, DON_ALIP)

export { RUMUS_APALAN_AWAL_TAUN_ABADI }