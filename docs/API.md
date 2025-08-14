# @kalenderjawa/pustaka — API Reference

This document describes the public API exposed by the library, including functions, constants, return types, behaviors, and usage examples.

- Language: English with original Javanese/Indonesian terms preserved (wulan=month, taun=year, dinten=weekday, pasaran=five-day cycle)
- Module format: ES Modules (default). CJS/browser builds are also provided in dist/.

Contents
- Quick Start
- Concepts and Data Model
- Public Exports
  - Functions
    - cariKurupTahunJawa
    - cariRumusAbadiAwalBulanTahunJawa
    - cariHariPasaranAwalBulanTahunJawa
    - sasi
    - versi
  - Constants (data arrays)
    - araningPasaran
    - araningDinten
    - araningSasi
    - tahunJawa
- Types
- Month name normalization and valid values
- Year range and accuracy
- Examples

Quick Start
Install and import:

- Node (ESM)
  import * as KalenderJawa from "@kalenderjawa/pustaka";

- Browser (ESM)
  <script type="module">
    import * as KalenderJawa from "https://unpkg.com/@kalenderjawa/pustaka";
  </script>

Build artifacts are in dist/:
- kalenderjawa.min.js – ESM
- kalenderjawa.min.cjs – CommonJS
- kalenderjawa.browser.min.js – Classic browser script (no ESM)

Concepts and Data Model
- Dinten (weekday): 7-day cycle (Senin..Minggu). Provided by @kalenderjawa/saptawara.
- Pasaran: 5-day cycle (Legi, Pahing, Pon, Wage, Kliwon). Provided by @kalenderjawa/pancawara.
- Wulan (month): 12 lunar months (mukarom..dulkijah). The last month (dulkijah) can be 29 or 30 days depending on the year length.
- Taun (year): 8-year cycle (Sewindu): alip, ehe, jimawal, je, dal, be, wawu, jimakir. Year length (cacah) alternates: 354 or 355 days.
- Kurup: Epoch descriptor defining the starting weekday and pasaran of a cycle.

Public Exports
All exports below are available from the package root.

Functions
1) cariKurupTahunJawa(taun: number): Promise<TaunKurupType>
Find the Kurup and Taun (Javanese year name) for a given 4-digit Javanese year number.
- Parameters
  - taun: number – 4-digit Javanese year (e.g., 1957)
- Returns
  - Promise<TaunKurupType>
    - taun: { taun: string; neptu: number; urutan: number; cacah: number }
    - kurup: { taun: string; dinten: DintenType; pasaran: PasaranType }
    - awal: number[] – internal registry of starting markers of this Kurup
- Errors
  - Rejects if the year is out of known Kurup registry scope.
- Notes
  - Internally searches over known Kurup datasets (asapon/anenhing).

Example:
```javascript
import { cariKurupTahunJawa } from '@kalenderjawa/pustaka';

// Get year information for 1957
const yearInfo = await cariKurupTahunJawa(1957);
console.log(yearInfo.taun.taun);    // "dal" (year name)
console.log(yearInfo.taun.cacah);   // 355 (days in year)
console.log(yearInfo.taun.neptu);   // 4 (neptu value)

// Get kurup information
console.log(`${yearInfo.kurup.taun} ${yearInfo.kurup.dinten.dino} ${yearInfo.kurup.pasaran.pasaran}`);
// Output: "alip Selasa Pon"

// Check multiple years to see the 8-year cycle pattern
for (let year = 1953; year <= 1960; year++) {
  const info = await cariKurupTahunJawa(year);
  console.log(`${year}: ${info.taun.taun} (${info.taun.cacah} days)`);
}
// Output:
// 1953: alip (354 days)
// 1954: ehe (355 days)
// 1955: jimawal (354 days)
// 1956: je (354 days)
// 1957: dal (355 days)
// 1958: be (354 days)
// 1959: wawu (354 days)
// 1960: jimakir (355 days)

// Error handling for out-of-range years
try {
  await cariKurupTahunJawa(1800); // Too early
} catch (error) {
  console.error('Year out of range:', error.message);
}
```

2) cariRumusAbadiAwalBulanTahunJawa(wulan: string, taun: number): Promise<RumusSasiTaunType | undefined>
Find "abadi" (memorized/eternal) formula offsets for the first day of a given month in a given Javanese year.
- Parameters
  - wulan: string – month name (see Month names list below). Case-insensitive; whitespace trimmed.
  - taun: number – Javanese year number
