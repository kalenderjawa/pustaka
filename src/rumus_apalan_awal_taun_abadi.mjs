/**
 * 📁rumus_apalan_awal_taun_abadi.mjs
 */

import { _MUKAROM, _SAPAR, _ROBIULAWAL, _ROBIULAKIR, _JUMADILAWAL, _JUMADILAKIR, _ROJAB, _SAKBAN, _ROMADON, _SAWAL, _DULKODAH, _DULKIJAH, ARANING_WULAN_SETAUN
} from './wulan.mjs'
import { _ALIP, _EHE, _JIMAWAL, _JE, _DAL, _BE, _WAWU, _JIMAKIR, ARANING_TAHUN_SEWINDU } from './taun.mjs'
import { _SENEN, _SELASA, _REBO, _KEMIS, _JEMAH, _SEBTU, _AKAD, DINTEN } from './dinten.mjs'

// Wulan Romadon Sewindu (8 Taun)
const ROM_ALIP = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_ALIP)
}

const ROM_EHE = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_EHE)
}

const ROM_JIMAWAL = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_JIMAWAL)
}

const ROM_JE = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_JE)
}

const ROM_DAL = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_DAL)
}

/**
 * Rom Be 
 * Romadon Be - Wulan Romadon Taun Be
 */
const ROM_BE = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_BE)
}

const ROM_WAWU = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_WAWU)
}

const ROM_JIMAKIR = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    taun: ARANING_TAHUN_SEWINDU.get(_JIMAKIR)
}


// Rumus Matematis

/**
 * Don Tu Pat - Romadon Pitu Papat
 * Wulan Romadon Dino ke-Pitu (7) Pasaran ke-papat (4) 
 */
const DON_TU_PAT = {
    wulan: ARANING_WULAN_SETAUN.get(_ROMADON),
    dino: 7,
    pasaran: 4
}

const RUMUS_APALAN_AWAL_TAUN_ABADI = new Map()

RUMUS_APALAN_AWAL_TAUN_ABADI.set(ROM_BE, DON_TU_PAT)