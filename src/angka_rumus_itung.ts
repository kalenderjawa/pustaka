/**
 * 📁angka_rumus_itung.ts
 * Angka Rumus Itung
 */

interface AngkaType {
  angka: string;
  celukan: string;
  abot: number;
}

const _SIJI = 'siji'; // 1
const _LORO = 'loro'; // 2
const _TELU = 'telu'; // 3
const _PAPAT = 'papat'; // 4
const _LIMO = 'limo'; // 5
const _ENEM = 'enem'; // 6
const _PITU = 'pitu'; // 7

const SIJI: AngkaType = { angka: _SIJI, celukan: 'ji', abot: 1 };
Object.freeze(SIJI);
const LORO: AngkaType = { angka: _LORO, celukan: 'ro', abot: 2 };
Object.freeze(LORO);
const TELU: AngkaType = { angka: _TELU, celukan: 'lu', abot: 3 };
Object.freeze(TELU);
const PAPAT: AngkaType = { angka: _PAPAT, celukan: 'pat', abot: 4 };
Object.freeze(PAPAT);
const LIMO: AngkaType = { angka: _LIMO, celukan: 'mo', abot: 5 };
Object.freeze(LIMO);
const ENEM: AngkaType = { angka: _ENEM, celukan: 'nem', abot: 6 };
Object.freeze(ENEM);
const PITU: AngkaType = { angka: _PITU, celukan: 'tu', abot: 7 };
Object.freeze(PITU);

const _ANGKA_RUMUS_ITUNG: Map<string, AngkaType> = new Map();

_ANGKA_RUMUS_ITUNG.set(_SIJI, SIJI);
_ANGKA_RUMUS_ITUNG.set(_LORO, LORO);
_ANGKA_RUMUS_ITUNG.set(_TELU, TELU);
_ANGKA_RUMUS_ITUNG.set(_PAPAT, PAPAT);
_ANGKA_RUMUS_ITUNG.set(_ENEM, ENEM);
_ANGKA_RUMUS_ITUNG.set(_LIMO, LIMO);
_ANGKA_RUMUS_ITUNG.set(_PITU, PITU);

const ANGKA_RUMUS_ITUNG: ReadonlyMap<string, AngkaType> = _ANGKA_RUMUS_ITUNG;

export { _SIJI, _LORO, _TELU, _PAPAT, _LIMO, _ENEM, _PITU, ANGKA_RUMUS_ITUNG };
export type { AngkaType };
