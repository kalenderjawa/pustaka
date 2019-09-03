var flow = require('rollup-plugin-flow')

export default {
  input: {
    main: 'src/index.js'
  },
  plugins: [
    flow()
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    entryFileNames: 'kalenderjawa.esm.mjs'
  }
}

/**
 *
 * manualChunks(id) {
    if (id.includes('node_modules')) {
      // Return the directory name following the last `node_modules`.
      // Usually this is the package, but it could also be the scope.
      const dirs = id.split(path.sep);
      return dirs[dirs.lastIndexOf('node_modules') + 1];
    }
  }
 */
