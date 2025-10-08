import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFieldState } from 'informed';
import Form from '../YourComponents/Form';
import ComboBox from '../YourComponents/ComboBox';

// All navigation items from the different nav components
const allNavItems = [
  // Getting Started
  { id: 'getting-started-intro', href: '/getting-started/intro', label: 'Getting Started - Intro', category: 'Getting Started' },
  { id: 'getting-started-setup', href: '/getting-started/setup', label: 'Getting Started - Setup', category: 'Getting Started' },
  { id: 'getting-started-hooks', href: '/getting-started/hooks', label: 'Getting Started - Hooks', category: 'Getting Started' },
  { id: 'getting-started-formState', href: '/getting-started/formState', label: 'Getting Started - Form State', category: 'Getting Started' },
  { id: 'getting-started-formApi', href: '/getting-started/formApi', label: 'Getting Started - Form Api', category: 'Getting Started' },
  { id: 'getting-started-fieldState', href: '/getting-started/fieldState', label: 'Getting Started - Field State', category: 'Getting Started' },
  { id: 'getting-started-fieldApi', href: '/getting-started/fieldApi', label: 'Getting Started - Field Api', category: 'Getting Started' },
  { id: 'getting-started-path-syntax', href: '/getting-started/path-syntax', label: 'Getting Started - Path Syntax', category: 'Getting Started' },
  { id: 'getting-started-array-field', href: '/getting-started/array-field', label: 'Getting Started - Array Field', category: 'Getting Started' },
  { id: 'getting-started-relevant', href: '/getting-started/relevant', label: 'Getting Started - Relevant', category: 'Getting Started' },
  { id: 'getting-started-formatting', href: '/getting-started/formatting', label: 'Getting Started - Formatting', category: 'Getting Started' },
  { id: 'getting-started-validation', href: '/getting-started/validation', label: 'Getting Started - Validation', category: 'Getting Started' },
  { id: 'getting-started-schema', href: '/getting-started/schema', label: 'Getting Started - Schema Rendering', category: 'Getting Started' },
  { id: 'getting-started-multistep', href: '/getting-started/multistep', label: 'Getting Started - Multistep', category: 'Getting Started' },
  { id: 'getting-started-metadata', href: '/getting-started/metadata', label: 'Getting Started - Meta Data', category: 'Getting Started' },
  { id: 'getting-started-readme', href: '/getting-started/readme', label: 'Getting Started - Readme', category: 'Getting Started' },
  { id: 'getting-started-changelog', href: '/getting-started/changelog', label: 'Getting Started - Changelog', category: 'Getting Started' },

  // API Reference - Hooks
  { id: 'api-useField', href: '/api-reference/useField', label: 'API Reference - useField', category: 'API Reference - Hooks' },
  { id: 'api-useForm', href: '/api-reference/useForm', label: 'API Reference - useForm', category: 'API Reference - Hooks' },
  { id: 'api-useFieldState', href: '/api-reference/useFieldState', label: 'API Reference - useFieldState', category: 'API Reference - Hooks' },
  { id: 'api-useFieldApi', href: '/api-reference/useFieldApi', label: 'API Reference - useFieldApi', category: 'API Reference - Hooks' },
  { id: 'api-useFormState', href: '/api-reference/useFormState', label: 'API Reference - useFormState', category: 'API Reference - Hooks' },
  { id: 'api-useformApi', href: '/api-reference/useformApi', label: 'API Reference - useformApi', category: 'API Reference - Hooks' },
  { id: 'api-useSubState', href: '/api-reference/useSubState', label: 'API Reference - useSubState', category: 'API Reference - Hooks' },
  { id: 'api-useScopedState', href: '/api-reference/useScopedState', label: 'API Reference - useScopedState', category: 'API Reference - Hooks' },

  // API Reference - State
  { id: 'api-formState', href: '/api-reference/formState', label: 'API Reference - FormState', category: 'API Reference - State' },
  { id: 'api-fieldState', href: '/api-reference/fieldState', label: 'API Reference - FieldState', category: 'API Reference - State' },

  // API Reference - Api
  { id: 'api-formApi', href: '/api-reference/formApi', label: 'API Reference - FormApi', category: 'API Reference - Api' },
  { id: 'api-fieldApi', href: '/api-reference/fieldApi', label: 'API Reference - FieldApi', category: 'API Reference - Api' },

  // API Reference - Refs
  { id: 'api-formApiRef', href: '/api-reference/formApiRef', label: 'API Reference - formApiRef', category: 'API Reference - Refs' },

  // API Reference - Components
  { id: 'api-relevant', href: '/api-reference/relevant', label: 'API Reference - Relevant', category: 'API Reference - Components' },
  { id: 'api-scope', href: '/api-reference/scope', label: 'API Reference - Scope', category: 'API Reference - Components' },
  { id: 'api-array-field', href: '/api-reference/array-field', label: 'API Reference - ArrayField', category: 'API Reference - Components' },
  { id: 'api-form-provider', href: '/api-reference/form-provider', label: 'API Reference - FormProvider', category: 'API Reference - Components' },

  // API Reference - Path
  { id: 'api-path-syntax', href: '/api-reference/path-syntax', label: 'API Reference - Path Syntax', category: 'API Reference - Path' },

  // API Reference - Formatting
  { id: 'api-formatting-formatter', href: '/api-reference/formatting-formatter', label: 'API Reference - Formatter', category: 'API Reference - Formatting' },
  { id: 'api-formatting-number', href: '/api-reference/formatting-number', label: 'API Reference - Number Formatter', category: 'API Reference - Formatting' },
  { id: 'api-formatting-clean', href: '/api-reference/formatting-clean', label: 'API Reference - Clean', category: 'API Reference - Formatting' },
  { id: 'api-formatting-mask', href: '/api-reference/formatting-mask', label: 'API Reference - Mask', category: 'API Reference - Formatting' },
  { id: 'api-formatting-parse', href: '/api-reference/formatting-parse', label: 'API Reference - Parse', category: 'API Reference - Formatting' },
  { id: 'api-formatting-formatter-functions', href: '/api-reference/formatting-formatter-functions', label: 'API Reference - Formatter Functions', category: 'API Reference - Formatting' },

  // API Reference - Validation
  { id: 'api-validation', href: '/api-reference/validation', label: 'API Reference - Validation', category: 'API Reference - Validation' },
  { id: 'api-async-validation', href: '/api-reference/async-validation', label: 'API Reference - Async Validation', category: 'API Reference - Validation' },
  { id: 'api-validation-control', href: '/api-reference/validation-control', label: 'API Reference - Validation Control', category: 'API Reference - Validation' },
  { id: 'api-paired-validation', href: '/api-reference/paired-validation', label: 'API Reference - Paired Validation', category: 'API Reference - Validation' },
  { id: 'api-validation-messages', href: '/api-reference/validation-messages', label: 'API Reference - Validation Messages', category: 'API Reference - Validation' },
  { id: 'api-focus-validation', href: '/api-reference/focus-validation', label: 'API Reference - Focus On Error', category: 'API Reference - Validation' },
  { id: 'api-scroll-validation', href: '/api-reference/scroll-validation', label: 'API Reference - Scroll To Error', category: 'API Reference - Validation' },

  // API Reference - Arrays
  { id: 'api-arrays-array-field', href: '/api-reference/arrays-array-field', label: 'API Reference - ArrayField', category: 'API Reference - Arrays' },
  { id: 'api-arrays-array-field-item', href: '/api-reference/arrays-array-field-item', label: 'API Reference - ArrayField.Item', category: 'API Reference - Arrays' },
  { id: 'api-arrays-array-field-reset', href: '/api-reference/arrays-array-field-reset', label: 'API Reference - ArrayField Reset', category: 'API Reference - Arrays' },
  { id: 'api-arrays-array-field-clear', href: '/api-reference/arrays-array-field-clear', label: 'API Reference - ArrayField Clear', category: 'API Reference - Arrays' },
  { id: 'api-arrays-array-field-swap', href: '/api-reference/arrays-array-field-swap', label: 'API Reference - ArrayField Swap', category: 'API Reference - Arrays' },
  { id: 'api-arrays-array-field-insert', href: '/api-reference/arrays-array-field-insert', label: 'API Reference - ArrayField Insert', category: 'API Reference - Arrays' },
  { id: 'api-arrays-nested-array-field', href: '/api-reference/arrays-nested-array-field', label: 'API Reference - Nested ArrayField', category: 'API Reference - Arrays' },

  // API Reference - Schema
  { id: 'api-schema-intro', href: '/api-reference/schema-intro', label: 'API Reference - Schema Intro', category: 'API Reference - Schema' },
  { id: 'api-relevant-schema', href: '/api-reference/relevant-schema', label: 'API Reference - Relevance', category: 'API Reference - Schema' },
  { id: 'api-conditional-schema-control', href: '/api-reference/conditional-schema-control', label: 'API Reference - Conditional Schema Control', category: 'API Reference - Schema' },
  { id: 'api-schema-nested', href: '/api-reference/schema-nested', label: 'API Reference - Nested Schema', category: 'API Reference - Schema' },
  { id: 'api-schema-conditional-option', href: '/api-reference/schema-conditional-option', label: 'API Reference - Conditional Option Schema', category: 'API Reference - Schema' },
  { id: 'api-schema-formatted', href: '/api-reference/schema-formatted', label: 'API Reference - Formatted Schema', category: 'API Reference - Schema' },
  { id: 'api-schema-array-field', href: '/api-reference/schema-array-field', label: 'API Reference - Array Field Schema', category: 'API Reference - Schema' },
  { id: 'api-schema-nested-array-field', href: '/api-reference/schema-nested-array-field', label: 'API Reference - Nested Array Field Schema', category: 'API Reference - Schema' },
  { id: 'api-schema-relevant-array-field', href: '/api-reference/schema-relevant-array-field', label: 'API Reference - Relevant ArrayField Schema', category: 'API Reference - Schema' },
  { id: 'api-schema-custom', href: '/api-reference/schema-custom', label: 'API Reference - Custom Schema', category: 'API Reference - Schema' },
  { id: 'api-schema-components', href: '/api-reference/schema-components', label: 'API Reference - Schema Components', category: 'API Reference - Schema' },
  { id: 'api-schema-sub', href: '/api-reference/schema-sub', label: 'API Reference - Sub Schema', category: 'API Reference - Schema' },

  // API Reference - Relevance
  { id: 'api-relevant-component', href: '/api-reference/relevant-component', label: 'API Reference - Relevant Component', category: 'API Reference - Relevance' },
  { id: 'api-relevant-scoped', href: '/api-reference/relevant-scoped', label: 'API Reference - Scoped Relevance', category: 'API Reference - Relevance' },
  { id: 'api-relevant-arrays', href: '/api-reference/relevant-arrays', label: 'API Reference - Relevance in Arrays', category: 'API Reference - Relevance' },
  { id: 'api-relevance-optimization', href: '/api-reference/relevance-optimization', label: 'API Reference - Relevance Optimization', category: 'API Reference - Relevance' },

  // API Reference - Multistep
  { id: 'api-multistep-intro', href: '/api-reference/multistep-intro', label: 'API Reference - Multistep Intro', category: 'API Reference - Multistep' },
  { id: 'api-multistep-state', href: '/api-reference/multistep-state', label: 'API Reference - Multistep State', category: 'API Reference - Multistep' },
  { id: 'api-multistep-dynamic', href: '/api-reference/multistep-dynamic', label: 'API Reference - Dynamic Multistep', category: 'API Reference - Multistep' },

  // API Reference - Keeping State
  { id: 'api-keep-state', href: '/api-reference/keep-state', label: 'API Reference - keepState', category: 'API Reference - Keeping State' },
  { id: 'api-keep-state-if-relevant', href: '/api-reference/keep-state-if-relevant', label: 'API Reference - Keep State If Relevant', category: 'API Reference - Keeping State' },

  // API Reference - MetaData
  { id: 'api-metadata', href: '/api-reference/metadata', label: 'API Reference - Metadata', category: 'API Reference - MetaData' },
  { id: 'api-async-options', href: '/api-reference/async-options', label: 'API Reference - Async Options', category: 'API Reference - MetaData' },

  // API Reference - Global Forms
  { id: 'api-global-field-state', href: '/api-reference/global-field-state', label: 'API Reference - Field State', category: 'API Reference - Global Forms' },
  { id: 'api-global-form-state', href: '/api-reference/global-form-state', label: 'API Reference - Form State', category: 'API Reference - Global Forms' },

  // API Reference - Debugging
  { id: 'api-debug-component', href: '/api-reference/debug-component', label: 'API Reference - Debug Component', category: 'API Reference - Debugging' },
  { id: 'api-debug-logs', href: '/api-reference/debug-logs', label: 'API Reference - Debug Logs', category: 'API Reference - Debugging' },

  // Examples - Arrays
  { id: 'examples-array-field', href: '/examples/array-field', label: 'Examples - Array Field', category: 'Examples - Arrays' },
  { id: 'examples-array-field-unique', href: '/examples/array-field-unique', label: 'Examples - Unique Validation', category: 'Examples - Arrays' },

  // Examples - Validation
  { id: 'examples-async-validation', href: '/examples/async-validation', label: 'Examples - Async Validation', category: 'Examples - Validation' },
  { id: 'examples-paired-validation', href: '/examples/paired-validation', label: 'Examples - Paired Validation', category: 'Examples - Validation' },
  { id: 'examples-validation-control', href: '/examples/validation-control', label: 'Examples - Validation Control', category: 'Examples - Validation' },
  { id: 'examples-updating-validation', href: '/examples/updating-validation', label: 'Examples - Updating Validation', category: 'Examples - Validation' },

  // Examples - Dynamic
  { id: 'examples-changing-options', href: '/examples/changing-options', label: 'Examples - Changing Options', category: 'Examples - Dynamic' },
  { id: 'examples-async-options', href: '/examples/async-options', label: 'Examples - Async Options', category: 'Examples - Dynamic' },
  { id: 'examples-dependent-fields', href: '/examples/dependent-fields', label: 'Examples - Dependent Fields', category: 'Examples - Dynamic' },
  { id: 'examples-two-way', href: '/examples/two-way', label: 'Examples - Two Way Dependence', category: 'Examples - Dynamic' },

  // Examples - Formatting
  { id: 'examples-formatting-formatter', href: '/examples/formatting-formatter', label: 'Examples - Formatter', category: 'Examples - Formatting' },
  { id: 'examples-formatting-number', href: '/examples/formatting-number', label: 'Examples - Number Formatter', category: 'Examples - Formatting' },
  { id: 'examples-formatting-clean', href: '/examples/formatting-clean', label: 'Examples - Clean', category: 'Examples - Formatting' },
  { id: 'examples-formatting-mask', href: '/examples/formatting-mask', label: 'Examples - Mask', category: 'Examples - Formatting' },
  { id: 'examples-formatting-parse', href: '/examples/formatting-parse', label: 'Examples - Parse', category: 'Examples - Formatting' },
  { id: 'examples-formatting-formatter-functions', href: '/examples/formatting-formatter-functions', label: 'Examples - Formatter Functions', category: 'Examples - Formatting' },

  // Examples - Relevant
  { id: 'examples-relevant-component', href: '/examples/relevant-component', label: 'Examples - Relevant Component', category: 'Examples - Relevant' },
  { id: 'examples-relevant-scoped', href: '/examples/relevant-scoped', label: 'Examples - Scoped Relevance', category: 'Examples - Relevant' },
  { id: 'examples-relevant-arrays', href: '/examples/relevant-arrays', label: 'Examples - Relevance in Arrays', category: 'Examples - Relevant' },
  { id: 'examples-relevant-schema', href: '/examples/relevant-schema', label: 'Examples - Schema Relevance', category: 'Examples - Relevant' },
  { id: 'examples-relevance-optimization', href: '/examples/relevance-optimization', label: 'Examples - Relevance Optimization', category: 'Examples - Relevant' },

  // Examples - Custom Inputs
  { id: 'examples-creating-custom-inputs', href: '/examples/creating-custom-inputs', label: 'Examples - Creating Custom Inputs', category: 'Examples - Custom Inputs' },
  { id: 'examples-creating-object-inputs', href: '/examples/creating-object-inputs', label: 'Examples - Creating Object Inputs', category: 'Examples - Custom Inputs' },
  { id: 'examples-creating-formatted-object-inputs', href: '/examples/creating-formatted-object-inputs', label: 'Examples - Creating Formatted Object Inputs', category: 'Examples - Custom Inputs' },

  // Examples - Form
  { id: 'examples-form-provider', href: '/examples/form-provider', label: 'Examples - FormProvider', category: 'Examples - Form' },
  { id: 'examples-form-modified', href: '/examples/form-modified', label: 'Examples - Modified', category: 'Examples - Form' },

  // Examples - Schema
  { id: 'examples-schema-intro', href: '/examples/schema-intro', label: 'Examples - Schema Intro', category: 'Examples - Schema' },
  { id: 'examples-schema-conditional', href: '/examples/schema-conditional', label: 'Examples - Conditional Schema', category: 'Examples - Schema' },
  { id: 'examples-schema-nested', href: '/examples/schema-nested', label: 'Examples - Nested Schema', category: 'Examples - Schema' },
  { id: 'examples-schema-conditional-option', href: '/examples/schema-conditional-option', label: 'Examples - Conditional Option Schema', category: 'Examples - Schema' },
  { id: 'examples-schema-formatted', href: '/examples/schema-formatted', label: 'Examples - Formatted Schema', category: 'Examples - Schema' },
  { id: 'examples-schema-array-field', href: '/examples/schema-array-field', label: 'Examples - Array Field Schema', category: 'Examples - Schema' },
  { id: 'examples-schema-nested-array-field', href: '/examples/schema-nested-array-field', label: 'Examples - Nested Array Field Schema', category: 'Examples - Schema' },
  { id: 'examples-schema-relevant-array-field', href: '/examples/schema-relevant-array-field', label: 'Examples - Relevant ArrayField Schema', category: 'Examples - Schema' },
  { id: 'examples-schema-custom', href: '/examples/schema-custom', label: 'Examples - Custom Schema', category: 'Examples - Schema' },
  { id: 'examples-schema-components', href: '/examples/schema-components', label: 'Examples - Schema Components', category: 'Examples - Schema' },
  { id: 'examples-schema-sub', href: '/examples/schema-sub', label: 'Examples - Sub Schema', category: 'Examples - Schema' },

  // Examples - Multistep
  { id: 'examples-multistep-intro', href: '/examples/multistep-intro', label: 'Examples - Basic Multistep', category: 'Examples - Multistep' },
  { id: 'examples-multistep-dynamic', href: '/examples/multistep-dynamic', label: 'Examples - Dynamic Multistep', category: 'Examples - Multistep' },
  { id: 'examples-multistep-actions', href: '/examples/multistep-actions', label: 'Examples - Multistep Actions', category: 'Examples - Multistep' },
  { id: 'examples-multistep-initial-values', href: '/examples/multistep-initial-values', label: 'Examples - Multistep InitialValues', category: 'Examples - Multistep' },

  // Examples - Gotchas
  { id: 'examples-initial-vs-default', href: '/examples/initial-vs-default', label: 'Examples - Initial Vs Default', category: 'Examples - Gotchas' },
  { id: 'examples-scope-gotcha', href: '/examples/scope-gotcha', label: 'Examples - Scope Gotcha', category: 'Examples - Gotchas' },
  { id: 'examples-change-initial-values', href: '/examples/change-initial-values', label: 'Examples - Change Initial Values', category: 'Examples - Gotchas' },
  { id: 'examples-array-change-initial-values', href: '/examples/array-change-initial-values', label: 'Examples - Change Initial Values Array Field', category: 'Examples - Gotchas' },
  { id: 'examples-initialize-if-pristine', href: '/examples/initialize-if-pristine', label: 'Examples - Initialize Value If Pristine', category: 'Examples - Gotchas' },

  // Examples - Tables
  { id: 'examples-excel-sheet', href: '/examples/excel-sheet', label: 'Examples - Excel Sheet', category: 'Examples - Tables' },
  { id: 'examples-huge-form', href: '/examples/huge-form', label: 'Examples - Huge Form', category: 'Examples - Tables' },
  { id: 'examples-insanely-huge-form', href: '/examples/insanely-huge-form', label: 'Examples - Insanely Huge Form', category: 'Examples - Tables' },
  { id: 'examples-table-inline-editing', href: '/examples/table-inline-editing', label: 'Examples - Table Inline Editing', category: 'Examples - Tables' },

  // Examples - Hidden
  { id: 'examples-hidden-field', href: '/examples/hidden-field', label: 'Examples - Hidden Field', category: 'Examples - Hidden' },

  // Examples - Huge Forms
  { id: 'examples-huge-array-field', href: '/examples/huge-array-field', label: 'Examples - Huge Array Field', category: 'Examples - Huge Forms' },

  // Examples - Cool
  { id: 'examples-elon-musk', href: '/examples/elon-musk', label: 'Examples - Elon Musk', category: 'Examples - Cool' },
  { id: 'examples-new-product', href: '/examples/new-product', label: 'Examples - New Product', category: 'Examples - Cool' },

  // Examples - Fixed Bugs
  { id: 'examples-after-relevance-bug', href: '/examples/after-relevance-bug', label: 'Examples - After Render Bug', category: 'Examples - Fixed Bugs' },
  { id: 'examples-after-relevance-bug-array', href: '/examples/after-relevance-bug-array', label: 'Examples - After Render Bug in Array', category: 'Examples - Fixed Bugs' },

  // Playground
  { id: 'playground', href: '/playground', label: 'Playground', category: 'Playground' }
];

