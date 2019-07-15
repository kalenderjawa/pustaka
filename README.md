<h3 align="center">
<p align="center">Pustaka Kalender Jawa</p>
<p align="center"><img src="images/sengkala.svg" width="80%" alt="sengkala"></p>
</h3>

<p align="center">
<a href="https://travis-ci.com/junwatu/kalender-jawa" alt="Travis CI"><img src="https://travis-ci.com/junwatu/kalender-jawa.svg?token=ygQgbKk8uMU72qsetYYB&branch=master" alt="Build Status"/></a>
<a href="https://github.com/facebook/jest"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest"></a>
</p>

## Pengenalan
Pustaka JavaScript untuk perhitungan kalender jawa.


## Sistematis
Berikut aturan atau sistematis utama dari kalender Jawa yang perlu menjadi acuan:

- Kalender jawa mempunyai siklus 8 tahunan (satu windu).
- Koreksi keberulangan terjadi setiap 120 tahun sekali (15 windu) atau istilahnya yaitu **Salin Kurup** atau **Ganti Kurup** (koreksi yaitu dengan menambah 1 hari tiap 120 tahun).
 ### Rumus Hafalan Awal Bulan Kalender Jawa Abadi

 ![rumus_awal_taun](images/20190102-menek-kalender-4.jpg)

## API
### `cariHariPasaranAwalBulan(w, t)`
**Argumen**:
- Bulan `w` `string`
- Tahun `t` `number`

Contoh penggunaan:

Untuk mencari hari dan pasaran awal bulan puasa Romadon pada tahun 1952 Jawa maka parameternya adalah

| Argumen | Value 
| --- | --- |
| `w` | "romadon"
| `t` | 1952

dan kode javascript (ES6) untuk mencari hari dan pasaran tersebut bisa ditulis seperti berikut

```
import * as KalenderJawa from '@junwatu/kalender-jawa'

let {kH, kP} = KalenderJawa.cariHariPasaranAwalBulan('romadon', 1952)
console.log(`${kH.dino} ${kP.pasaran}`) // senen legi

```

## Referensi

- https://www.caknun.com/2019/kalender-jowo-digowo-kalender-arab-digarap-kalender-barat-diruwat

## Lisensi
[MIT License](https://choosealicense.com/licenses/mit/)

Copyright © 2019 [Junwatu](https://github.com/junwatu)
