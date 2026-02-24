# Catatan Perbaikan - Branch `dev`

Dokumen ini mencatat semua perbaikan yang dilakukan pada branch `dev`, termasuk penjelasan detil tentang bug yang ditemukan, cara verifikasinya, dan perbaikan yang diterapkan.

Referensi utama: [Kalender Jowo Digowo, Kalender Arab Digarap, Kalender Barat Diruwat](https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat/5/) — caknun.com

---

## 1. Bug Kritis: Rumus Sapar — Semua 8 Nilai Salah

**File:** `src/rumus_apalan_awal_bulan_sapar_abadi.ts`
**Dampak:** Perhitungan 1 Sapar untuk SEMUA tahun Jawa 1867–2106 menghasilkan hari dan pasaran yang salah.

### Penjelasan

Rumus apalan menggunakan sistem celukan angka Jawa:

| Celukan | Angka |
|---------|-------|
| Ji (siji) | 1 |
| Ro (loro) | 2 |
| Lu (telu) | 3 |
| Pat (papat) | 4 |
| Mo (limo) | 5 |
| Nem (enem) | 6 |
| Tu (pitu) | 7 |

Format rumus: `[celukan bulan] [celukan dino] [celukan pasaran]`
Contoh: `Par Pat Lu` = Sapar, dino=4, pasaran=3

### Perbandingan Kode Lama vs Referensi

| Tahun | Referensi (caknun.com) | Kode Lama | Selisih |
|-------|----------------------|-----------|---------|
| Alip | Par **Lu Ji** (3, 1) | PAR_RO_RO (2, 2) | dino -1, pasaran +1 |
| Ehe | Par **Tu Mo** (7, 5) | PAR_NEM_JI (6, 1) | dino -1, pasaran +1* |
| Jimawal | Par **Mo Mo** (5, 5) | PAR_PAT_JI (4, 1) | dino -1, pasaran +1* |
| Je | Par **Ro Pat** (2, 4) | PAR_JI_MO (1, 5) | dino -1, pasaran +1 |
| Dal | Par **Nem Lu** (6, 3) | PAR_MO_PAT (5, 4) | dino -1, pasaran +1 |
| Be | Par **Pat Lu** (4, 3) | PAR_LU_PAT (3, 4) | dino -1, pasaran +1 |
| Wawu | Par **Ji Ro** (1, 2) | PAR_TU_LU (7, 3) | dino -1*, pasaran +1 |
| Jimakir | Par **Mo Ji** (5, 1) | PAR_PAT_RO (4, 2) | dino -1, pasaran +1 |

> *Selisih melingkar: 7-1=6 ≡ -1 (mod 7), 1-5=-4 ≡ +1 (mod 5)

Pola kesalahan bersifat **sistematis**: semua nilai dino terkurang 1, semua nilai pasaran terlebih 1. Kemungkinan penyebab: salah salin dari tabel referensi atau kesalahan offset saat konversi.

### Verifikasi Manual: 1 Sapar 1952

**Diketahui:**
- 1952 = Tahun Be, Kurup Asapon (Selasa urutan=2, Pon urutan=3)
- 1 Mukarom 1952 = Rebo Kliwon (urutan dino=3, urutan pasaran=5) — dari test data yang sudah terverifikasi
- Mukarom = 30 hari

**Hitung 1 Sapar 1952 secara manual (30 hari setelah 1 Mukarom):**
- Dino: (3 - 1 + 30) mod 7 + 1 = 32 mod 7 + 1 = 4 + 1 = **5 → Jemah**
- Pasaran: (5 - 1 + 30) mod 5 + 1 = 34 mod 5 + 1 = 4 + 1 = **5 → Kliwon**
- **Benar: 1 Sapar 1952 = Jemah Kliwon**

**Verifikasi dengan rumus referensi (Par Pat Lu = dino 4, pasaran 3):**
- `konversiHari(4, 2)`: 2 + 4 - 1 = 5 → Jemah ✅
- `konversiPasaran(3, 3)`: 3 + 3 - 1 = 5 → Kliwon ✅

