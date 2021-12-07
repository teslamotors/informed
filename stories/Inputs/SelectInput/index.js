import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Select, Option, Debug } from '../../../src';

const SelectInput = () => (
  <Form>
    <Select name="status" label="Relationship status:">
      <Option value="" disabled>
        Select One...
      </Option>
      <Option value="single">Single</Option>
      <Option value="relationship">Relationship</Option>
      <Option value="complicated">Complicated</Option>
    </Select>
    <button type="submit">Submit</button>
    <Debug values />
  </Form>
);

export default withDocs(readme, SelectInput);
