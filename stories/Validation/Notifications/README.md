# Complex Validation

Sometimes when validating you may need to notify other fields about your changes.
A great example of this is when you have a password and confirm password field,
and when one changes you want the other to validate as well. To achieve this, `informed`
allows you to pass notify to an input with an array of fields to notify.

**The form below is an example of this scenario:**

<!-- STORY -->

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

<Form id="notify-validation-form">
  <Text
    field="password"
    id="notify-password"
    validate={passwordValidation}
    validateOnChange
    notify={['confirmPassword']}/>
  <label htmlFor="notify-confirm-password">Confirm password:</label>
  <Text
    field="confirmPassword"
    id="notify-confirm-password"
    validate={passwordValidation}
    validateOnChange
    notify={['password']}/>
  <button type="submit">
    Submit
  </button>
</Form>
```
