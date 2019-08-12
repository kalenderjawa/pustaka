<h3 align="center">
<p align="center">Pustaka Kalender Jawa</p>
<p align="center"><img src="images/sengkala.svg" width="80%" alt="sengkala"></p>
</h3>

<p align="center">
<a href="https://circleci.com/gh/junwatu/kalender-jawa" alt="Travis CI"><img src="https://circleci.com/gh/junwatu/kalender-jawa/tree/master.svg?style=svg&circle-token=23e428d78a273d8a105c8bdfdc86a112eccbcefa" alt="Build Status"/></a>
<a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a>
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a>
</p>

## Pengenalan
Pustaka Kalender Jawa ini merupakan pustaka khusus yang menyediakan perhitungan, informasi dan pengkonversian Penanggalan atau Kalender Jawa. 

Dengan maksud dan tujuan supaya Penanggalan Jawa lebih mudah dikenal dan dipakai secara umum khususnya ramah buat para pengembang maka pustaka ini dibuat.

> Pustaka Kalender Jawa ini ditulis memakai bahasa JavaScript (ECMAScript 2015 atau ES6).

## Sejarah
Menurut sejarahnya Penanggalan Jawa merupakan hasil olah para Wali dan leluhur Jawa dan kemudian diwariskan terutama melalui rumus perhitungan dengan cara hafalan dan hebatnya rumus perhitungan ini bersifat abadi dan sangat akurat sampai hampir **1000 tahun**!.

*"Dengan terhafal dalam bentuk nyanyian, kalender Jawa akan terbawa kemana saja pergi, dan masih memiliki tingkat akurasi tinggi sampai 994 tahun lagi. Setelah itu baru ada koreksi +1 hari sebelum Ambal Kurup Alip Senen Kliwon, 1 Sura 2947 Jawa (26 Januari 2984 Masehi)"* - [REF][CK].


Silahkan membaca lebih lanjut tentang Penanggalan Jawa di [DOKUMENTASI.md](DOKUMENTASI.md).

## Instalasi

Pustaka Kalender Jawa bisa dipakai melalui beberapa cara, bisa diinstall melalui npm ataupun dipakai di browser melalui CDN

### Node

```
npm install --save @junwatu/kalender-jawa
```

Memakai pustaka jika memakai `import` ES6

```js
import { KalenderJawa } from '@junwatu/kalender-jawa'

KalenderJawa.cariKurupTahunJawa(1881).then(/**...*/)
```

### Browser

Jika anda memakai browser pustaka ini bisa di ambil melalui CDN (*Content Delivery Network*) di `unpkg.com`. 

Kode berikut akan mengambil pustaka dengan versi terbaru dari CDN

```html
<script src="https://unpkg.com/@junwatu/kalender-jawa"/>
```


## API

**Pasaran**, **Kurup**. **Neptu** dan **Tahun Jawa** dijelaskan di [DOKUMENTASI.md](DOKUMENTASI.md).

## Fungsi

### :new_moon: `cariHariPasaranAwalBulanTahunJawa(w, t)`

**Argumen**:

- Bulan `w` bertipe `string`
- Tahun `t` bertipe `number`

Fungsi ini akan mencari Hari dan Pasaran dari awal Bulan `w` dan Tahun `t` Jawa.

Misalnya untuk mencari hari dan pasaran dari awal bulan 1 Pasa/Romadon pada tahun 1952 Jawa (1440 Hijriyah, 2019 Maeshi) maka parameternya adalah

| Argumen | Value 
| :---: | --- |
| `w` | "romadon"
| `t` | 1952

dan kode javascript untuk mencari hari dan pasaran tersebut bisa ditulis seperti berikut

```js
import * as KalenderJawa from '@junwatu/kalender-jawa'

KalenderJawa.cariHariPasaranAwalBulanTahunJawa('romadon', 1952).then({kH, kP} => {
  console.log(`${kH.dino} ${kP.pasaran}`) // senen legi
})

```

### :1234: `cariRumusAbadiAwalBulanTahunJawa(w, t)`
Rumus untuk hari-hari awal bulan pada masing-masing tahun dalam siklus windu bisa didapatkan melalui fungsi ini. 

> Untuk tabel rumus abadi jika anda ingin menghapalnya lihat di [DOKUMENTASI.md](DOKUMENTASI.md)

**Argumen**:

- Sasi atau Bulan `w` bertipe `string`. Contoh: `sapar`
- Tahun `t` bertipe integer. Contoh : `1881` 