**Hasil kode lama (PAR_LU_PAT = dino 3, pasaran 4):**
- `konversiHari(3, 2)`: 2 + 3 - 1 = 4 → Kemis ❌
- `konversiPasaran(4, 3)`: 3 + 4 - 1 = 6 → 6 > 5, 6 - 5 = 1 → Legi ❌
- **Salah: kode lama menghasilkan Kemis Legi**

### Perbaikan

Semua 8 konstanta rumus Sapar diganti dengan nilai yang benar sesuai referensi:

```typescript
// SEBELUM (salah)                    // SESUDAH (benar)
PAR_RO_RO  { dino: 2, pasaran: 2 }   PAR_LU_JI  { dino: 3, pasaran: 1 }  // Alip
PAR_NEM_JI { dino: 6, pasaran: 1 }   PAR_TU_MO  { dino: 7, pasaran: 5 }  // Ehe
PAR_PAT_JI { dino: 4, pasaran: 1 }   PAR_MO_MO  { dino: 5, pasaran: 5 }  // Jimawal
PAR_JI_MO  { dino: 1, pasaran: 5 }   PAR_RO_PAT { dino: 2, pasaran: 4 }  // Je
PAR_MO_PAT { dino: 5, pasaran: 4 }   PAR_NEM_LU { dino: 6, pasaran: 3 }  // Dal
PAR_LU_PAT { dino: 3, pasaran: 4 }   PAR_PAT_LU { dino: 4, pasaran: 3 }  // Be
PAR_TU_LU  { dino: 7, pasaran: 3 }   PAR_JI_RO  { dino: 1, pasaran: 2 }  // Wawu
PAR_PAT_RO { dino: 4, pasaran: 2 }   PAR_MO_JI  { dino: 5, pasaran: 1 }  // Jimakir
```

---

## 2. Bug: Robiulakir Tahun Be — Nilai Dino Salah

**File:** `src/rumus_apalan_awal_bulan_robiulakir_abadi.ts`
**Dampak:** Perhitungan 1 Robiulakir untuk semua tahun Be (1872, 1880, 1888, ..., 2096, 2104) menghasilkan hari yang salah.

### Penjelasan

Konstanta `ROKIR_TU_RO` digunakan untuk Robiulakir tahun Be.

- Nama variabel: `ROKIR_TU_RO` → "Tu" = pitu = **7**, "Ro" = loro = **2**
- Nilai seharusnya: `dino: 7, pasaran: 2`
- Nilai di kode: `dino: 1, pasaran: 2` ← **dino salah!**

Nama variabel benar (`TU` = 7), tapi nilai `dino` diisi `1` bukan `7`.

### Verifikasi Manual: 1 Robiulakir 1952

**Diketahui:**
- 1 Robiulawal 1952 (Be, Asapon) = Sebtu Wage (dari rumus Rowal Mo Ro = 5,2)
  - `konversiHari(5, 2)`: 2 + 5 - 1 = 6 → Sebtu
  - `konversiPasaran(2, 3)`: 3 + 2 - 1 = 4 → Wage
- Robiulawal = 30 hari

**Hitung 1 Robiulakir 1952 (30 hari setelah 1 Robiulawal):**
- Dino: (6 - 1 + 30) mod 7 + 1 = 35 mod 7 + 1 = 0 + 1 = **1 → Senen**
- Pasaran: (4 - 1 + 30) mod 5 + 1 = 33 mod 5 + 1 = 3 + 1 = **4 → Wage**
- **Benar: 1 Robiulakir 1952 = Senen Wage**

**Verifikasi rumus referensi (Rokir Tu Ro = dino 7, pasaran 2):**
- `konversiHari(7, 2)`: 2 + 7 - 1 = 8 → 8 > 7, 8 - 7 = 1 → Senen ✅
- `konversiPasaran(2, 3)`: 3 + 2 - 1 = 4 → Wage ✅

