import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import {getBabelOutputPlugin} from '@rollup/plugin-babel';
import pkg from "./package.json";

export default [
  {
    input: "lib/index.js", // your entry point
    output: {
      name: "@shmiluyu/common", // package name
      file: pkg.browser,
      format: "umd",
    },
    plugins: [
      resolve(),
      commonjs(),
      getBabelOutputPlugin({
        allowAllFormats: true,
        exclude: ["node_modules/**"],
        presets: ['@babel/env'],
        plugins: [
          [
            "@babel/plugin-transform-runtime",
            {
              regenerator: true
            }
          ]
        ]
      })
    ],
  },
  {
    input: "lib/index.js", // your entry point
    output: [
      {file: pkg.main, format: "cjs"},
      {file: pkg.module, format: "es"},
    ],
    plugins: [
      getBabelOutputPlugin({
        allowAllFormats: true,
        exclude: ["node_modules/**"],
        presets: ['@babel/env'],
        plugins: [
          [
            "@babel/plugin-transform-runtime",
            {
              regenerator: true
            }
          ]
        ]
      })
    ],
  },
];
