import './assets/prism';
import './assets/normalize.css';
// import './assets/skeleton.css';
import './assets/prism.css';
import './assets/styles.css';

import { addParameters, addDecorator } from '@storybook/react';
import { addReadme, configureReadme } from 'storybook-readme';
import { create } from '@storybook/theming/create';
import { themes } from '@storybook/theming';
import { version } from '../package.json';

// const availableCodeThemes = [
//   'a11y-dark',
//   'atom-dark',
//   'base16-ateliersulphurpool.light',
//   'cb',
//   'darcula',
//   'duotone-dark',
//   'duotone-earth',
//   'duotone-forest',
//   'duotone-light',
//   'duotone-sea',
//   'duotone-space',
//   'ghcolors',
//   'github',
//   'hopscotch',
//   'pojoaque',
//   'vs',
//   'xonokai',
// ];

// TMEME SHIT

const theme = create({
  base: 'light',
  brandTitle: 'Informed',
  brandTitle: `Informed v${version}`,
  brandUrl: 'https://teslamotors.github.io/informed',
  // brandImage: 'https://placehold.it/350x150',
  // brandImage: '/InformedLogo.png'
  // brandImage: '/informed-car.png'
  brandImage: 'car-on-informed.png'

  //colorPrimary: 'hotpink',
  //colorSecondary: 'deepskyblue',

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  //textColor: 'white',
  //textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,
});

// README SHIT
addParameters({
  readme: {
    /**
     * Prism code theme
     * Full list of theme https://github.com/PrismJS/prism-themes
     * To be used with storybook-readme, naming of the code theme should be used in one of these styles. https://github.com/tuchk4/storybook-readme/tree/master/packages/storybook-readme/src/styles/prismCodeThemes
     */
    //codeTheme: 'a11y-dark',
    //highlightContent: true
  },
  darkMode: {
    // Set the initial theme
    // current: 'dark',
    darkClass: 'informed-black',
    lightClass: 'informed-white',
    stylePreview: true,
    // Override the default dark theme
    dark: { ...theme, ...themes.dark },
    // Override the default light theme
    light: { ...themes.light, ...theme }
  },
  options: {
    showPanel: false
  }
});

// configureReadme({
//   StoryPreview: ({ children }) => (
//     <div className="informed-container">{children}</div>
//   ),
//   DocPreview: ({ children }) => (
//     <div className="informed-container">{children}</div>
//   )
// });

addDecorator(addReadme);
