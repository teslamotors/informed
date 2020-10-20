import React, { useState } from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import {
  Form,
  Text,
  Checkbox,
  Multistep,
  Relevant,
  RadioGroup,
  Radio
} from '../../src';
import { Test } from 'mocha';

const MultistepTestForm = ({ onSubmit, apiRef, validate }) => {
  return (
    <Form onSubmit={onSubmit} apiRef={apiRef}>
      <Multistep initialStep="info">
        {({ next, back }) => (
          <React.Fragment>
            <Multistep.Step step="info" next="allergies">
              <Text field="name" keepState validate={validate} />
              <Text field="age" type="number" keepState validate={validate} />
              <button type="button" id="next" onClick={next}>
                Next
              </button>
            </Multistep.Step>
            <Multistep.Step
              step="allergies"
              next={values => {
                return values.allergic ? 'epipen' : 'dog';
              }}>
              <Checkbox field="allergic" keepState validate={validate} />
              <button type="button" id="next" onClick={next}>
                Next
              </button>
              <button type="button" onClick={back} id="back">
                Back
              </button>
            </Multistep.Step>
            <Multistep.Step
              step="epipen"
              next="dog"
              previous="allergies"
              relevant={({ allergic }) => allergic}>
              <RadioGroup field="epipen" validate={validate} keepState>
                <Radio value="yes" />
                <Radio value="no" />
              </RadioGroup>
              <button type="button" onClick={back} id="back">
                Back
              </button>
            </Multistep.Step>
            <Multistep.Step
              step="dog"
              previous={values => (values.allergic ? 'epipen' : 'allergies')}>
              <Checkbox field="hasDog" keepState />
              <Relevant when={({ values }) => values.hasDog}>
                <Text
                  field="dogName"
                  validate={validate}
                  keepState
                  relevant={values => values.hasDog}
                />
              </Relevant>
              <button type="button" onClick={back} id="back">
                Back
              </button>
              <button type="submit">Submit</button>
            </Multistep.Step>
          </React.Fragment>
        )}
      </Multistep>
      <button type="submit">Submit</button>
    </Form>
  );
};

