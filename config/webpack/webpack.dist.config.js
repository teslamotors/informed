const { join } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: join(__dirname, '../../src/index.js'),
  output: {
    filename: 'index.js',
    globalObject: 'this',
    library: 'informed',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  target: 'web',
  mode: 'production',
  devtool: 'source-map',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-proposal-class-properties', { loose: false }]
            ]
          }
        }
      }
    ]
  },
  optimization: {
    namedModules: true
  }
};
