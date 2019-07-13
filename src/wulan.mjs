/**
 * 📁wulan.mjs
 * @desc Araning Wulan Ing Setaun
 */

/**
 * @constant
 * @type {Symbol}
 */
const _MUKAROM = Symbol.for("mukarom")
const _SAPAR = Symbol.for("sapar")
const _ROBIULAWAL = Symbol.for("robiulawal")
const _ROBIULAKIR = Symbol.for("robiulakir")
const _JUMADILAWAL = Symbol.for("jumadilawal")
const _JUMADILAKIR = Symbol.for("jumadilakir")
const _ROJAB = Symbol.for("rojab")
const _SAKBAN = Symbol.for("sakban")
const _ROMADON = Symbol.for("romadon")
const _SAWAL = Symbol.for("sawal")
const _DULKODAH = Symbol.for("dulkodah")
const _DULKIJAH = Symbol.for("dulkijah")


const MUKAROM = { wulan: "mukarom", celukan: "rom", urutan: 1 }
const SAPAR = { wulan: "sapar", celukan: "par", urutan: 2 }
const ROBIULAWAL = { wulan: _ROBIULAWAL, celukan: "rowal", urutan: 3 }
const ROBIULAKIR = { wulan: _ROBIULAKIR, celukan: "rokir", urutan: 4 }
const JUMADILAWAL = { wulan: _JUMADILAWAL, celukan: "juwal", urutan: 5 }
const JUMADILAKIR = { wulan: _JUMADILAKIR, celukan: "jukir", urutan: 6 }
const ROJAB = { wulan: _ROJAB, celukan: "jab", urutan: 7 }
const SAKBAN = { wulan: _SAKBAN, celukan: "ban", urutan: 8 }
const ROMADON = { wulan: "romadon", celukan: "don", urutan: 9 }
const SAWAL = { wulan: _SAWAL, celukan: "wal", urutan: 10 }
const DULKODAH = { wulan: _DULKODAH, celukan: "dah", urutan: 11 }
const DULKIJAH = { wulan: _DULKIJAH, celukan: "jah", urutan: 12 }

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

export {
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
}
