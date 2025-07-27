import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    typescript({
      allowJs: true,
      checkJs: false,
      declaration: false,
      noEmitOnError: false
    }),
    json({ compact: true }),
    terser()
  ],
  output: [
    {
      file: pkg.module,
      format: "esm",
    },
    {
      file: pkg.browser,
      format: "iife",
      name: "KalenderJawa",
    },
    {
      file: pkg.main,
      format: "cjs",
    },
  ],
};
