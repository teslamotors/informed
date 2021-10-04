import React, { useState, useRef } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import {
  Form,
  Input,
  useFormApi,
  useMultistepApi,
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

/**
 *
 * At any point in time the form is in a state, and the following questions
 * need to be answered
 * 1. What is the next quesion
 * 2. What is the previous quesion
 * 3. Am I a relevant quesion
 *
 * Example
 *
 * Name ------> Allergic( yes ) -------> EpiPen ------> Color
 *                                                        ^
 * Name ------> Allergic( yes ) -------> EpiPen ------> Color
 *                 ^
 * Name ------> Allergic( no )  -------> EpiPen ------> Color
 *                 ^
 * At this point Allertic decides his next is color and epi pen decides he is No longer relevant
 *
 * Name ------> Allergic( no ) ------> Color
 *                 ^
 **/

const Info = () => {
  const { next } = useMultistepApi();
  return (
    <Multistep.Step step="info">
      <Input name="first" label="First Name" required />
      <Input name="last" label="First Name" required />
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
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={previous}>
        Previous
      </button>
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
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={previous}>
        Previous
      </button>
    </Multistep.Step>
  );
};

const Color = () => {
  const { next, previous } = useMultistepApi();

  return (
    <Multistep.Step step="favorite">
      <Input name="color" label="Favorite Color:" required />
      <Input name="food" label="Favorite Food:" required />
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={previous}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </Multistep.Step>
  );
};

const Dog = () => {
  const { previous } = useMultistepApi();

  return (
    <Multistep.Step step="pets" previous="color">
      <Checkbox name="hasDog" label="Do you have a dog?" />
      <Relevant
        when={({ formApi, scope }) => formApi.getValue(`${scope}.hasDog`)}>
        <Input
          name="dogName"
          label="Whats your dogs name?"
          required
          relevant={({ formApi, scope }) => formApi.getValue(`${scope}.hasDog`)}
          // relevant={({ formState }) => formState.values.hasDog}
        />
      </Relevant>
      <button type="button" onClick={previous}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </Multistep.Step>
  );
};

const Buttons = () => {
  const { setCurrent } = useMultistepApi();

  return (
    <div>
      <button type="button" onClick={() => setCurrent('info')}>
        Jump2 Info
      </button>
      <button type="button" onClick={() => setCurrent('allergies')}>
        Jump2 Allergic
      </button>
      <button type="button" onClick={() => setCurrent('epipen')}>
        Jump2 EpiPen
      </button>
      <button type="button" onClick={() => setCurrent('color')}>
        Jump2 Color
      </button>
      <button type="button" onClick={() => setCurrent('dog')}>
        Jump2 Dog
      </button>
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
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <Multistep initialStep="info" multistepApiRef={multistepApiRef}>
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
              <Buttons />
            </Multistep>
          </div>
          <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
            <Debug errors values />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default withDocs(readme, Basic);