**Hasil kode lama (dino 1, pasaran 2):**
- `konversiHari(1, 2)`: 2 + 1 - 1 = 2 → Selasa ❌
- `konversiPasaran(2, 3)`: 3 + 2 - 1 = 4 → Wage ✅ (pasaran kebetulan benar)
- **Salah: kode lama menghasilkan Selasa Wage (harusnya Senen Wage)**

### Perbaikan

```typescript
// SEBELUM (salah)
const ROKIR_TU_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 1,    // ← salah, "Tu" = 7 bukan 1
  pasaran: 2,
};

// SESUDAH (benar)
const ROKIR_TU_RO = {
  wulan: ARANING_WULAN_SETAUN.get(_ROBIULAKIR),
  dino: 7,    // ← benar, "Tu" = pitu = 7
  pasaran: 2,
};
```

---

## 3. Cleanup: Hapus File Sisa di Root

**File dihapus:**
- `aranAwalBulanTahunJawa('mukarom', 2000).then(r => {` (13 KB)
- `t r = await KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 2000);` (1.2 KB)

Kedua file ini merupakan hasil paste yang tidak sengaja dari terminal/editor. Isinya adalah potongan kode JavaScript yang seharusnya tidak menjadi file tersendiri.

---

## 4. Fix Typo: `batur.ts`

**File:** `src/batur.ts`

```typescript
// SEBELUM
return { status: false, message: 'out of scoope' };

// SESUDAH
return { status: false, message: 'out of scope' };
```

---

## 5. Boundary Check: `periksaBatasan()` Disambungkan ke API

**File:** `src/index.ts`

Fungsi `periksaBatasan()` di `batur.ts` mendefinisikan batasan tahun Jawa yang valid (1867–2106) tetapi sebelumnya tidak pernah dipanggil. Sekarang dipanggil di awal `cariKurupTaun()`:

```typescript
import { periksaBatasan } from './batur.js';

async function cariKurupTaun(_q: number): Promise<TaunKurupType> {
  const _qi = parseInt(_q.toString());
  const batasan = periksaBatasan(_qi);
  if (!batasan.status) {
    throw new Error(batasan.message);  // "out of scope"
  }
  // ... lanjut pencarian kurup
}
```

Tahun di luar 1867–2106 sekarang langsung mendapat error `"out of scope"` yang jelas, bukan error generik `"Error cariKurupTaun"`.

---

## 6. Fix: Reject Setelah forEach di `silpin.ts`

**File:** `src/silpin.ts`

### Masalah

`konversiHari()` dan `konversiPasaran()` menggunakan `forEach()` di dalam `new Promise()`. Setelah loop `forEach`, `reject()` selalu dipanggil — termasuk saat `resolve()` sudah terpanggil. Meskipun Promise hanya settle sekali (jadi hasilnya tetap benar), ini menyebabkan unhandled rejection warning.

```typescript
// SEBELUM (bermasalah)
return new Promise((resolve, reject) => {
  DINTEN.forEach((value, key, map) => {
    if (value.urutan === xH) {
      resolve(value);        // resolve dipanggil
    }
  });
  reject(new Error('...'));  // reject JUGA selalu dipanggil
});
```

### Perbaikan

Gunakan flag `found` untuk mencegah `reject()` dipanggil saat sudah `resolve()`:

```typescript
// SESUDAH (benar)
return new Promise((resolve, reject) => {
  let found = false;
  DINTEN.forEach((value) => {
    if (!found && value.urutan === xH) {
      found = true;
      resolve(value);
    }
  });
  if (!found) {
    reject(new Error('...'));
  }
});
```

Perubahan yang sama diterapkan pada `konversiPasaran()`.

---

## 7. Test: Assertion untuk Mukarom 2000

