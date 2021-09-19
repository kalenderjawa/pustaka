<h2 align="center">
<p align="center">Pustaka Kalender Jawa</p>
<p align="center"><img src="https://raw.githubusercontent.com/kalenderjawa/pustaka/master/images/kj_v2.png" width="80%" alt="sengkala"></p>
</h2>
<h2>
<p align="center">
<a href="https://kalenderjawa.dev"><img src="https://img.shields.io/badge/kalenderjawa.dev-WEBSITE-blue?style=for-the-badge&color=D90429&labelColor=2B2D42"/>  </a>
</p>
</h2>
<p align="center">
<a href="https://actions-badge.atrox.dev/kalenderjawa/pustaka/goto?ref=master"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fkalenderjawa%2Fpustaka%2Fbadge%3Fref%3Dmaster&style=flat" /></a>
<a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a>
<a href="https://bundlephobia.com/result?p=@kalenderjawa/pustaka"><img src="https://badgen.net/bundlephobia/minzip/@kalenderjawa/pustaka" alt="bundlephobia"></a> 
</p>

## Sejarah Penanggalan Jawa

Menurut sejarahnya Penanggalan Jawa merupakan hasil olah para Wali dan para leluhur Jawa dan kemudian diwariskan terutama melalui rumus perhitungan dengan cara hafalan dan hebatnya rumus perhitungan ini bersifat abadi dan sangat akurat sampai hampir **1000 tahun**.

_"Dengan terhafal dalam bentuk nyanyian, kalender Jawa akan terbawa kemana saja pergi, dan masih memiliki tingkat akurasi tinggi sampai 994 tahun lagi. Setelah itu baru ada koreksi +1 hari sebelum Ambal Kurup Alip Senen Kliwon, 1 Sura 2947 Jawa (26 Januari 2984 Masehi)"_ - [REF][ck].

Silahkan membaca lebih lanjut tentang Penanggalan Jawa di [Website Kalender Jawa](https://kalenderjawa.dev/sejarah).

## @kalenderjawa/pustaka

[![Buka di Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/kalenderjawa/pustaka)

Pustaka Kalender Jawa ini merupakan pustaka khusus yang menyediakan perhitungan, informasi dan pengkonversian Penanggalan atau Kalender Jawa, dengan maksud dan tujuan supaya Penanggalan Jawa lebih mudah dikenal dan dipakai secara umum, khususnya buat para pengembang.

> Pustaka Kalender Jawa ini ditulis memakai bahasa JavaScript (ECMAScript 2015 atau ES6) dan memakai ES Module.

## Hasil Build

Ada 3 hasil build dan default adalah build untuk Node.js ataupun browser yang mendukung ES Module (ESM).

### Browser yang tidak mendukung ESM

`kalenderjawa.browser.min.js`

### Node.js yang tidak mendukung ESM (sebelum Node.js 12.17.0)

`kalenderjawa.min.cjs`

### Node.js & browser yang mendukung ESM

`kalenderjawa.min.js`

Contoh penggunaan hasil build diatas ada pada direktori `examples`

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

Untuk Node.js yang belum mendukung ES Module (Node.js sebelum v12.17.0) silahkan memakai berkas `kalenderjawa.min.cjs` pada direktori `lib`.

### Browser

Jika anda memakai browser Pustaka ini bisa di ambil melalui CDN (_Content Delivery Network_) seperti di `unpkg.com`.

Kode berikut akan mengambil pustaka untuk browser yang tidak mendukung ES Module.

```html
<script src="https://unpkg.com/@kalenderjawa/pustaka/lib/kalenderjawa.browser.min.js" />
```

dan kode berikut untuk browser yang mendukung ES Module

```html
<script type="module">
  import * as KalenderJawa from "https://unpkg.com/@kalenderjawa/pustaka";

  console.log(KalenderJawa);
</script>
```

## API

Dokumentasi dan demo API ada di [sini](https://kalenderjawa.dev/api).

## Berkontribusi

Untuk berkontribusi silahkan lihat dokumen [CARA BERKONTRIBUSI](BERKONTRIBUSI.md).

## Demo Kalender

Contoh aplikasi web yang memakai Pustaka ini adalah [Sengkala](https://app.kalenderjawa.dev). Proyek ini open-source jadi anda bisa melihat potensi dari pemakaian Pustaka ini.

[ck]: https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat

## Lisensi

[MIT License](https://choosealicense.com/licenses/mit/)

---

[kalenderjawa.dev](https://kalenderjawa.dev) © (2019 - 2021)
