# Paired Validation

Sometimes when validating you may need to revalidate when a sibling field changes.
A great example of this is when you have a password and confirm password field,
and when one changes you want the other to validate as well. To achieve this, `informed`
allows you to pass validateWhen to an input with an array of field names that will re-trigger validation on the field.

**The form below is an example of this scenario:**

<!-- STORY -->

```jsx
import { Form, Input } from 'informed';

const basicValidation = value => {
  return !value || value.length < 5
    ? 'Password must be at least five characters'
    : undefined;
};

const matchValidation = (password1, password2) => {
  return password1 !== password2 ? 'Passwords must match' : undefined;
};

const passwordValidation = (password1, password2) => {
  return basicValidation(password1) || matchValidation(password1, password2);
};

const validatePassword = (value, values) =>
  passwordValidation(value, values.confirmPassword);
const validateConfim = (value, values) =>
  passwordValidation(value, values.password);

<Form id="notify-validation-form">
  <Input
    name="password"
    id="notify-password"
    validate={validatePassword}
    validateOnChange
    validateWhen={['confirmPassword']}
  />
  <label htmlFor="notify-confirm-password">Confirm password:</label>
  <Input
    name="confirmPassword"
    id="notify-confirm-password"
    validate={validateConfim}
    validateOnChange
    validateWhen={['password']}
  />
  <button type="submit">Submit</button>
</Form>;
```
