# TEST_TODO

Actionable, high-impact improvements to strengthen tests and output validation. Items are prioritized and include concrete steps, suggested file paths, and example snippets to reduce implementation friction.

## 1) Table-driven tests across months and tahun classes (high impact)
- [ ] Add table-driven tests that iterate 12 months × 8 tahun classes and assert start day and pasaran match rumus.
  - File: `src/__tests__/table_rumus_sewindu.test.ts`
  - Use existing exports and registries to build cases.
  - Example skeleton:
    ```ts
    import { describe, it, expect } from 'vitest';
    import { cariHariPasaranAwalBulanTahunJawa } from '../index.js';
    import { SASI_ARR } from '../sasi.js';
    import { TAHUN_ARR } from '../taun.js';

    // Pick a baseline Gregorian year per tahun class for determinism
    const YEAR_FIXTURES: Record<string, number> = {
      alip: 1881,
      ehe: 1882,
      jimawal: 1883,
      je: 1884,
      dal: 1885,
      be: 1886,
      wawu: 1887,
      jimakir: 1888,
    };

    describe('Rumus start day/pasaran per wulan×taun', () => {
      for (const w of SASI_ARR) {
        for (const tahun of TAHUN_ARR) {
          const y = YEAR_FIXTURES[tahun.taun];
          it(`${w.wulan} × ${tahun.taun} → start day/pasaran`, async () => {
            const { kH, kP } = await cariHariPasaranAwalBulanTahunJawa(w.wulan, y);
            // Minimal invariant check: valid domain values
            expect(kH.dino).toBeTypeOf('string');
            expect(kP.pasaran).toBeTypeOf('string');
            expect(kP.neptu).toBeGreaterThan(0);
          });
        }
      }
    });
    ```

## 2) Dulkijah day-count regression (state leak guard) (already present; expand cases)
- [ ] Add more consecutive-year assertions to ensure month-length correction for Dulkijah is isolated and deterministic.
  - File: extend `src/__tests__/_dulkijah_state_leak.test.js` (or create TS variant) with 5–10 alternating years.

## 3) Property-based tests for invariants (robustness)
- [ ] Add fast-check and create invariants over random valid inputs:
  - Pseudocode properties:
    - sasi length is 29 or 30.
    - Days advance modulo-7; pasaran advance modulo-5.
    - Repeated calls with same inputs are deterministic.
  - Steps:
    1. Dev dep: `npm i -D fast-check`
    2. File: `src/__tests__/property_invariants.test.ts`
    3. Example:
       ```ts
       import fc from 'fast-check';
       import { sasi } from '../index.js';

       const validYear = fc.integer({ min: 1200, max: 3500 });
       const validMonth = fc.constantFrom(
         'mukarom','safar','sapar','robiulawal','robiulakir','jumadilawal','jumadilakir','rojab','sakban','romadon','sawal','dulkodah','dulkijah'
       );

       test('sasi invariants', async () => {
         await fc.assert(
           fc.asyncProperty(validMonth, validYear, async (m, y) => {
             const { s } = await sasi(m, y);
             const vals = [...s.values()][0];
             expect(vals.length === 29 || vals.length === 30).toBe(true);
             // Optional: check progression invariants here
           }),
           { numRuns: 100 }
         );
       });
       ```

## 4) Golden data tests (accuracy against known references)
- [ ] Create a small JSON with known (Gregorian → Javanese) samples and assert conversions.
  - Files:
    - Data: `src/__tests__/fixtures/golden_samples.json`
    - Test: `src/__tests__/golden_samples.test.ts`
  - Keep the dataset small (20–50 cases) but authoritative; expand over time.

## 5) Mutation-safety tests (immutability contract)
- [ ] Assert returned structures cannot mutate source registries or bleed state.
  - File: `src/__tests__/immutability_contract.test.ts`
  - Example operations: attempt to push to returned arrays or mutate objects and ensure source results for the same input remain unchanged.

## 6) Snapshot tests for structure and stability
- [ ] Snapshot a few representative sasi results to guard structure/ordering.
  - File: `src/__tests__/snapshot_sasi.test.ts`
  - Choose 3–5 (month, year) pairs; snapshot both metadata and first/last 3 entries.

## 7) Coverage thresholds (enforce discipline)
- [ ] In `vitest.config.ts`, enable thresholds (tune as needed):
  ```ts
  coverage: {
    provider: 'v8',
    reporter: ['text', 'html', 'lcov'],
    statements: 95,
    branches: 90,
    functions: 95,
    lines: 95,
    exclude: [ /* keep existing */ ],
  }
  ```

## 8) Bundle smoke tests (UMD/ESM)
- [ ] Add a smoke test to ensure the built bundles are loadable.
  - Steps:
    1. Build: `npm run build`
    2. Use `happy-dom` in a test to import the ESM build and require the CJS build.
  - File: `src/__tests__/bundle_smoke.test.ts`
  - Example:
    ```ts
    import { describe, it, expect } from 'vitest';

    describe('Bundle smoke', () => {
      it('loads ESM bundle', async () => {
        const lib = await import('../../dist/kalenderjawa.min.js');
        expect(lib).toBeTruthy();
      });

      it('loads CJS bundle', async () => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const lib = require('../../dist/kalenderjawa.min.cjs');
        expect(lib).toBeTruthy();
      });
    });
    ```

## 9) Performance budget (basic regression guard)
- [ ] Add a simple timing check to catch accidental O(n^2) regressions.
  - File: `src/__tests__/perf_budget.test.ts`
  - Example:
    ```ts
    import { describe, it, expect } from 'vitest';
    import { sasi } from '../index.js';

    describe('Perf budget', () => {
      it('sasi runs <= 5ms per call on average (100 calls)', async () => {
        const N = 100;
        const t0 = performance.now();
        for (let i = 0; i < N; i++) {
          await sasi('mukarom', 2000 + (i % 30));
        }
        const dt = performance.now() - t0;
        expect(dt / N).toBeLessThanOrEqual(5); // adjust threshold as needed per env
      });
    });
    ```

## 10) Type-level assertions for public API
- [ ] Use `expectTypeOf` from Vitest to pin public API types.
  - File: `src/__tests__/types_public_api.test.ts`
  - Example:
    ```ts
    import { expectTypeOf, describe, it } from 'vitest';
    import { sasi, versi } from '../index.js';

    describe('Public API types', () => {
      it('sasi return shape', async () => {
        const out = await sasi('mukarom', 2000);
        expectTypeOf(out).toMatchTypeOf({ k: { sasi: '', taun: 0 }, s: new Map() });
      });
      it('versi type', () => {
        expectTypeOf(versi()).toEqualTypeOf<string>();
      });
    });
    ```

## 11) Error-behavior tests (to add when error handling is implemented)
- [ ] When `periksaBatasan` and error codes are introduced, add tests asserting RangeError with codes:
  - `KALJAWA_INVALID_MONTH` when month is invalid.
  - `KALJAWA_OUT_OF_RANGE` when year is outside supported range.
  - File: `src/__tests__/errors_public_api.test.ts`

## 12) CI-friendly aggregate script
- [ ] Add `npm run check` script that runs typecheck, lint, and tests.
  - In package.json: `"check": "npm run typecheck && npm run lint && npm test"`
  - Add to CI workflow to block merges on failures.

Notes
- Keep datasets small but high-quality; grow them over time.
- Prefer `.ts` test files for better type integration with strict TS.
- For bundle tests, run after `npm run build`; guard with `process.env.CI` if timing sensitive.

