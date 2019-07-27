/**
 * 📁angka.js
 * Angka Rumus Itung
 */

const _SIJI = 'siji' // 1
const _LORO = 'loro' // 2
const _TELU = 'telu' // 3
const _PAPAT = 'papat' // 4
const _LIMO = 'limo' // 5
const _ENEM = 'enem' // 6
const _PITU = 'pitu' // 7

const SIJI = { angka: _SIJI, celukan: 'ji', abot: 1 }
const LORO = { angka: _LORO, celukan: 'ro', abot: 2 }
const TELU = { angka: _TELU, celukan: 'lu', abot: 3 }
const PAPAT = { angka: _PAPAT, celukan: 'pat', abot: 4 }
const LIMO = { angka: _LIMO, celukan: 'mo', abot: 5 }
const ENEM = { angka: _ENEM, celukan: 'nem', abot: 6 }
const PITU = { angka: _PITU, celukan: 'tu', abot: 7 }

const ANGKA_RUMUS_ITUNG = new Map()

ANGKA_RUMUS_ITUNG.set(_SIJI, SIJI)
ANGKA_RUMUS_ITUNG.set(_LORO, LORO)
ANGKA_RUMUS_ITUNG.set(_TELU, TELU)
ANGKA_RUMUS_ITUNG.set(_PAPAT, PAPAT)
ANGKA_RUMUS_ITUNG.set(_ENEM, ENEM)
ANGKA_RUMUS_ITUNG.set(_LIMO, LIMO)
ANGKA_RUMUS_ITUNG.set(_PITU, PITU)

export { _SIJI, _LORO, _TELU, _PAPAT, _LIMO, _ENEM, _PITU, ANGKA_RUMUS_ITUNG }
