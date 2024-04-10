import { Debug, DebugField, useFieldState, useFieldApi } from 'informed';
import { useEffect, useMemo } from 'react';
import { Form, Button, Option, Select } from 'YourComponents';

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

// function for gathering asynchronous options ( this is dummy function that simulates api call )
const gatherData = async value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const opts = options[value];

      resolve(opts);
    }, 3000);
  });
};

const TypeSelect = () => {
  const { gathering } = useFieldState('type');

  return (
    <>
      <Select
        field="type"
        label="Would you like a car or truck?"
        gatherData={gatherData}
        gatherOnMount
        initialValue="car">
        <Option key="car">Car</Option>
        <Option key="truck">Truck</Option>
      </Select>
      <strong>{gathering ? 'loading...' : null}</strong>
    </>
  );
};

const ProductSelect = () => {
  const { data = [], value } = useFieldState('type');
  const { dirty } = useFieldState('product');
  const { clearValue } = useFieldApi('product');

  // Clear out old product if the type changed
  useEffect(
    () => {
      clearValue();
    },
    [value]
  );

  // Generate new options
  const options = useMemo(
    () => {
      return data.map(v => ({
        value: v.value,
        label: v.value
      }));
    },
    [data]
  );

  return <Select name="product" label="Product" options={options} />;
};

const Example = () => (
  <Form>
    <TypeSelect />
    <ProductSelect />
    <Button type="submit">Submit</Button>
    <Debug values data gathering />
    <DebugField name="address" gathering data value error />
  </Form>
);

export default Example;
