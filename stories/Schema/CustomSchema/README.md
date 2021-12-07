# Custom Schema

Informed comes with a custom schema adapter that maps field types to actual JSX elements.

Whenever you create your own inputs, you have to create or add to informds `fieldMap`.

```jsx
import {
  useForm,
  useField,
  useArrayFieldApi,
  useArrayFieldItemApi,
  ArrayField,
  FormComponents,
  FormFields,
  Relevant,
  Debug
} from 'informed';

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
  const { render, informed, userProps, ref } = useField({
    type: 'text',
    ...props
  });

  return render(
    <label>
      {label}
      <input ref={ref} {...informed} {...userProps} />
    </label>
  );
};

const Checkbox = ({ label, ...props }) => {
  const { render, informed, userProps, ref } = useField({
    type: 'checkbox',
    ...props
  });

  return render(
    <label>
      {label}
      <input ref={ref} {...informed} {...userProps} />
    </label>
  );
};

const Select = ({ label, children, options, ...props }) => {
  const { render, informed, userProps, ref } = useField({
    type: 'select',
    ...props
  });

  return render(
    <label>
      {label}
      <select ref={ref} {...informed} {...userProps}>
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

const MyArrayField = ({ name, items, ...props }) => {
  return (
    <ArrayField name={name} {...props}>
      <AddButton />
      <ArrayField.Items>
        {() => (
          <>
            <FormFields schema={items} />
            <RemoveButton />
          </>
        )}
      </ArrayField.Items>
    </ArrayField>
  );
};

// Step 3. Define your field map --------------------

const adapter = {
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
      type: 'boolean',
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
      'ui:props': {
        initialValue
      },
      items: {
        type: 'object',
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
  <Form schema={schema} adapter={adapter}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);
```

<!-- STORY -->
