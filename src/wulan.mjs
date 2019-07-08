/**
 * 📁wulan.mjs
 * @desc Araning Wulan Ing Setaun
 */

const _MUKAROM = "mukarom"
const _SAPAR = "sapar"
const _ROBIULAWAL = "robiulawal"
const _ROBIULAKIR = "robiulakir"
const _JUMADILAWAL = "jumadilawal"
const _JUMADILAKIR = "jumadilakir"
const _ROJAB = "rojab"
const _SAKBAN = "sakban"
const _ROMADON = "romadon"
const _SAWAL = "sawal"
const _DULKODAH = "dulkodah"
const _DULKIJAH = "dulkijah"

const MUKAROM = { wulan: _MUKAROM, urutan: 1 }
const SAPAR = { wulan: _SAPAR, urutan: 2 }
const ROBIULAWAL = { wulan: _ROBIULAWAL, urutan: 3 }
const ROBIULAKIR = { wulan: _ROBIULAKIR, urutan: 4 }
const JUMADILAWAL = { wulan: _JUMADILAWAL, urutan: 5 }
const JUMADILAKIR = { wulan: _JUMADILAKIR, urutan: 6 }
const ROJAB = { wulan: _ROJAB, urutan: 7 }
const SAKBAN = { wulan: _SAKBAN, urutan: 8 }
const ROMADON = { wulan: _ROMADON, urutan: 9 }
const SAWAL = { wulan: _SAWAL, urutan: 10 }
const DULKODAH = { wulan: _DULKODAH, urutan: 11 }
const DULKIJAH = { wulan: _DULKIJAH, urutan: 12 }

const ARANING_WULAN_SETAUN = new Map()

ARANING_WULAN_SETAUN.set(_MUKAROM, MUKAROM)
ARANING_WULAN_SETAUN.set(_SAPAR, SAPAR)
ARANING_WULAN_SETAUN.set(_ROBIULAWAL, ROBIULAWAL)
ARANING_WULAN_SETAUN.set(_ROBIULAKIR, ROBIULAKIR)
ARANING_WULAN_SETAUN.set(_JUMADILAWAL, JUMADILAWAL)
ARANING_WULAN_SETAUN.set(_JUMADILAKIR, JUMADILAKIR)
ARANING_WULAN_SETAUN.set(_ROJAB, ROJAB)
ARANING_WULAN_SETAUN.set(_SAKBAN, SAKBAN)
ARANING_WULAN_SETAUN.set(_ROMADON, ROMADON)
ARANING_WULAN_SETAUN.set(_SAWAL, SAWAL)
ARANING_WULAN_SETAUN.set(_DULKODAH, DULKODAH)
ARANING_WULAN_SETAUN.set(_DULKIJAH, DULKIJAH)

export default { MUKAROM, SAPAR, ROBIULAWAL, ROBIULAKIR, JUMADILAWAL, JUMADILAKIR, ROJAB, SAKBAN, ROMADON, SAWAL, DULKODAH, DULKIJAH, ARANING_WULAN_SETAUN }