import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import StoryWrapper from './utils/StoryWrapper';
import Intro from './Intro';
import Basic from './Form/Basic';
import Complex from './Form/Complex';
import ValidationControl from './Validation/ValidationControl';
import UnnecessaryRendering from './Gotchas/UnnecessaryRendering';


addDecorator(StoryWrapper);

storiesOf('Introduction', module)
  .add('Getting Started', Intro );

storiesOf('Form', module)
  .add('Basic', Basic )
  .add('Complex', Complex );

storiesOf('Validation', module)
  .add('Validation Control', ValidationControl );

storiesOf('Gotchas', module)
  .add('Unnecessary Rendering', UnnecessaryRendering );
