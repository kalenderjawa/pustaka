/**
 * 📁dinten.js
 * @desc Araning Dinten Ing Jawa
 */

const _SENEN = "senen"
const _SELASA = "selasa"
const _REBO = "rebo"
const _KEMIS = "kemis"
const _JEMAH = "jemah"
const _SEBTU = "sebtu"
const _AKAD = "akad"

const SENEN = { dino: _SENEN, urutan: 1 }
const SELASA = { dino: _SELASA, urutan: 2 }
const REBO = { dino: _REBO, urutan: 3 }
const KEMIS = { dino: _KEMIS, urutan: 4 }
const JEMAH = { dino: _JEMAH, urutan: 5 }
const SEBTU = { dino: _SEBTU, urutan: 6 }
const AKAD = { dino: _AKAD, urutan: 7 }

const DINTEN = new Map()

DINTEN.set(_SENEN, SENEN)
DINTEN.set(_SELASA, SELASA)
DINTEN.set(_REBO, REBO)
DINTEN.set(_KEMIS, KEMIS)
DINTEN.set(_JEMAH, JEMAH)
DINTEN.set(_SEBTU, SEBTU)
DINTEN.set(_AKAD, AKAD)

export { _SENEN, _SELASA, _REBO, _KEMIS, _JEMAH, _SEBTU, _AKAD, DINTEN }