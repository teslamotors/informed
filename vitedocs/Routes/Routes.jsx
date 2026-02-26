import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

// Components
import { NotFound } from '../Pages/NotFound/NotFound';
import { NotAuthorized } from '../Pages/NotAuthorized/NotAuthorized';
import { Home } from '../Pages/Home/Home';
import Intro from '../Pages/GettingStarted/Intro/Intro';
import Setup from '../Pages/GettingStarted/Setup/Setup';
import Hooks from '../Pages/GettingStarted/Hooks/Hooks';
import UseField from '../Pages/ApiReference/UseField';
import UseFieldState from '../Pages/ApiReference/UseFieldState';
import UseFieldApi from '../Pages/ApiReference/UseFieldApi';
import UseFormState from '../Pages/ApiReference/UseFormState';
import UseFormApi from '../Pages/ApiReference/UseFormApi';
import FormState from '../Pages/ApiReference/FormState/FormState';
import FieldState from '../Pages/ApiReference/FieldState/FieldState';
import FormApi from '../Pages/ApiReference/FormApi/FormApi';
import { Relevance } from '../Pages/ApiReference/Relevance/Relevance';
import { UseSubState } from '../Pages/ApiReference/UseSubState/UseSubState';
import { UseScopedState } from '../Pages/ApiReference/UseScopedState/UseScopedState';
import { ScopedComponent } from '../Pages/ApiReference/ScopeComponent/ScopeComponent';
import FieldApi from '../Pages/ApiReference/FieldApi/FieldApi';
import PathSyntax from '../Pages/ApiReference/PathSyntax/PathSyntax';
import Formatter from '../Pages/ApiReference/Formatting/Formatter/Formatter';
import Clean from '../Pages/ApiReference/Formatting/Clean/Clean';
import Mask from '../Pages/ApiReference/Formatting/Mask/Mask';
import Parse from '../Pages/ApiReference/Formatting/Parse/Parse';
import FormatterFunctions from '../Pages/ApiReference/Formatting/FormatterFunctions/FormatterFunctions';
import NumberFormatter from '../Pages/ApiReference/Formatting/NumberFormatter/NumberFormatter';
import ArrayFieldComponent from '../Pages/ApiReference/Arrays/ArrrayField/ArrayField';
import HugeArrayField from '../Pages/ApiReference/Arrays/HugeArrrayField/ArrayField';
import { Formatting } from '../Pages/GettingStarted/Formatting/Formatting';
import { Validation } from '../Pages/ApiReference/Validation/Validation/Validation';
import { AsyncValidation } from '../Pages/ApiReference/Validation/AsyncValidation/AsyncValidation';
import { ValidationControl } from '../Pages/ApiReference/Validation/ValidationControl/Validation';
import { PairedValidation } from '../Pages/ApiReference/Validation/PairedValidation/PairedValidation';
import { ScrollValidation } from '../Pages/ApiReference/Validation/ScrollingToErrors/ScrollingToErrors';
import { FocusValidation } from '../Pages/ApiReference/Validation/FocusingOnErrors/FocusingOnErrors';
import ArrayFieldItem from '../Pages/ApiReference/Arrays/ArrayFieldItem/ArrayFieldItem';
import { ValidationMessages } from '../Pages/ApiReference/Validation/ValidationMessages/ValidationMessages';
import { SchemaIntro } from '../Pages/ApiReference/Schema/SchemaIntro/SchemaIntro';
import MultistepIntro from '../Pages/ApiReference/Multistep/MultistepIntro/MultistepIntro';
import MultistepState from '../Pages/ApiReference/Multistep/MultistepState/MultistepState';
import { KeepState } from '../Pages/ApiReference/KeepState/KeepState';
import KeepStateIfRelevant from '../Pages/ApiReference/KeepState/KeepStateIfRelevant/KeepStateIfRelevant';
import RelevanceOptimization from '../Pages/Examples/relevance/RelevanceOptimization/RelevanceOptimization';
import CreatingCustomInputs from '../Pages/Examples/custom-inputs/CreatingCustomInputs/CreatingCustomInputs';
import CreatingObjectInputs from '../Pages/Examples/custom-inputs/CreatingObjectInputs/CreatingObjectInputs';
import CreatingFormattedObjectInputs from '../Pages/Examples/custom-inputs/CreatingFormattedObjectInputs/CreatingFormattedObjectInputs';
import MultistepActions from '../Pages/Examples/multistep/MultistepActions/MultistepActions';
import FormProvider from '../Pages/Examples/form/FormProvider/FormProvider';
import Modified from '../Pages/Examples/form/Modified/Modified';
import ScopeGotcha from '../Pages/Examples/gotchas/ScopeGotcha/ScopeGotcha';
import { Multistep } from '../Pages/GettingStarted/Multistep/Multistep';
import { DynamicMultistep } from '../Pages/ApiReference/Multistep/DynamicMultistep/DynamicMultistep';
import { MultistepInitialValues } from '../Pages/ApiReference/Multistep/MultistepInitialValues/MultistepInitialValues';
import { Metadata } from '../Pages/ApiReference/MetaData/Metadata';
import { TableInlineEditing } from '../Pages/Examples/TableInlineEditing/TableInlineEditing';
import { BaiscRelevance } from '../Pages/ApiReference/Relevance/BasicRelevance';
import { ScopedRelevance } from '../Pages/ApiReference/Relevance/ScopedRelevance';
import { ArrayFieldRelevance } from '../Pages/ApiReference/Relevance/ArrayFieldRelevance';
import ElonMusk from '../Pages/Examples/ElonMusk/ElonMusk';
import { RickRoll } from '../Pages/Examples/ElonMusk/RickRoll';
import { RelevanceSchema } from '../Pages/ApiReference/Relevance/RelevanceSchema';
import { HugeForm } from '../Pages/Examples/HugeForm/HugeForm';
import { UseForm } from '../Pages/ApiReference/UseForm/UseForm';
import { Playground } from '../Pages/Playground';
import { AdobeFormInput } from '../Pages/GettingStarted/Inputs/AdobeForm/Form';
import { TextInput as AdobeTextInput } from '../Pages/GettingStarted/Inputs/AdobeTextInput/TextInput';
import { Select as AdobeSelect } from '../Pages/GettingStarted/Inputs/AdobeSelect/Select';
import { NumberInput as AdobeNumberInput } from '../Pages/GettingStarted/Inputs/AdobeNumberInput/NumberInput';
import { TextAreaInput as AdobeTextAreaInput } from '../Pages/GettingStarted/Inputs/AdobeTextArea/TextArea';
import { CheckboxInput as AdobeCheckboxInput } from '../Pages/GettingStarted/Inputs/AdobeCheckbox/Checkbox';
import { CheckboxGroupInput as AdobeCheckboxGroupInput } from '../Pages/GettingStarted/Inputs/AdobeCheckboxGroup/CheckboxGroup';
import { RadioGroupInput as AdobeRadioGroupInput } from '../Pages/GettingStarted/Inputs/AdobeRadioGroup/RadioGroup';
import { SliderInput as AdobeSliderInput } from '../Pages/GettingStarted/Inputs/AdobeSlider/Slider';
import { SwitchInput as AdobeSwitchInput } from '../Pages/GettingStarted/Inputs/AdobeSwitch/Switch';
import { ComboBoxInput as AdobeComboBoxInput } from '../Pages/GettingStarted/Inputs/AdobeComboBox/ComboBox';
import { FormInput } from '../Pages/GettingStarted/Inputs/Form/Form';
import { TextInput } from '../Pages/GettingStarted/Inputs/TextInput/TextInput';
import { Select } from '../Pages/GettingStarted/Inputs/Select/Select';
import { NumberInput } from '../Pages/GettingStarted/Inputs/NumberInput/NumberInput';
import { TextAreaInput } from '../Pages/GettingStarted/Inputs/TextArea/TextArea';
import { CheckboxInput } from '../Pages/GettingStarted/Inputs/Checkbox/Checkbox';
import { RadioInput } from '../Pages/GettingStarted/Inputs/Radio/Radio';
import { SliderInput } from '../Pages/GettingStarted/Inputs/Slider/Slider';