describe('Multistep', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  it('should only render the initial step', () => {
    const wrapper = mount(<MultistepTestForm />);

    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(0).props().name).to.equal('name');
  });

  it('should move to second step when next is clicked', () => {
    const wrapper = mount(<MultistepTestForm />);

    // Check initial step
    let inputs = wrapper.find('input');
    let next = wrapper.find('#next');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(0).props().name).to.equal('name');

    // Move to next step
    next.simulate('click');

    // Validate
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('allergic');
  });

  it('should keep values from first step after moving on to second', () => {
    const apiRef = {};

    const wrapper = mount(<MultistepTestForm apiRef={apiRef} />);

    // Check initial step
    let inputs = wrapper.find('input');
    let next = wrapper.find('#next');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(0).props().name).to.equal('name');

    // Fill in the form
    inputs.at(0).simulate('change', { target: { value: 'Joe' } });
    inputs.at(1).simulate('change', { target: { value: 26 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26
    });

    // Move to next step
    next.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('allergic');

    // Fill in the form
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: true
    });
  });

  it('should NOT move to second step when next is clicked until fields are valid', () => {
    const validate = v => (!v ? 'required' : undefined);

    const wrapper = mount(<MultistepTestForm validate={validate} />);

    // Check initial step
    let inputs = wrapper.find('input');
    let next = wrapper.find('#next');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(0).props().name).to.equal('name');

    // Try to Move to next step
    next.simulate('click');

    // Validate
    expect(inputs.length).to.equal(2);
    expect(inputs.at(0).props().name).to.equal('name');

    // Fill in the form
    inputs.at(0).simulate('change', { target: { value: 'Joe' } });
    inputs.at(1).simulate('change', { target: { value: 26 } });

    // Move to next step
    next.simulate('click');

    // Validate
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('allergic');
  });

  it('should move to the correct step when a step is irrelivant', () => {
    const apiRef = {};

    const wrapper = mount(<MultistepTestForm apiRef={apiRef} />);

    // Check initial step
    let inputs = wrapper.find('input');
    let next = wrapper.find('#next');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(0).props().name).to.equal('name');

    // Fill in the form
    inputs.at(0).simulate('change', { target: { value: 'Joe' } });
    inputs.at(1).simulate('change', { target: { value: 26 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26
    });

    // Move to next step
    next.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('allergic');

    // Make the checkbox false
    inputs.at(0).simulate('change', { target: { checked: true } });
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: false
    });

    // Move to next step
    next = wrapper.find('#next');
    next.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');
  });

  it('should move to the correct step when a step is relivant', () => {
    const apiRef = {};

    const wrapper = mount(<MultistepTestForm apiRef={apiRef} />);

    // Check initial step
    let inputs = wrapper.find('input');
    let next = wrapper.find('#next');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(0).props().name).to.equal('name');

    // Fill in the form
    inputs.at(0).simulate('change', { target: { value: 'Joe' } });
    inputs.at(1).simulate('change', { target: { value: 26 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26
    });

    // Move to next step
    next.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('allergic');

    // Make the checkbox false
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: true
    });

    // Move to next step
    next = wrapper.find('#next');
    next.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(0).props().value).to.equal('yes');
    expect(inputs.at(1).props().value).to.equal('no');
  });

  it('should save the state of a relivant field', () => {
    const apiRef = {};

    const wrapper = mount(<MultistepTestForm apiRef={apiRef} />);

    // Check initial step
    let inputs = wrapper.find('input');
    let next = wrapper.find('#next');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(0).props().name).to.equal('name');

    // Fill in the form
    inputs.at(0).simulate('change', { target: { value: 'Joe' } });
    inputs.at(1).simulate('change', { target: { value: 26 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26
    });

    // Move to next step
    next.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('allergic');

    // Make the checkbox false
    inputs.at(0).simulate('change', { target: { checked: true } });
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: false
    });

    // Move to next step
    next = wrapper.find('#next');
    next.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: false,
      hasDog: true
    });

    // Validate new input appeared
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(1).props().name).to.equal('dogName');

    // Fill in dog name
    inputs.at(1).simulate('change', { target: { value: 'Rex' } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: false,
      hasDog: true,
      dogName: 'Rex'
    });

    // Go back
    let back = wrapper.find('#back');
    back.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('allergic');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: false,
      hasDog: true,
      dogName: 'Rex'
    });
  });

  it('should NOT save the state of an irrelivant field', () => {
    const apiRef = {};

    const wrapper = mount(<MultistepTestForm apiRef={apiRef} />);

    // Check initial step
    let inputs = wrapper.find('input');
    let next = wrapper.find('#next');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(0).props().name).to.equal('name');

    // Fill in the form
    inputs.at(0).simulate('change', { target: { value: 'Joe' } });
    inputs.at(1).simulate('change', { target: { value: 26 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26
    });

    // Move to next step
    next.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('allergic');

    // Make the checkbox false
    inputs.at(0).simulate('change', { target: { checked: true } });
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: false
    });

    // Move to next step
    next = wrapper.find('#next');
    next.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: false,
      hasDog: true
    });

    // Validate new input appeared
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(2);
    expect(inputs.at(1).props().name).to.equal('dogName');

    // Fill in dog name
    inputs.at(1).simulate('change', { target: { value: 'Rex' } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: false,
      hasDog: true,
      dogName: 'Rex'
    });

    // Uncheck ( we dont have dog )
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: false,
      hasDog: false
    });

    // Go back
    let back = wrapper.find('#back');
    back.simulate('click');

    // Validate Step
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('allergic');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      name: 'Joe',
      age: 26,
      allergic: false,
      hasDog: false
    });
  });
});
