import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Input, ArrayField } from '../../../src';

const DynamicArraysContent = () => {
  return (
    <div>
      <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: '1rem' }}>
            <h5>You:</h5>
            <label>
              Your Name: <Input name="name" />
            </label>
            <h5>Siblings:</h5>
            <ArrayField name="siblings">
              {({ add, reset }) => (
                <>
                  <button onClick={add} type="button">
                    Add Sibling
                  </button>
                  <button onClick={reset} type="button">
                    Reset Siblings
                  </button>
                  <ArrayField.Items>
                    {({ remove, name }) => (
                      <>
                        <Input label="Name" name={name} />
                        <button type="button" onClick={remove}>
                          Remove
                        </button>
                      </>
                    )}
                  </ArrayField.Items>
                </>
              )}
            </ArrayField>
            <button type="submit">Submit</button>
          </div>
          <div style={{ flex: 2 }}>
            <FormState values />
          </div>
        </div>
      </Form>
    </div>
  );
};

const DynamicArrays = () => <DynamicArraysContent />;

export default withDocs(readme, DynamicArrays);