**File:** `src/__tests__/_index.test.js`, `src/__tests__/_data.js`

### Masalah

Test Mukarom 2000 hanya melakukan `console.log(d)` tanpa assertion apapun — test selalu pass tanpa memverifikasi kebenaran hasil.

```javascript
// SEBELUM (tanpa assertion)
test('Mukarom, 2000', async () => {
  return KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 2000).then(
    d => { console.log(d); }   // tidak ada expect()!
  );
});
```

### Perbaikan

Ditambahkan test data `TEST_MUKAROM_HP_2000` dan assertion `toStrictEqual`:

```javascript
// SESUDAH (dengan assertion)
// Mukarom 2000 → Tahun Be, Kurup Anenhing (Senen urutan=1, Pahing urutan=2)
// Rumus: Rom Ro Lu = dino 2, pasaran 3
// konversiHari(2, 1): 1 + 2 - 1 = 2 → Selasa
// konversiPasaran(3, 2): 2 + 3 - 1 = 4 → Wage
const TEST_MUKAROM_HP_2000 = {
  w: 'mukarom', t: 2000,
  i: { taun: 'be', kurup: 'alip senen pahing' },
  kH: { dino: 'selasa', urutan: 2, bobot: 3 },
  kP: { pasaran: 'wage', neptu: 4, urutan: 4 },
};
```

Hasil ini juga cocok dengan tabel Kurup dari referensi caknun.com yang menunjukkan 2000 (Tahun Be, Kurup Anenhing) jatuh pada **Selasa Wage**.

---

## 8. Test Data Sapar 1952 Diperbaiki

**File:** `src/__tests__/_data.js`

```javascript
// SEBELUM (mengikuti rumus lama yang salah)
const TEST_SAPAR_HP_1952 = {
  w: 'sapar', t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'kemis', urutan: 4, bobot: 8 },   // salah
  kP: { pasaran: 'legi', neptu: 5, urutan: 1 },  // salah
};

// SESUDAH (mengikuti rumus benar dari referensi)
const TEST_SAPAR_HP_1952 = {
  w: 'sapar', t: 1952,
  i: { taun: 'be', kurup: 'alip selasa pon' },
  kH: { dino: 'jemah', urutan: 5, bobot: 6 },    // benar
  kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }, // benar
};
```

---

## Ringkasan Semua File yang Diubah

| File | Perubahan |
|------|-----------|
| `src/rumus_apalan_awal_bulan_sapar_abadi.ts` | 8 rumus diperbaiki sesuai referensi |
| `src/rumus_apalan_awal_bulan_robiulakir_abadi.ts` | `ROKIR_TU_RO` dino: 1 → 7 |
| `src/batur.ts` | Typo `'out of scoope'` → `'out of scope'` |
| `src/index.ts` | Import dan panggil `periksaBatasan()` |
| `src/silpin.ts` | Fix reject-after-forEach di `konversiHari` dan `konversiPasaran` |
| `src/__tests__/_data.js` | Fix test data Sapar 1952 + tambah data Mukarom 2000 |
| `src/__tests__/_index.test.js` | Fix assertion Mukarom 2000 + error message 9999 |
| `src/__tests__/_batur.test.js` | Update expected message `'out of scope'` |
| `src/__tests__/_edge_cases.test.js` | Update expected error messages |
| (root) | Hapus 2 file sisa paste yang tidak sengaja |

## Hasil Test

```
Test Files  8 passed (8)
     Tests  87 passed (87)
```

## Verifikasi Silang dengan Referensi

Dari 96 kombinasi rumus (12 bulan × 8 tahun), hasil cross-check:
- **94 sudah benar** dari awal (10 bulan × 8 tahun + Robiulakir 7 dari 8)
- **9 diperbaiki** (Sapar 8 + Robiulakir Be 1)
- Rumus yang diperbaiki sudah diverifikasi secara manual dengan menghitung jumlah hari antar bulan dari 1 Mukarom yang diketahui
