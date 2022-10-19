# Form Api

**`Informed` gives you access to a `formApi`!**

This api allows you to grab and manipulate values using getters and setters. Below is a table that describes each function available within the formApi.

| Function       | Example                                 | Description                                                                                                                                                                                                                                                                                                               |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| submitForm     | `submitForm()`                          | This function will submit the form and trigger some lifecycle events. 1. It will set all the fields to touched. 2. It will call all validators. 3. It will call onSubmit if the form is valid. This function can be called manually however it is also called if you have a `<button type='submit'>` within the `<Form>`. |
| setValue       | `setValue('greeting', 'Hello')`         | Function that takes two parameters, the first is the field name, and the second is the value you want to set it to.                                                                                                                                                                                                       |
| getValue       | `getValue('greeting')`                  | Function that when given a field name will return its value.                                                                                                                                                                                                                                                              |
| setTouched     | `setTouched('greeting', true)`          | Function that takes two parameters, the first is the field name, and the second is true or false.                                                                                                                                                                                                                         |
| getTouched     | `getTouched('greeting')`                | Function that when given a field name will return whether or not its touched.                                                                                                                                                                                                                                             |
| setError       | `setError('greeting', 'Error message')` | Function that takes two parameters, the first is the field name, and the second is the error message you want to set it to.                                                                                                                                                                                               |
| getError       | `getError('greeting')`                  | Function that when given a field name will return its error.                                                                                                                                                                                                                                                              |
| getFormState   | `getFormState()`                        | Function that returns the formState. Note this will only return the state as it existed when the function was called.                                                                                                                                                                                                     |
| reset          | `reset()`                               | Function that will reset the form to its initial state.                                                                                                                                                                                                                                                                   |
| setValues      | `setValues({ greeting: 'hello'})`       | Function that will set the fields values.                                                                                                                                                                                                                                                                                 |
| setValues      | `setValues({ greeting: 'hello'})`       | Function that will set the fields values.                                                                                                                                                                                                                                                                                 |
| setFormError   | `setFormError('There was an error!')`   | Function that will set the forms error manually.                                                                                                                                                                                                                                                                          |
| validate       | `validate()`                            | Function that will trigger the forms validation manually.                                                                                                                                                                                                                                                                 |
| setValues      | `setValues(values)`                     | Function that will set all form values ( clearing values you dont include )                                                                                                                                                                                                                                               |
| setTheseValues | `setTheseValues(values)`                | Function that will set some form values                                                                                                                                                                                                                                                                                   |
| fieldExists    | `fieldExists('fieldName')`              | Function that when given a field name will return whether or not it exists (i.e. the component is rendered).                                                                                                                                                                                                              |
| resetPath      | `resetPath("brothers.friend")`          | Function that will reset all fields under given path                                                                                                                                                                                                                                                                      |
| disable        | `disable()`                             | Function that will disable the form                                                                                                                                                                                                                                                                                       |
| enable         | `enable()`                              | Function that will enable the form PLEASE NOTE if you pass in disabled prop that will override this                                                                                                                                                                                                                       |

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
      <Input name="name" label="First name:" />
      <button type="button" onClick={() => formApi.setValue('name', 'Joe')}>
        Set Name to "Joe"
      </button>
      <button
        type="button"
        onClick={() => formApi.setValueQuietly('name', 'Kevin')}>
        Set Name to "Kevin" Quietly
      </button>
      <button type="button" onClick={() => formApi.reset()}>
        Reset
      </button>
      <button type="button" onClick={() => formApi.setValue('foo', 'Bar')}>
        Set Foo to "Bar"
      </button>
      <button type="button" onClick={() => formApi.disable()}>
        Disable
      </button>
      <button type="button" onClick={() => formApi.enable()}>
        Enable
      </button>
      <button type="submit">Submit</button>
    </div>
  )}
</Form>;
```

<br/>
