import React, { useState, useRef } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import {
  Form,
  Text,
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
  Relevant
} from '../../../src';

const validate = value =>
  value == null ? 'This field is required' : undefined;

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
        <Text field="first" validate={validate} />
      </label>
      <button type="button" onClick={next}>
        Next
      </button>
    </Multistep.Step>
  );
};

const Allergic = ({ state }) => {
  const { next, back } = useMultistepApi();
  return (
    <Multistep.Step
      step="allergies"
      next={values => {
        // if (state % 2 === 0) {
        //   return 'info';
        // }
        return values.allergic ? 'epipen' : 'color';
      }}
      previous="info">
      <label>
        Are you alergic to penut butter?:
        <Checkbox field="allergic" validate={validate} />
      </label>
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={back}>
        Back
      </button>
    </Multistep.Step>
  );
};

const EpiPen = () => {
  const { next, back } = useMultistepApi();

  // Only relevant if the person is allergic
  const relevant = ({ allergic }) => allergic;

  return (
    <Multistep.Step
      step="epipen"
      next="color"
      previous="allergies"
      relevant={relevant}>
      <label>
        Do you have an epipen?:
        <RadioGroup field="epipen" validate={validate}>
          <label>
            Yes <Radio value="yes" />
          </label>
          <label>
            No <Radio value="no" />
          </label>
        </RadioGroup>
        {/* <ArrayField field="siblings" keepState>
          {({ add, fields }) => (
            <>
              <button onClick={add} type="button">
                Add Sibling
              </button>
              {fields.map(({ field, key, remove }, i) => (
                <label key={key}>
                  Sibling {i}:
                  <Text field={`${field}.name`} keepState/>
                  <Text field={`${field}.age`} keepState/>
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </label>
              ))}
            </>
          )}
        </ArrayField> */}
      </label>
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={back}>
        Back
      </button>
    </Multistep.Step>
  );
};

const Color = () => {
  const { back, next } = useMultistepApi();

  return (
    <Multistep.Step
      step="color"
      next="dog"
      previous={values => (values.allergic ? 'epipen' : 'allergies')}>
      <label>
        Please enter your favorite color:
        <Text field="color" validate={validate} />
      </label>
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={back}>
        Back
      </button>
      <button type="submit">Submit</button>
    </Multistep.Step>
  );
};

const Dog = () => {
  const { back } = useMultistepApi();

  return (
    <Multistep.Step step="dog" previous="color">
      <label>
        Do you have a dog? <Checkbox field="hasDog" />
      </label>
      <Relevant when={({ values }) => values.hasDog}>
        <label>
          Whats your dogs name?:
          <Text
            field="dogName"
            validate={validate}
            // keepState
            relevant={values => values.hasDog}
          />
        </label>
      </Relevant>
      <button type="button" onClick={back}>
        Back
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
            <FormState errors step />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default withDocs(readme, Basic);
