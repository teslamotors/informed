import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text, ArrayField } from '../../../src';

const DynamicArraysContent = () => {

  return (
    <div>
      <Form>
        <ArrayField field="sibling">
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label htmlFor={i} key={key}>
                  Sibling {i}:
                  <Text field={field} id={i} />
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
);

export default withDocs(readme, DynamicArrays);
