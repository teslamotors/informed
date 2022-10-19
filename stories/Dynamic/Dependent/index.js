import React, { useEffect, useMemo } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, Debug, useFieldState, useFieldApi } from '../../../src';

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

export default withDocs(readme, DependentFields);
