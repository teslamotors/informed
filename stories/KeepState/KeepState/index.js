import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const Example = () => {
  const [show, setShow] = useState(true);

  const toggle = () => setShow(prev => !prev);

  return (
    <Form>
      {show ? <Input name="name1" label="Name:" /> : null}
      {show ? <Input name="name2" label="Name:" keepState /> : null}
      <button type="button" onClick={toggle}>
        {show ? 'Hide' : 'Show'}
      </button>
      <Debug values />
    </Form>
  );
};

export default withDocs(readme, Example);
