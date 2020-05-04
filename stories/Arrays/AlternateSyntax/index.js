import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text, ArrayField } from '../../../src';

const ArrayFieldExample = () => (
  <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '1rem' }}>
        <h5>You:</h5>
        <label>
          Your Name: <Text field="name" />
        </label>
        <h5>Siblings:</h5>
        <ArrayField field="siblings">
          {({ add, reset }) => (
            <>
              <button type="button" onClick={add}>
                Add Sibling
              </button>
              <button onClick={reset} type="button">
                Reset Siblings
              </button>
              <ArrayField.Items>
                {({ remove, field, index }) => (
                  <label>
                    Sibling {index}:<Text field={field} />
                    <button type="button" onClick={remove}>
                      Remove
                    </button>
                  </label>
                )}
              </ArrayField.Items>
            </>
          )}
        </ArrayField>
        <br />
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: 2 }}>
        <FormState values />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, ArrayFieldExample);
