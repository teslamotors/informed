import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const onSubmit = ({ modified }) => {
  window.alert(JSON.stringify(modified, null, 2));
};

const Modified = () => (
  <Form
    onSubmit={onSubmit}
    autocomplete="off"
    initialValues={{
      name: 'Joe',
      age: 27
    }}>
    <Input name="name" label="Name:" />
    <Input name="age" type="number" label="Age:" />
    <button type="submit">Submit</button>
    <Debug values modified initialValues />
  </Form>
);

export default withDocs(readme, Modified);
