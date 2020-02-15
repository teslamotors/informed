import './assets/prism';
import './assets/normalize.css';
import './assets/skeleton.css';
import './assets/prism.css';
import './assets/styles.css';

import { addParameters, addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';

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
});

addDecorator(addReadme);