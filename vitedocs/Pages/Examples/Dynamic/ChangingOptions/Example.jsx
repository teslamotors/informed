import { Debug, DebugField, useFieldState, useFieldApi } from 'informed';
import { useMemo, useEffect } from 'react';
import { Form, Select, Option, Radio, RadioGroup } from 'YourComponents';

const options = {
  car: [
    {
      value: '',
      label: '- Select -',
      disabled: true
    },
    {
      value: 'ms',
      label: 'Model S'
    },
    {
      value: 'm3',
      label: 'Model 3'
    },
    {
      value: 'mx',
      label: 'Model X'
    },
    {
      value: 'my',
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
    <RadioGroup
      name="type"
      initialValue="car"
      label="Would you like a car or truck?">
      <Radio value="car" label="Car" />
      <Radio value="truck" label="Truck" />
    </RadioGroup>
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
      {opts.map(option => (
        <Option key={option.value}>{option.label}</Option>
      ))}
    </Select>
  );
};

const Example = () => (
  <Form>
    <CarOrTruck />
    <ProductSelect />
    <button type="submit">Submit</button>
    <Debug label="Form State" values />
    <DebugField label="Type Field State" name="type" value dirty />
    <DebugField label="Product Field State" name="product" value dirty />
  </Form>
);

export default Example;
