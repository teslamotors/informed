import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

module.exports = {
  input: ['src/index.js'],
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs'
    },
    {
      dir: 'dist/esm',
      format: 'esm'
    }
  ],
  // indicate which modules should be treated as external
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    babel({ babelHelpers: 'bundled' })
  ],
  preserveModules: true
};
