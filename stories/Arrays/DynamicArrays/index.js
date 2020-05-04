import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text, ArrayField } from '../../../src';

const DynamicArraysContent = () => {
  return (
    <div>
      <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: '1rem' }}>
            <h5>You:</h5>
            <label>
              Your Name: <Text field="name" />
            </label>
            <h5>Siblings:</h5>
            <ArrayField field="siblings">
              {({ add, fields, reset }) => (
                <>
                  <button onClick={add} type="button">
                    Add Sibling
                  </button>
                  <button onClick={reset} type="button">
                    Reset Siblings
                  </button>
                  {fields.map(({ field, key, remove }, i) => (
                    <label key={key}>
                      Sibling {i}:<Text field={field} />
                      <button type="button" onClick={remove}>
                        Remove
                      </button>
                    </label>
                  ))}
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

const DynamicArraysContent2 = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Form>
        {show ? (
          <ArrayField field="siblings" keepState>
            {({ add, fields }) => (
              <>
                <button onClick={add} type="button">
                  Add Sibling
                </button>
                {fields.map(({ field, key, remove }, i) => (
                  <label key={key}>
                    Sibling {i}:<Text field={`${field}.value`} keepState />
                    <Text field={`${field}.mode`} keepState />
                    <button type="button" onClick={remove}>
                      Remove
                    </button>
                  </label>
                ))}
              </>
            )}
          </ArrayField>
        ) : null}
        <button type="submit">Submit</button>
        <FormState />
      </Form>
      <button
        onClick={() => {
          setShow(prev => !prev);
        }}>
        ShowHide
      </button>
    </div>
  );
};

const DynamicArraysContent3 = () => {
  return (
    <div>
      <Form>
        <ArrayField field="siblings" keepState>
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:<Text field={field} keepState />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField>
        <button type="submit">Submit</button>
        <FormState />
      </Form>
    </div>
  );
};

const DynamicArrays = () => (
  <DynamicArraysContent />
  // <DynamicArraysContent2 />
  // <DynamicArraysContent3 />
);

export default withDocs(readme, DynamicArrays);
