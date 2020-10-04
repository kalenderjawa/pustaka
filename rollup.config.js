import flow from 'rollup-plugin-flow'
import { terser } from 'rollup-plugin-terser'

const masterPackage = require('./package.json').version

export default {
  input: {
    main: 'src/index.js'
  },
  plugins: [
    flow(),
    terser()
  ],
  output: [
    {
      dir: 'lib',
      format: 'esm',
      entryFileNames: 'kalenderjawa.min.js'
    }
    ,
    {
      dir: 'lib',
      format: 'iife',
      name: 'KalenderJawa',
      entryFileNames: 'kalenderjawa.browser.min.js'
    },
    {
      dir: 'lib',
      format: 'cjs',
      entryFileNames: 'kalenderjawa.min.cjs'
    }
  ]
}
