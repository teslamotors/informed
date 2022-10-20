import React, { useEffect, useMemo } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, Debug, useFieldState, useFieldApi } from '../../../src';

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

export default withDocs(readme, DependentFields);
