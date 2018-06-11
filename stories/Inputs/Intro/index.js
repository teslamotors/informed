import React from 'react';
import readme from './README.md';
import withDocs from '../../utils/withDocs';

import Code from '../../utils/Code';

import { Form, Text } from '../../../src';

const Intro = () => (
  <Form id="syntax-form">
    {({ formState }) => (
      <div>
        <label htmlFor="syntax-username">Username:</label>
        <Text field="username" id="syntax-username" />
        <label htmlFor="syntax-friends[0]">Friend[0]:</label>
        <Text field="friends[0]" id="syntax-friends[0]" />
        <label htmlFor="syntax-siblings.1">Siblings.1:</label>
        <Text field="siblings.1" id="syntax-siblings.1" />
        <label htmlFor="syntax-siblings['2']">Siblings['2']</label>
        <Text field="siblings['2']" id="syntax-siblings['2']" />
        <label htmlFor="syntax-parents[0].name">Parents[0].name:</label>
        <Text field="parents[0].name" id="syntax-parents[0].name" />
        <button type="submit">
          Submit
        </button>
        <label>Values:</label>
        <Code language="language-js">
          {JSON.stringify(formState.values, null, 2)}
        </Code>
      </div>
    )}
  </Form>
);

export default withDocs( readme, Intro );
