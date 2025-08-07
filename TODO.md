### Actionable tasks to improve the project

- **Accuracy and correctness**
  - [ ] Standardize error message in `batur.ts`: change "out of scoope" → "out of scope"; update all tests expecting the old message.
  - [ ] Add a shared `parseMonth` helper (`src/utils/parseMonth.ts`) to normalize input (trim + lowercase); use in `cariRumusAbadiAwalBulanTahunJawa`, `cariHariPasaranAwalBulanTahunJawa`, and `sasi`.
  - [ ] Freeze registries and items to avoid accidental mutation: export `ReadonlyMap` and `Object.freeze` for `SASI_ARR`, `TAHUN_ARR` and entries.

- **Public API and DX**
  - [ ] Add sync variants without Promise wrappers: `cariKurupTahunJawaSync`, `cariRumusAbadiAwalBulanTahunJawaSync`, `cariHariPasaranAwalBulanTahunJawaSync`, `sasiSync` (keep async wrappers delegating to sync).
  - [ ] Validate year range inside public APIs via `periksaBatasan`; throw `RangeError` with structured error `{ code: 'KALJAWA_OUT_OF_RANGE', message }`.

- **Performance**
  - [ ] Refactor `silpin.ts` `konversiHari`/`konversiPasaran` to O(1) array indexing using `DINTEN_ARR` and `PASARAN_ARR` (remove Map iteration).
  - [ ] Centralize modulo corrections in a `src/utils/modulo.ts` and reuse in `koreksiDino`, `koreksiPasaran`, and `silpin` conversions.
  - [ ] Replace `do/while` in `sasi` with a simple for-loop for clarity.

- **Structure and DRY**
  - [ ] Move all `rumus_apalan_awal_bulan_*.ts` into `src/rumus/` to group domain rules.
  - [ ] Create a helper factory (e.g. `makeRumus(wulanKey, dino, pasaran)`) to reduce repetition and typo risk in `src/rumus/*`.
  - [ ] Create `src/utils/` directory; add `parseMonth`, `error.ts` (builders), and `modulo.ts`.

- **Build and packaging**
  - [ ] Generate and publish type declarations: re-enable `vite-plugin-dts` or add a `tsc --emitDeclarationOnly` step that outputs to `dist/`.
  - [ ] Add `"types": "dist/index.d.ts"` and `exports: { ".": { types: "./dist/index.d.ts", import: ..., require: ... } }` to `package.json`.
  - [ ] Set `"sideEffects": false` in `package.json` to improve tree-shaking.
  - [ ] Remove unused `rollup` and `rollup-plugin-terser` devDeps; rely on Vite/esbuild (or `@rollup/plugin-terser` only if needed).
  - [ ] Consider ESM-only distribution if CJS/UMD are not required; otherwise keep UMD for CDN but default to ESM.

- **Linting and types**
  - [ ] Address lint warnings: remove non-null assertions in `kurup.ts` and `kurup_asapon_anenhing_statik.ts`; replace with safe checks.
  - [ ] Remove unused vars in `silpin.ts` callbacks or switch to `for...of`.
  - [ ] Consider `tsconfig.json` improvements: enable `noUncheckedIndexedAccess: true`, set `verbatimModuleSyntax: true`; remove unused `emitDecoratorMetadata` and `experimentalDecorators`.
  - [ ] Add coverage thresholds in `vitest.config.ts` (e.g., statements 95%, branches 90%).

- **Tests**
  - [x] Add tests ensuring Dulkijah day-count correctness across consecutive calls with 354 vs 355-day years (no shared state leakage).
  - [ ] Add tests for month input normalization (mixed case, extra whitespace) rejecting invalid months with `RangeError('KALJAWA_INVALID_MONTH')`.
  - [ ] Add tests asserting public APIs throw `RangeError('KALJAWA_OUT_OF_RANGE')` when year is outside supported range.
  - [ ] Add a simple UMD/browser smoke test (optional) if UMD bundle is kept.

- **Docs and examples**
  - [ ] Update `README.md` Testing section to reflect Vitest (remove Puppeteer mention) and document the three build outputs and CDN usage.
  - [ ] Add Node ESM quickstart example and document valid year range and error behavior.
  - [ ] Note in examples that `npm run build:examples` must be run before `npm run serve:examples`.

- **CI/CD and maintenance**
  - [ ] Add GitHub Actions workflow: run `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build` on PRs; block merges on failures.
  - [ ] Add `npm run check` that runs `typecheck && lint && test` for local and CI use.
  - [ ] Enable Dependabot/Renovate for dev dependency updates.
  - [ ] Auto-generate API docs via TypeDoc and publish to GitHub Pages on release.

- **Minor polish**
  - [ ] Fix typos in comments/headers (e.g., `index.ts` header: "Perhtungan" → "Perhitungan").
  - [ ] Prefer relative paths in `examples/index.html` (`./kalenderjawa.min.js`) to avoid root-path assumptions.
  - [ ] Add error codes in a centralized `error.ts` and use consistently across throws.
  - [ ] Optionally export an aggregated API object alongside named exports for ergonomics.


