import React, { useState, useRef } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import {
  Form,
  Input,
  useFormApi,
  useMultistepApi,
  useMultistepState,
  useFormState,
  useFieldState,
  //FormState,
  ArrayField,
  Multistep,
  Checkbox,
  RadioGroup,
  Radio,
  Relevant,
  Debug
} from '../../../src';

const asyncValidate = username => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate username check
      if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
        return resolve('That username is taken');
      }
      // Simulate request faulure
      if (username === 'reject') {
        return reject(new Error('Unable to validate username.'));
      }
      return resolve();
    }, 2000);
  });
};

const doSomething = ({ values }) => {
  const { first } = values;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate username check
      if (['joe', 'tanner', 'billy', 'bob'].includes(first)) {
        return reject('That username is taken');
      }
      // Simulate request faulure
      if (first === 'reject') {
        return reject(new Error('Unable to validate username.'));
      }
      return resolve();
    }, 2000);
  });
};

function capitalize(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : string;
}

const Info = () => {
  const { next, getCurrentStep } = useMultistepApi();
  const { nextStep } = useMultistepState();
  return (
    <Multistep.Step step="info">
      <Input
        name="first"
        label="First Name"
        required
        // asyncValidate={asyncValidate}
      />
      <Input name="last" label="First Name" required />
      {/* <button type="button" onClick={() => next(doSomething)}> */}
      <button type="button" onClick={next}>
        {capitalize(nextStep)}
      </button>
      {/* <button type="button" onClick={() => console.log(getCurrentStep())}>
        Print
      </button> */}
    </Multistep.Step>
  );
};

const Favorite = () => {
  const { next, previous, getCurrentStep } = useMultistepApi();
  const { nextStep, previousStep } = useMultistepState();
  return (
    <Multistep.Step step="favorite">
      <Input name="color" label="Favorite Color:" required />
      <Input name="food" label="Favorite Food:" required />
      <div className="button-group">
        <button type="button" onClick={previous}>
          {capitalize(previousStep)}
        </button>
        <button type="button" onClick={next}>
          {capitalize(nextStep)}
        </button>
        {/* <button type="button" onClick={() => console.log(getCurrentStep())}>
          Print
        </button> */}
      </div>
    </Multistep.Step>
  );
};

const Additional = () => {
  const { previous } = useMultistepApi();
  const { previousStep } = useMultistepState();
  return (
    <Multistep.Step step="additional">
      <Input name="height" label="Height:" required />
      <Input name="weight" label="Weight:" required />
      <div className="button-group">
        <button type="button" onClick={previous}>
          {capitalize(previousStep)}
        </button>
        <button type="submit">Submit</button>
      </div>
    </Multistep.Step>
  );
};

const StepIndicator = () => {
  const { current } = useMultistepState();

  return <h3>{capitalize(current)}</h3>;
};

const Basic = () => {
  return (
    <div>
      <Form autocomplete="off">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <Multistep>
              <div
                style={{
                  padding: '10px',
                  marginBottom: '10px'
                }}>
                <StepIndicator />
                <Info />
                <Favorite />
                <Additional />
              </div>
            </Multistep>
          </div>
          <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
            <Debug />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default withDocs(readme, Basic);
