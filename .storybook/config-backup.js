import { configure, addParameter, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { themes } from '@storybook/theming';

import './assets/prism';
import './assets/normalize.css';
import './assets/skeleton.css';
import './assets/prism.css';
import './assets/styles.css';

// NEW 
import { addReadme } from 'storybook-readme';

// addParameters({
//   options: {
//     theme: themes.dark,
//   },
// });

// import { addons } from '@storybook/addons';

// addons.setConfig({
//   theme: themes.dark,
// });

setOptions({
  //name: 'Informed',
  //url: 'https://joepuzzo.github.io/informed',
  //showAddonPanel: false,
  //addonPanelInRight: false,
});


// NEW
//addDecorator(addReadme);

// const loadStories = () => {
//   require('../stories/index.js');
//   // You can require as many stories as you need.
// }

//configure(loadStories, module);
