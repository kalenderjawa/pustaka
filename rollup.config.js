import json from "@rollup/plugin-json";
import flow from "rollup-plugin-flow";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';


import pkg from "./package.json";

export default {
  input: "src/index.js",
  plugins: [flow(), terser(), json({ compact: true }), nodeResolve()],
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
