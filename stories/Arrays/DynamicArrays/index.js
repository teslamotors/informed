import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug, ArrayField, useFormApi } from '../../../src';

const Reset = () => {
  const formApi = useFormApi();
  return (
    <button type="button" onClick={formApi.reset}>
      Reset Form
    </button>
  );
};

const DynamicArraysContent = () => {
  return (
    <div>
      {/* <Form
        initialValues={{
          siblings: [
            { name: 'foo', last: 'a' },
            { name: 'bar', last: 'b' },
            { name: 'baz', last: 'c' }
          ]
        }}> */}
      <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: '1rem' }}>
            <Reset />
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
                        {/* <Input label="Name" name={`${name}.name`} />
                        <Input label="Name" name={`${name}.last`} /> */}
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
          <div style={{ flex: 2, marginLeft: '3rem' }}>
            <Debug values />
          </div>
        </div>
      </Form>
    </div>
  );
};

const DynamicArrays = () => <DynamicArraysContent />;

export default withDocs(readme, DynamicArrays);