import FormApiRef from '../Pages/ApiReference/FormApi/FormApiRef';
import ChangingOptions from '../Pages/Examples/Dynamic/ChangingOptions/ChangingOptions';
import DependentFields from '../Pages/Examples/Dynamic/DependentFields/DependentFields';
import TwoWayDependence from '../Pages/Examples/Dynamic/TwoWayDependence/TwoWayDependence';
import ExcelSheet from '../Pages/Examples/Tables/ExcelSheet/ExcelSheet';
import ArrrayUniqueValidation from '../Pages/Examples/ArrrayUniqueValidation/ArrrayUniqueValidation';
import HiddenExample from '../Pages/Examples/HiddenField/HiddenField';
import UpdatingValidation from '../Pages/Examples/UpdatingValidation/UpdatingValidation';
import { ConditionalSchemaControl } from '../Pages/ApiReference/Schema/ConditionalSchemaControl/ConditionalSchemaControl';
import DebugComponent from '../Pages/ApiReference/Debugging/DebugComponent/DebugComponent';
import DebugLogs from '../Pages/ApiReference/Debugging/DebugLogs/DebugLogs';
import ArrayFieldReset from '../Pages/ApiReference/Arrays/ArrrayFieldReset/ArrayFieldReset';
import InsanelyHugeForm from '../Pages/Examples/Tables/InsanelyHugeForm/InsanelyHugeForm';
import ArrayFieldSwap from '../Pages/ApiReference/Arrays/ArrrayFieldSwap/ArrayFieldSwap';
import ArrayFieldInsert from '../Pages/ApiReference/Arrays/ArrrayFieldInsert/ArrayFieldInsert';
import { Readme } from '../Pages/GettingStarted/Readme/Readme';
import { Changelog } from '../Pages/GettingStarted/Changelog/Changelog';
import ArrayFieldClear from '../Pages/ApiReference/Arrays/ArrrayFieldClear/ArrayFieldClear';
import GlobalFieldState from '../Pages/ApiReference/GlobalForms/FieldState/GlobalFieldState';
import GlobalFormState from '../Pages/ApiReference/GlobalForms/FormState/GlobalFormState';