- Returns
  - Promise<RumusSasiTaunType | undefined>
    - When found, the result has:
      - wulan: WulanType
      - taun: TaunType
      - rumus: { wulan: WulanType|undefined; dino: number; pasaran: number }
    - Plus an extra property: query: { wulan: string; taun: number }
  - undefined if the formula is not found
- Special handling of Dulkijah
  - If the requested month is dulkijah (the 12th month), the result's wulan.cacah will be adjusted to [29] if the year has 354 days, or [30] if the year has 355 days. This does not mutate the internal registry, but returns an adjusted clone.

Example:
```javascript
import { cariRumusAbadiAwalBulanTahunJawa } from '@kalenderjawa/pustaka';

// Get formula for Mukarom 1957
const formula = await cariRumusAbadiAwalBulanTahunJawa('mukarom', 1957);
if (formula && 'rumus' in formula) {
  console.log(formula.wulan.wulan);       // "mukarom"
  console.log(formula.wulan.urutan);      // 1 (first month)
  console.log(formula.wulan.cacah);       // [30] (days in month)
  console.log(formula.rumus.dino);        // Day offset
  console.log(formula.rumus.pasaran);     // Pasaran offset
}

// Dulkijah special handling - adjusts based on year length
const yearInfo1956 = await cariKurupTahunJawa(1956);
const yearInfo1957 = await cariKurupTahunJawa(1957);

const dulkijah1956 = await cariRumusAbadiAwalBulanTahunJawa('dulkijah', 1956);
const dulkijah1957 = await cariRumusAbadiAwalBulanTahunJawa('dulkijah', 1957);

console.log(`1956 (${yearInfo1956.taun.cacah} days): Dulkijah has ${dulkijah1956.wulan.cacah} days`);
// Output: "1956 (354 days): Dulkijah has 29 days"

console.log(`1957 (${yearInfo1957.taun.cacah} days): Dulkijah has ${dulkijah1957.wulan.cacah} days`);
// Output: "1957 (355 days): Dulkijah has 30 days"

// Case-insensitive month names
const variations = ['ROMADON', 'Romadon', 'romadon', '  romadon  '];
for (const monthName of variations) {
  const result = await cariRumusAbadiAwalBulanTahunJawa(monthName, 1957);
  if (result && 'wulan' in result) {
    console.log(`"${monthName}" → ${result.wulan.wulan}`);
  }
}
// All variations normalize to "romadon"

// Get all months for a year
import { araningSasi } from '@kalenderjawa/pustaka';

for (const month of araningSasi) {
  const result = await cariRumusAbadiAwalBulanTahunJawa(month.wulan, 1957);
  if (result && 'wulan' in result) {
    console.log(`${month.wulan}: ${result.wulan.cacah[0]} days`);
  }
}
```

3) cariHariPasaranAwalBulanTahunJawa(wulan: string, taun: number): Promise<{ w: string; t: number; i: { taun: string; kurup: string }; kH: DintenType; kP: PasaranType }>
Compute the actual weekday (dinten) and pasaran for the first day of the requested month in the given year.
- Parameters
  - wulan: string – month name
  - taun: number – Javanese year number
- Returns
  - Promise resolving to:
    - w: string – normalized month key
    - t: number – year input echo
    - i: { taun: string; kurup: string } – description string of the kurup, e.g. "alip Selasa Pon"
    - kH: DintenType – computed weekday for day-1 of the month
    - kP: PasaranType – computed pasaran for day-1 of the month

Example:
```javascript
import { cariHariPasaranAwalBulanTahunJawa, araningSasi } from '@kalenderjawa/pustaka';

// Find the first day of Romadon 1957
const result = await cariHariPasaranAwalBulanTahunJawa('romadon', 1957);
console.log(`First day: ${result.kH.dino} ${result.kP.pasaran}`);
console.log(`Weekday order: ${result.kH.urutan}`);
console.log(`Pasaran neptu: ${result.kP.neptu}`);
console.log(`Kurup: ${result.i.kurup}`);
// Output:
// First day: Kamis Wage
// Weekday order: 4
// Pasaran neptu: 4
// Kurup: alip Selasa Pon

// Find first days for all months in 1957
console.log('First days of all months in 1957:');
for (const month of araningSasi) {
  const result = await cariHariPasaranAwalBulanTahunJawa(month.wulan, 1957);
  console.log(`${month.wulan}: ${result.kH.dino} ${result.kP.pasaran}`);
}
// Output:
// mukarom: Senin Kliwon
// sapar: Rabu Legi
// robiulawal: Kamis Pon
// ... etc

// Find months starting with specific day-pasaran combination
console.log('\nMonths in 1957 starting with Jumat Kliwon:');
for (const month of araningSasi) {
  const result = await cariHariPasaranAwalBulanTahunJawa(month.wulan, 1957);
  if (result.kH.dino === 'Jumat' && result.kP.pasaran === 'Kliwon') {
    console.log(`- ${month.wulan}`);
  }
}

// Compare same month across different years
console.log('\nFirst day of Mukarom across years:');
for (let year = 1955; year <= 1960; year++) {
  const result = await cariHariPasaranAwalBulanTahunJawa('mukarom', year);
  const yearInfo = await cariKurupTahunJawa(year);
  console.log(`${year} (${yearInfo.taun.taun}): ${result.kH.dino} ${result.kP.pasaran}`);
}
// Shows how the first day shifts each year
```

