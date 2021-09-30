import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, ArrayField, Debug } from '../../../src';

const ArrayFieldExample = () => (
  <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '1rem' }}>
        <h5>You:</h5>
        <Input name="name" label="Your Name:" />
        <h5>Siblings:</h5>
        <ArrayField name="siblings">
          {({ add, reset }) => (
            <>
              <button type="button" onClick={add}>
                Add Sibling
              </button>
              <button onClick={reset} type="button">
                Reset Siblings
              </button>
              <ArrayField.Items>
                {({ remove, name, index }) => (
                  <>
                    <Input name={name} label={`Sibling ${index}:`} />
                    <button type="button" onClick={remove}>
                      Remove
                    </button>
                  </>
                )}
              </ArrayField.Items>
            </>
          )}
        </ArrayField>
        <br />
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: 2, marginLeft: '3rem' }}>
        <Debug values />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, ArrayFieldExample);
