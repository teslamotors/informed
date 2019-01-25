import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text, ArrayField, useFormApi } from '../../../src';

const validate = value => {
  return value != 'valid' ? 'Value must be valid ;)' : null;
};

const Tester = () => {
  const formApi = useFormApi();
  return (
    <button type="button" onClick={() => formApi.setValue('valid', 'valid')}>
      Set valid to "valid"
    </button>
  );
};

const DynamicArraysContent = () => {

  return (
    <div>
      <Form>
       
        <label htmlFor="valid" key="valid">
          Valid:
          <Text field="valid" id="valid" validate={validate} />
        </label>
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
        <Tester />
      </Form>
      <br />
      <label htmlFor="test" key="test">
        Test:
        {/* <Text field="test" id="test" /> */}
      </label>
      <label htmlFor="valid2" key="valid2">
        Valid2:
        {/* <Text field="valid2" id="valid2" validate={validate} /> */}
      </label>
    </div>
  );
};

const DynamicArrays = () => (
  <DynamicArraysContent />
);

export default withDocs(readme, DynamicArrays);
