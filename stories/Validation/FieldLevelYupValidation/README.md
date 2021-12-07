# Field Level Yup Validation

Validation via yup can be achieved at the field level by passing a validationSchema to a field.

**Try clicking the submit button and see what happens:**

<!-- STORY -->

What just happened? When you clicked on the submit button informed triggered validate on the yup schema.
Then it triggered validation at the field level. How cool is that!

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, Text } from 'informed';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const lastNameSchema = Yup.string()
  .min(2, 'Last Name Too Short!')
  .max(50, 'Last Name Too Long!')
  .required('Last Name Required');

<Form yupSchema={SignupSchema}>
  <label>
    First Name:
    <Input field="firstName" />
  </label>
  <label>
    Last Name:
    <Input field="lastName" validationSchema={lastNameSchema} />
  </label>
  <label>
    Email:
    <Input field="email" />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
