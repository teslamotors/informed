import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { configureReadme } from 'storybook-readme';
import StoryWrapper from './utils/StoryWrapper';
import Intro from './Intro';
import TLDR from './TLDR';
import CarColor from './CarColor';
import Changelog from './Intro/Changelog';
import Basic from './Form/Basic';
import FormProvider from './Form/FormProvider';
import Path from './Form/Path';
import FeatureTester from './Form/FeatureTester';
import Dynamic from './Form/Dynamic';
import Schema from './Schema/Intro';
import FormattedSchema from './Schema/FormattedSchema';
import NestedSchema from './Schema/NestedSchema';
import ArrayFieldSchema from './Schema/ArrayFieldSchema';
import ArrayFieldSchemaRelevant from './Schema/ArrayFieldSchemaRelevant';
import ArrayFieldSchemaNested from './Schema/ArrayFieldSchemaNested';
import CustomSchema from './Schema/CustomSchema';
import Complex from './Form/Complex';
import Big from './Form/Big';
import State from './Form/State';
import Debug from './Debugging/Debug';
import Props from './Form/Props';
import Api from './Form/Api';
import BasicMultistep from './Multistep/Basic';
import ComplexMultistep from './Multistep/Complex';
import MultistepState from './Multistep/MultistepState';
import Actions from './Multistep/Actions';
import SimpleValidation from './Validation/SimpleValidation';
import Required from './Validation/Required';
import YupValidation from './Validation/YupValidation';
import FieldLevelYupValidation from './Validation/FieldLevelYupValidation';
import ComplexValidation from './Validation/ComplexValidation';
import ValidationControl from './Validation/ValidationControl';
import ValidationMessages from './Validation/ValidationMessages';
import Elon from './Validation/Elon';

// import ArrayFieldValidation from './Validation/ArrayFieldValidation';
// import ComplexArrayFieldValidation from './Validation/ComplexArrayFieldValidation';
import Notifications from './Validation/Notifications';
// import FormLevelValidation from './Validation/FormLevelValidation';
import AjvValidation from './Validation/AjvValidation';
import AjvValidationNoRender from './Validation/AjvValidationNoRender';
import AsyncValidation from './Validation/AsyncValidation';
// import AsyncValidationControl from './Validation/AsyncValidationControl';
// import FormatPlayground from './Playground/Format';
// import SchemaPlayground from './Playground/Schema';
import RickRoll from './Playground/RickRoll';

// import FormatParse from './Formatting/FormatParse';
import Formatter from './Formatting/Formatter';
// import Mask from './Formatting/Mask';
import FormatterFunctions from './Formatting/FormatterFunctions';
// // import MaskWithCursor from './Formatting/MaskWithCursor';
// import MaskWithCursorOffset from './Formatting/MaskWithCursorOffset';
// import UnnecessaryRendering from './Gotchas/UnnecessaryRendering';
import Scope from './Gotchas/Scope';
import ChangingInitialValues from './Gotchas/ChangingInitialValues';
import InitialvsDefault from './Gotchas/InitialvsDefault';
import InitializeIfPristine from './Gotchas/InitializeIfPristine';

// import Optimization from './Gotchas/Optimization';
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
  // DynamicArrays,
  NestedFields,
  ArrayFieldItem,
  AlternateSyntax,
  DependentFieldsInArray,
  HugeArrayForm
  // Swap
} from './Arrays';

import RelevantComonent from './Relevance/RelevantComponent';
import RelevanceProp from './Relevance/RelevanceProp';
import ComplexRelevance from './Relevance/ComplexRelevance';

import ScopeComponent from './Scope/ScopeComponent';

// import {
//   WithFormApi,
//   WithFormState,
//   WithFieldApi,
//   WithFieldState
// } from './HOC';

import {
  UseFormApi,
  UseFormState,
  UseFieldApi,
  UseFieldState,
  UseForm,
  UseField
} from './Hooks';
import ConditionalSchema from './Schema/ConditionalSchema';
import ConditionalSchemaControl from './Schema/ConditionalSchemaControl';
import ConditionalOptions from './Schema/ConditionalOptions';
import SchemaComponents from './Schema/SchemaComponents';
// import HugeSchema from './Schema/HugeSchema';
import FormatDependent from './Form/FormatDependent';
import FormattedObjectInput from './CustomInputs/FormattedObjectInput';
import ObjectInput from './CustomInputs/ObjectInput';
import NumberFormatter from './Formatting/NumberFormatter';

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
  .add('TLDR', TLDR)
  .add('Car Color', CarColor)
  .add('Changelog', Changelog);

storiesOf('Form', module)
  .add('Basic', Basic)
  .add('State', State)
  .add('Api', Api)
  .add('Props', Props)
  .add('Dynamic', DynamicFields)
  .add('Dependent Fields', FormatDependent)
  .add('Path', Path)
  .add('Features', FeatureTester)
  .add('Inputs', Complex)
  .add('FormProvider', FormProvider)
  .add('Big', Big);

