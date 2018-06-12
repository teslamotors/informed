# Complex Validation

Complex validation can be achieved by passing a validation function to an input,
that also accepts all the values in the form. Below is an example form
that has validation functions on each input. The Basic validation function will
return an error when the input has less than five characters, or there is no
value at all, and null otherwise. The friendValidation function will show errors
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

```jsx
import { Form, Text, Scope } from 'informed';

const basicValidation = value => {
  return !value || value.length < 5 ? 'Field must be longer than five characters' : null;
}

const duplicateValidation = ( value, values ) => {
  return values.filter( v => v === value ).length > 1 ? 'This field must be unique.' : null;
}

const friendValidation = ( value, values ) => {
  return basicValidation(value) || duplicateValidation( value, values.friends )
}

<Form id="complex-validate-form">
  <label htmlFor="complex-name">First name:</label>
  <Text field="name" id="complex-name" validate={basicValidation} />
  <Scope scope="favorite">
    <label htmlFor="complex-color">Favorite color:</label>
    <Text field="color" id="complex-color" validate={basicValidation} />
    <label htmlFor="complex-food">Favorite food:</label>
    <Text field="food" id="complex-food" validate={basicValidation} />
  </Scope>
  <label htmlFor="complex-friend-0">Friend 1:</label>
  <Text field="friends[0]" id="complex-friend-0" validate={friendValidation} />
  <label htmlFor="complex-friend-1">Friend 2:</label>
  <Text field="friends[1]" id="complex-friend-1" validate={friendValidation} />
  <label htmlFor="complex-friend-2">Friend 3:</label>
  <Text field="friends[2]" id="complex-friend-2" validate={friendValidation} />
  <button type="submit">
    Submit
  </button>
</Form>
```
