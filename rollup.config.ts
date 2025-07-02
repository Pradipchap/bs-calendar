import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      exports: "named"
    },
    {
      file: "dist/index.esm.js",
      format: "esm"
    }
  ],
  plugins: [
    peerDepsExternal(), // keep react/react-native external
    resolve(), // locate and bundle third-party modules in node_modules
    commonjs(), // convert CJS modules to ESM
    typescript({ tsconfig: "./tsconfig.json" }), // compile TS
    json()
  ],
  external: ["react", "react-native"]
};
