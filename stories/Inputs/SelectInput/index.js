import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Select, Option } from '../../../src';

const SelectInput = () => (
  <Form id="select-status-form">
    {({ formState }) => (
      <div>
        <label htmlFor="select-status">Relationship status:</label>
        <Select field="status" id="select-status">
          <Option value="" disabled>
            Select One...
          </Option>
          <Option value="single">Single</Option>
          <Option value="relationship">Relationship</Option>
          <Option value="complicated">Complicated</Option>
        </Select>
        <button type="submit">Submit</button>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs(readme, SelectInput);
