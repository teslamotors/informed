module.exports = async ({ config, mode }) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  config.mode = 'development';

  config.module.rules[0].use[0].options.plugins = [
    'babel-plugin-emotion',
    'babel-plugin-macros',
    ['@babel/plugin-proposal-class-properties', { loose: false }]
  ];

  config.module.rules[0].use[0].options.presets = [
    '@babel/preset-env',
    '@babel/preset-react'
  ];

  // Return the altered config
  return config;
};
