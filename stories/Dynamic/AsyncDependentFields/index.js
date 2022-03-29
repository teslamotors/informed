import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Select, useFieldState, useFieldApi, Debug } from '../../../src';
import { useEffect } from 'react';

const onSubmit = ({ values }) => console.log(values);

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

const gatherData = async value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const opts = options[value];

      resolve(opts);
    }, 3000);
  });
};

const ProductSelect = () => {
  const { data } = useFieldState('type');
  const { clearValue } = useFieldApi('product');

  useEffect(
    () => {
      clearValue();
    },
    [data]
  );

  return (
    <Select field="product" label="Product">
      {data &&
        data.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </Select>
  );
};

function Example() {
  return (
    <Form onSubmit={onSubmit} autocomplete="off">
      <Select
        field="type"
        label="Would you like a car or truck?"
        gatherData={gatherData}
        gatherOnMount
        initialValue="car">
        <option value="" disabled>
          -Select-
        </option>
        <option value="car">Car</option>
        <option value="truck">Truck</option>
      </Select>
      <ProductSelect />
      <button type="submit">Submit</button>
      <Debug values gathering data />
    </Form>
  );
}

export default withDocs(readme, Example);
