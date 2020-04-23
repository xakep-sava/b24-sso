import typescript from 'rollup-plugin-typescript3'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import babel from 'rollup-plugin-babel'
import svgr from '@svgr/rollup'
import json from '@rollup/plugin-json'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  external: ['normalize.css'],
  plugins: [
    external(),
    resolve(),
    url(),
    json(),
    svgr(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['**/__tests__/**', '**/*.stories.tsx'],
      clean: true
    }),
    babel(),
    commonjs()
  ]
}
