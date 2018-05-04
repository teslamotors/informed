import React from 'react';
import Code from '../utils/Code';
import { withDocs }  from 'storybook-readme';
import readme from './README.md';

import { Form } from '../../src';

const Basic = () => (
  <div>
    <Form>
      {formApi => (
        <form onSubmit={formApi.submitForm} id="form1">
          <label htmlFor="hello">Hello World</label>
          {/* <Text field="hello" id="hello" /> */}
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </Form>
  </div>
);

export default withDocs( readme, Basic );
