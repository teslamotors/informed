# Complex Validation

Sometimes when validating you may need to notify other fields about your changes.
A great example of this is when you have a password and confirm password field,
and when one changes you want the other to validate as well. To achieve this, `informed`
allows you to pass notify to an input with an array of fields to notify.

To avoid excessive message passing, `informed` only notifies other fields of changes as part of the validation process. If you'd like to control when validation (and thus, notification) occur, you can make use of the  `validateOnChange` and `validateOnBlur` props.

**The form below is an example of this scenario:**

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const basicValidation = value => {
  return !value || value.length < 5
    ? 'Password must be at least five characters'
    : undefined;
};

const matchValidation = (password1, password2) => {
  return password1 !== password2
    ? 'Passwords must match'
    : undefined;
};

const passwordValidation = (password1, password2) => {
  return basicValidation(password1) || matchValidation(password1, password2);
};

const validatePassword = (value, values) => passwordValidation( value, values.confirmPassword); 
const validateConfim = (value, values) => passwordValidation( value, values.password); 

<Form id="notify-validation-form">
  <Text
    field="password"
    id="notify-password"
    validate={validatePassword}
    validateOnChange
    notify={['confirmPassword']}/>
  <label htmlFor="notify-confirm-password">Confirm password:</label>
  <Text
    field="confirmPassword"
    id="notify-confirm-password"
    validate={validateConfim}
    validateOnChange
    notify={['password']}/>
  <button type="submit">
    Submit
  </button>
</Form>
```
