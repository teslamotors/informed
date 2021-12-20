import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug, Checkbox } from '../../../src';

const RelevanceProp = () => (
  <Form>
    <Input name="name" label="First name:" />
    <Checkbox name="married" label="Are you married?" />
    <Input
      name="spouse"
      label="Spouse name:"
      relevant={({ formState }) => formState.values.married}
    />
    <Debug values />
  </Form>
);

export default withDocs(readme, RelevanceProp);
