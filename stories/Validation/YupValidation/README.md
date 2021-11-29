# Yup Validation

Validation via yup can be achieved by passing a validationSchema to the form.

**Try clicking the submit button and see what happens:**

<!-- STORY -->

What just happened? When you clicked on the submit button informed triggered validate on the yup schema.

**Get rid of the errors by typing at least 2 characters in each name field and a valid email, then
click the submit button again and see what happens:**

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, Text } from 'informed';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

<Form
  yupSchema={SignupSchema}
  onSubmit={({ values }) => window.alert(JSON.stringify(values, null, 2))}>
  ><Input name="firstName" label="First Name:" />
  <Input name="lastName" label="Last Name:" />
  <Input name="email" label="Email:" />
  <button type="submit">Submit</button>
</Form>;
```
