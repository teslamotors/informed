import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const mask = value => (value != null ? value.toUpperCase() : value);

const Mask = () => (
  <Form>
    <div>
      <label>
        First name:
        <Input field="name" mask={mask} maintainCursor />
      </label>
      <button type="submit">Submit</button>
      <Debug />
    </div>
  </Form>
);

export default withDocs(readme, Mask);
