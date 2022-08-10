# Form State

**`Informed` takes care of state so you don't have to!**

Below is a table that describes each value within a forms state.

**Note:** Initial value is the default value for an attribute, and derived describes
whether or not the attribute is derived from other attributes. For example,
invalid is derived from the errors attribute and therefore cannot be set directly.

| Attribute     | Example             | Initial Value | Description                                                                                                                                              |
| ------------- | ------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| values        | `{name:'Joe'}`      | `{}`          | Key value pair where key is the form field and value is the value entered or selected.                                                                   |
| maskedValues  | `{name:'Joe'}`      | `{}`          | Key value pair where key is the form field and value is the value entered or selected after formatting has occurred.                                     |
| initialValues | `{name:'Joe'}`      | `{}`          | Key value pair where key is the form field and value is an initial value for that field                                                                  |
| touched       | `{name:true}`       | `{}`          | Key value pair where key is the form field and value is true or undefined ( touched or untouched ). Submitting form will cause all fields to be touched. |
| errors        | `{name:'Invalid'}`  | `{}`          | Key value pair where key is the form field and value is the error associated with that field.                                                            |
| dirt          | `{name:true}`       | `{}`          | Key value pair where key is the form field and value is true or undefined ( dirty or pristine ).                                                         |
| focused       | `{name:true}`       | `{}`          | Key value pair where key is the form field and value is true or undefined ( focused or unfocused ). PAST TENSE! ( true if it was focused at one point)   |
| modified      | `{name:true}`       | `{}`          | Key value pairs of fields which differ from their initial values where key is the form field and value is the current value of the field                 |
| data          | `{address:['foo']}` | `{}`          | Data returned by inputs asynchronous `gatherData`calls (see GoogleApi Input)                                                                             |
| invalid       | `true`              | `false`       | Boolean that is true when form is invalid. A form is invalid when any of its inputs fails its validation function ( if there are errors ).               |
| valid         | `true`              | `true`        | Opposite of invalid                                                                                                                                      |
| pristine      | `true`              | `true`        | Boolean that is true when form is pristine. A form is pristine when no values have changed                                                               |
| dirty         | `true`              | `false`       | Boolean that is true when pristine is false                                                                                                              |
| submitted     | `true`              | `false`       | Boolean that is true when the form has been successfully submitted                                                                                       |
| submitting    | `true`              | `false`       | Boolean that is true when the form is submitting ( may happen during async validation)                                                                   |
| validating    | 1                   | 0             | Integer that represents how many fields are currently asynchronously validating                                                                          |
| gathering     | 1                   | 0             | Integer that represents how many fields are currently asynchronously gathering data (see GoogleApi Input)                                                |  |

**"Ok so informed takes care of state so I dont have to.. but how do i get my hands
on this state??**

Thats a great question! There are many ways so lets take a look at a few!

Below is an example that shows you how to access the form state and render out
the values that are changing.

<!-- STORY -->

```jsx
import { Form, Input, FormStateAccessor } from 'informed';

const validate = value => {
  return !value || value.length < 5
    ? 'Field must be longer than five characters'
    : undefined;
};

const validateForm = values => {
  return values.name === 'Joseph' ? 'Username is already taken!' : undefined;
};

<Form validate={validateForm}>
  <label>
    First name:
    <Input name="name" validate={validate} />
  </label>
  <button type="submit">Submit</button>
  <label>State:</label>
  <FormStateAccessor>
    {formState => (
      <pre>
        <code>{JSON.stringify(formState, null, 2)}</code>
      </pre>
    )}
  </FormStateAccessor>
</Form>;
```

### What is this magic?

Its not magic, its a Function As A Child, or otherwise known as [render props](https://reactjs.org/docs/render-props.html)

There are a few ways you can get access to `Informed`s form state.

1. By accessing the `formState` as a parameter to a child render function via `FormStateAccess`.

```jsx
<Form validate={validateForm}>
  <label>
    First name:
    <Input name="name" validate={validate} />
  </label>
  <button type="submit">Submit</button>
  <label>State:</label>
  <FormStateAccessor>
    {formState => (
      <pre>
        <code>{JSON.stringify(formState, null, 2)}</code>
      </pre>
    )}
  </FormStateAccessor>
</Form>
```

<br/>
2) By accessing the `formState` via Hooks!
<br/>

```jsx
const FormState = () => {
  const formState = useFormState();
  return (
    <label>Values:</label>
    <code>{JSON.stringify(formState.values)}</code>
    <label>Touched:</label>
    <code>{JSON.stringify(formState.touched)}</code>
  );
};

<Form>
  <div>
    <Input field="hello" />
    <button type="submit">Submit</button>
    <Debug />
  </div>
</Form>
```

3. By accessing the `formState` as a parameter to a child render function.

```jsx
<Form>
  {({ formState }) => (
    <div>
      <Input field="hello" />
      <button type="submit">Submit</button>
      <label>Values:</label>
      <code>{JSON.stringify(formState.values)}</code>
      <label>Touched:</label>
      <code>{JSON.stringify(formState.touched)}</code>
    </div>
  )}
</Form>
```

<br/>
So if you do need access to the form state, any of these methods will work.

### Ok so what if i need the state outside of the `<Form />` ??

Don't fret! This is also very simple. You have two options:

1. Use the Forms `onChange` prop.

  <br/>

```jsx
<Form onChange={formState => console.log(formState)}>
  <Input field="hello" />
  <button type="submit">Submit</button>
</Form>
```

  <br/>
  2. Use the Forms `formApiRef` prop, and then use the apis `getFormState` function.
  <br/>

```jsx
import React, { useRef } from 'react';
import { Form, Input } from 'informed';

const MyAwesomeForm = () => {
  const formApiRef = useRef();

  const handleClick = () => {
    console.log(formApiRef.current.getFormState());
  };

  return (
    <div>
      <Form formApiRef={formApiRef}>
        <Input name="hello" />
        <button type="submit">Submit</button>
      </Form>
      <button onClick={handleClick}>Print Form State</button>
    </div>
  );
};
```
