import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text, ArrayField } from '../../../src';

const DynamicArraysContent = () => {

  return (
    <div>
      <Form initialValues={{ siblings: ['foo', 'bar', 'baz']}}>
        <ArrayField field="siblings" >
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:
                  <Text field={field} />
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

const DynamicArraysContent2 = () => {

  const [show, setShow] = useState(true);

  return (
    <div>
      <Form initialValues={{ siblings: ['foo', 'bar', 'baz']}}>
        { show ? 
          <ArrayField field="siblings">
            {({ add, fields }) => (
              <>
                <button onClick={add} type="button">
                  Add Sibling
                </button>
                {fields.map(({ field, key, remove }, i) => (
                  <label key={key}>
                    Sibling {i}:
                    <Text field={field} removable/>
                    <button type="button" onClick={remove}>
                      Remove
                    </button>
                  </label>
                ))}
              </>
            )}
          </ArrayField> : null 
        }
        <button type="submit">Submit</button>
        <FormState />
      </Form>
      <button onClick={()=>{setShow((prev) => !prev)}}>ShowHide</button>
    </div>
  );
};

const DynamicArraysContent3 = () => {

  return (
    <div>
      <Form >
        <ArrayField field="siblings" keepState>
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:
                  <Text field={field} keepState removable />
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
