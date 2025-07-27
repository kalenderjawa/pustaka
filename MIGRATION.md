# Flow to TypeScript Migration Guide

This document outlines the gradual migration strategy from Flow to TypeScript.

## Current Status

✅ **Completed:**
- TypeScript dependencies installed
- TypeScript configuration (`tsconfig.json`) created
- Jest configured to support both `.js` and `.ts` files
- Rollup configured to handle both Flow and TypeScript
- Created `src/types.ts` with converted Flow types
- **Phase 1 Complete**: Converted utility files:
  - ✅ `src/kurup.ts` (example conversion)
  - ✅ `src/taun.ts` (year definitions)
  - ✅ `src/sasi.ts` (month definitions)
  - ✅ `src/batur.ts` (validation utilities)
  - ✅ `src/rupa_ati.ts` (formula aggregator)
- **Phase 2 Complete**: Converted complex files:
  - ✅ `src/silpin.ts` (core calculation utilities)
  - ✅ `src/index.ts` (main library exports)

🔄 **Current Phase:**

### Phase 3: Formula files and final cleanup
- Convert formula files: `rumus_apalan_awal_bulan_*.js` (12 files)
- Update kurup_asapon_anenhing_statik.js imports
- Update remaining imports to use `.ts` extensions
- Remove old `.js` files after conversion
- Remove Flow dependencies and configuration

### Phase 4: Build system optimization
- Update Rollup configuration to prioritize TypeScript
- Remove Flow-specific build configurations
- Update package.json scripts if needed

## Migration Commands

### Convert a file from Flow to TypeScript:
1. Copy the file: `cp src/file.js src/file.ts`
2. Edit the `.ts` file:
   - Remove `// @flow` comment
   - Replace `import type` with `import type` (same syntax)
   - Change Flow exact object types `{| |}` to interfaces
   - Replace `void` with `undefined`
   - Update type imports to point to `./types.js`

### Test during migration:
```bash
bun run test  # Tests both .js and .ts files
bun run build # Builds with both Flow and TypeScript support
```

## Example Conversion

**Before (Flow):**
```javascript
// @flow
import type { KurupType } from './type.js'

const ASAPON: KurupType = { taun: 'alip', ... }
```

**After (TypeScript):**
```typescript
import type { KurupType } from './types.js'

const ASAPON: KurupType = { taun: 'alip', ... }
```

## Type Mapping Reference

| Flow | TypeScript |
|------|------------|
| `{| prop: type |}` | `{ prop: type }` or `interface` |
| `void` | `undefined` |
| `Array<T>` | `T[]` or `Array<T>` |
| `?T` | `T \| undefined` |
| `$ReadOnly<T>` | `Readonly<T>` |

## Migration Status

### ✅ Files Successfully Converted:
- `src/types.ts` - TypeScript type definitions
- `src/kurup.ts` - Kurup definitions  
- `src/taun.ts` - Year cycle definitions
- `src/sasi.ts` - Month definitions
- `src/batur.ts` - Validation utilities
- `src/rupa_ati.ts` - Formula aggregator
- `src/silpin.ts` - Core calculation utilities
- `src/index.ts` - Main library exports

### 🔄 Remaining Files to Convert:
- `src/kurup_asapon_anenhing_statik.js` - Kurup data mappings
- `src/rumus_apalan_awal_bulan_*.js` - 12 formula files
- `src/angka_rumus_itung.js` - If still in use

### 🗑️ Files to Remove After Migration:
- `src/type.js` - Flow type definitions (replaced by types.ts)
- All `.js` versions of converted files

## Gradual Migration Benefits

- ✅ No breaking changes during migration
- ✅ Tests continue to pass throughout (38/38 tests passing)
- ✅ Both type systems work side by side
- ✅ Can migrate file by file at your own pace
- ✅ Build system supports both Flow and TypeScript simultaneously