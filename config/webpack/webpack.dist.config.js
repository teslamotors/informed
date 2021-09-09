const path = require('path');
const nodeExternals = require('webpack-node-externals');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: path.join(__dirname, '../../src/index.js'),
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
  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ],
  output: {
    filename: 'index.js',
    globalObject: 'this',
    library: 'informed',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    //usedExports: true
    namedModules: true
  }
};