4) sasi(wulan: string, taun: number): Promise<{ k: SasiKeyType; s: Map<SasiKeyType, Array<{ [tanggal: number]: { dinten: string; pasaran: string; neptu: number } }>> }>
Generate the full calendar for a specific month and year, with weekday and pasaran for each date.
- Parameters
  - wulan: string – month name
  - taun: number – Javanese year number
- Returns
  - Promise resolving to an object containing:
    - k: { sasi: string; taun: number } – map key describing month/year
    - s: Map keyed by k. The value is an array with one entry per calendar date. Each array element is an object that maps the numeric day (1-based) to:
      - { dinten: string; pasaran: string; neptu: number }
- Notes
  - The number of elements equals the month length, using the adjusted Dulkijah logic described above.

Example:
```javascript
import { sasi } from '@kalenderjawa/pustaka';

// Generate full calendar for Romadon 1957
const result = await sasi('romadon', 1957);
const calendar = result.s.get(result.k);

console.log(`Calendar for ${result.k.sasi} ${result.k.taun}`);
console.log(`Total days: ${calendar.length}`);

// Display first week
console.log('\nFirst week:');
for (let i = 0; i < Math.min(7, calendar.length); i++) {
  const dayData = calendar[i];
  const date = Object.keys(dayData)[0];
  const info = dayData[date];
  console.log(`${date}: ${info.dinten} ${info.pasaran} (neptu: ${info.neptu})`);
}
// Output:
// 1: Kamis Wage (neptu: 12)
// 2: Jumat Kliwon (neptu: 14)
// 3: Sabtu Legi (neptu: 14)
// ... etc

// Find all occurrences of specific day-pasaran combination
const jumatKliwon = [];
calendar.forEach(dayData => {
  const date = Object.keys(dayData)[0];
  const info = dayData[date];
  if (info.dinten === 'Jumat' && info.pasaran === 'Kliwon') {
    jumatKliwon.push(date);
  }
});
console.log(`\nJumat Kliwon dates in Romadon 1957: ${jumatKliwon.join(', ')}`);

// Calculate neptu statistics
const neptuCounts = {};
calendar.forEach(dayData => {
  const info = dayData[Object.keys(dayData)[0]];
  neptuCounts[info.neptu] = (neptuCounts[info.neptu] || 0) + 1;
});
console.log('\nNeptu distribution:');
Object.keys(neptuCounts).sort((a, b) => a - b).forEach(neptu => {
  console.log(`  Neptu ${neptu}: ${neptuCounts[neptu]} days`);
});

// Compare Dulkijah length across years (29 vs 30 days)
for (let year = 1956; year <= 1957; year++) {
  const dulkijah = await sasi('dulkijah', year);
  const calendar = dulkijah.s.get(dulkijah.k);
  const yearInfo = await cariKurupTahunJawa(year);
  console.log(`Dulkijah ${year} (${yearInfo.taun.taun}, ${yearInfo.taun.cacah}-day year): ${calendar.length} days`);
}
// Output:
// Dulkijah 1956 (je, 354-day year): 29 days
// Dulkijah 1957 (dal, 355-day year): 30 days

// Find weton (birth day combination) for specific date
const romadon15 = calendar[14]; // 15th day (0-indexed)
const weton = romadon15[15];
console.log(`\n15 Romadon 1957: ${weton.dinten} ${weton.pasaran}`);
console.log(`Weton neptu: ${weton.neptu}`);
```

5) versi(): string
Return the library semantic version string prefixed with "v", e.g. "v3.2.1".

Example:
```javascript
import { versi } from '@kalenderjawa/pustaka';

console.log(`Library version: ${versi()}`);
// Output: "Library version: v1.0.2"
```

Constants (data arrays)
1) araningPasaran: ReadonlyArray<PasaranType>
List of the five pasaran entries, each with fields:
- pasaran: string
- neptu: number
- urutan: number (1..5)

