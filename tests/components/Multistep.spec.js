import React, { useState } from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Form, Text, Checkbox, Multistep } from '../../src';
import { Test } from 'mocha';

const MultistepTestForm = ({ onSubmit, apiRef }) => {
  return (
    <Form onSubmit={onSubmit} apiRef={apiRef}>
      <Multistep initialStep="info">
        {({ next, back }) => (
          <React.Fragment>
            <Multistep.Step step="info" next="allergies">
              <Text field="name" keepState />
              <Text field="age" type="number" keepState />
              <button type="button" id="next" onClick={next}>
                Next
              </button>
            </Multistep.Step>
            <Multistep.Step step="allergies" next="epipen">
              <Checkbox field="allergic" keepState />
              <button type="button" id="next" onClick={next}>
                Next
              </button>
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
});
