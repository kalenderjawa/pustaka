<h2 align="center">
<p align="center">Pustaka Kalender Jawa</p>
<p align="center"><img src="https://raw.githubusercontent.com/kalenderjawa/pustaka/master/images/kj_v2.png" width="80%" alt="sengkala"></p>
</h2>
<p align="center">
<a href="https://actions-badge.atrox.dev/kalenderjawa/pustaka/goto?ref=master"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fkalenderjawa%2Fpustaka%2Fbadge%3Fref%3Dmaster&style=flat" /></a>
<a href="https://bundlephobia.com/result?p=@kalenderjawa/pustaka"><img src="https://badgen.net/bundlephobia/minzip/@kalenderjawa/pustaka" alt="bundlephobia"></a>
</p>

## Sejarah Penanggalan Jawa

Menurut sejarahnya Penanggalan Jawa merupakan hasil olah para Wali dan para leluhur Jawa dan kemudian diwariskan terutama melalui rumus perhitungan dengan cara hafalan dan hebatnya rumus perhitungan ini bersifat abadi dan sangat akurat sampai hampir **1000 tahun**.

_"Dengan terhafal dalam bentuk nyanyian, kalender Jawa akan terbawa kemana saja pergi, dan masih memiliki tingkat akurasi tinggi sampai 994 tahun lagi. Setelah itu baru ada koreksi +1 hari sebelum Ambal Kurup Alip Senen Kliwon, 1 Sura 2947 Jawa (26 Januari 2984 Masehi)"_ - [REF][ck].

Silahkan membaca lebih lanjut tentang Penanggalan Jawa di [Website Kalender Jawa](https://kalenderjawa.dev/sejarah).

## @kalenderjawa/pustaka

Pustaka Kalender Jawa ini merupakan pustaka khusus yang menyediakan perhitungan, informasi dan pengkonversian Penanggalan atau Kalender Jawa, dengan maksud dan tujuan supaya Penanggalan Jawa lebih mudah dikenal dan dipakai secara umum, khususnya buat para pengembang.

> Pustaka Kalender Jawa ini ditulis memakai bahasa TypeScript dan memakai ES Module. Membutuhkan Node.js >= 20.0.0.

### Cakupan

Pustaka ini mencakup perhitungan Kalender Jawa Abadi untuk kurun waktu **tahun 1867 - 2106 Jawa**, meliputi dua kurup:

| Kurup | Periode | Keterangan |
|---|---|---|
| **Asapon** | 1867 - 1986 | Alip Selasa Pon |
| **Anenhing** | 1987 - 2106 | Alip Senen Pahing |

Perhitungan mencakup 12 bulan (sasi) dan 8 tahun dalam siklus windu (Alip, Ehe, Jimawal, Je, Dal, Be, Wawu, Jimakir).

### Referensi Rumus

Rumus perhitungan abadi yang dipakai pada pustaka ini bersumber dari [Kalender Jowo Digowo, Kalender Arab Digarap, Kalender Barat Diruwat][ck] ([halaman rumus][ck5]).

## Hasil Build

Ada 3 hasil build pada direktori `dist/` dan default adalah build untuk Node.js ataupun browser yang mendukung ES Module (ESM).

| Berkas | Keterangan |
|---|---|
| `dist/kalenderjawa.min.js` | Node.js & browser yang mendukung ESM (default) |
| `dist/kalenderjawa.min.cjs` | Node.js yang tidak mendukung ESM |
| `dist/kalenderjawa.browser.min.js` | Browser yang tidak mendukung ESM |

Contoh penggunaan hasil build diatas ada pada direktori `examples/`

## Instalasi

Pustaka Kalender Jawa bisa dipakai dilingkungan Node maupun Browser.

### Node

```
npm install --save @kalenderjawa/pustaka
```

Secara default anda akan memakai Pustaka yang mendukung ES Module, benar yaitu yang memakai `import`

```js
import * as KalenderJawa from "@kalenderjawa/pustaka";

KalenderJawa.cariKurupTahunJawa(1881).then(/**...*/);
```

Untuk Node.js yang belum mendukung ESM silahkan memakai berkas `kalenderjawa.min.cjs` pada direktori `dist`.

### Browser

Jika anda memakai browser Pustaka ini bisa di ambil melalui CDN (_Content Delivery Network_) seperti di `unpkg.com`.

Kode berikut akan mengambil pustaka untuk browser yang tidak mendukung ES Module.

```html
<script src="https://unpkg.com/@kalenderjawa/pustaka/dist/kalenderjawa.browser.min.js"></script>
```

dan kode berikut untuk browser yang mendukung ES Module

```html
<script type="module">
  import * as KalenderJawa from "https://unpkg.com/@kalenderjawa/pustaka";

  console.log(KalenderJawa);
</script>
```

## Contoh Penggunaan

### Mencari kurup dan tahun Jawa

```js
const result = await KalenderJawa.cariKurupTahunJawa(1959);
// {
//   taun: { taun: 'dal', neptu: 4, urutan: 5, cacah: 355 },
//   kurup: { taun: 'alip', dinten: { dino: 'selasa', ... }, pasaran: { pasaran: 'pon', ... } }
// }
```

### Mencari hari dan pasaran awal bulan

```js
const result = await KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1959);
// {
//   w: 'mukarom', t: 1959,
//   i: { taun: 'dal', kurup: 'alip selasa pon' },
//   kH: { dino: 'jemah', urutan: 5, bobot: 6 },
//   kP: { pasaran: 'kliwon', neptu: 8, urutan: 5 }
// }
// → 1 Mukarom 1959 = Jemah Kliwon (Jumat Kliwon)
```

### Menampilkan kalender satu bulan penuh

```js
const result = await KalenderJawa.sasi('mukarom', 1959);
// Menghasilkan 30 hari lengkap dengan dinten, pasaran, dan neptu
// { 1: { dinten: 'jemah', pasaran: 'kliwon', neptu: 11 } }
// { 2: { dinten: 'sebtu', pasaran: 'legi', neptu: 11 } }
// ... dst
```

## Testing

Untuk menjalankan pengujian gunakan perintah:

```shell
npm run test        # menjalankan sekali dengan laporan cakupan
npm run test:watch  # menjalankan ulang saat berkas berubah
```

Pengujian menggunakan [Vitest](https://vitest.dev) sehingga tidak memerlukan Chrome atau Puppeteer. Contoh ringkasan cakupan:

```text
% Coverage report from v8
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |   92.13 |    88.88 |      80 |   92.13 |
```

## API

Dokumentasi dan demo API ada di [sini](https://kalenderjawa.dev/api).

## Berkontribusi

Untuk berkontribusi silahkan lihat dokumen [CARA BERKONTRIBUSI](BERKONTRIBUSI.md).


[ck]: https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat
[ck5]: https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat/5/

## Lisensi

[MIT License](https://choosealicense.com/licenses/mit/)

---

[kalenderjawa.dev](https://kalenderjawa.dev) © (2019 - 2025)
