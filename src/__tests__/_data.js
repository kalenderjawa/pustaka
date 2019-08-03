/**
 * @flow
 * Test Data
 */
const TEST_MUKAROM_HP_1952 = {
  w: 'mukarom',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'rebo', urutan: 3 },
  kP: { pasaran: 'legi', neptu: 5, urutan: 1 }
}

const TEST_SAPAR_HP_1952 = {
  w: 'sapar',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'jemah', urutan: 5 },
  kP: { pasaran: 'legi', neptu: 5, urutan: 1 }
}

const TEST_ROBIULAWAL_HP_1952 = {
  w: 'robiulawal',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'akad', urutan: 7 },
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
}

const TEST_DULKIJAH_HP_1952 = {
  w: 'dulkijah',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'akad', urutan: 7 },
  kP: { pasaran: 'legi', neptu: 5, urutan: 1 }
}

const TEST_JUMADILAWAL_HP_1952 = {
  w: 'jumadilawal',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'selasa', urutan: 2 },
  kP: { pasaran: 'pon', neptu: 7, urutan: 3 }
}

const TEST_JUMADILAKIR_HP_1952 = {
  w: 'jumadilakir',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'kemis', urutan: 4 },
  kP: { pasaran: 'pon', neptu: 7, urutan: 3 }
}

const TEST_ROMADON_HP_1952 = { i: { kurup: 'alip selasa pon', taun: 'be' }, kH: { dino: 'senen', urutan: 1 }, kP: { neptu: 5, pasaran: 'legi', urutan: 1 }, t: 1952, w: 'romadon' }
const TEST_DULKODAH_HP_1881 = { i: { kurup: 'alip selasa pon', taun: 'wawu' }, kH: { dino: 'senen', urutan: 1 }, kP: { neptu: 8, pasaran: 'kliwon', urutan: 5 }, t: 1881, w: 'dulkodah' }
const TEST_DULKIJAH_HP_1981 = { i: { kurup: 'alip selasa pon', taun: 'jimawal' }, kH: { dino: 'senen', urutan: 1 }, kP: { neptu: 9, pasaran: 'pahing', urutan: 2 }, t: 1981, w: 'dulkijah' }

const _TESTDAT_5 = {
  wulan: { wulan: 'dulkijah', celukan: 'jah', urutan: 12, cacah: [29] },
  taun: { taun: 'be', neptu: 2, urutan: 6, cacah: 354 },
  rumus: {
    wulan: { wulan: 'dulkijah', celukan: 'jah', urutan: 12, cacah: [Array] },
    dino: 5,
    pasaran: 3
  },
  query: { wulan: 'dulkijah', taun: 1952 }
}

export {
  TEST_MUKAROM_HP_1952,
  TEST_SAPAR_HP_1952,
  TEST_ROBIULAWAL_HP_1952,
  TEST_JUMADILAWAL_HP_1952,
  TEST_JUMADILAKIR_HP_1952,
  TEST_DULKIJAH_HP_1952,
  TEST_ROMADON_HP_1952,
  TEST_DULKODAH_HP_1881,
  TEST_DULKIJAH_HP_1981,
  _TESTDAT_5 as TESTDAT5
}