**Return**:

- `Promise`

Format data dari `then` seperti berikut

```
{
  wulan: { wulan: 'romadon', celukan: 'don', urutan: 9 },
  taun: { taun: 'be', neptu: 2, urutan: 6, cacah: 354 },
  rumus: {
    wulan: { wulan: 'romadon', celukan: 'don', urutan: 9 },
    dino: 7,
    pasaran: 4
  },
  query: { wulan: 'romadon', taun: 1952 }
}
```

Contoh kode 
```js
KalenderJawa.cariRumusAbadi('romadon', 1952).then(data => {
  console.log(`${data.rumus.wulan.wulan}_${data.rumus.dino}_${data.rumus.pasaran}`) // romadon_7_4 (don tu pat)
})
```

### :six_pointed_star: `cariKurupTahunJawa(t)`

Fungsi ini akan mencari pada tahun apa dalam se-windu dan berada pada kurup apa suatu taun. Misalnya anda ingin mencari nama taun jawa dan kurup dari tahun 1994 maka tahun tersebut berada pada tahun Jimakir dan kurup Alip Senen Pahing atau Anenhing.

**Argumen**:

- Tahun `t` bertipe `number` (integer)


**Return**:
- `Promise`

Data dari `Promise` merupakan `Object` contoh respon seperti berikut ini

```js
      {
          taun: { taun: 'jimakir', neptu: 3, urutan: 8 },
          kurup: {
            taun: 'alip',
            dinten: { dino: 'senen', urutan: 1 },
            pasaran: { pasaran: 'pahing', neptu: 9, urutan: 2 }
          },
          awal: [
            1994, 2002, 2010,
            2018, 2026, 2034,
            2042, 2050, 2058,
            2066, 2074, 2081,
            2089, 2098, 2106
          ]
      }

```

Contoh kode

```js
KalenderJawa.cariKurupTahunJawa(1994).then( d => {
  console.log(d.taun.taun) // jimakir
  console.log(`${d.kurup.taun}_${d.dinten.dino}_${d.kurup.pasaran.pasaran}`) // alip_senen_pahing (anenhing)
})
```

### `sasi(w, t)`
Pakai fungsi ini jika anda ingin mengetahui Hari dan Pasaran selama satu bulan penuh pada tahun Jawa tertentu.

**Argumen**
- `w` sasi dalam `string`. Misal : `sapar`
- `t` tahun dalam `number`. Misal: `2077`

**Return**
- `Promise` dengan data `then` yaitu `{ k, s }` dimana `k` adalah `key` dan `s` adalah Map.


Misalnya anda ingin mengetahui Tanggal, Hari & Pasaran selama sasi **Mukarom, 1953 Tahun Jawa**
```js
import * as KalenderJawa from '@junwatu/kalender-jawa'

KalenderJawa.sasi('mukarom', 1953).then({ k, s } => {
  console.log(s.get(k))
})
```

Key `k` untuk kode diatas adalah 

```js
{ sasi: 'mukarom', taun: 1953 }
```

dan value dengan key `k` seperti berikut
```js
[ 
  { '1': { dinten: 'akad', pasaran: 'wage', neptu: 4 } },
  { '2': { dinten: 'senen', pasaran: 'kliwon', neptu: 8 } },
  // ...dipersingkat
  { '30': { dinten: 'senen', pasaran: 'pon', neptu: 7 } }
]
```


## Properti

### `araningPasaran`
Nama atau *araning* dari Pasaran

 **Return**:
- Array

Contoh

```js
const pasaran = KalenderJawa.araningPasaran
console.log(pasaran[0].pasaran) // legi
```

### `araningDinten`
**Return**
- Array

Contoh

```js
const iterator = KalenderJawa.araningDinten.values()
let index = iterator.next()

while (!index.done) {
  console.log(index.value) // { dino: 'senen', urutan: 1 } ...
  index = iterator.next()
}
```

### `taunJawa`
**Return**
- Array

Contoh 

```js
console.log(KalenderJawa.tahunJawa[1]) // { taun: 'dal', neptu: 4, urutan: 5, cacah: 355 }
```

## Berkontribusi
Lihat di [CONTRIBUTING.md](CONTRIBUTING.md).

## Referensi

- https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat

[CK]: https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat

## Lisensi
[MIT License](https://choosealicense.com/licenses/mit/)

Copyright © *Lawang Tunggal Walang Kembar* *(2019)*, [Junwatu](https://github.com/junwatu)
