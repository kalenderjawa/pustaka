# Examples

This directory contains example usage of the @kalenderjawa/pustaka library in different module formats and comprehensive API demonstrations.

## Files

### Basic Examples
- `index.js` - ES Module example (modern Node.js)
- `index.cjs` - CommonJS example (traditional Node.js)
- `index.html` - Browser example with ES modules
- `index-no-esm.html` - Browser example without ES modules

### Comprehensive API Examples
- `api-examples.js` - Complete JavaScript examples for all API functions
- `api-examples.ts` - TypeScript examples with full type safety

## Running the Examples

### ES Module (index.js)

For modern Node.js environments with ES module support:

```bash
node examples/index.js
```

This example uses:
```javascript
import * as KalenderJawa from './kalenderjawa.min.js';
```

### CommonJS (index.cjs)

For traditional Node.js environments or when you need to use `require()`:

```bash
node examples/index.cjs
```

This example uses:
```javascript
const KalenderJawa = require("./kalenderjawa.min.cjs");
```

### Browser Examples

Serve the HTML files through a web server:

```bash
npm run serve:examples
```

Then open:
- http://localhost:3113/index.html - Modern browser with ES modules
- http://localhost:3113/index-no-esm.html - Older browser compatibility

### Comprehensive API Examples (api-examples.js)

Run the complete JavaScript API examples:

```bash
node examples/api-examples.js
```

This demonstrates:
- All public functions with various use cases
- Working with constants and data arrays  
- Error handling and edge cases
- Practical real-world examples
- Finding specific day-pasaran combinations
- Generating full month calendars
- Year cycle patterns

### TypeScript Examples (api-examples.ts)

Run the TypeScript examples with full type safety:

```bash
# Install tsx if not already installed
npm install -D tsx

# Run the TypeScript examples
npx tsx examples/api-examples.ts
```

The TypeScript examples include:
- Type-safe function usage
- Custom type definitions and interfaces
- Type guards for discriminated unions
- Advanced patterns with generics
- Batch processing with error handling
- Creating wrapper functions with proper typing

## Module Format Notes

This project is configured as an ES module (`"type": "module"` in package.json), which means:

- `.js` files are treated as ES modules by default
- Use `.cjs` extension for CommonJS files
- ES modules use `import/export` syntax
- CommonJS modules use `require/module.exports` syntax

## Building Examples

To build and copy the library files to the examples directory:

```bash
npm run build:examples
```

This will:
1. Build the library (`npm run build`)
2. Copy all distribution files to the examples directory (`npm run copy:examples`)