import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import {
  useField,
  useForm,
  useArrayFieldApi,
  useArrayFieldItemApi,
  ArrayField,
  FormComponents,
  FormFields,
  SchemaFields,
  Debug
} from '../../../src';

// Step 1. Build your form component ---------------------

const Form = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm(rest);

  return render(
    <form {...userProps} onSubmit={formController.submitForm}>
      {children}
    </form>
  );
};

// Step 2. Build your input components --------------------

const Input = ({ label, ...props }) => {
  const { render, informed } = useField({ fieldType: 'text', ...props });

  return render(
    <label>
      {label}
      <input {...informed} />
    </label>
  );
};

const Checkbox = ({ label, ...props }) => {
  const { render, informed } = useField({ fieldType: 'checkbox', ...props });

  return render(
    <label>
      {label}
      <input {...informed} />
    </label>
  );
};

const Select = ({ label, children, options, ...props }) => {
  const { render, informed } = useField({ fieldType: 'select', ...props });

  return render(
    <label>
      {label}
      <select {...informed}>
        {options
          ? options.map(option => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}>
                {option.label}
              </option>
            ))
          : children}
      </select>
    </label>
  );
};

const AddButton = () => {
  const { add } = useArrayFieldApi();

  return (
    <button
      onClick={() => {
        add();
      }}
      type="button">
      Add
    </button>
  );
};

const RemoveButton = () => {
  const { remove } = useArrayFieldItemApi();

  return (
    <button
      onClick={() => {
        remove();
      }}
      type="button">
      Remove
    </button>
  );
};

const MyArrayField = ({ field, items, uiBefore, uiAfter, ...props }) => {
  return (
    <ArrayField field={field} {...props}>
      <FormComponents components={uiBefore} />
      <ArrayField.Items>
        {({ field }) => (
          <React.Fragment>
            <FormComponents components={items['ui:before']} />
            <FormFields schema={items} prefix={field} />
            <FormComponents components={items['ui:after']} />
          </React.Fragment>
        )}
      </ArrayField.Items>
      <FormComponents components={uiAfter} />
    </ArrayField>
  );
};

// Step 3. Define your field map --------------------

const fieldMap = {
  select: Select,
  input: Input,
  checkbox: Checkbox,
  add: AddButton,
  remove: RemoveButton,
  array: MyArrayField
};

// Step 4. Build your forms!! -----------------------

const initialValue = [
  {
    name: 'Joe',
    age: '26'
  },
  {
    name: 'Elon',
    age: '49'
  }
];

const schema = {
  type: 'object',
  required: ['name', 'siblings'],
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    authorize: {
      type: 'string',
      title: 'Authorize',
      'ui:control': 'checkbox'
    },
    model: {
      type: 'string',
      title: 'Model',
      'ui:control': 'select',
      oneOf: [
        { const: 'ms', title: 'Model S' },
        { const: 'm3', title: 'Model 3' },
        { const: 'mx', title: 'Model X' },
        { const: 'my', title: 'Model Y' }
      ],
      'ui:props': {
        initialValue: 'm3'
      }
    },
    siblings: {
      type: 'array',
      minItems: 2,
      'ui:control': 'array',
      'ui:before': [{ 'ui:control': 'add' }],
      'ui:props': {
        initialValue
      },
      items: {
        type: 'object',
        'ui:after': [{ 'ui:control': 'remove' }],
        required: ['name', 'age'],
        properties: {
          name: {
            type: 'string',
            title: 'Sibling name',
            'ui:control': 'input'
          },
          age: {
            type: 'number',
            title: 'Sibling age',
            minimum: 0,
            'ui:control': 'input',
            'ui:props': {
              type: 'number'
            }
          }
        }
      }
    }
  }
};

const Schema = () => (
  <Form schema={schema} fieldMap={fieldMap}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default withDocs(readme, Schema);
