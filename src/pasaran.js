/**
 * @flow
 * 📁pasaran.js
 * @desc Pasaran & Neptu
 */

import type { PasaranType } from './type.js'

const _LEGI = Symbol.for('legi')
const _PAHING = Symbol.for('pahing')
const _PON = Symbol.for('pon')
const _WAGE = Symbol.for('wage')
const _KLIWON = Symbol.for('kliwon')

/**
 * @const PasaranType
 */
const LEGI = { pasaran: 'legi', neptu: 5, urutan: 1 }
const PAHING = { pasaran: 'pahing', neptu: 9, urutan: 2 }
const PON = { pasaran: 'pon', neptu: 7, urutan: 3 }
const WAGE = { pasaran: 'wage', neptu: 4, urutan: 4 }
const KLIWON = { pasaran: 'kliwon', neptu: 8, urutan: 5 }

const PASARAN = new Map()

PASARAN.set(_LEGI, LEGI)
PASARAN.set(_PAHING, PAHING)
PASARAN.set(_PON, PON)
PASARAN.set(_WAGE, WAGE)
PASARAN.set(_KLIWON, KLIWON)

export { _LEGI, _PAHING, _PON, _WAGE, _KLIWON, PASARAN }
