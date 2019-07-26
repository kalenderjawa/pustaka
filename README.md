<h3 align="center">
<p align="center">Pustaka Kalender Jawa</p>
<p align="center"><img src="images/sengkala.svg" width="80%" alt="sengkala"></p>
</h3>

<p align="center">
<a href="https://travis-ci.com/junwatu/kalender-jawa" alt="Travis CI"><img src="https://travis-ci.com/junwatu/kalender-jawa.svg?token=ygQgbKk8uMU72qsetYYB&branch=master" alt="Build Status"/></a>
<a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a>
</p>

## Pengenalan
Pustaka Kalender Jawa ini merupakan pustaka khusus yang menyediakan perhitungan, informasi dan pengkonversian kalender atau penanggalan Jawa. Dengan maksud dan tujuan supaya penanggalan Jawa lebih mudah dikenal dan dipakai secara umum khususnya buat pengembang maka repositori ini dibuat.

> Pustaka Kalender Jawa ini ditulis memakai bahasa JavaScript (ECMAScript 2015 atau ES6).

## Sejarah
Penanggalan jawa yang dipakai sampai saat ini merupakan hasil usaha dari para Wali dalam mengolah antara penanggalan Jawa yang jauh sudah ada sebelumnya yaitu *Candra Sengkala* dengan kalender Hijri. 

Secara historis penanggalan Jawa ini resmi dipakai sejak Raden Patah menjadi Sultan Demak yang pertama, dimana pada momen ini orang Jawa menandainya dengan *Sengkalan*,



### *Catur Ilang Sucining Ratu*



*Sengkalan* tersebut menandakan tahun 1404 Saka (887 H, 1482 M) atau 4 tahun setelah runtuhnya Majapahit.

> Candra Sengkala atau Sengkalan merupakan cara orang Jawa dalam mengingat momen pada tahun dengan cara sederhana yaitu suatu kalimat. 
>
> Contoh paling terkenal adalah *Sengkalan* runtuhnya Majapahit yaitu "Sirna ilang Kertaning Bumi" atau tahun 1400 Jawa dan yang perlu menjadi catatan bahwa Sengkalan sebenarnya adalah kalender lunar yang sudah lama dipakai sebelum masa para Wali - [REF][CK].

Sistem kalender jawa memberikan metode pembelajaran dan pewarisan sejarah yang menurut saya sangat superior karena **rumus matematis abadi** perhitungan dari kalender Jawa ini diwariskan dalam bentuk sederhana melalui lagu-lagu dan nyanyian. 

"Dengan terhafal dalam bentuk nyanyian, kalender Jawa akan terbawa kemana saja pergi, dan masih memiliki tingkat akurasi tinggi sampai 994 tahun lagi. Setelah itu baru ada koreksi +1 hari sebelum Ambal Kurup Alip Senen Kliwon, 1 Sura 2947 Jawa (26 Januari 2984 Masehi)" - [REF][CK]

Lebih lanjut silahkan membaca tentang penanggalan jawa di [DOKUMENTASI.md](DOKUMENTASI.md).

## Instalasi

Pustaka Kalender Jawa bisa dipakai melalui beberapa cara tergantung platform yang anda gunakan, bisa memakai node  melalui npm ataupun browser melalui CDN

### Node

```
npm install --save @junwatu/kalender-jawa
```

### Browser

Jika anda memakai browser pustaka ini bisa di ambil melalui CDN (*Content Delivery Network*) di `unpkg.com`. 

Kode berikut akan mengambil pustaka dengan versi terbaru

```html
<script src="https://unpkg.com/@junwatu/kalender-jawa"/>
```


## API

> Jika anda belum mengetahui apa itu pasaran, kurup harap membaca terlebih dahulu [DOKUMENTASI.md](DOKUMENTASI.md).

### `cariHariPasaranAwalBulanTahunJawa(w, t)`

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

### `cariKurupTahunJawa(t)`

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

## Referensi

- https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat

[CK]: https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat

## Lisensi
[MIT License](https://choosealicense.com/licenses/mit/)

Copyright © *Lawang Tunggal Walang Kembar*, [Junwatu](https://github.com/junwatu)
