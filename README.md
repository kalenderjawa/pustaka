<h3 align="center">
<p align="center">Pustaka Kalender Jawa</p>
<p align="center"><img src="images/sengkala.svg" width="80%" alt="sengkala"></p>
</h3>

<p align="center">
<a href="https://travis-ci.com/junwatu/kalender-jawa" alt="Travis CI"><img src="https://travis-ci.com/junwatu/kalender-jawa.svg?token=ygQgbKk8uMU72qsetYYB&branch=master" alt="Build Status"/></a>
<a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a>
</p>

## Pengenalan
Ada banyak kalender online (atau fisik) yang sudah memenuhi kebutuhan anda untuk mengetahui informasi tentang penanggalan Jawa hanya saja khusus untuk pengembang tidak terlalu banyak pustaka khusus yang menyediakan perhitungan, informasi ataupun pengkonversian misalnya dari penanggalan Jawa ke Hijriyah maupun ke Masehi.

Dengan maksud dan tujuan supaya penanggalan Jawa lebih mudah dikenal dan dipakai secara umum khususnya buat pengembang maka repositori ini dibuat. 

Pustaka Kalender Jawa ini ditulis memakai bahasa JavaScript (ES6).

## Sejarah
Penanggalan jawa yang dipakai saat ini merupakan usaha hasil para Wali dalam mengolah antara penanggalan Jawa yang jauh sudah ada sebelumnya (*Candra Sengkala*) dengan kalender Hijri dan penanggalan Jawa baru itu resmi dipakai sejak Raden Patah menjadi Sultan Demak yang pertama, yang mana momen ini ditandai dengan *Sengkalan*,



### *Catur Ilang Sucining Ratu*



*Sengkalan* tersebut menandakan tahun 1404 Saka (887 H, 1482 M) atau 4 tahun setelah runtuhnya Majapahit.

> Candra Sengkala atau Sengkalan merupakan cara orang Jawa dalam mengingat momen pada tahun dengan cara sederhana yaitu suatu kalimat. 
>
> Contoh paling terkenal adalah *Sengkalan* runtuhnya Majapahit yaitu "Sirna ilang Kertaning Bumi" atau tahun 1400 Jawa dan yang perlu menjadi catatan bahwa Sengkalan sebenarnya adalah kalender lunar yang sudah lama dipakai sebelum masa para Wali [[sumber](https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat)].

Penanggalan Jawa masih umum dipakai khususnya dikalangan sesepuh, penentuan upacara adat, dan di pedesaan tetapi secara masal pemakaian masih memakai penanggalan hasil adopsi yaitu Masehi. 

Ada banyak hal yang bisa anda pelajari dari sistem kalender jawa yang memberikan metode pembelajaran dan pewarisan sejarah yang menurut saya sangat superior. Lebih lanjut silahkan membaca tentang penanggalan jawa di [Dokumentasi](DOKUMENTASI.md).

## Instalasi

Pustaka Kalender Jawa bisa dipakai melalui beberapa cara tergantung platform yang anda gunakan, bisa memakai node  melalui npm ataupun browser melalui CDN

### Node

```
npm install --save @junwatu/kalender-jawa
```

### Browser

Melalui browser pustaka bisa di ambil melalui CDN unpkg.com. Kode berikut akan mengambil pustaka dengan versi terbaru

```
<script src="https://unpkg.com/@junwatu/kalender-jawa"/>
```


## API
Perlu menjadi catatan bahwa kata `taun` disini berarti tahun, `wulan` berarti bulan, `dino` berarti hari, `dinten` juga berarti hari (di Jawa kata dinten lebih halus dari dino).

### `cariHariPasaranAwalBulan(w, t)`

**Argumen**:

- Bulan `w` bertipe `string`
- Tahun `t` bertipe `number`

Contoh penggunaan:

Untuk mencari hari dan pasaran awal bulan puasa Romadon pada tahun 1952 Jawa maka parameternya adalah

| Argumen | Value 
| :---: | --- |
| `w` | "romadon"
| `t` | 1952

dan kode javascript (ES6) untuk mencari hari dan pasaran tersebut bisa ditulis seperti berikut

```
import * as KalenderJawa from '@junwatu/kalender-jawa'

KalenderJawa.cariHariPasaranAwalBulan('romadon', 1952).then({kH, kP} => {
  console.log(`${kH.dino} ${kP.pasaran}`) // senen legi
})

```

### `cariKurupTahunJawa(t)`

**Argumen**:

- Tahun `t` bertipe `number` (integer)


Fungsi ini akan mencari pada tahun apa dalam se-windu dan berada pada kurup apa suatu taun `t`. Misalnya anda ingin mencari nama taun jawa dan kurup dari tahun 1994 maka tahun tersebut berada pada tahun Jimakir dan kurup Alip Senen Pahing atau Anenhing.

**Return**:
``` 
 
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

## Lisensi
[MIT License](https://choosealicense.com/licenses/mit/)

Copyright © *Lawang Tunggal Walang Kembar*, [Junwatu](https://github.com/junwatu)
