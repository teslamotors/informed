import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text, useArrayField } from '../../../src';

const Siblings = () => {
  const { add, fields } = useArrayField({ field: 'siblings' });

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const UseArrayFieldWrapper = () => {

  return (
    <div>
      <Form initialValues={{ siblings: ['foo', 'bar', 'baz'] }}>
        <Siblings />
        <button type="submit">Submit</button>
        <FormState />
      </Form>
    </div>
  );
};

const UseArrayField = () => (
  <UseArrayFieldWrapper />
);

export default withDocs(readme, UseArrayField);
