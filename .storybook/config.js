import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import './assets/prism';
import './assets/normalize.css';
import './assets/skeleton.css';
import './assets/prism.css';
import './assets/styles.css';

setOptions({
  name: 'Informed',
  url: 'https://joepuzzo.github.io/informed',
  showDownPanel: false,
  downPanelInRight: false,
});


const loadStories = () => {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
