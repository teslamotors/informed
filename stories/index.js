import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import StoryWrapper from './utils/StoryWrapper';
import Intro from './Intro';
import Basic from './Basic';
import Complex from './Complex';

addDecorator(StoryWrapper);

storiesOf('Introduction', module)
  .add('Getting Started', Intro );

storiesOf('Form', module)
  .add('Basic', Basic )
  .add('Complex', Complex );
