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

const Info = () => {
  const { next } = useMultistepApi();
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
        Next
      </button>
    </Multistep.Step>
  );
};

const Allergic = () => {
  const { next, previous } = useMultistepApi();
  return (
    <Multistep.Step step="allergies">
      <h5>Are you allergic to any of the following?</h5>
      <Checkbox name="peanuts" label="Peanut butter?:" />
      <Checkbox name="shellfish" label="Shellfish:" />
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

const EpiPen = () => {
  const { next, previous } = useMultistepApi();

  // Only relevant if the person is allergic to something
  const relevant = ({ formState }) => {
    const { allergies } = formState.values;
    return allergies && Object.values(allergies).some(a => !!a);
  };

  return (
    <Multistep.Step step="treatment" relevant={relevant}>
      <label>
        Do you have an epipen?:
        <RadioGroup name="epipen" required>
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>
      </label>
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

const Color = () => {
  const { next, previous } = useMultistepApi();
  const { nextStep } = useMultistepState();

  return (
    <Multistep.Step step="favorite">
      <Input name="color" label="Favorite Color:" required />
      <Input name="food" label="Favorite Food:" required />
      <Checkbox name="pet" label="Do you have a pet?" />
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        {nextStep ? (
          <button type="button" onClick={next}>
            Next
          </button>
        ) : null}
        {!nextStep ? <button type="submit">Submit</button> : null}
      </div>
    </Multistep.Step>
  );
};

const Dog = () => {
  const { previous } = useMultistepApi();

  // Only relevant if the person is has a pet
  const relevant = ({ formState }) => {
    const { favorite } = formState.values;
    return favorite?.pet;
  };

  return (
    <Multistep.Step step="pets" previous="color" relevant={relevant}>
      <Checkbox name="hasDog" label="Do you have a dog?" />
      <Relevant
        when={({ formApi, scope }) => formApi.getValue(`${scope}.hasDog`)}>
        <Input name="name" label="Whats your dogs name?" required />
      </Relevant>
      <Checkbox name="hasCat" label="Do you have a cat?" />
      <Input
        name="name"
        label="Whats your cats name?"
        required
        relevant={({ formApi, scope }) => formApi.getValue(`${scope}.hasCat`)}
      />
      <div className="button-group">
        <button type="button" onClick={previous}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </div>
    </Multistep.Step>
  );
};

const StepperStep = ({ step, label, number, isComplete }) => {
  const { current } = useMultistepState();
  const { setCurrent } = useMultistepApi();
  const state = useFieldState(step);

  const active = current === step ? 'active' : '';
  const complete = isComplete(state) ? 'complete' : '';

  return (
    <div className="stepper-item">
      <div
        className={`stepper-counter ${active} ${complete}`}
        onClick={() => setCurrent(step)}>
        {number}
      </div>
      <div className="step-name">{label}</div>
    </div>
  );
};

const Stepper = () => {
  return (
    <div className="stepper-wrapper">
      <StepperStep
        label="Info"
        step="info"
        number="1"
        isComplete={s => s.value?.first && s.value?.last}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Allergies"
        step="allergies"
        number="2"
        isComplete={s => s.touched}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Treatment"
        step="treatment"
        number="3"
        isComplete={s => s.value?.epipen != null}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Favorite"
        step="favorite"
        number="4"
        isComplete={s => s.value?.color && s.value?.food}
      />
      <div className="stepper-divider" />
      <StepperStep
        label="Pets"
        step="pets"
        number="5"
        isComplete={s => s.value?.name}
      />
    </div>
  );
};

const Basic = () => {
  const [state, setState] = useState(0);
  const multistepApiRef = useRef();

  // const initialValues = {
  //   first: 'Joe',
  //   allergic: true,
  //   epipen: 'yes'
  // };

  // const initialValues = {
  //   info: {
  //     first: 'Joe',
  //     last: 'Puzzo'
  //   },
  //   allergies: {
  //     peanuts: false
  //   },
  //   treatment: {
  //     epipen: 'yes'
  //   }
  // }

  return (
    <div>
      {/* {state}
      <button type="button" onClick={() => setState(prev => prev + 1)}>
        Click Me
      </button> */}
      {/* <button
        type="button"
        onClick={() => multistepApiRef.current.setCurrent('color')}>
        Click Me
      </button> */}

      <Form autocomplete="off">
        <div>
          <div>
            {/* initialStep="info" */}
            <Multistep
              // initialStep="allergies"
              multistepApiRef={multistepApiRef}>
              <Stepper />
              <div
                style={{
                  // border: 'solid 1px',
                  padding: '10px',
                  marginBottom: '10px'
                }}>
                <Info />
                <Allergic state={state} />
                <EpiPen />
                <Color />
                <Dog />
              </div>
            </Multistep>
          </div>
          <div>
            <Debug />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default withDocs(readme, Basic);
