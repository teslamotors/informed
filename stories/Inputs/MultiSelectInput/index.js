import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import Code from '../../utils/Code';

import { Form, Select, Option } from '../../../src';

const MultiSelectInput = () => (
  <Form id="select-colors-form">
    {({ formState }) => (
      <div>
        <label>
          Colors:
          <Select
            field="colors"
            id="select-colors"
            multiple
            style={{ height: '100px', width: '200px' }}>
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="orange">Orange</Option>
            <Option value="purple">Purple</Option>
          </Select>
        </label>
        <button type="submit">Submit</button>
        <label>Values:</label>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs(readme, MultiSelectInput);
