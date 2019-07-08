/**
 * 📁pasaran.mjs
 * @desc Pasaran & Neptu
 */
const _LEGI = 'legi'
const _PAHING = 'pahing'
const _PON = 'pon'
const _WAGE = 'wage'
const _KLIWON = 'kliwon'

const LEGI = { pasaran: _LEGI, neptu: 5, urutan: 1 }
const PAHING = { pasaran: _PAHING, neptu: 9, urutan: 2 }
const PON = { pasaran: _PON, neptu: 7, urutan: 3 }
const WAGE = { pasaran: _WAGE, neptu: 4, urutan: 4 }
const KLIWON = { pasaran: _KLIWON, neptu: 8, urutan: 5 }

const PASARAN = new Map()

PASARAN.set(_LEGI, LEGI)
PASARAN.set(_PAHING, PAHING)
PASARAN.set(_PON, PON)
PASARAN.set(_WAGE, WAGE)
PASARAN.set(_KLIWON, KLIWON)

export { _LEGI, _PAHING, _PON, _WAGE, _KLIWON, PASARAN }
