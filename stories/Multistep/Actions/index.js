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

const Info = () => {
  const { next } = useMultistepApi();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const doSomething = ({ values }) => {
    const { first } = values;
    return new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        // Simulate username check
        if (['joe', 'tanner', 'billy', 'bob'].includes(first)) {
          setLoading(false);
          const error = 'That name is taken';
          setError(error);
          return reject(error);
        }
        // Simulate request faulure
        if (first === 'reject') {
          setLoading(false);
          const error = 'Unable to validate name.';
          setError(error);
          return reject(new Error(error));
        }
        setLoading(false);
        setError();
        return resolve();
      }, 2000);
    });
  };

  return (
    <Multistep.Step step="info">
      <Input
        name="first"
        label="First Name"
        required
        // asyncValidate={asyncValidate}
      />
      <Input name="last" label="First Name" required />
      <button type="button" onClick={() => next(doSomething)}>
        Next
      </button>
      {loading ? <div className="loader">Loading...</div> : null}
      {error ? <div style={{ color: 'red' }}>Error: {error}</div> : null}
    </Multistep.Step>
  );
};

const Favorite = () => {
  const { next, previous } = useMultistepApi();
  return (
    <Multistep.Step step="favorite">
      <Input name="color" label="Favorite Color:" required />
      <Input name="food" label="Favorite Food:" required />
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        <button type="button" onClick={next}>
          Next
        </button>
      </div>
    </Multistep.Step>
  );
};

const Additional = () => {
  const { previous } = useMultistepApi();
  return (
    <Multistep.Step step="additional">
      <Input name="height" label="Height:" required />
      <Input name="weight" label="Weight:" required />
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </div>
    </Multistep.Step>
  );
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
