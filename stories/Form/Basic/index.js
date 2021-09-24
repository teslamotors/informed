import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const onSubmit = values => {
  window.alert(JSON.stringify(values, null, 2));
};

const Basic = () => (
  <div>
    <Form onSubmit={onSubmit} autocomplete="off">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <Input name="name" label="First name:" />
          <button type="submit">Submit</button>
        </div>
        <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
          <Debug values />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, Basic);
