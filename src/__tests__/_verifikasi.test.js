/**
 * Verifikasi output pustaka terhadap data kalender Jawa yang diketahui
 * Sumber referensi: tanggalans.com, almnk.com, idntimes.com, kompas.com, dll.
 *
 * Catatan:
 * - Pustaka ini menghitung hari pertama (tanggal 1) setiap bulan Jawa
 * - Fungsi sasi() menghasilkan kalender lengkap satu bulan
 * - Tidak ada konversi Masehi-ke-Jawa, jadi verifikasi dilakukan
 *   dengan membandingkan hari/pasaran tanggal 1 bulan Jawa
 */

import { describe, it, expect } from 'vitest';
import {
  cariKurupTahunJawa,
  cariHariPasaranAwalBulanTahunJawa,
  sasi,
} from '../index.js';

describe('Verifikasi Pustaka vs Referensi Kalender Jawa', () => {
  // =================================================================
  // 1. Verifikasi 1 Mukarom 1959 Dal
  //    Referensi: 1 Suro 1959 = Jumat Kliwon (27 Juni 2025)
  //    Sumber: kompas.com, suarabaru.id, almnk.com
  // =================================================================
  describe('1 Mukarom 1959 (Dal) - Kurup Anenhing', () => {
    it('taun harus Dal', async () => {
      const result = await cariKurupTahunJawa(1959);
      expect(result.taun.taun).toBe('dal');
    });

    it('kurup harus Alip Selasa Pon (Asapon) - tahun 1959 masih di kurup Asapon (1867-1986)', async () => {
      const result = await cariKurupTahunJawa(1959);
      expect(result.kurup.taun).toBe('alip');
      expect(result.kurup.dinten.dino).toBe('selasa');
      expect(result.kurup.pasaran.pasaran).toBe('pon');
    });

    it('1 Mukarom 1959 = Jemah Kliwon', async () => {
      const result = await cariHariPasaranAwalBulanTahunJawa('mukarom', 1959);
      console.log('1 Mukarom 1959:', JSON.stringify(result, null, 2));
      expect(result.kH.dino).toBe('jemah');
      expect(result.kP.pasaran).toBe('kliwon');
    });
  });

  // =================================================================
  // 2. Verifikasi 1 Mukarom 1960 Be
  //    Referensi: 1 Suro 1960 = Rebo Kliwon (17 Juni 2026)
  //    Sumber: almnk.com, tanggalans.com
  // =================================================================
  describe('1 Mukarom 1960 (Be) - Kurup Anenhing', () => {
    it('taun harus Be', async () => {
      const result = await cariKurupTahunJawa(1960);
      expect(result.taun.taun).toBe('be');
    });

    it('1 Mukarom 1960 = Rebo Kliwon', async () => {
      const result = await cariHariPasaranAwalBulanTahunJawa('mukarom', 1960);
      console.log('1 Mukarom 1960:', JSON.stringify(result, null, 2));
      expect(result.kH.dino).toBe('rebo');
      expect(result.kP.pasaran).toBe('kliwon');
    });
  });

  // =================================================================
  // 3. Verifikasi 1 Romadon 1959 (Pasa/Poso)
  //    Referensi: 24 Feb 2026 = 7 Pasa 1959, Selasa Pahing
  //    Maka 1 Pasa (Romadon) 1959 = 18 Feb 2026
  //    18 Feb 2026 = Rabu/Rebo
  //    Jika 7 Pasa = Selasa Pahing, mundur 6 hari:
  //      dino: Selasa(2) - 6 = -4 -> mod 7 -> 3 = Rebo?
  //      Cek: Rebo(3), Kemis(4), Jemah(5), Sebtu(6), Akad(7), Senen(1), Selasa(2)
  //      Dari 1 Romadon maju 6 hari = hari ke-7
  //      Kalau 1=Rebo, 2=Kemis, 3=Jemah, 4=Sebtu, 5=Akad, 6=Senen, 7=Selasa ✓
  //    pasaran: Pahing(2) - 6 = -4 -> dari 1 mundur 6 di mod 5:
  //      Kalau 1=Pon, 2=Wage, 3=Kliwon, 4=Legi, 5=Pahing, 6=Pon, 7=Wage
  //      7 Pasa pasaran = Pahing, jadi 1 Pasa:
  //      Pon(3)? Cek: Pon(3),Wage(4),Kliwon(5),Legi(1),Pahing(2),Pon(3),Wage(4)
  //      Hmm let me recalculate. If day 1 = pasaran X, day 7 = X+6 mod 5
  //      X + 6 mod 5 = Pahing(2)
  //      X = 2 - 6 = -4; -4 mod 5 = 1 = Legi
  //      Actually: (-4 + 10) mod 5 = 6 mod 5 = 1 = Legi
  //      Cek: 1=Legi, 2=Pahing, 3=Pon, 4=Wage, 5=Kliwon, 6=Legi, 7=Pahing ✓
  //    Jadi 1 Romadon 1959 = Rebo Legi
  // =================================================================
  describe('1 Romadon 1959 (Pasa) - verifikasi via 7 Pasa = Selasa Pahing', () => {
    it('1 Romadon 1959 = Rebo Legi', async () => {
      const result = await cariHariPasaranAwalBulanTahunJawa('romadon', 1959);
      console.log('1 Romadon 1959:', JSON.stringify(result, null, 2));
      expect(result.kH.dino).toBe('rebo');
      expect(result.kP.pasaran).toBe('legi');
    });

    it('sasi Romadon 1959 hari ke-7 = Selasa Pahing (= 24 Feb 2026)', async () => {
      const result = await sasi('romadon', 1959);
      const days = result.s.get(result.k);
      // hari ke-7 (index 6 dalam array)
      const day7 = days[6];
      console.log('7 Romadon 1959:', JSON.stringify(day7));
      expect(day7[7].dinten).toBe('selasa');
      expect(day7[7].pasaran).toBe('pahing');
    });
  });

  // =================================================================
  // 4. Verifikasi beberapa bulan lain tahun 1959 - sasi() consistency
  //    Cek bahwa tanggal 1 bulan berikutnya konsisten dengan
  //    jumlah hari bulan sebelumnya
  // =================================================================
  describe('Konsistensi antar bulan tahun 1959', () => {
    const BULAN = [
      'mukarom', 'sapar', 'robiulawal', 'robiulakir',
      'jumadilawal', 'jumadilakir', 'rojab', 'sakban',
      'romadon', 'sawal', 'dulkodah', 'dulkijah'
    ];
    const JUMLAH_HARI = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, -1];

    it('semua 12 bulan 1959 dapat dihitung', async () => {
      const results = [];
      for (const b of BULAN) {
        const r = await cariHariPasaranAwalBulanTahunJawa(b, 1959);
        results.push({ bulan: b, dino: r.kH.dino, pasaran: r.kP.pasaran,
                       dinUrut: r.kH.urutan, pasUrut: r.kP.urutan });
      }
      console.log('\n=== Semua Awal Bulan 1959 (Dal) ===');
      console.table(results);
      expect(results.length).toBe(12);
    });

    it('hari/pasaran tanggal 1 bulan N+1 konsisten dengan bulan N', async () => {
      const DINO_NAMA = ['senen', 'selasa', 'rebo', 'kemis', 'jemah', 'sebtu', 'akad'];
      const PASARAN_NAMA = ['legi', 'pahing', 'pon', 'wage', 'kliwon'];

      for (let i = 0; i < BULAN.length - 1; i++) {
        const r1 = await cariHariPasaranAwalBulanTahunJawa(BULAN[i], 1959);
        const r2 = await cariHariPasaranAwalBulanTahunJawa(BULAN[i + 1], 1959);
        const hari = JUMLAH_HARI[i]; // 30 atau 29

        // Hitung hari ke tanggal 1 bulan berikutnya
        const expectedDino = ((r1.kH.urutan - 1 + hari) % 7) + 1;
        const expectedPasaran = ((r1.kP.urutan - 1 + hari) % 5) + 1;

        const expectedDinoNama = DINO_NAMA[expectedDino - 1];
        const expectedPasaranNama = PASARAN_NAMA[expectedPasaran - 1];

        console.log(
          `${BULAN[i]}(${r1.kH.dino} ${r1.kP.pasaran}) + ${hari}d ` +
          `-> ${BULAN[i + 1]} expected: ${expectedDinoNama} ${expectedPasaranNama}, ` +
          `actual: ${r2.kH.dino} ${r2.kP.pasaran}`
        );

        expect(r2.kH.dino).toBe(expectedDinoNama);
        expect(r2.kP.pasaran).toBe(expectedPasaranNama);
      }
    });
  });

  // =================================================================
  // 5. Verifikasi beberapa tahun di kedua kurup
  // =================================================================
  describe('Verifikasi lintas kurup', () => {
    // Kurup Asapon (1867-1986): Alip Selasa Pon
    it('tahun 1952 (Be) - Kurup Asapon', async () => {
      const result = await cariKurupTahunJawa(1952);
      expect(result.taun.taun).toBe('be');
      expect(result.kurup.dinten.dino).toBe('selasa');
      expect(result.kurup.pasaran.pasaran).toBe('pon');
    });

    // Kurup Anenhing (1987-2106): Alip Senen Pahing
    it('tahun 2000 (Be) - Kurup Anenhing', async () => {
      const result = await cariKurupTahunJawa(2000);
      expect(result.taun.taun).toBe('be');
      expect(result.kurup.dinten.dino).toBe('senen');
      expect(result.kurup.pasaran.pasaran).toBe('pahing');
    });

    // Verifikasi 1 Mukarom 1952 (Be, Asapon)
    // Dari test data yg sudah ada: Rebo Kliwon
    it('1 Mukarom 1952 (Be, Asapon) = Rebo Kliwon', async () => {
      const result = await cariHariPasaranAwalBulanTahunJawa('mukarom', 1952);
      expect(result.kH.dino).toBe('rebo');
      expect(result.kP.pasaran).toBe('kliwon');
    });
  });

  // =================================================================
  // 6. Verifikasi full sasi (satu bulan penuh) Romadon 1959
  //    untuk memastikan progresi hari dan pasaran benar
  // =================================================================
  describe('Full sasi() Romadon 1959', () => {
    it('menghasilkan 30 hari (Romadon selalu 30 hari)', async () => {
      const result = await sasi('romadon', 1959);
      const days = result.s.get(result.k);
      expect(days.length).toBe(30);
    });

    it('progresi hari: dino naik 1 tiap hari, wrap di 7', async () => {
      const DINO = ['senen', 'selasa', 'rebo', 'kemis', 'jemah', 'sebtu', 'akad'];
      const result = await sasi('romadon', 1959);
      const days = result.s.get(result.k);

      const startIdx = DINO.indexOf(days[0][1].dinten);
      expect(startIdx).toBeGreaterThanOrEqual(0);

      for (let i = 0; i < days.length; i++) {
        const expected = DINO[(startIdx + i) % 7];
        expect(days[i][i + 1].dinten).toBe(expected);
      }
    });

    it('progresi pasaran: naik 1 tiap hari, wrap di 5', async () => {
      const PASARAN = ['legi', 'pahing', 'pon', 'wage', 'kliwon'];
      const result = await sasi('romadon', 1959);
      const days = result.s.get(result.k);

      const startIdx = PASARAN.indexOf(days[0][1].pasaran);
      expect(startIdx).toBeGreaterThanOrEqual(0);

      for (let i = 0; i < days.length; i++) {
        const expected = PASARAN[(startIdx + i) % 5];
        expect(days[i][i + 1].pasaran).toBe(expected);
      }
    });
  });

  // =================================================================
  // 7. Verifikasi Dulkijah (bulan terakhir) - panjang hari
  //    Dal = tahun kabisat (355 hari) -> Dulkijah 30 hari
  //    Be = tahun biasa (354 hari) -> Dulkijah 29 hari
  // =================================================================
  describe('Panjang Dulkijah sesuai kabisat', () => {
    it('Dulkijah 1959 (Dal = kabisat) = 30 hari', async () => {
      const result = await sasi('dulkijah', 1959);
      const days = result.s.get(result.k);
      expect(days.length).toBe(30);
    });

    it('Dulkijah 1960 (Be = biasa) = 29 hari', async () => {
      const result = await sasi('dulkijah', 1960);
      const days = result.s.get(result.k);
      expect(days.length).toBe(29);
    });
  });

  // =================================================================
  // 8. Cross-check: 1 Mukarom 1960 harus = Dulkijah terakhir 1959 + 1 hari
  // =================================================================
  describe('Sambungan Dulkijah 1959 -> Mukarom 1960', () => {
    it('hari terakhir Dulkijah 1959 + 1 = 1 Mukarom 1960', async () => {
      const DINO = ['senen', 'selasa', 'rebo', 'kemis', 'jemah', 'sebtu', 'akad'];
      const PASARAN = ['legi', 'pahing', 'pon', 'wage', 'kliwon'];

      const dulkijah = await sasi('dulkijah', 1959);
      const dDays = dulkijah.s.get(dulkijah.k);
      const lastDay = dDays[dDays.length - 1][dDays.length]; // hari ke 30

      const mukarom = await cariHariPasaranAwalBulanTahunJawa('mukarom', 1960);

      const expectedDino = DINO[(DINO.indexOf(lastDay.dinten) + 1) % 7];
      const expectedPasaran = PASARAN[(PASARAN.indexOf(lastDay.pasaran) + 1) % 5];

      console.log(
        `Terakhir Dulkijah 1959: ${lastDay.dinten} ${lastDay.pasaran}`
      );
      console.log(
        `1 Mukarom 1960: ${mukarom.kH.dino} ${mukarom.kP.pasaran}`
      );
      console.log(`Expected: ${expectedDino} ${expectedPasaran}`);

      expect(mukarom.kH.dino).toBe(expectedDino);
      expect(mukarom.kP.pasaran).toBe(expectedPasaran);
    });
  });
});
