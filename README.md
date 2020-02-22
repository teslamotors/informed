# Informed 

### Go to [live examples, code and docs](https://joepuzzo.github.io/informed)!

[![npmversion](https://img.shields.io/npm/v/informed.svg)](https://www.npmjs.com/package/informed)
[![Discord](https://img.shields.io/discord/676066734746370058)](https://discord.gg/zpF5wA)
[![Build Status](https://travis-ci.org/joepuzzo/informed.svg?branch=master)](https://travis-ci.org/joepuzzo/informed)
[![Coverage Status](https://coveralls.io/repos/github/joepuzzo/informed/badge.svg?branch=master)](https://coveralls.io/github/joepuzzo/informed?branch=master)
[![Minzipped-Size](https://badgen.net/bundlephobia/minzip/informed)](https://bundlephobia.com/result?p=informed)

## Introduction

Say hello to the best react form library you have ever used! Informed is an extensive, simple, and efficient solution for creating basic to complex forms in react. Out of the box you get the ability to grab and manipulate values, validate fields, create custom inputs, and much much more!

Oh and YES WE USE HOOKS!

## Getting Started

##### Install with npm
```
npm install --save informed
```

#### Create a Simple Form

```jsx
import { Form, Text } from 'informed';

const submit = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

<Form onSubmit={submit}>
  <label>
    First name:
    <Text field="name"/>
  </label>
  <button type="submit">Submit</button>
</Form>
```

#### Create a Simple Form With Validation

```jsx
import { Form, Text } from 'informed';

const validate = value => {
  if (!value || value.length < 5) return 'Field must be at least five characters';
};

const submit = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

<Form onSubmit={submit}>
  <label>
    First name:
    <Text field="name" validate={validate}/>
  </label>
  <button type="submit">Submit</button>
</Form>
```

#### Create a Complex Form

```jsx
import { Form, Text, Option, Select, Checkbox, Scope, TextArea, RadioGroup, Radio } from 'informed';

<Form>
  <label>First name:<Text field="name"/></label>
  <Scope scope="favorite">
    <label>Favorite color:<Text field="color"/></label>
    <label>Favorite food:<Text field="food"/></label>
  </Scope>
  <label>Friend 1:<Text field="friends[0]" /></label>
  <label>Friend 2:<Text field="friends[1]" /></label>
  <label>Friend 3:<Text field="friends[2]" /></label>
  <label>Bio:<TextArea field="bio"/></label>
  <RadioGroup field="gender">
    <label>Male <Radio value="male"/></label>            
    <label>Female <Radio value="female"/></label>
  </RadioGroup>
  <label>
    Relationship status:
    <Select field="status">
      <Option value="" disabled>
        Select One...
      </Option>
      <Option value="single">Single</Option>
      <Option value="relationship">Relationship</Option>
      <Option value="complicated">Complicated</Option>
    </Select>
  </label>
  <label>
    Colors:
    <Select
      field="colors"
      multiple
    >
      <Option value="red">Red</Option>
      <Option value="green">Green</Option>
      <Option value="blue">Blue</Option>
      <Option value="yellow">Yellow</Option>
      <Option value="orange">Orange</Option>
      <Option value="purple">Purple</Option>
    </Select>
  </label>
  <label>Authorize: <Checkbox field="authorize"/></label>
  <button type="submit">Submit</button>
</Form>
```


#### Hook things up yourself via the `useForm` hook

```jsx
import { Form, Text } from 'informed';

const validate = value => {
  if (!value || value.length < 5) return 'Field must be at least five characters';
};

const onSubmit = values => window.alert(`Form successfully submitted with ${JSON.stringify(values)}`);

const UseFormExample = () => {

  const { formController, formState, render } = useForm({
    onSubmit
  });

  return render(
    <form onSubmit={formController.submitForm}>
      <label>
        First name:
        <Text field="name" validate={validate}/>
        <small style={{ color: 'red' }}>{formState.errors.name}</small>
      </label>
      <button type="submit">Submit</button>
      <pre>
        <code>
          {JSON.stringify(formState, null, 2)}
        </code>
      </pre>
    </form>
  );
}
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
  <label>Name:<Text field="name" /></label>
  <button type="submit">Submit</button>
  <h5>Component using formState:</h5>
  <ComponentUsingFormState />
</Form>
```

#### Control Form via FormApi through the use of Hooks!!

```jsx
import { Form, Text, useFormApi } from 'informed';

const ComponentUsingFormApi = () => {
  const formApi = useFormApi();
  return (
    <button type="button" onClick={()=>
      formApi.setValue(
        'name', 
        Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER)))}>
      Random
    </button>
  );
};
  
<Form>
  <div>
    <label>Name:<Text field="name"/></label>
    <button type="submit">Submit</button>
    <h5>Component using formApi:</h5>
    <ComponentUsingFormApi />
  </div>
</Form>
```

#### Create custom inputs with built in validation!!

```jsx
import { Form, BasicText, asField } from 'informed';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const ErrorText = asField(({ fieldState, ...props }) => (
  <React.Fragment>
    <BasicText
      fieldState={fieldState}
      {...props}
      style={fieldState.error ? { border: 'solid 1px red' } : null}
    />
    {fieldState.error ? (
      <small style={{ color: 'red' }}>{fieldState.error}</small>
    ) : null}
  </React.Fragment>
));

<Form>
  <label>
    First name:
    <ErrorText
      field="name"
      validate={validate}
      validateOnChange
      validateOnBlur
    />
  </label>
  <button type="submit">Submit</button>
</Form>;
```

#### Create dynamic forms

```jsx
import { Form, Text, RadioGroup, Radio } from 'informed';

<Form>
  {({ formState }) => (
    <React.Fragment>
      <label>First name:<Text field="name"/></label>
      <label>Are you married?</label>
      <RadioGroup field="married">
        <label>Yes <Radio value="yes"/></label>
        <label>No <Radio value="no"/></label>
      </RadioGroup>
      {formState.values.married === 'yes' ? (
        <label >Spouse name:<Text field="spouse" /></label>
      ) : null}
      <button type="submit">Submit</button>
    </React.Fragment>
  )}
</Form>
```

**WARNING:** writing this in the above way is fine, it works they way we expect and gets us what we need... BUT! There is a better way!

```jsx
import { Form, Text, RadioGroup, Radio, useFieldState } from 'informed';

const Spouse = () => {
  const { value: married } = useFieldState('married'); 
  return married === 'yes' ? <label >Spouse name:<Text field="spouse" /></label> : null;
};

<Form>
  <label>First name:<Text field="name"/></label>
  <label>Are you married?</label>
  <RadioGroup field="married">
    <label>Yes <Radio value="yes"/></label>
    <label>No <Radio value="no"/></label>
  </RadioGroup>
  <Spouse />
  <button type="submit">Submit</button>  
</Form>
```

Writing code the second way can typically save excess rendering! And, it looks much cleaner.

#### Create dynamic forms with dynamic arrays ! Mind Blown!

```jsx
import { Form, Text, ArrayField } from 'informed';

const DynamicArrays = () => {

  return (
    <div>
      <Form>
        <ArrayField field="sibling">
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label htmlFor={i} key={key}>
                  Sibling {i}:
                  <Text field={field} id={i} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
        <FormState />
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
    .required('Required'),
});

<Form validationSchema={SignupSchema}>
  <label>First Name:<Text field="firstName" /></label>
  <label>Last Name:<Text field="lastName" /></label>
  <label>Email:<Text field="email" /></label>
  <button type="submit">Submit</button>
</Form>
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
    .required('Required'),
});

const lastNameSchema = Yup.string()
  .min(2, 'Last Name Too Short!')
  .max(50, 'Last Name Too Long!')
  .required('Last Name Required');

<Form validationSchema={SignupSchema}>
  <label>First Name:<Text field="firstName" /></label>
  <label>Last Name:<Text field="lastName" validationSchema={lastNameSchema}/></label>
  <label>Email:<Text field="email" /></label>
  <button type="submit">Submit</button>
</Form>
```

