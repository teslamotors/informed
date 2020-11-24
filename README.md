# Informed

### Go to [live examples, code and docs](https://joepuzzo.github.io/informed)!

[![npmversion](https://img.shields.io/npm/v/informed.svg)](https://www.npmjs.com/package/informed)

<!-- [![Discord](https://img.shields.io/discord/676066734746370058)](https://discord.gg/zpF5wA) -->

[![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)
[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)
[![Minzipped-Size](https://badgen.net/bundlephobia/minzip/informed)](https://bundlephobia.com/result?p=informed)

## Introduction

Say hello to the best react form library you have ever used! Informed is an extensive, simple, and efficient solution for creating basic to complex forms in react. Out of the box you get the ability to grab and manipulate values, validate fields, create custom inputs, multistep forms, array fields, and much much more!

Oh and YES WE USE HOOKS!

## Getting Started

##### Install with npm

```
npm install --save informed
```

#### Create a Simple Form

```jsx
import { Form, Text } from 'informed';

const submit = values =>
  window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

<Form onSubmit={submit}>
  <label>
    First name:
    <Text field="name" />
  </label>
  <button type="submit">Submit</button>
</Form>;
```

#### Create a Simple Form With Validation

```jsx
import { Form, Text } from 'informed';

const validate = value => {
  if (!value || value.length < 5)
    return 'Field must be at least five characters';
};

const submit = values =>
  window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

<Form onSubmit={submit}>
  <label>
    First name:
    <Text field="name" validate={validate} />
  </label>
  <button type="submit">Submit</button>
</Form>;
```

#### Create a Complex Form

```jsx
import { Form, Input, Select, Checkbox, Relevant, FormState } from 'informed';

const onSubmit = data => console.log(data);

const ExampleForm = () => (
  <Form onSubmit={onSubmit}>
    <Input field="name" label="Name" placeholder="Elon" />
    <Input field="age" type="number" label="Age" required="Age Required" />
    <Input field="phone" label="Phone" formatter="+1 (###)-###-####" />
    <Select field="car" label="Car" initialValue="ms">
      <option value="ms">Model S</option>
      <option value="m3">Model 3</option>
      <option value="mx">Model X</option>
      <option value="my">Model Y</option>
    </Select>
    <Checkbox field="married" label="Married?" />
    <Relevant when={({ values }) => values.married}>
      <Input field="spouse" label="Spouse" />
    </Relevant>
    <button type="submit">Submit</button>
    <FormState />
  </Form>
);
```

#### Hook things up yourself via hooks. ( custom form element and inputs )

```jsx
import { useForm, useField, Relevant, FormState } from 'informed';

// Step 1. Build your form component ---------------------

const Form = ({ children, ...props }) => {
  const { formController, render, userProps } = useForm(props);

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

const Select = ({ label, children, ...props }) => {
  const { render, informed } = useField({ fieldType: 'select', ...props });

  return render(
    <label>
      {label}
      <select {...informed}>{children}</select>
    </label>
  );
};

// Step 3. Build your forms! ---------------------------

const onSubmit = data => console.log(data);

const ExampleForm = () => (
  <Form onSubmit={onSubmit}>
    <Input field="name" label="Name" placeholder="Elon" />
    <Input field="age" type="number" label="Age" required="Age Required" />
    <Input field="phone" label="Phone" formatter="+1 (###)-###-####" />
    <Select field="car" label="Car" initialValue="ms">
      <option value="ms">Model S</option>
      <option value="m3">Model 3</option>
      <option value="mx">Model X</option>
      <option value="my">Model Y</option>
    </Select>
    <Checkbox field="married" label="Married?" />
    <Relevant when={({ values }) => values.married}>
      <Input field="spouse" label="Spouse" />
    </Relevant>
    <button type="submit">Submit</button>
    <FormState />
  </Form>
);
```

#### Access Form State with Hooks!

```jsx
import { Form, Text, useFormState } from 'informed';

const ComponentUsingFormState = () => {
  const formState = useFormState();
  return (
    <pre>
      <code>{JSON.stringify(formState, null, 2)}</code>
    </pre>
  );
};

<Form>
  <label>
    Name:
    <Text field="name" />
  </label>
  <button type="submit">Submit</button>
  <h5>Component using formState:</h5>
  <ComponentUsingFormState />
</Form>;
```

#### Control Form via FormApi through the use of Hooks!!

```jsx
import { Form, Text, useFormApi } from 'informed';

const ComponentUsingFormApi = () => {
  const formApi = useFormApi();
  return (
    <button
      type="button"
      onClick={() =>
        formApi.setValue(
          'name',
          Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))
        )
      }>
      Random
    </button>
  );
};

<Form>
  <div>
    <label>
      Name:
      <Text field="name" />
    </label>
    <button type="submit">Submit</button>
    <h5>Component using formApi:</h5>
    <ComponentUsingFormApi />
  </div>
</Form>;
```

#### Create custom inputs with built in validation!!

```jsx
import { Form, useField } from 'informed';

const ErrorText = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, ...rest } = userProps;
  return render(
    <React.Fragment>
      <input
        {...rest}
        ref={ref}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          setValue(e.target.value);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={e => {
          setTouched(true);
          if (onBlur) {
            onBlur(e);
          }
        }}
        style={fieldState.error ? { border: 'solid 1px red' } : null}
      />
      {fieldState.error ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </React.Fragment>
  );
};

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

<Form id="custom-form">
  <label>
    First name:
    <ErrorText field="name" validateOnChange validateOnBlur />
  </label>
  <button type="submit">Submit</button>
</Form>;
```

#### Create dynamic forms

```jsx
import { Form, Text, RadioGroup, Radio, Relevant } from 'informed';

<Form>
  <label>
    First name:
    <Text field="name" />
  </label>
  <label>Are you married?</label>
  <RadioGroup field="married">
    <label>
      Yes <Radio value="yes" />
    </label>
    <label>
      No <Radio value="no" />
    </label>
  </RadioGroup>
  <Relevant when={({ values }) => values.married === 'yes'}>
    <label>
      Spouse name:
      <Text field="spouse" />
    </label>
  </Relevant>
  <button type="submit">Submit</button>
</Form>;
```

#### Create dynamic forms with dynamic arrays ! Mind Blown!

```jsx
import { Form, Text, ArrayField } from 'informed';

const DynamicArrays = () => {
  return (
    <div>
      <Form initialValues={initialValues}>
        <ArrayField field="siblings">
          {({ add, reset }) => (
            <>
              <button onClick={reset} type="button">
                Reset
              </button>
              <button onClick={add} type="button">
                Add
              </button>
              <ArrayField.Items>
                {({ remove, field, reset, values, setValue }) => (
                  <label>
                    <h5>{field}</h5>
                    <Text field={`${field}.name`} />
                    <Text field={`${field}.age`} />
                    <button type="button" onClick={reset}>
                      Reset
                    </button>
                    <button type="button" onClick={remove}>
                      Remove
                    </button>
                  </label>
                )}
              </ArrayField.Items>
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
```

#### Perform validation via Yup!

```jsx
import { Form, Text } from 'informed';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

<Form validationSchema={SignupSchema}>
  <label>
    First Name:
    <Text field="firstName" />
  </label>
  <label>
    Last Name:
    <Text field="lastName" />
  </label>
  <label>
    Email:
    <Text field="email" />
  </label>
  <button type="submit">Submit</button>
</Form>;
```

#### Perform field level Yup validation!

```jsx
import { Form, Text } from 'informed';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const lastNameSchema = Yup.string()
  .min(2, 'Last Name Too Short!')
  .max(50, 'Last Name Too Long!')
  .required('Last Name Required');

<Form validationSchema={SignupSchema}>
  <label>
    First Name:
    <Text field="firstName" />
  </label>
  <label>
    Last Name:
    <Text field="lastName" validationSchema={lastNameSchema} />
  </label>
  <label>
    Email:
    <Text field="email" />
  </label>
  <button type="submit">Submit</button>
</Form>;
```

#### Render forms with JSON schema

```jsx
import { Form, SchemaFields } from 'informed';

const schema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      title: 'First name',
      'ui:control': 'input'
    },
    married: {
      type: 'string',
      title: 'Are you married?',
      enum: ['yes', 'no'],
      'ui:control': 'radio'
    }
  },
  allOf: [
    {
      if: {
        properties: {
          married: { const: 'yes' }
        },
        required: ['married']
      },
      then: {
        properties: {
          spouse: {
            type: 'string',
            title: 'Spouse name',
            'ui:control': 'input'
          }
        }
      }
    }
  ]
};

const Schema = () => (
  <Form schema={schema}>
    <SchemaFields />
    <button type="submit">Submit</button>
    <FormState />
  </Form>
);
```
