import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Select, Option } from '../../../src';

const SelectInput = () => (
  <Form>
    {({ formState }) => (
      <div>
        <label>
          Relationship status:
          <Select field="status">
            <Option value="" disabled>
              Select One...
            </Option>
            <Option value="single">Single</Option>
            <Option value="relationship">Relationship</Option>
            <Option value="complicated">Complicated</Option>
          </Select>
        </label>
        <button type="submit">Submit</button>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs(readme, SelectInput);
