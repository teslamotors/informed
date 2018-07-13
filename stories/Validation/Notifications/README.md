# Complex Validation

Sometimes when validating you may need to notify other fields about your changes.
A great example of this is when you have a password and confirm password field,
and when one changes you want the other to validate as well. To achieve this, `informed`
allows you to pass notify to an input with an array of fields to notify.

**The form below is an example of this scenario:**

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const basicValidation = value => {
  return !value || value.length < 5 ? 'Password must be at least five characters' : null;
}

const matchValidation = ( value, values ) => {
  return values.password !== values.confirmPassword ? 'Passwords must match' : null;
}

const passwordValidation = ( value, values ) => {
  return basicValidation(value) || matchValidation( value, values )
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
