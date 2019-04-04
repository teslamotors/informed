import { configure, addParameter, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { themes } from '@storybook/theming';

// NEW 
import { addReadme } from 'storybook-readme';

// addParameters({
//   options: {
//     //theme: themes.dark,
//   },
// });

import './assets/prism';
import './assets/normalize.css';
import './assets/skeleton.css';
//import './assets/prism.css';
import './assets/styles.css';
// import 'highlight.js/styles/atelier-cave-dark.css';

setOptions({
  name: 'Informed',
  url: 'https://joepuzzo.github.io/informed',
  showAddonPanel: false,
  addonPanelInRight: false,
});


// NEW
addDecorator(addReadme);

const loadStories = () => {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