Example:
```javascript
import { araningPasaran } from '@kalenderjawa/pustaka';

// Display all pasaran
araningPasaran.forEach(p => {
  console.log(`${p.urutan}. ${p.pasaran} (neptu: ${p.neptu})`);
});
// Output:
// 1. Legi (neptu: 5)
// 2. Pahing (neptu: 9)
// 3. Pon (neptu: 7)
// 4. Wage (neptu: 4)
// 5. Kliwon (neptu: 8)

// Find a specific pasaran
const kliwon = araningPasaran.find(p => p.pasaran === 'Kliwon');
console.log(`Kliwon neptu: ${kliwon.neptu}`); // Output: 8

// Calculate combined neptu for a specific day-pasaran
const dayNeptu = 6;  // e.g., Jumat
const pasaranNeptu = araningPasaran[4].neptu; // Kliwon
console.log(`Jumat Kliwon neptu: ${dayNeptu + pasaranNeptu}`); // Output: 14
```

2) araningDinten: ReadonlyArray<DintenType>
List of the seven weekdays (dinten), each with fields:
- dino: string (weekday name)
- urutan: number (1..7)

Example:
```javascript
import { araningDinten } from '@kalenderjawa/pustaka';

// Display all weekdays
araningDinten.forEach(d => {
  console.log(`${d.urutan}. ${d.dino}`);
});
// Output:
// 1. Senin
// 2. Selasa
// 3. Rabu
// 4. Kamis
// 5. Jumat
// 6. Sabtu
// 7. Minggu

// Get weekday by order
const friday = araningDinten[4]; // 0-indexed, so 4 = Jumat
console.log(`Day 5: ${friday.dino}`); // Output: "Day 5: Jumat"

// Find weekday by name
const senin = araningDinten.find(d => d.dino === 'Senin');
console.log(`Senin order: ${senin.urutan}`); // Output: 1
```

3) araningSasi: ReadonlyArray<WulanType>
List of the 12 lunar months:
- wulan: string (canonical key)
- celukan: string (mnemonic/stem)
- urutan: number (1..12)
- cacah: number[] – day count candidates; for dulkijah it is [29,30]

Example:
```javascript
import { araningSasi } from '@kalenderjawa/pustaka';

// Display all months with their day counts
araningSasi.forEach(m => {
  const days = m.cacah.length > 1 
    ? `${m.cacah[0]} or ${m.cacah[1]}` 
    : `${m.cacah[0]}`;
  console.log(`${m.urutan}. ${m.wulan} (${m.celukan}): ${days} days`);
});
// Output:
// 1. mukarom (rom): 30 days
// 2. sapar (par): 29 days
// 3. robiulawal (rowal): 30 days
// ...
// 12. dulkijah (jah): 29 or 30 days

// Find fasting month
const romadon = araningSasi.find(m => m.wulan === 'romadon');
console.log(`Romadon is month ${romadon.urutan}, normally ${romadon.cacah[0]} days`);

// Get month by order (e.g., 10th month)
const month10 = araningSasi[9]; // 0-indexed
console.log(`Month 10: ${month10.wulan}`); // Output: "sawal"

// Total days in non-leap year (when Dulkijah = 29)
const totalDays354 = araningSasi.reduce((sum, month, idx) => {
  return sum + (idx === 11 ? 29 : month.cacah[0]); // Dulkijah = 29
}, 0);
console.log(`Total days (354-day year): ${totalDays354}`);
```

4) tahunJawa: ReadonlyArray<TaunType>
The 8-year cycle (sewindu): alip, ehe, jimawal, je, dal, be, wawu, jimakir, with fields:
- taun: string (name)
- neptu: number
- urutan: number (1..8)
- cacah: number (354 or 355 days)

