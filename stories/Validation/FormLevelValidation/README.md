# Form Level Validation

Form level validation can be achieved by passing a validation function to the form.
Below is an example form that has both types of form level validation. The validate length
function defined will return an error when the value has less than five characters, or there is
no value at all, and undefined otherwise. We use this validation function within the `validateFields`
validation function which will **occur on submission**.

In additon to the `validateFields` function, you can also pass in a `validate` function that will put the whole form in an invalid state. Below is an example of one where it will make sure the two number fields sum
to 4.

**Try clicking the submit button and see what happens:**

<!-- STORY -->

What just happened? When you clicked on the submit button, both the validate and validateFields
functions were triggered. Because validation failed, the
form never actually called onSubmit. In other words, informed will only
submit a valid form.

**Get rid of the errors by typing at least 5 characters in each of the text fields field and
click the submit button again and see what happens:**

What just happened? When you clicked on the submit button, both the validate and validateFields
functions were triggered. Because validateFields succeeded, the errors updated.
But! the form still never actually called onSubmit.

Why? Because now the validate function is failing.

**Get rid of the form level error by typing two values that sum to 4 and
click the submit button again and see what happens:**

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, Text } from 'informed';

const validateLength = value => {
  return !value || value.length < 5
    ? 'Field must be at least five characters'
    : undefined;
};

const validateFields = values => {
  return {
    color: validateLength(values.color),
    food: validateLength(values.food),
    car: validateLength(values.car)
  };
};

const validate = values =>
  values.a + values.b !== 4 ? 'a and b must sum to 4!' : undefined;

<Form validateFields={validateFields} validate={validate}>
  <label>
    Color:
    <Input field="color" />
  </label>
  <label>
    Food:
    <Input field="food" />
  </label>
  <label>
    Car:
    <Input field="car" />
  </label>
  <label>
    A:
    <Input field="a" type="number" />
  </label>
  <label>
    B:
    <Input field="b" type="number" />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