storiesOf('Inputs', module)
  .add('Intro', InputIntro)
  .add('Input', TextInput)
  .add('Text Area', TextAreaInput)
  .add('Radio Input', RadioInput)
  .add('Checkbox Input', CheckboxInput)
  .add('Select Input', SelectInput)
  .add('Multi Select Input', MultiSelectInput)
  .add('Number Input', NumberInput);

storiesOf('CustomInputs', module)
  .add('Creating Custom Inputs', CustomInputs)
  .add('Creating Object Inputs', ObjectInput)
  .add('Creating Formatted Object Inputs', FormattedObjectInput);

storiesOf('Arrays', module)
  // .add('Array Of Fields', ArrayOfFields)
  // .add('Array Of Scopes', ArrayOfScopes)
  // THE ABOVER WWAS ALREDAY COMMENTED OUT
  .add('Array Field', NestedFields)
  .add('Flat Array Field', AlternateSyntax)
  .add('Array Field Item', ArrayFieldItem)
  .add('Dependent Fields', DependentFieldsInArray)
  // .add('Swap', Swap)
  .add('Huge Array Form', HugeArrayForm);

storiesOf('Validation', module)
  .add('Simple Validation', SimpleValidation)
  .add('Async Validation', AsyncValidation)
  .add('Complex Validation', ComplexValidation)
  .add('Validation Control', ValidationControl)
  .add('Required', Required)
  .add('Validation Messages', ValidationMessages)
  // .add('Form Level Validation', FormLevelValidation)
  .add('Paired Validation', Notifications)
  // .add('Array Field Validation', ArrayFieldValidation)
  // .add('Complex Array Field Validation', ComplexArrayFieldValidation)
  .add('Yup Validation', YupValidation)
  .add('Field Level + Yup Validation', FieldLevelYupValidation)
  .add('JSON Schema Validation + Rendering', AjvValidation)
  .add('Only JSON Schema Validation', AjvValidationNoRender)
  .add('Elon', Elon);
// .add('Async Validation Control', AsyncValidationControl);

storiesOf('Relevance', module)
  .add('Relevant Comonent', RelevantComonent)
  .add('Relevance Prop', RelevanceProp)
  .add('Relevance Optimization', ComplexRelevance);

storiesOf('Scope', module).add('Scope Comonent', ScopeComponent);

storiesOf('Schema', module)
  .add('Schema', Schema)
  .add('Nested Schema', NestedSchema)
  .add('Formatted Schema', FormattedSchema)
  .add('Array Field Schema', ArrayFieldSchema)
  .add('Conditional Schema', ConditionalSchema)
  .add('Conditional Schema Control', ConditionalSchemaControl)
  .add('Conditional Options', ConditionalOptions)
  .add('Custom Schema', CustomSchema)
  .add('Schema Components', SchemaComponents)
  .add('Nested Array Fields', ArrayFieldSchemaNested)
  .add('Relevant ArrayField Schema', ArrayFieldSchemaRelevant);
// .add('Huge Schema', HugeSchema);

storiesOf('Debugging', module).add('Debug', Debug);

storiesOf('Formatting', module)
  //   .add('Mask', Mask)
  .add('Formatter', Formatter)
  .add('Number Formatter', NumberFormatter)
  .add('Formatter Functions', FormatterFunctions);
// // .add('Mask With Cursor', MaskWithCursor)
// // .add('Mask With Cursor Offset', MaskWithCursorOffset)
// // .add('Format and Parse', FormatParse);

storiesOf('Hooks!', module)
  .add('useFormApi', UseFormApi)
  .add('useFormState', UseFormState)
  .add('useFieldApi', UseFieldApi)
  .add('useFieldState', UseFieldState)
  .add('useForm', UseForm)
  .add('useField', UseField);

storiesOf('Multistep Forms', module)
  .add('BasicMultistep', BasicMultistep)
  .add('MultistepState', MultistepState)
  .add('Dynamic Multistep', ComplexMultistep)
  .add('Multistep Actions', Actions);

storiesOf('Gotchas', module)
  //   .add('Unnecessary Rendering', UnnecessaryRendering)
  //   .add('Optimization', Optimization)
  .add('Initial Vs Default', InitialvsDefault)
  .add('Change initialValues', ChangingInitialValues)
  .add('Initialize If Pristine', InitializeIfPristine)
  .add('Scope', Scope);

storiesOf('Dynamic Forms', module)
  .add('Dynamic Fields', DynamicFields)
  .add('Dynamic Rendering', Dynamic);

// storiesOf('Playground', module)
//   .add('Format Example', FormatPlayground)
//   .add('Schema Example', SchemaPlayground);

storiesOf('Cool Examples', module).add('Cool Example', RickRoll);