Example:
```javascript
import { tahunJawa } from '@kalenderjawa/pustaka';

// Display the 8-year cycle
tahunJawa.forEach(t => {
  console.log(`${t.urutan}. ${t.taun}: ${t.cacah} days (neptu: ${t.neptu})`);
});
// Output:
// 1. alip: 354 days (neptu: 1)
// 2. ehe: 355 days (neptu: 5)
// 3. jimawal: 354 days (neptu: 3)
// 4. je: 354 days (neptu: 7)
// 5. dal: 355 days (neptu: 4)
// 6. be: 354 days (neptu: 2)
// 7. wawu: 354 days (neptu: 6)
// 8. jimakir: 355 days (neptu: 3)

// Calculate cycle statistics
const totalDays = tahunJawa.reduce((sum, year) => sum + year.cacah, 0);
const avgDays = totalDays / tahunJawa.length;
console.log(`Total days in 8-year cycle: ${totalDays}`);
console.log(`Average days per year: ${avgDays}`);
// Output:
// Total days in 8-year cycle: 2835
// Average days per year: 354.375

// Find leap years (355 days)
const leapYears = tahunJawa.filter(t => t.cacah === 355);
console.log('Leap years (355 days):', leapYears.map(t => t.taun).join(', '));
// Output: "Leap years (355 days): ehe, dal, jimakir"

// Determine year type from year number
function getYearType(yearNumber) {
  const yearInCycle = ((yearNumber - 1) % 8) + 1;
  return tahunJawa.find(t => t.urutan === yearInCycle);
}
const year1957Type = getYearType(1957);
console.log(`1957 is year ${year1957Type.taun} (${year1957Type.cacah} days)`);
```

Types
These TypeScript interfaces are part of the public contract and can be imported from the package for type-safe integration.
- PasaranType { pasaran: string; neptu: number; urutan: number }
- DintenType { dino: string; urutan: number }
- WulanType { wulan: string; celukan: string; urutan: number; cacah: number[] }
- TaunType { taun: string; neptu: number; urutan: number; cacah: number }
- KurupType { taun: string; dinten: DintenType; pasaran: PasaranType }
- RumusType { wulan: WulanType|undefined; dino: number; pasaran: number }
- WulanTaunType { wulan: WulanType|undefined; taun: TaunType|undefined; rumus: RumusType }
- WulanTaunQueryType { wulan: string; taun: number }
- WulanTaunQueryKeyType { query: WulanTaunQueryType }
- RumusSasiTaunType = WulanTaunQueryKeyType | WulanTaunType
- TaunKurupType { taun: TaunType; kurup: KurupType; awal: number[] }
- SasiKeyType { sasi: string; taun: number }

Month name normalization and valid values
- Input to functions that accept a month (wulan) is normalized by trimming and lowercasing.
- Valid canonical month keys:
  - mukarom
  - sapar
  - robiulawal
  - robiulakir
  - jumadilawal
  - jumadilakir
  - rojab
  - sakban
  - romadon
  - sawal
  - dulkodah
  - dulkijah

Year range and accuracy
- The library’s datasets and formulas currently target two kurup epochs, covering approximately Javanese years 1867–2106. Outside this range, lookups may fail or produce undefined results.
- The “abadi” formulas are designed to be accurate across centuries; the implementation applies a necessary Dulkijah adjustment based on year length (354 vs 355 days).

Examples
JavaScript (ESM)
- Find the weekday and pasaran for the first day of Romadon 1957
  import * as KJ from "@kalenderjawa/pustaka";

  const { kH, kP, i } = await KJ.cariHariPasaranAwalBulanTahunJawa("romadon", 1957);
  console.log(i.kurup); // e.g., "alip Selasa Pon"
  console.log(kH.dino, kP.pasaran); // Weekday and pasaran names

- Build the full calendar for Sawal 1957
  const { k, s } = await KJ.sasi("sawal", 1957);
  const entries = s.get(k) || [];
  for (const row of entries) {
    const day = Number(Object.keys(row)[0]);
    const { dinten, pasaran, neptu } = row[day];
    console.log(`${day}: ${dinten} ${pasaran} (neptu ${neptu})`);
  }

TypeScript
- Type-safe usage of results
  import type { DintenType, PasaranType, SasiKeyType } from "@kalenderjawa/pustaka";
  import * as KJ from "@kalenderjawa/pustaka";

  const res = await KJ.cariHariPasaranAwalBulanTahunJawa("mukarom", 1946);
  const h: DintenType = res.kH;
  const p: PasaranType = res.kP;

  const cal = await KJ.sasi("dulkijah", 1946);
  const key: SasiKeyType = cal.k;

CommonJS
- Using the CJS build
  const KJ = require("@kalenderjawa/pustaka/dist/kalenderjawa.min.cjs");
  KJ.cariKurupTahunJawa(1957).then(console.log);

Notes and edge cases
- Dulkijah month length is dynamically set to 29 for 354-day years and 30 for 355-day years.
- If a requested (wulan, taun) pair is not found in the registry, cariRumusAbadiAwalBulanTahunJawa resolves to a rejection; callers should handle errors appropriately.
- All exported arrays and objects are frozen (read-only) to avoid accidental mutation.

Version
- Get library version
  import { versi } from "@kalenderjawa/pustaka";
  console.log(versi()); // e.g. v3.0.0

Changelog
- See Git history and releases for changes between versions.