import NestedSchema from '../Pages/Examples/schemas/NestedSchema/NestedSchema';
import ConditionalOptionSchema from '../Pages/Examples/schemas/ConditionalOptionsSchema/ConditionalOptionsSchema';
import FormattedSchema from '../Pages/Examples/schemas/FormattedSchema/FormattedSchema';

import NestedArrayFieldSchema from '../Pages/Examples/schemas/NestedArrayFieldSchema/NestedArrayFieldSchema';

import IntroSchema from '../Pages/Examples/schemas/IntroSchema/IntroSchema';
import ArrayFieldSchema from '../Pages/Examples/schemas/ArrayFieldSchema/ArrayFieldSchema';
import ConditionalFieldComponent from '../Pages/Examples/schemas/ConditionalSchema/ConditionalSchema';
import RelevantArrayFieldSchema from '../Pages/Examples/schemas/RelevantArrayFieldSchema/RelevantArrayFieldSchema';
import CustomSchema from '../Pages/Examples/schemas/CustomSchema/CustomSchema';
import SchemaComponents from '../Pages/Examples/schemas/SchemaComponents/SchemaComponents';
import SubSchema from '../Pages/Examples/schemas/SubSchema/SubSchema';
import InitialVsDefault from '../Pages/Examples/Gotchas/InitialVsDefault/InitialVsDefault';
import ChangeInitialValues from '../Pages/Examples/Gotchas/ChangeInitialValues/ChangeInitialValues';
import InitializeIfPristine from '../Pages/Examples/Gotchas/InitializeIfPristine/InitializeIfPristine';
import { AsyncOptions } from '../Pages/ApiReference/AsyncOptions/AsyncOptions';
import AfterRenderBug from '../Pages/Examples/AfterRenderBug/AfterRenderBug';
import AfterRenderBugArray from '../Pages/Examples/AfterRenderBugArray/AfterRenderBugArray';
import NestedArrayField from '../Pages/ApiReference/Arrays/NestedArrrayField/NestedArrrayField';
import ChangeInitialValuesArrayField from '../Pages/Examples/Gotchas/ChangeInitialValuesArrayField/ChangeInitialValuesArrayField';

