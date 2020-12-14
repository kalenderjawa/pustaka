import json from "@rollup/plugin-json";
import flow from "rollup-plugin-flow";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  plugins: [flow(), terser(), json({ compact: true })],
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
