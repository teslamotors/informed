import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import {
  Form,
  Text,
  useFormApi,
  useFormState,
  useFieldState,
  //FormState,
  ArrayField,
  Checkbox,
  RadioGroup,
  Radio
} from '../../../src';


const validate = value => value == null ? 'This field is required' : undefined;

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


const FirstName = () => {
  const { next } = useFormApi();
  const NextComponent = Allergic;
  return (
    <div>
      <label>
        Please enter your first name:
        <Text field="first" validate={validate} keepState />
      </label>
      <button type="button" onClick={() => next(NextComponent)}>Next</button>
    </div>
  );
};

const Allergic = () => {
  const { next, back } = useFormApi();
  const { value } = useFieldState('allergic');
  const NextComponent = value ? EpiPen : Color;
  const PrevComponent = FirstName;
  return (
    <div>
      <label>
        Are you alergic to penut butter?:
        <Checkbox field="allergic" validate={validate} keepState />
      </label>
      <button type="button" onClick={() => next(NextComponent)}>Next</button>
      <button type="button" onClick={() => back(PrevComponent)}>Back</button>
    </div>
  );
};


const EpiPen = () => {
  const { next, back } = useFormApi();

  // Only relevant if the person is allergic 
  const relevant = (values) => values.allergic;
  const NextComponent = Color;
  const PrevComponent = Allergic;

  return (
    <div>
      <label>
        Do you have an epipen?:
        <RadioGroup field="epipen" relevant={relevant} validate={validate} keepState>
          <label>Yes <Radio value="yes" /></label>
          <label>No <Radio value="no" /></label>
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
      <button type="button" onClick={() => next(NextComponent)}>Next</button>
      <button type="button" onClick={() => back(PrevComponent)}>Back</button>
    </div>
  );
};

const Color = () => {
  const { back } = useFormApi();
  const { value } = useFieldState('allergic');
  const PrevComponent = value ? EpiPen : Allergic;
  return (
    <div>
      <label>
        Please enter your favorite color:
        <Text field="color" validate={validate} keepState />
      </label>
      <button type="button" onClick={() => back(PrevComponent)}>Back</button>
      <button type="submit" >Submit</button>
    </div>
  );
};

const Steps = () => {
  const { Current } = useFormState();
  return Current ? <Current /> : <FirstName />;
};

const Buttons = () => {
  const { setCurrent } = useFormApi();

  return (
    <div>
      <button type="button" onClick={() => setCurrent(FirstName)}>Jump2 FirstName</button>
      <button type="button" onClick={() => setCurrent(Allergic)}>Jump2 Allergic</button>
      <button type="button" onClick={() => setCurrent(EpiPen)}>Jump2 EpiPen</button>
      <button type="button" onClick={() => setCurrent(Color)}>Jump2 Color</button>
    </div>
  );
};

const Basic = () => (
  <div>
    <Form id="basic-form">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <div style={{ border: 'solid 1px', padding: '10px', marginBottom: '10px' }}>
            <Steps />
          </div>
          <Buttons />
        </div>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <FormState errors step />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, Basic);
