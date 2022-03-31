import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Select, useConditional, Debug } from '../../../src';

const CarSelect = () => {
  const evaluate = ({ formState, formApi }) => {
    if (!formState.values.age || formState.values.age < 16) {
      formApi.clearValue('car');
      return { disabled: true };
    }
    return { disabled: false };
  };

  const { disabled } = useConditional({
    evaluate,
    evaluateWhen: ['age']
  });

  return (
    <Select name="car" label="Car" initialValue="ms" disabled={disabled}>
      <option value="ms">Model S</option>
      <option value="m3">Model 3</option>
      <option value="mx">Model X</option>
      <option value="my">Model Y</option>
    </Select>
  );
};

const ConditionalProps = () => (
  <Form>
    <Input name="age" type="number" label="Age" />
    <CarSelect />
    <Debug values />
  </Form>
);

export default withDocs(readme, ConditionalProps);
