/**
 * @flow
 * Test Data
 */

// Mukarom, 1952 → Tahun Be, Asapon, Rom 2 3
// Koreksi Dino: Selasa + 2 → Rebo
// KOreksi Pasaran: Pon + 3 → Kliwon 
const TEST_MUKAROM_HP_1952 = {
  w: 'mukarom',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'rebo', urutan: 3 },
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
}
// Sapar, 1952 → Tahun Be, Asapon, Par 4 3
// KOreksi Dino: Selasa + 4 → Jemah
// Koreksi Pasaran: Pon + 3 → Kliwon
const TEST_SAPAR_HP_1952 = {
  w: 'sapar',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'jemah', urutan: 5 },
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
}
// Robiulawal, 1952 → Tahun Be, Asapon, Rowal 5 2
// KOreksi Dino: Selasa + 5 → Sebtu
// KOreksi PAsaran: Pon + 2 → Wage
const TEST_ROBIULAWAL_HP_1952 = {
  w: 'robiulawal',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'sebtu', urutan: 6 },
  kP: { pasaran: 'wage', neptu: 4, urutan: 4 }
}
// Dulkijah, 1952 → Tahun Be. Asapon, Jah 5 3
// Koreksi Dino: Selasa + 5 → Sebtu
// Koreksi Pasaran: Pon + 3 → Kliwon
const TEST_DULKIJAH_HP_1952 = {
  w: 'dulkijah',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'sebtu', urutan: 6 },
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
}
// Jumadilawal, 1952 → Tahun Be, Asapon, Juwal 1 1
// Koreksi Dino: Selasa + 1 → Selasa
// Koreksi Pasaran: Pon + 1 → Pon
const TEST_JUMADILAWAL_HP_1952 = {
  w: 'jumadilawal',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'selasa', urutan: 2 },
  kP: { pasaran: 'pon', neptu: 7, urutan: 3 }
}
// JUmadilakir, 1952 → Tahun Be, Asapon, Jukir 3 1
// Koreksi Dino: Selasa + 3 → Kemis
// Koreksi Pasaran: Pon + 1 → Pon
const TEST_JUMADILAKIR_HP_1952 = {
  w: 'jumadilakir',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'kemis', urutan: 4 },
  kP: { pasaran: 'pon', neptu: 7, urutan: 3 }
}

const TEST_ROJAB_HP_1952 = {
  w: 'rojab',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'jemah', urutan: 5 },
  kP: { pasaran: 'pahing', neptu: 9, urutan: 2 }
}

const TEST_SAKBAN_HP_1952 = {
  w: 'sakban',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'senen', urutan: 1 },
  kP: { pasaran: 'pahing', neptu: 9, urutan: 2 }
}

const TEST_ROMADON_HP_1952 = {
  w: 'romadon',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'senen', urutan: 1 },
  kP: { pasaran: 'legi', neptu: 5, urutan: 1 }
}

const TEST_SAWAL_HP_1952 = {
  w: 'sawal',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'rebo', urutan: 3 },
  kP: { pasaran: 'legi', neptu: 5, urutan: 1 }
}

const TEST_DULKODAH_HP_1952 = {
  w: 'dulkodah',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'kemis', urutan: 4 },
  kP: { pasaran: 'legi', neptu: 5, urutan: 1 }
}

const TEST_DULKODAH_HP_1881 = {
  w: 'dulkodah',
  t: 1881,
  i: { taun: 'wawu', kurup: 'alip selasa pon' },
  kH: { dino: 'senen', urutan: 1 },
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
}

const TEST_DULKIJAH_HP_1981 = {
  w: 'dulkijah',
  t: 1881,
  i: { taun: 'wawu', kurup: 'alip selasa pon' },
  kH: { dino: 'rebo', urutan: 3 },
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
}

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
  TEST_ROJAB_HP_1952,
  TEST_SAKBAN_HP_1952,
  TEST_ROMADON_HP_1952,
  TEST_SAWAL_HP_1952,
  TEST_DULKIJAH_HP_1952,
  TEST_DULKODAH_HP_1952,
  TEST_DULKODAH_HP_1881,
  TEST_DULKIJAH_HP_1981,
  _TESTDAT_5 as TESTDAT5
}
