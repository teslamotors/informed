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
    <Multistep.Step step="info" next="allergies">
      <label>
        Please enter your first name:
        <Input name="first" required />
      </label>
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
      <Checkbox
        name="allergic"
        required
        label="Are you allergic to peanut butter?:"
      />
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

  // Only relevant if the person is allergic
  const relevant = ({ formState }) => formState.values.allergies?.allergic;

  return (
    <Multistep.Step step="pen" relevant={relevant}>
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
    <Multistep.Step
      step="color"
      next="dog"
      previous={values => (values.allergic ? 'epipen' : 'allergies')}>
      <label>
        <Input
          name="color"
          required
          label="Please enter your favorite color:"
        />
      </label>
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
    <Multistep.Step step="dog" previous="color">
      <label>
        Do you have a dog? <Checkbox name="hasDog" />
      </label>
      <Relevant when={({ values }) => values.hasDog}>
        <label>
          Whats your dogs name?:
          <Input
            name="dogName"
            required
            relevant={({ formState }) => formState.values.hasDog}
          />
        </label>
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

      <Form id="basic-form">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <Multistep initialStep="info" multistepApiRef={multistepApiRef}>
              <div
                style={{
                  border: 'solid 1px',
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
          <div style={{ flex: 2, minWidth: '300px' }}>
            <Debug errors values />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default withDocs(readme, Basic);
