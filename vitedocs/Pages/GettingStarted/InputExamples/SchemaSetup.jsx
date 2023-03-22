import {
  useField,
  useForm,
  Debug,
  SchemaFields,
  ArrayField,
  useArrayFieldApi,
  useArrayFieldItemApi,
  FormFields
} from 'informed';

// Step 1. Build your input components --------------------

const Input = props => {
  const { render, informed, userProps, fieldState, ref } = useField({
    type: 'text',
    ...props
  });
  const { label, id, ...rest } = userProps;
  const { showError } = fieldState;
  const style = showError ? { border: 'solid 1px red' } : null;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} style={style} />
      {showError && <small style={{ color: 'red' }}>{fieldState.error}</small>}
    </>
  );
};

const Checkbox = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'checkbox',
    ...props
  });
  const { label, id, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} />
    </>
  );
};

const Select = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'select',
    ...props
  });
  const { label, id, children, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} ref={ref} {...informed} {...rest}>
        {children}
      </select>
    </>
  );
};

// Step 2. Define Array Components --------------------

const AddButton = () => {
  const { add } = useArrayFieldApi();
  return (
    <button onClick={add} type="button" style={{ border: '2px solid green' }}>
      Add
    </button>
  );
};

const RemoveButton = () => {
  const { remove } = useArrayFieldItemApi();
  return (
    <button onClick={remove} style={{ border: '2px solid red' }}>
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

// Step 3. Define your field adapter --------------------

const adapter = {
  select: Select,
  input: Input,
  checkbox: Checkbox,
  add: AddButton,
  remove: RemoveButton,
  array: MyArrayField
};

// Step 4. Build your form component ---------------------

const Form = ({ children, ...rest }) => {
  // Note how we pass adapter in here!!
  const { formController, render, userProps } = useForm({ ...rest, adapter });

  return render(
    <form noValidate {...userProps} onSubmit={formController.submitForm}>
      {children}
    </form>
  );
};

// Step 5. Build your forms!! -----------------------

const initialValue = [
  {
    name: 'Joe',
    age: '28'
  },
  {
    name: 'Elon',
    age: '51'
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

/* -------- Now You Can use Schema with your inputs! --------- */
const Example = () => {
  return (
    <Form schema={schema} className="your-styles">
      <SchemaFields />
      <button type="submit">Submit</button>
      <Debug valid pristine dirty values errors touched />
    </Form>
  );
};

export default Example;
