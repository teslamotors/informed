import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Checkbox, Relevant, Debug } from '../../../src';

const Example = () => {
  const [show, setShow] = useState(true);

  const toggle = () => setShow(prev => !prev);

  return (
    <Form>
      {show ? (
        <Input
          name="name"
          label="Name:"
          defaultValue="Hello"
          minLength={10}
          keep={{ value: true }}
        />
      ) : null}
      <button type="button" onClick={toggle}>
        {show ? 'Hide' : 'Show'}
      </button>
      <button type="submit">Submit</button>
      <Debug values errors />
    </Form>
  );
};

export default withDocs(readme, Example);
