import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const onSubmit = ({ values }) => {
  window.alert(JSON.stringify(values, null, 2));
};

const Basic = () => (
  <Form onSubmit={onSubmit} autocomplete="off">
    <Input name="name" label="First name:" />
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);

export default withDocs(readme, Basic);
