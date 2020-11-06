import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { configureReadme } from 'storybook-readme';
import StoryWrapper from './utils/StoryWrapper';
import Intro from './Intro';
import TLDR from './TLDR';
import Basic from './Form/Basic';
import Dynamic from './Form/Dynamic';
import Schema from './Schema/Intro';
import FormattedSchema from './Schema/FormattedSchema';
import NestedSchema from './Schema/NestedSchema';
import ArrayFieldSchema from './Schema/ArrayFieldSchema';
import CustomSchema from './Schema/CustomSchema';
import Complex from './Form/Complex';
import Big from './Form/Big';
import State from './Form/State';
import FormState from './Debugging/FormState';
import Props from './Form/Props';
import Api from './Form/Api';
import BasicMultistep from './Multistep/Basic';
import ComplexMultistep from './Multistep/Complex';
import SimpleValidation from './Validation/SimpleValidation';
import YupValidation from './Validation/YupValidation';
import FieldLevelYupValidation from './Validation/FieldLevelYupValidation';
import ComplexValidation from './Validation/ComplexValidation';
import ValidationControl from './Validation/ValidationControl';
import ArrayFieldValidation from './Validation/ArrayFieldValidation';
import ComplexArrayFieldValidation from './Validation/ComplexArrayFieldValidation';
import Notifications from './Validation/Notifications';
import FormLevelValidation from './Validation/FormLevelValidation';
import AjvValidation from './Validation/AjvValidation';
import AjvValidationNoRender from './Validation/AjvValidationNoRender';

import FormatParse from './Formatting/FormatParse';
import Formatter from './Formatting/Formatter';
import Mask from './Formatting/Mask';
// import MaskWithCursor from './Formatting/MaskWithCursor';
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
  NestedForm,
  AlternateSyntax,
  HugeArrayForm
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
  UseFieldState,
  UseArrayField,
  UseForm,
  UseField
} from './Hooks';
import { add } from 'lodash';
import ConditionalSchema from './Schema/ConditionalSchema';

addDecorator(StoryWrapper);

configureReadme({
  /**
   * Wrapper for story. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  StoryPreview: ({ children }) => (
    <div
      style={{
        marginTop: '2rem',
        marginBottom: '2rem'
        // border: '1px dashed #e5e5e5',
      }}>
      {children}
    </div>
  ),

  /**
   * Wrapper for content and sidebar docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  DocPreview: ({ children }) => <div> {children}</div>,

  /**
   * Wrapper for hedaer docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  HeaderPreview: ({ children }) => <div>{children}</div>,

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
  footer: ''
});

//addParameters(params);

storiesOf('Introduction', module)
  //.addParameters(params)
  .add('Getting Started', Intro)
  .add('TLDR', TLDR);

storiesOf('Form', module)
  .add('Basic', Basic)
  .add('Complex', Complex)
  .add('State', State)
  .add('Api', Api)
  .add('Props', Props)
  .add('Dynamic', Dynamic)
  .add('Big', Big);

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
  .add('Dynamic Arrays', AlternateSyntax)
  .add('Nested Form', NestedForm)
  .add('Huge Array Form', HugeArrayForm);
// .add('Alternate Syntax', AlternateSyntax);

storiesOf('Validation', module)
  .add('Simple Validation', SimpleValidation)
  .add('Complex Validation', ComplexValidation)
  .add('Validation Control', ValidationControl)
  .add('Form Level Validation', FormLevelValidation)
  .add('Notifications', Notifications)
  .add('Array Field Validation', ArrayFieldValidation)
  .add('Complex Array Field Validation', ComplexArrayFieldValidation)
  .add('Yup Validation', YupValidation)
  .add('Field Level + Yup Validation', FieldLevelYupValidation)
  .add('JSON Schema Validation + Rendering', AjvValidation)
  .add('Only JSON Schema Validation', AjvValidationNoRender);

storiesOf('Schema', module)
  .add('Schema', Schema)
  .add('Nested Schema', NestedSchema)
  .add('Formatted Schema', FormattedSchema)
  .add('Array Field Schema', ArrayFieldSchema)
  .add('Conditional Schema', ConditionalSchema)
  .add('Custom Schema', CustomSchema);

storiesOf('Debugging', module).add('Form State', FormState);

storiesOf('Formatting', module)
  .add('Mask', Mask)
  .add('Formatter', Formatter);
// .add('Mask With Cursor', MaskWithCursor)
// .add('Mask With Cursor Offset', MaskWithCursorOffset)
// .add('Format and Parse', FormatParse);

storiesOf('Hooks!', module)
  .add('useFormApi', UseFormApi)
  .add('useFormState', UseFormState)
  .add('useFieldApi', UseFieldApi)
  .add('useFieldState', UseFieldState)
  .add('useArrayField', UseArrayField)
  .add('useForm', UseForm)
  .add('useField', UseField);

storiesOf('High Order Components', module)
  .add('withFormApi', WithFormApi)
  .add('withFormState', WithFormState)
  .add('withFieldApi', WithFieldApi)
  .add('withFieldState', WithFieldState);

storiesOf('Multistep Forms', module).add('Dynamic Multistep', ComplexMultistep);

storiesOf('Gotchas', module)
  .add('Unnecessary Rendering', UnnecessaryRendering)
  .add('Optimization', Optimization)
  .add('Scope', Scope);

storiesOf('Dynamic Forms', module).add('Dynamic Fields', DynamicFields);
