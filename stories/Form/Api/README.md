# Form Api

**`Informed` gives you access to a `formApi`!**

This api allows you to grab and manipulate values using getters and setters. Below is a table that describes each function available within the formApi.

| Function    | Example                                 | Description                                                                                                                                                                                                                                                                                                               |
| ----------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| submitForm  | `submitForm()`                          | This function will submit the form and trigger some lifecycle events. 1. It will set all the fields to touched. 2. It will call all validators. 3. It will call onSubmit if the form is valid. This function can be called manually however it is also called if you have a `<button type='submit'>` within the `<Form>`. |
| setValue    | `setValue('greeting', 'Hello')`         | Function that takes two parameters, the first is the field name, and the second is the value you want to set it to.                                                                                                                                                                                                       |
| getValue    | `getValue('greeting')`                  | Function that when given a field name will return its value.                                                                                                                                                                                                                                                              |
| setTouched  | `setTouched('greeting', true)`          | Function that takes two parameters, the first is the field name, and the second is true or false.                                                                                                                                                                                                                         |
| getTouched  | `getTouched('greeting')`                | Function that when given a field name will return whether or not its touched.                                                                                                                                                                                                                                             |
| setError    | `setError('greeting', 'Error message')` | Function that takes two parameters, the first is the field name, and the second is the error message you want to set it to.                                                                                                                                                                                               |
| getError    | `getError('greeting')`                  | Function that when given a field name will return its error.                                                                                                                                                                                                                                                              |
| setState    | `setState({...})`                       | Function that sets the whole form state. Note, you can NOT set derived values such as pristine. See State section of the docs for additional details.                                                                                                                                                                     |
| getState    | `getState()`                            | Function that returns the formState. Note this will only return the state as it existed when the function was called.                                                                                                                                                                                                     |
| setValues   | `setValues({ greeting: 'hello'})`       | Function that will set the form values.                                                                                                                                                                                                                                                                                   |
| reset       | `reset()`                               | Function that will reset the form to its initial state.                                                                                                                                                                                                                                                                   |
| fieldExists | `fieldExists('greeting')`               | Function that will return true when the field exists on the form.                                                                                                                                                                                                                                                         |

**"Ok so informed gives us access to this formApi.. but how do i get my hands
on it??**

Thats a great question! There are many ways so lets take a look at a few!

Below is an example that shows you how to access the form api and use some of
its functions.

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

<Form id="form-api-form">
  {({ formApi }) => (
    <div>
      <label htmlFor="form-state-name">First name:</label>
      <Text field="name" id="form-api-name" validate={validate} />
      <button type="button" onClick={() => formApi.setValue('name', 'Joe')}>
        Set Name to "Joe"
      </button>
      <button type="button" onClick={() => formApi.setValue('name', 'Kevin')}>
        Set Name to "Kevin"
      </button>
      <button type="button" onClick={() => formApi.reset()}>
        Reset
      </button>
      <button type="submit">Submit</button>
    </div>
  )}
</Form>;
```

---

### What is this magic?

Its not magic, its a Function As A Child, or otherwise known as [render props](https://reactjs.org/docs/render-props.html)

There are three ways you can get access to `Informed`s form api.

1. By accessing the `formApi` as a parameter to a child render function.

```jsx
<Form>
  {({ formApi }) => (
    <div>
      <Text field="hello" />
      <button type="submit">Submit</button>
    </div>
  )}
</Form>
```

<br/>
2. By accessing the `formApi` as a parameter to a render prop.

```jsx
<Form
  render={({ formApi }) => (
    <div>
      <Text field="hello" />
      <button type="submit">Submit</button>
    </div>
  )}
/>
```

<br/>
2. By accessing the `formApi` as a prop to a component prop.

```jsx
const FormContent = ({ formApi }) => (
  <div>
    <Text field="hello" />
    <button type="submit">Submit</button>
  </div>
);

<Form component={FormContent} />;
```

<br/>
So if you do need access to the form api, any of these methods will work.
