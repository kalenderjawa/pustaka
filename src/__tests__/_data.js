/**
 * @flow
 * Test Data
 */

// Mukarom, 1952 → Tahun Be, Asapon, Rom 2 3
// Adjust Dino: Selasa + 2 → Rebo
// Adjust Pasaran: Pon + 3 → Kliwon 
const TEST_MUKAROM_HP_1952 = {
  w: 'mukarom',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'rebo', urutan: 3 },
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
}
// Sapar, 1952 → Tahun Be, Asapon, Par 4 3
// Adjust Dino: Selasa + 4 → Jemah
// Adjust Pasaran: Pon + 3 → Kliwon
const TEST_SAPAR_HP_1952 = {
  w: 'sapar',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'jemah', urutan: 5 },
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
}
// Robiulawal, 1952 → Tahun Be, Asapon, Rowal 5 2
// Adjust Dino: Selasa + 5 → Sebtu
// Adjust PAsaran: Pon + 2 → Wage
const TEST_ROBIULAWAL_HP_1952 = {
  w: 'robiulawal',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'sebtu', urutan: 6 },
  kP: { pasaran: 'wage', neptu: 4, urutan: 4 }
}
// Dulkijah, 1952 → Tahun Be. Asapon, Jah 5 3
// Adjust Dino: Selasa + 5 → Sebtu
// Adjust Pasaran: Pon + 3 → Kliwon
const TEST_DULKIJAH_HP_1952 = {
  w: 'dulkijah',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'sebtu', urutan: 6 },
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
}
// Jumadilawal, 1952 → Tahun Be, Asapon, Juwal 1 1
// Adjust Dino: Selasa + 1 → Selasa
// Adjust Pasaran: Pon + 1 → Pon
const TEST_JUMADILAWAL_HP_1952 = {
  w: 'jumadilawal',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'selasa', urutan: 2 },
  kP: { pasaran: 'pon', neptu: 7, urutan: 3 }
}
// JUmadilakir, 1952 → Tahun Be, Asapon, Jukir 3 1
// Adjust Dino: Selasa + 3 → Kemis
// Adjust Pasaran: Pon + 1 → Pon
const TEST_JUMADILAKIR_HP_1952 = {
  w: 'jumadilakir',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'kemis', urutan: 4 },
  kP: { pasaran: 'pon', neptu: 7, urutan: 3 }
}
// ROjab, 1952 → Tahun Be, Asapon, Jab 4 5
// Adjust Dino: Selasa + 4 → Jemah
// Adjust Pasaran: Pon + 5 -> Pahing
const TEST_ROJAB_HP_1952 = {
  w: 'rojab',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'jemah', urutan: 5 },
  kP: { pasaran: 'pahing', neptu: 9, urutan: 2 }
}
// Sakban, 1952 → Tahun Be, Asapon, Ban 6 5
// Adjust Dino: Selasa + 6 → Akad
// Adjust Pasaran: Pon + 5 → Pahing
const TEST_SAKBAN_HP_1952 = {
  w: 'sakban',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'akad', urutan: 7 },
  kP: { pasaran: 'pahing', neptu: 9, urutan: 2 }
}
// Romadon, 1952 → Tahun Be, Asapon, Don 7 4
// Adjust Dino: Selasa + 7 → Senen
// Adjust Pasaran: Pon + 4 → Legi
const TEST_ROMADON_HP_1952 = {
  w: 'romadon',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'senen', urutan: 1 },
  kP: { pasaran: 'legi', neptu: 5, urutan: 1 }
}
// Sawal, 1952 → Tahun Be, Asapon, Wal 2 4
// Adjust Dino: Selasa + 2 → Rebo
// Adjust Pasaran: Pon + 4 → Legi
const TEST_SAWAL_HP_1952 = {
  w: 'sawal',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'rebo', urutan: 3 },
  kP: { pasaran: 'legi', neptu: 5, urutan: 1 }
}
// Dulkodah, 1952 → Tahun Be, Asapon, Dah 3 3
// Adjust Dino: Selasa + 3 → Kemis
// Adjust Pasaran: Pon + 3 → Kliwon
const TEST_DULKODAH_HP_1952 = {
  w: 'dulkodah',
  t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'kemis', urutan: 4 },
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
}
// Dulkodah, 1881 → Tahun Wawu, Asapon, Dah 7 2
// Adjust Dino: Selasa + 7 → Senen
// Adjust Pasaran: Pon + 2 → Wage
const TEST_DULKODAH_HP_1881 = {
  w: 'dulkodah',
  t: 1881,
  i: { taun: 'wawu', kurup: 'alip selasa pon' },
  kH: { dino: 'senen', urutan: 1 },
  kP: { pasaran: 'wage', neptu: 4, urutan: 4 }
}
// Dulkijah, 1881 → Tahun Wawu, Asapon, Jah 2 2
// Adjust Dino: Selasa + 2 → Rebo
// Adjust Pasaran: Pon + 2 → Wage
const TEST_DULKIJAH_HP_1881 = {
  w: 'dulkijah',
  t: 1881,
  i: { taun: 'wawu', kurup: 'alip selasa pon' },
  kH: { dino: 'rebo', urutan: 3 },
  kP: { pasaran: 'wage', neptu: 4, urutan: 4 }
}
// Mukarom, 2077 → Tahun Jimawal, Anenhing, Rom 3 5
// Adjust Dino: Senen + 3 → Rebo
// Adjust Pasaran: Pahing + 5 → Legi
const TEST_MUKAROM_HP_2077 = {
  w: 'mukarom',
  t: 2077,
  i: { taun: 'jimawal', kurup: 'alip senen pahing' },
  kH: { dino: 'rebo', urutan: 3 },
  kP: { pasaran: 'legi', neptu: 5, urutan: 1 }
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
  TEST_DULKIJAH_HP_1881,

  TEST_MUKAROM_HP_2077,
  _TESTDAT_5 as TESTDAT5
}
