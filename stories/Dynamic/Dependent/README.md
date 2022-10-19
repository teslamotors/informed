# Dependent Fields

Sometimes fields values depend on what you input in other parts of the form.

<!-- STORY -->

```jsx
import { Form, Input, Debug, useFieldState, useFieldApi } from 'informed';

const MoneyFactor = () => {
  return (
    <Input
      name="moneyFactor"
      label="Money Factor"
      type="number"
      defaultValue={0.02}
    />
  );
};

const InterestRate = () => {
  const { value: moneyFactor, dirty } = useFieldState('moneyFactor');
  const { setValueQuietly, setValue } = useFieldApi('interestRate');

  useEffect(
    () => {
      // Why do we check dirty? because we dont want to make the interestRate field dirty if this is initial load
      dirty
        ? setValue(moneyFactor * 2400)
        : setValueQuietly(moneyFactor * 2400);
    },
    [moneyFactor]
  );

  return <Input name="interestRate" label="Interest Rate" type="number" />;
};

const DependentFields = () => (
  <Form>
    <MoneyFactor />
    <InterestRate />
    <button type="submit">Submit</button>
    <Debug values dirty pristine dirt />
  </Form>
);
```
