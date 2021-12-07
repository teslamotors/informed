# Error Message

Most of the time you want to display a customized error message for the built-in validation. Here's how to achieve that.

**Note:** When you provide a string to the errorMessage prop, that will be used as the default for all built-in validation rules. The same can be achieved by adding a property with the key \_ (underscore).

<!-- STORY -->

```jsx
import {
  Form,
  Input,
  TextArea,
  RadioGroup,
  Radio,
  Select,
  Option,
  Checkbox,
  Scope,
  Debug
} from 'informed';

const validate = value => {
  if (!value || value.length < 5)
    return 'Field must be at least five characters';
};

const Example = () => (
  <Form
    errorMessage={{ required: 'This is field is required for your profile!' }}
    onSubmit={({ values }) => window.alert(JSON.stringify(values, null, 2))}>
    <Input
      name="name"
      label="First name:"
      required
      errorMessage="There is a problem with this field!"
    />
    <Input
      name="last"
      label="Last name:"
      required
      errorMessage={{ required: 'Last name is required!' }}
    />
    <Input name="favoriteColor" label="Favorite color:" required />
    <button type="submit">Submit</button>
    <Debug values errors invalid valid />
  </Form>
);
```
