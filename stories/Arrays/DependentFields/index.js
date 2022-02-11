import React, { useMemo, useEffect } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import {
  Form,
  Input,
  Select,
  RadioGroup,
  Radio,
  ArrayField,
  Debug,
  useFieldState,
  useFieldApi,
  DebugField
} from '../../../src';

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
      <RadioGroup name="type">
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

const initialValues = {
  friends: [
    {
      name: 'Joe',
      type: 'truck'
    },
    {
      name: 'Jane',
      type: 'car'
    }
  ]
};

const ArrayFieldExample = () => (
  <Form initialValues={initialValues}>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '1rem' }}>
        <h5>You:</h5>
        <Input name="name" label="Your Name:" />
        <h5>Friends:</h5>
        <ArrayField name="friends">
          {({ add }) => (
            <>
              <button type="button" onClick={add}>
                Add Sibling
              </button>
              <ArrayField.Items>
                {({ remove, name, index }) => (
                  <>
                    <h5>{name}</h5>
                    <Input name="name" label="Name" required />
                    <CarOrTruck />
                    {/* <DebugField name="type" /> */}
                    <ProductSelect />
                    {/* <DebugField name="product" /> */}
                    <button type="button" onClick={remove}>
                      Remove
                    </button>
                  </>
                )}
              </ArrayField.Items>
            </>
          )}
        </ArrayField>
        <br />
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: 2, marginLeft: '3rem' }}>
        <Debug values />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, ArrayFieldExample);
