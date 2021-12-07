# Elon Validator

Simple validation can be achieved by passing a validation function to the input. But what if you want to perform multiple validations??

Well, Elon is here to help you out!

<!-- IDFK Strange issue where i need this commnet or code formatting is messed up -->

```jsx
import { Form, Input, Select, Elon } from 'informed';

const validate = Elon.inspect([
  (value, values) => {
    if (values.country === 'US' && !value) {
      return 'this field should not be empty when in the US';
    }
  },
  (value, values) => {
    if (value && value.length < 2) {
      return 'this field should contain more than 2 characters';
    }
  }
]);

const Example = () => {
  return (
    <Form
      onSubmit={({ values }) => window.alert(JSON.stringify(values, null, 2))}>
      <Select label="Country" name="country" initialValue="US">
        <option value="US">US</option>
        <option value="CA">Canada</option>
      </Select>
      <Input label="Some field" name="some-field" validate={validate} />
      <button type="submit">Submit</button>
    </Form>
  );
};
```
