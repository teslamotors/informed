import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const mask = value => {
  let v = value && value.replace(/\D/g, '').slice(0, 10);
  let offset = 0;
  if (value && v.length >= 5) {
    v = `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
    offset = 2;
  } else if (value && v.length >= 3) {
    v = `${v.slice(0, 2)}/${v.slice(2)}`;
    offset = 1;
  }
  return { value: v, offset };
};

const Mask = () => (
  <Form>
    <div>
      <label>
        Date:
        <Text
          field="date"
          maxLength="10"
          maskWithCursorOffset={mask}
          maintainCursor
        />
      </label>
      <button type="submit">Submit</button>
      <Debug />
    </div>
  </Form>
);

export default withDocs(readme, Mask);
