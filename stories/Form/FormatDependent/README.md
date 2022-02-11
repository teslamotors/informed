# Dependent Fields

Sometimes fields values depend on what you input in other parts of the form.

<!-- STORY -->

```jsx
import {
  Form,
  RadioGroup,
  Radio,
  Select,
  Debug,
  useFieldState,
  useFieldApi
} from 'informed';

const options = {
  car: [
    {
      value: '',
      label: '- Select -',
      disabled: true
    },
    {
      value: 'modelS',
      label: 'Model S'
    },
    {
      value: 'model3',
      label: 'Model 3'
    },
    {
      value: 'modelX',
      label: 'Model X'
    },
    {
      value: 'modely',
      label: 'Model Y'
    }
  ],
  truck: [
    {
      value: '',
      label: '- Select -',
      disabled: true
    },
    {
      value: 'semi',
      label: 'Semi Truck'
    },
    {
      value: 'cyber',
      label: 'Cyber Truck'
    }
  ]
};

const CarOrTruck = () => {
  return (
    <>
      <label>Would you like a car or truck?</label>
      <RadioGroup name="type" initialValue="car">
        <Radio value="car" label="Car" />
        <Radio value="truck" label="Truck" />
      </RadioGroup>
    </>
  );
};

const ProductSelect = () => {
  const { value, dirty } = useFieldState('type');
  const { clearValue } = useFieldApi('product');

  const opts = useMemo(() => options[value] || [], [value]);

  useEffect(
    () => {
      if (dirty) clearValue();
    },
    [value]
  );

  return (
    <Select field="product" label="Product" disabled={!value}>
      <option value="" disabled>
        - Select -
      </option>
      {opts.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

const DependentFields = () => (
  <Form>
    <CarOrTruck />
    <ProductSelect />
    <button type="submit">Submit</button>
    <Debug values />
    <DebugField name="type" value dirty />
    <DebugField name="product" value dirty />
  </Form>
);
```
