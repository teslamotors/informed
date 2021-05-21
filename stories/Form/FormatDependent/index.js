import React, { useEffect } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import {
  Form,
  RadioGroup,
  Radio,
  Select,
  FormState,
  useFieldState,
  useFieldApi
} from '../../../src';

const CarOrTruck = () => {
  return (
    <>
      <label>Would you like a car or truck?</label>
      <RadioGroup field="type" label="Would you like a car or truck?">
        <label>
          Car <Radio value="car" />
        </label>
        <label>
          Truck <Radio value="truck" />
        </label>
      </RadioGroup>
    </>
  );
};

const options = {
  car: [
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
  const { reset } = useFieldApi('product');

  const opts = options[value] || [];

  useEffect(
    () => {
      if (dirty) {
        // console.log('EFFECT', value);
        reset();
      }
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
    <FormState values />
  </Form>
);

export default withDocs(readme, DependentFields);
