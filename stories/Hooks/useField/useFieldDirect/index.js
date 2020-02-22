import React from 'react';
import Code from '../../../utils/Code';
import withDocs from '../../../utils/withDocs';
import readme from './README.md';
import { Form, useField } from '../../../../src';

const Fields = () => {

  const { informed: informName } = useField({ field: 'name', fieldType: 'text' });
  const { informed: informAge } = useField({ field: 'age', fieldType: 'number' });
  const { informed: informStatus } = useField({ field: 'status', fieldType: 'select' });
  const { informed: informColors } = useField({ field: 'colors', fieldType: 'select', multiple: true });
  const { informed: informAuthorize } = useField({ field: 'authorize', fieldType: 'checkbox' });

  return (
    <>
      <label>
        First name: <input {...informName} />
      </label>
      <label>
        Age: <input {...informAge} type="number" />
      </label>
      <label>
        Relationship status:
        <select {...informStatus}>
          <option value="" disabled>
            Select One...
          </option>
          <option value="single">Single</option>
          <option value="relationship">Relationship</option>
          <option value="complicated">Complicated</option>
        </select>
      </label>
      <label>
        Colors:
        <select
          {...informColors}
          style={{ height: '100px', width: '200px' }}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
        </select>
      </label>
      <label>
        Authorize <input type="checkbox" {...informAuthorize} />
      </label>
    </>
  );
};

const FromScratch = () => (
  <div>
    <Form id="custom-form-2">
      {({ formApi, formState }) => (
        <React.Fragment>
          <Fields />
          <button type="submit">Submit</button>
          <label>Values:</label>
          <Code language="language-js">
            {JSON.stringify(formState.values, null, 2)}
          </Code>
          <label>Touched:</label>
          <Code language="language-js">
            {JSON.stringify(formState.touched, null, 2)}
          </Code>
        </React.Fragment>
      )}
    </Form>
  </div>
);

export default withDocs(readme, FromScratch);
