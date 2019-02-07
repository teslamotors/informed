import React from 'react';
import readme from './README.md';
import withDocs from '../../utils/withDocs';

import Code from '../../utils/Code';

import { Form, Text } from '../../../src';

const Intro = () => (
  <Form id="syntax-form">
    {({ formState }) => (
      <div>
        <label>Username:<Text field="username"/></label>
        <label>Friend[0]:<Text field="friends[0]"/></label>
        <label>Siblings.1:<Text field="siblings.1"/></label>
        <label>Siblings['2']<Text field="siblings['2']"/></label>
        <label>Parents[0].name:<Text field="parents[0].name"/></label>
        <button type="submit">Submit</button>
        <label>Values:</label>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs(readme, Intro);
