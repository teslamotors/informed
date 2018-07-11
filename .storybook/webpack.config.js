const path = require("path");


module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  console.log(JSON.stringify(storybookBaseConfig,null,2));
  console.log("HERE", path.resolve(__dirname, "../"));

  storybookBaseConfig.module.rules[0].use[0].options.plugins = [
    "babel-plugin-emotion",
    "babel-plugin-macros",
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
    [
      "@babel/plugin-transform-runtime",
      {
        "helpers": true,
        "polyfill": true,
        "regenerator": true
      }
    ]
  ];

  storybookBaseConfig.module.rules[0].use[0].options.presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ];

  // storybookBaseConfig.module.rules[0] = {
  //   test: /\.js$/,
  //   exclude: [ path.resolve(__dirname, "node_modules") ],
  //   include: [ path.resolve(__dirname, "../") ],
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       presets: [
  //         "@babel/preset-env",
  //         "@babel/preset-react"
  //       ],
  //       plugins: [
  //         "babel-plugin-emotion",
  //         "babel-plugin-macros",
  //         ["@babel/plugin-proposal-class-properties", { "loose": false }],
  //         [
  //           "@babel/plugin-transform-runtime",
  //           {
  //             "polyfill": false,
  //             "regenerator": true
  //           }
  //         ]
  //       ]
  //     }
  //   }
  // };

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    loaders: ["style-loader", "css-loader"],
    include: path.resolve(__dirname, "../"),
    exclude: /node_modules/
  });

  storybookBaseConfig.module.rules.push(  {
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
    exclude: /node_modules/
  });

  console.log(storybookBaseConfig.module.rules);


  // Return the altered config
  return storybookBaseConfig;
}

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         loaders: ["style-loader", "css-loader"],
//         include: path.resolve(__dirname, "../"),
//         exclude: /node_modules/
//       },
//       {
//         test: /\.scss$/,
//         loaders: ["style-loader", "css-loader", "sass-loader"],
//         include: path.resolve(__dirname, "../"),
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               "@babel/preset-env",
//               "@babel/preset-react"
//             ],
//             plugins: [
//               "babel-plugin-emotion",
//               "babel-plugin-macros",
//               ["@babel/plugin-proposal-class-properties", { "loose": false }]
//               [
//                 "@babel/plugin-transform-runtime",
//                 {
//                   "polyfill": false,
//                   "regenerator": true
//                 }
//               ]
//             ]
//           }
//         }
//       },
//     ]
//   }
// };
