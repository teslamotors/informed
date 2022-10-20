# Dependent Fields

Sometimes fields values depend on what you input in other parts of the form.

<!-- STORY -->

```jsx
import { Form, Input, Debug, useFieldState, useFieldApi } from 'informed';

const Multiplyer = () => {
  return (
    <Input
      name="multiplyer"
      label="Multiplyer"
      type="number"
      defaultValue={0.02}
    />
  );
};

const Rate = () => {
  const { value: multiplyer, dirty } = useFieldState('multiplyer');
  const { setValueQuietly, setValue } = useFieldApi('rate');

  useEffect(
    () => {
      dirty ? setValue(multiplyer * 2) : setValueQuietly(multiplyer * 2);
    },
    [multiplyer]
  );

  return <Input name="rate" label="Rate" type="number" />;
};

const DependentFields = () => (
  <Form>
    <Multiplyer />
    <Rate />
    <button type="submit">Submit</button>
    <Debug values dirty pristine dirt />
  </Form>
);
```
