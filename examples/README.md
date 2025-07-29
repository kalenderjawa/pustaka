# Examples

This directory contains example usage of the @kalenderjawa/pustaka library in different module formats.

## Files

- `index.js` - ES Module example (modern Node.js)
- `index.cjs` - CommonJS example (traditional Node.js)
- `index.html` - Browser example with ES modules
- `index-no-esm.html` - Browser example without ES modules

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