const RootRoute = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const to = searchParams.get('to');
  if (to) {
    return <Navigate to={to} />;
  } else {
    return <Navigate to="getting-started/intro" replace />;
  }
};

// Routes ------------------------------------------------------------
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<RootRoute />} />
      <Route path="playground" element={<Playground />} />
      <Route path="getting-started">
        <Route path="intro" element={<Intro />} />
        <Route path="setup" element={<Setup />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="formState" element={<FormState />} />
        <Route path="formApi" element={<FormApi />} />
        <Route path="fieldState" element={<FieldState />} />
        <Route path="fieldApi" element={<FieldApi />} />
        <Route path="path-syntax" element={<PathSyntax />} />
        <Route path="array-field" element={<ArrayFieldComponent />} />
        <Route path="relevant" element={<Relevance />} />
        <Route path="formatting" element={<Formatting />} />
        <Route path="validation" element={<Validation />} />
        <Route path="schema" element={<SchemaIntro />} />
        <Route path="multistep" element={<Multistep />} />
        <Route path="metadata" element={<Metadata />} />
        <Route path="readme" element={<Readme />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="adobe-form" element={<AdobeFormInput />} />
        <Route path="adobe-text-input" element={<AdobeTextInput />} />
        <Route path="adobe-number-input" element={<AdobeNumberInput />} />
        <Route path="adobe-text-area" element={<AdobeTextAreaInput />} />
        <Route path="adobe-select" element={<AdobeSelect />} />
        <Route path="adobe-checkbox" element={<AdobeCheckboxInput />} />
        <Route path="adobe-checkbox-group" element={<AdobeCheckboxGroupInput />} />
        <Route path="adobe-radio-group" element={<AdobeRadioGroupInput />} />
        <Route path="adobe-slider" element={<AdobeSliderInput />} />
        <Route path="adobe-switch" element={<AdobeSwitchInput />} />
        <Route path="adobe-combo-box" element={<AdobeComboBoxInput />} />
        <Route path="form" element={<FormInput />} />
        <Route path="text-input" element={<TextInput />} />
        <Route path="number-input" element={<NumberInput />} />
        <Route path="text-area" element={<TextAreaInput />} />
        <Route path="select" element={<Select />} />
        <Route path="checkbox" element={<CheckboxInput />} />
        <Route path="radio" element={<RadioInput />} />
        <Route path="slider" element={<SliderInput />} />
      </Route>
      <Route path="api-reference">
        <Route path="useField" element={<UseField />} />
        <Route path="useForm" element={<UseForm />} />
        <Route path="useFieldState" element={<UseFieldState />} />
        <Route path="useFieldApi" element={<UseFieldApi />} />
        <Route path="useFormState" element={<UseFormState />} />
        <Route path="useFormApi" element={<UseFormApi />} />
        <Route path="useSubState" element={<UseSubState />} />
        <Route path="useScopedState" element={<UseScopedState />} />
        <Route path="formState" element={<FormState />} />
        <Route path="formApi" element={<FormApi />} />
        <Route path="fieldState" element={<FieldState />} />
        <Route path="fieldApi" element={<FieldApi />} />
        <Route path="relevant" element={<Relevance />} />
        <Route path="scope" element={<ScopedComponent />} />
        <Route path="path-syntax" element={<PathSyntax />} />
        <Route path="formatting-formatter" element={<Formatter />} />
        <Route path="formatting-number" element={<NumberFormatter />} />
        <Route path="formatting-clean" element={<Clean />} />
        <Route path="formatting-mask" element={<Mask />} />
        <Route path="formatting-parse" element={<Parse />} />
        <Route
          path="formatting-formatter-functions"
          element={<FormatterFunctions />}
        />
        <Route path="array-field" element={<ArrayFieldComponent />} />
        <Route path="validation" element={<Validation />} />
        <Route path="async-validation" element={<AsyncValidation />} />
        <Route path="validation-control" element={<ValidationControl />} />
        <Route path="paired-validation" element={<PairedValidation />} />
        <Route path="focus-validation" element={<FocusValidation />} />
        <Route path="scroll-validation" element={<ScrollValidation />} />
        <Route
          path="arrays-array-field"
          element={<ArrayFieldComponent showItem={false} />}
        />
        <Route path="formApiRef" element={<FormApiRef />} />
        <Route path="arrays-array-field-item" element={<ArrayFieldItem />} />
        <Route path="arrays-array-field-reset" element={<ArrayFieldReset />} />
        <Route path="arrays-array-field-swap" element={<ArrayFieldSwap />} />
        <Route
          path="arrays-array-field-insert"
          element={<ArrayFieldInsert />}
        />
        <Route path="arrays-array-field-clear" element={<ArrayFieldClear />} />
        <Route
          path="arrays-nested-array-field"
          element={<NestedArrayField />}
        />
        <Route path="validation-messages" element={<ValidationMessages />} />
        <Route path="schema-intro" element={<SchemaIntro />} />
        <Route path="relevant-schema" element={<RelevanceSchema />} />
        <Route
          path="relevance-optimization"
          element={<RelevanceOptimization />}
        />
        <Route
          path="creating-custom-inputs"
          element={<CreatingCustomInputs />}
        />
        <Route
          path="creating-object-inputs"
          element={<CreatingObjectInputs />}
        />
        <Route
          path="creating-formatted-object-inputs"
          element={<CreatingFormattedObjectInputs />}
        />
        <Route path="form-provider" element={<FormProvider />} />
        <Route path="form-modified" element={<Modified />} />
        <Route
          path="conditional-schema-control"
          element={<ConditionalSchemaControl />}
        />
        <Route path="schema-nested" element={<NestedSchema />} />
        <Route
          path="schema-conditional-option"
          element={<ConditionalOptionSchema />}
        />
        <Route path="schema-formatted" element={<FormattedSchema />} />
        <Route path="schema-array-field" element={<ArrayFieldSchema />} />
        <Route
          path="schema-nested-array-field"
          element={<NestedArrayFieldSchema />}
        />
        <Route
          path="schema-relevant-array-field"
          element={<RelevantArrayFieldSchema />}
        />
        <Route path="schema-custom" element={<CustomSchema />} />
        <Route path="schema-components" element={<SchemaComponents />} />
        <Route path="schema-sub" element={<SubSchema />} />
        <Route path="multistep-intro" element={<MultistepIntro />} />
        <Route path="multistep-state" element={<MultistepState />} />
        <Route path="multistep-dynamic" element={<DynamicMultistep />} />
        <Route path="multistep-actions" element={<MultistepActions />} />
        <Route path="metadata" element={<Metadata />} />
        <Route path="async-options" element={<AsyncOptions />} />
        <Route path="debug-component" element={<DebugComponent />} />
        <Route path="debug-logs" element={<DebugLogs />} />
        <Route path="keep-state" element={<KeepState />} />
        <Route
          path="keep-state-if-relevant"
          element={<KeepStateIfRelevant />}
        />
        <Route path="global-field-state" element={<GlobalFieldState />} />
        <Route path="global-form-state" element={<GlobalFormState />} />
        <Route path="relevant-component" element={<BaiscRelevance />} />
        <Route path="relevant-scoped" element={<ScopedRelevance />} />
        <Route path="relevant-arrays" element={<ArrayFieldRelevance />} />
        <Route path="relevant-schema" element={<RelevanceSchema />} />
        <Route
          path="relevance-optimization"
          element={<RelevanceOptimization />}
        />
        <Route path="form-provider" element={<FormProvider />} />
        <Route path="form-modified" element={<Modified />} />
        <Route
          path="creating-custom-inputs"
          element={<CreatingCustomInputs />}
        />
        <Route
          path="creating-object-inputs"
          element={<CreatingObjectInputs />}
        />
        <Route
          path="creating-formatted-object-inputs"
          element={<CreatingFormattedObjectInputs />}
        />
      </Route>
      <Route path="examples">
        <Route
          path="array-field"
          element={<ArrayFieldComponent showItem={false} />}
        />
        <Route path="array-field-unique" element={<ArrrayUniqueValidation />} />
        <Route path="schema-intro" element={<IntroSchema />} />
        <Route
          path="schema-conditional"
          element={<ConditionalFieldComponent />}
        />
        <Route path="schema-nested" element={<NestedSchema />} />
        <Route
          path="schema-conditional-option"
          element={<ConditionalOptionSchema />}
        />
        <Route path="schema-formatted" element={<FormattedSchema />} />
        <Route path="schema-array-field" element={<ArrayFieldSchema />} />
        <Route
          path="schema-nested-array-field"
          element={<NestedArrayFieldSchema />}
        />
        <Route
          path="schema-relevant-array-field"
          element={<RelevantArrayFieldSchema />}
        />
        <Route path="schema-custom" element={<CustomSchema />} />
        <Route path="schema-components" element={<SchemaComponents />} />
        <Route path="schema-sub" element={<SubSchema />} />
        <Route path="huge-array-field" element={<HugeArrayField />} />
        <Route path="table-inline-editing" element={<TableInlineEditing />} />
        <Route path="async-validation" element={<AsyncValidation />} />
        <Route path="formatting-formatter" element={<Formatter />} />
        <Route path="formatting-number" element={<NumberFormatter />} />
        <Route path="formatting-clean" element={<Clean />} />
        <Route path="formatting-mask" element={<Mask />} />
        <Route path="formatting-parse" element={<Parse />} />
        <Route
          path="formatting-formatter-functions"
          element={<FormatterFunctions />}
        />
        <Route path="paired-validation" element={<PairedValidation />} />
        <Route path="validation-control" element={<ValidationControl />} />
        <Route path="relevant-component" element={<BaiscRelevance />} />
        <Route path="relevant-scoped" element={<ScopedRelevance />} />
        <Route path="relevant-arrays" element={<ArrayFieldRelevance />} />
        <Route path="relevant-schema" element={<RelevanceSchema />} />
        <Route
          path="relevance-optimization"
          element={<RelevanceOptimization />}
        />
        <Route
          path="creating-custom-inputs"
          element={<CreatingCustomInputs />}
        />
        <Route
          path="creating-object-inputs"
          element={<CreatingObjectInputs />}
        />
        <Route
          path="creating-formatted-object-inputs"
          element={<CreatingFormattedObjectInputs />}
        />
        <Route path="form-provider" element={<FormProvider />} />
        <Route path="form-modified" element={<Modified />} />
        <Route path="multistep-intro" element={<MultistepIntro />} />
        <Route path="multistep-dynamic" element={<DynamicMultistep />} />
        <Route path="multistep-actions" element={<MultistepActions />} />
        <Route
          path="multistep-initial-values"
          element={<MultistepInitialValues />}
        />
        <Route path="huge-form" element={<HugeForm />} />
        <Route path="insanely-huge-form" element={<InsanelyHugeForm />} />
        <Route path="elon-musk" element={<ElonMusk />} />
        <Route path="new-product" element={<RickRoll />} />
        <Route path="changing-options" element={<ChangingOptions />} />
        <Route path="async-options" element={<AsyncOptions />} />
        <Route path="dependent-fields" element={<DependentFields />} />
        <Route path="two-way" element={<TwoWayDependence />} />
        <Route path="excel-sheet" element={<ExcelSheet />} />
        <Route path="initial-vs-default" element={<InitialVsDefault />} />
        <Route path="scope-gotcha" element={<ScopeGotcha />} />
        <Route path="change-initial-values" element={<ChangeInitialValues />} />
        <Route
          path="array-change-initial-values"
          element={<ChangeInitialValuesArrayField />}
        />
        <Route
          path="initialize-if-pristine"
          element={<InitializeIfPristine />}
        />

        <Route path="hidden-field" element={<HiddenExample />} />
        <Route path="updating-validation" element={<UpdatingValidation />} />
        <Route path="after-relevance-bug" element={<AfterRenderBug />} />
        <Route
          path="after-relevance-bug-array"
          element={<AfterRenderBugArray />}
        />
      </Route>
      <Route path="home" element={<Home />} />
      <Route path="unauthorized" element={<NotAuthorized />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
