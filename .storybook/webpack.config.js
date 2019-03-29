const path = require('path');

module.exports = async ({ config, mode }) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.module.rules[0].use[0].options.plugins = [
    'babel-plugin-emotion',
    'babel-plugin-macros',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
  ];

  config.module.rules[0].use[0].options.presets = [
    '@babel/preset-env',
    '@babel/preset-react'
  ];

  config.module.rules[1] = {
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader'
      },
      {
        loader: 'markdown-loader',
        options: {}
      }
    ],
    include: path.resolve(__dirname, '../'),
    exclude: /node_modules/
  };

  // config.module.rules.push({
  //   test: /\.css$/,
  //   loaders: ['style-loader', 'css-loader'],
  //   include: path.resolve(__dirname, '../'),
  //   exclude: /node_modules/
  // });

  // config.module.rules.push({
  //   test: /\.scss$/,
  //   loaders: ['style-loader', 'css-loader', 'sass-loader'],
  //   include: path.resolve(__dirname, '../'),
  //   exclude: /node_modules/
  // });

  // Return the altered config
  return config;
};
