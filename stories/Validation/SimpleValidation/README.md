# Simple Validation

Simple validation can be achieved by passing a validation function to the input.
Below is an example form that has validation functions. The function defined
will return an error when the input has less than five characters, or there is
no value at all, and undefined otherwise. We pass this validation function to every
input and validation will **occur on submission**.

**Try clicking the submit button and see what happens:**

<!-- STORY -->

What just happened? When you clicked on the submit button all of the validation
functions were triggered for each field. Because every validation failed, the
form never actually called onSubmit. In other words, informed will only
submit a valid form.

**Get rid of the errors by typing at least 5 characters in each field and
click the submit button again and see what happens:**

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, Text } from 'informed';

const validate = value => {
  if (!value || value.length < 5)
    return 'Field must be at least five characters';
};

const Example = () => {
  return (
    <Form
      onSubmit={({ values }) => window.alert(JSON.stringify(values, null, 2))}>
      <Input name="color" label="Color:" validate={validate} />
      <Input name="food" label="Food:" validate={validate} />
      <Input name="car" label="Car:" validate={validate} />
      <button type="submit">Submit</button>
    </Form>
  );
};
```
