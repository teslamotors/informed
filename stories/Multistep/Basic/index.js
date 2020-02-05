import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text, useFormApi, useFormState } from '../../../src';

const validate = (value) => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
};

const Step1 = ({ next }) => {
  return (
    <div>
      <label>
        Please enter your first name:
        <Text field="first" validate={validate} keepState step={0} />
      </label>
      <button type="button" onClick={next}>Next</button>
    </div>
  );
};

const Step2 = ({ back, next }) => {
  return (
    <div>
      <label>
        Please enter your last name:
        <Text field="last" validate={validate} keepState step={1} />
      </label>
      <button type="button" onClick={next}>Next</button>
      <button type="button" onClick={back}>Back</button>
    </div>
  );
};

const Step3 = ({ back }) => {
  return (
    <div>
      <label>
        Please enter your favorite color:
        <Text field="color" validate={validate} keepState step={2} />
      </label>
      <button type="button" onClick={back}>Back</button>
      <button type="submit" >Submit</button>
    </div>
  );
};

const Step = () => {

  const { next, back } = useFormApi();
  const { step } = useFormState();

  if (step === 0) return <Step1 next={next} />;
  if (step === 1) return <Step2 next={next} back={back} />;
  if (step === 2) return <Step3 back={back} />;

};

const Basic = () => (
  <div>
    <Form id="basic-form">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <Step />
        </div>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <FormState errors step />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, Basic);
