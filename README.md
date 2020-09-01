<h2 align="center">
<p align="center">Pustaka Kalender Jawa</p>
<p align="center"><img src="https://raw.githubusercontent.com/kalenderjawa/pustaka/master/images/sengkala.png" width="80%" alt="sengkala"></p>
</h2>
<h2>
<p align="center">
<a href="https://kalenderjawa.dev"><img src="https://img.shields.io/badge/kalenderjawa.dev-WEBSITE-blue?style=for-the-badge&color=D90429&labelColor=2B2D42"/>  </a>
</p>
</h2>
<p align="center">
<a href="https://circleci.com/gh/kalenderjawa/pustaka" alt="Travis CI"><img src="https://circleci.com/gh/kalenderjawa/pustaka/tree/master.svg?style=svg&circle-token=23e428d78a273d8a105c8bdfdc86a112eccbcefa" alt="Build Status"/></a>
<a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a>
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a>
<a href="https://bundlephobia.com/result?p=@kalenderjawa/pustaka"><img src="https://badgen.net/bundlephobia/minzip/@kalenderjawa/pustaka" alt="bundlephobia"></a>
</p>

## Pengenalan
Pustaka Kalender Jawa ini merupakan pustaka khusus yang menyediakan perhitungan, informasi dan pengkonversian Penanggalan atau Kalender Jawa, dengan maksud dan tujuan supaya Penanggalan Jawa lebih mudah dikenal dan dipakai secara umum khususnya ramah buat para pengembang maka pustaka ini dibuat.

> Pustaka Kalender Jawa ini ditulis memakai bahasa JavaScript (ECMAScript 2015 atau ES6).

## Sejarah
Menurut sejarahnya Penanggalan Jawa merupakan hasil olah para Wali dan para leluhur Jawa dan kemudian diwariskan terutama melalui rumus perhitungan dengan cara hafalan dan hebatnya rumus perhitungan ini bersifat abadi dan sangat akurat sampai hampir **1000 tahun**.

*"Dengan terhafal dalam bentuk nyanyian, kalender Jawa akan terbawa kemana saja pergi, dan masih memiliki tingkat akurasi tinggi sampai 994 tahun lagi. Setelah itu baru ada koreksi +1 hari sebelum Ambal Kurup Alip Senen Kliwon, 1 Sura 2947 Jawa (26 Januari 2984 Masehi)"* - [REF][CK].


Silahkan membaca lebih lanjut tentang Penanggalan Jawa di [Website Kalender Jawa](https://kalenderjawa.dev/sejarah).

## Instalasi

Pustaka Kalender Jawa bisa dipakai dilingkungan Node maupun Browser

### Node

```
npm install --save @kalenderjawa/pustaka
```

Memakai pustaka jika memakai `import` ES6

```js
import * as KalenderJawa from '@kalenderjawa/pustaka'

KalenderJawa.cariKurupTahunJawa(1881).then(/**...*/)
```

### Browser

Jika anda memakai browser pustaka ini bisa di ambil melalui CDN (*Content Delivery Network*) di `unpkg.com`. 

Kode berikut akan mengambil pustaka dengan versi terbaru dari CDN

```html
<script src="https://unpkg.com/@kalenderjawa/pustaka"/>
```

## API

Dokumentasi dan demo API ada di [sini](https://kalenderjawa.dev/api).


## Lisensi
[MIT License](https://choosealicense.com/licenses/mit/)

---
Copyright © *2019* *- 2021* [kalenderjawa.dev](https://kalenderjawa.dev)
