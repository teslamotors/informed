import React from 'react';
import readme from './README.md';
import withDocs from '../../utils/withDocs';

import { Form, Input, Debug } from '../../../src';

const Intro = () => (
  <Form>
    <div>
      <Input name="username" label="Username:" />
      <Input name="friends[0]" label="Friend[0]" />
      <Input name="siblings.1" label="Siblings.1" />
      <Input name="siblings['2']" label="Siblings['2']" />
      <Input name="parents[0].name" label="Parents[0].name:" />
      <button type="submit">Submit</button>
      Values:
      <Debug values />
    </div>
  </Form>
);

export default withDocs(readme, Intro);
