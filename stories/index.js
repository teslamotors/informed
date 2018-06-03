import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import StoryWrapper from './utils/StoryWrapper';
import Intro from './Intro';
import Basic from './Form/Basic';
import Complex from './Form/Complex';
import State from './Form/State';
import SimpleValidation from './Validation/SimpleValidation';
import ComplexValidation from './Validation/ComplexValidation';
import ValidationControl from './Validation/ValidationControl';
import UnnecessaryRendering from './Gotchas/UnnecessaryRendering';
import Scope from './Gotchas/Scope';
import DynamicFields from './Dynamic/DynamicFields';
import {
  TextInput,
  TextAreaInput,
  RadioInput,
  CheckboxInput,
  SelectInput,
  MultiSelectInput
} from './Inputs';


addDecorator(StoryWrapper);

storiesOf('Introduction', module)
  .add('Getting Started', Intro );

storiesOf('Form', module)
  .add('Basic', Basic )
  .add('Complex', Complex )
  .add('State', State );

storiesOf('Inputs', module)
  .add('Text', TextInput )
  .add('Text Area', TextAreaInput )
  .add('Radio Input', RadioInput )
  .add('Checkbox Input', CheckboxInput )
  .add('Select Input', SelectInput )
  .add('Multi Select Input', MultiSelectInput );


storiesOf('Validation', module)
  .add('Simple Validation', SimpleValidation )
  .add('Complex Validation', ComplexValidation )
  .add('Validation Control', ValidationControl );

storiesOf('Gotchas', module)
  .add('Unnecessary Rendering', UnnecessaryRendering )
  .add('Scope', Scope );

storiesOf('Dynamic Forms', module)
  .add('Dynamic Fields', DynamicFields );
