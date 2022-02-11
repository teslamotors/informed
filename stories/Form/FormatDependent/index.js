import React, { useEffect, useMemo } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import {
  Form,
  RadioGroup,
  Radio,
  Select,
  Debug,
  useFieldState,
  useFieldApi,
  DebugField
} from '../../../src';

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
    <Select field="product" label="Product" disabled={!value} options={opts} />
  );
};

const DependentFields = () => (
  <Form>
    <CarOrTruck />
    <ProductSelect />
    <button type="submit">Submit</button>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h5>Form State:</h5>
        <Debug values />
      </div>
      <div style={{ flex: 1, marginLeft: '2rem' }}>
        <h5>Type State:</h5>
        <DebugField name="type" value dirty />
      </div>
      <div style={{ flex: 1, marginLeft: '2rem' }}>
        <h5>Product State:</h5>
        <DebugField name="product" value dirty />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, DependentFields);
