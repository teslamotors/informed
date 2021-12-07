# Complex Validation

Complex validation can be achieved by passing a validation function to an input,
that also accepts all the values in the form. Below is an example form
that has validation functions on each input. The Basic validation function will
return an error when the input has less than five characters, or there is no
value at all, and undefined otherwise. The friendValidation function will show errors
when basic validation fails OR two friends have the same name. We pass the input
validation function to every input and the friendValidation function to the
friend fields. Validation will **occur on submission**.

**Try clicking the submit button and see what happens:**

<!-- STORY -->

What just happened? When you clicked on the submit button all of the validation
functions were triggered for each field. Because every validation failed, the
form never actually called onSubmit. In other words, informed will only
submit a valid form.

**Get rid of the errors by typing more than 5 characters in each field and
also type "George" in two of the friend fields. Click the submit button again
and see what happens:**

All of our basic level validation passed but when the form attempted to submit
the additional friend checks failed.

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, Input, Scope } from 'informed';

const basicValidation = value => {
  return !value || value.length < 5
    ? 'Field must be longer than five characters'
    : undefined;
};

const duplicateValidation = (value, values) => {
  return values.filter(v => v === value).length > 1
    ? 'This field must be unique.'
    : undefined;
};

const friendValidation = (value, values) => {
  return basicValidation(value) || duplicateValidation(value, values.friends);
};

const Example = () => (
  <Form id="complex-validate-form">
    <Input name="name" label="First name:" validate={basicValidation} />
    <Scope scope="favorite">
      <Input name="color" label="Favorite color:" validate={basicValidation} />
      <Input name="food" label="Favorite food:" validate={basicValidation} />
    </Scope>
    <Input name="friends[0]" label="Friend 1:" validate={friendValidation} />
    <Input name="friends[1]" label="Friend 2:" validate={friendValidation} />
    <Input name="friends[2]" label="Friend 3:" validate={friendValidation} />
    <button type="submit">Submit</button>
  </Form>
);
```
