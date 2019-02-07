import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/esm/index.js',
    format: 'esm'
  },
  // indicate which modules should be treated as external
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**', // only transpile our source code
      presets: [
        '@babel/preset-react',
        ['@babel/preset-env', { modules: false }]
      ],
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: false }]
      ]
    }),
    commonjs()
  ]
};
