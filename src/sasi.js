/**
 * @flow
 *
 * 📁wulan.js
 * @desc Araning Wulan Ing Setaun
 */

import type { WulanType } from './type.js'

/**
 * @constant
 * @type {Symbol}
 */
const _MUKAROM = Symbol.for('mukarom')
const _SAPAR = Symbol.for('sapar')
const _ROBIULAWAL = Symbol.for('robiulawal')
const _ROBIULAKIR = Symbol.for('robiulakir')
const _JUMADILAWAL = Symbol.for('jumadilawal')
const _JUMADILAKIR = Symbol.for('jumadilakir')
const _ROJAB = Symbol.for('rojab')
const _SAKBAN = Symbol.for('sakban')
const _ROMADON = Symbol.for('romadon')
const _SAWAL = Symbol.for('sawal')
const _DULKODAH = Symbol.for('dulkodah')
const _DULKIJAH = Symbol.for('dulkijah')

const MUKAROM = { wulan: 'mukarom', celukan: 'rom', urutan: 1, cacah: [30] }
const SAPAR = { wulan: 'sapar', celukan: 'par', urutan: 2 }
const ROBIULAWAL = { wulan: 'robiulawal', celukan: 'rowal', urutan: 3 }
const ROBIULAKIR = { wulan: 'robiulakir', celukan: 'rokir', urutan: 4 }
const JUMADILAWAL = { wulan: 'jumadilawal', celukan: 'juwal', urutan: 5 }
const JUMADILAKIR = { wulan: 'jumadilakir', celukan: 'jukir', urutan: 6 }
const ROJAB = { wulan: 'rojab', celukan: 'jab', urutan: 7 }
const SAKBAN = { wulan: 'sakban', celukan: 'ban', urutan: 8 }
const ROMADON = { wulan: 'romadon', celukan: 'don', urutan: 9 }
const SAWAL = { wulan: 'sawal', celukan: 'wal', urutan: 10 }
const DULKODAH = { wulan: 'dulkodah', celukan: 'dah', urutan: 11 }
const DULKIJAH = { wulan: 'dulkijah', celukan: 'jah', urutan: 12 }

const ARANING_WULAN_SETAUN: Map<Symbol, WulanType> = new Map()

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