const searchFunction = async (searchText) => {
  if (!searchText || searchText.length < 2) {
    return [];
  }
  
  console.log('searchText', searchText);

  const filteredItems = allNavItems.filter(item => 
    item.label.toLowerCase().includes(searchText.toLowerCase()) ||
    item.href.toLowerCase().includes(searchText.toLowerCase()) ||
    item.category.toLowerCase().includes(searchText.toLowerCase())
  );

  return filteredItems.map((item, index) => ({
    id: item.id,
    value: item.label,
    href: item.href,
    category: item.category
  }));
};

const SearchResults = () => {
  const { data = [], value } = useFieldState('search');
  const navigate = useNavigate();

  const items = useMemo(
    () => {
      return data.map((item, i) => ({
        id: item.id,
        value: item.value,
        href: item.href,
        category: item.category
      }));
    },
    [data]
  );

  // Handle navigation when the field value changes
  React.useEffect(() => {
    if (value && data.length > 0) {
      // Find the selected item in the current data
      const selectedItem = data.find(item => item.value === value);
      if (selectedItem && selectedItem.href) {
        console.log('Navigating to:', selectedItem.href);
        navigate(selectedItem.href);
      }
    }
  }, [value, data, navigate]);

  return (
    <ComboBox
      name="search"
      placeholder="Search documentation..."
      gatherData={searchFunction}
      items={items}
      style={{ width: '100%' }}
    />
  );
};

const SearchComponent = () => {

  return (
    <div style={{ minWidth: '300px', maxWidth: '400px' }}>
      <Form>
        <SearchResults />
      </Form>
    </div>
  );
};

export default SearchComponent;
