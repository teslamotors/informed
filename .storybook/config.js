import { configure } from '@storybook/react';

import './assets/prism';
import './assets/normalize.css';
import './assets/skeleton.css';
import './assets/prism.css';
import './assets/styles.css';

const loadStories = () => {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
