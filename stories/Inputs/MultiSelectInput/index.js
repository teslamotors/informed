import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Select, Option } from '../../../src';

const MultiSelectInput = () => (
  <Form id="text-form">
    <label htmlFor="select-status">Relationship status:</label>
    <Select field="status" id="select-status" multiple>
      <Option value="" disabled>Select One...</Option>
      <Option value="single">Single</Option>
      <Option value="relationship">Relationship</Option>
      <Option value="complicated">Complicated</Option>
    </Select>
    <button type="submit">
      Submit
    </button>
  </Form>
);

export default withDocs( readme, MultiSelectInput );
