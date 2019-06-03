import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { configureReadme } from 'storybook-readme';
import { themes } from '@storybook/theming';
import StoryWrapper from './utils/StoryWrapper';
import Intro from './Intro';
import Basic from './Form/Basic';
import Dynamic from './Form/Dynamic';
import Complex from './Form/Complex';
import State from './Form/State';
import Props from './Form/Props';
import Api from './Form/Api';
import SimpleValidation from './Validation/SimpleValidation';
import ComplexValidation from './Validation/ComplexValidation';
import ValidationControl from './Validation/ValidationControl';
import Notifications from './Validation/Notifications';
import FormLevelValidation from './Validation/FormLevelValidation';
import FormatParse from './Formatting/FormatParse';
import Mask from './Formatting/Mask';
import MaskWithCursorOffset from './Formatting/MaskWithCursorOffset';
import UnnecessaryRendering from './Gotchas/UnnecessaryRendering';
import Scope from './Gotchas/Scope';
import Optimization from './Gotchas/Optimization';
import DynamicFields from './Dynamic/DynamicFields';
import CustomInputs from './CustomInputs';
import {
  TextInput,
  NumberInput,
  TextAreaInput,
  RadioInput,
  CheckboxInput,
  SelectInput,
  MultiSelectInput,
  Intro as InputIntro
} from './Inputs';

import {
  ArrayOfFields,
  ArrayOfScopes,
  DynamicArrays,
  DynamicArrayOfScopes,
  DynamicArrayOfScopesWithKey,
} from './Arrays';

import {
  WithFormApi,
  WithFormState,
  WithFieldApi,
  WithFieldState
} from './HOC';

import {
  UseFormApi,
  UseFormState,
  UseFieldApi,
  UseFieldState
} from './Hooks';

addDecorator(StoryWrapper);

const params = {
  readme: {
    /**
     * Override theme values
     *
     * All theme values https://github.com/tuchk4/storybook-readme/blob/master/packages/storybook-readme/src/styles/githubMarkdownCss.js#L436
     */
    //theme: themes.dark,

    /**
     * Highlightjs code theme
     * Import theme at _.storybook/config.js_.
     * Full list of theme https://highlightjs.org/static/demo/.
     */
    //codeTheme: 'atom-one-dark',
  },
};

configureReadme({
  /**
   * Wrapper for story. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  StoryPreview: ({ children }) => <div style={{
    marginTop: '2rem',
    marginBottom: '2rem',
    // border: '1px dashed #e5e5e5',
  }}>{children}</div>,

  /**
   * Wrapper for content and sidebar docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  DocPreview: ({ children }) => (
    <div> {children}</div>
  ),

  /**
   * Wrapper for hedaer docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  HeaderPreview: ({ children }) => (
    <div>{children}</div>
  ),

  /**
   * Wrapper for footer docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  FooterPreview: ({ children }) => <div>{children}</div>,

  /**
   * Header docs in markdown format
   */
  header: '',

  /**
   * Footer docs in markdown format
   */
  footer: '',
});

storiesOf('Introduction', module)
  .addParameters(params)
  .add('Getting Started', Intro);

storiesOf('Form', module)
  .add('Basic', Basic)
  .add('Complex', Complex)
  .add('State', State)
  .add('Api', Api)
  .add('Props', Props)
  .add('Dynamic', Dynamic);

storiesOf('Inputs', module)
  .add('Intro', InputIntro)
  .add('Text', TextInput)
  .add('Text Area', TextAreaInput)
  .add('Radio Input', RadioInput)
  .add('Checkbox Input', CheckboxInput)
  .add('Select Input', SelectInput)
  .add('Multi Select Input', MultiSelectInput)
  .add('Number Input', NumberInput);

storiesOf('CustomInputs', module).add('Creating Custom Inputs', CustomInputs);

storiesOf('Arrays', module)
  .add('Array Of Fields', ArrayOfFields)
  .add('Array Of Scopes', ArrayOfScopes)
  .add('Dynamic Arrays', DynamicArrays)
  .add('Dynamic Array of scopes', DynamicArrayOfScopes)
  .add('Dynamic Array of scopes with key', DynamicArrayOfScopesWithKey);


storiesOf('Validation', module)
  .add('Simple Validation', SimpleValidation)
  .add('Complex Validation', ComplexValidation)
  .add('Validation Control', ValidationControl)
  .add('Form Level Validation', FormLevelValidation)
  .add('Notifications', Notifications);

storiesOf('Formatting', module)
  .add('Mask', Mask)
  .add('Mask With Cursor Offset', MaskWithCursorOffset)
  .add('Format and Parse', FormatParse);

storiesOf('Hooks!', module)
  .add('useFormApi', UseFormApi)
  .add('useFormState', UseFormState)
  .add('useFieldApi', UseFieldApi)
  .add('useFieldState', UseFieldState);

storiesOf('High Order Components', module)
  .add('withFormApi', WithFormApi)
  .add('withFormState', WithFormState)
  .add('withFieldApi', WithFieldApi)
  .add('withFieldState', WithFieldState);

storiesOf('Gotchas', module)
  .add('Unnecessary Rendering', UnnecessaryRendering)
  .add('Optimization', Optimization)
  .add('Scope', Scope);

storiesOf('Dynamic Forms', module).add('Dynamic Fields', DynamicFields);
