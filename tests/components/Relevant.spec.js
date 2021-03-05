import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, Text, Checkbox, Relevant, Scope } from '../../src';

describe('Relevant', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  it('should only render relevant fields', () => {
    const apiRef = {};

    const wrapper = mount(
      <Form apiRef={apiRef}>
        <Checkbox field="hasDog" />
        <Relevant when={({ values }) => values.hasDog}>
          <Text field="dogName" />
          <Text field="dogAge" />
        </Relevant>
        <button type="submit">Submit</button>
      </Form>
    );

    // Validate single input
    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(inputs.at(0).props().name).to.equal('hasDog');
    expect(inputs.at(1).props().name).to.equal('dogName');
    expect(inputs.at(2).props().name).to.equal('dogAge');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true
    });

    // Fill in dog fields
    inputs.at(1).simulate('change', { target: { value: 'Leo' } });
    inputs.at(2).simulate('change', { target: { value: 1 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true,
      dogAge: 1,
      dogName: 'Leo'
    });

    // Un-Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: false
    });
  });

  it('relevant fields should keep state when keep state is passed', () => {
    const apiRef = {};

    const wrapper = mount(
      <Form apiRef={apiRef}>
        <Checkbox field="hasDog" />
        <Relevant when={({ values }) => values.hasDog}>
          <Text field="dogName" keepState />
          <Text field="dogAge" keepState />
        </Relevant>
        <button type="submit">Submit</button>
      </Form>
    );

    // Validate single input
    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(inputs.at(0).props().name).to.equal('hasDog');
    expect(inputs.at(1).props().name).to.equal('dogName');
    expect(inputs.at(2).props().name).to.equal('dogAge');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true
    });

    // Fill in dog fields
    inputs.at(1).simulate('change', { target: { value: 'Leo' } });
    inputs.at(2).simulate('change', { target: { value: 1 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true,
      dogAge: 1,
      dogName: 'Leo'
    });

    // Un-Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: false,
      dogAge: 1,
      dogName: 'Leo'
    });
  });

  it('relevant fields should keep state when keep state is passed and fill values back after they reapear', () => {
    const apiRef = {};

    const wrapper = mount(
      <Form apiRef={apiRef}>
        <Checkbox field="hasDog" />
        <Relevant when={({ values }) => values.hasDog}>
          <Text field="dogName" keepState />
          <Text field="dogAge" keepState />
        </Relevant>
        <button type="submit">Submit</button>
      </Form>
    );

    // Validate single input
    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(inputs.at(0).props().name).to.equal('hasDog');
    expect(inputs.at(1).props().name).to.equal('dogName');
    expect(inputs.at(2).props().name).to.equal('dogAge');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true
    });

    // Fill in dog fields
    inputs.at(1).simulate('change', { target: { value: 'Leo' } });
    inputs.at(2).simulate('change', { target: { value: 1 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true,
      dogAge: 1,
      dogName: 'Leo'
    });

    // Un-Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: false,
      dogAge: 1,
      dogName: 'Leo'
    });

    // Check box to true again
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(inputs.at(0).props().name).to.equal('hasDog');
    expect(inputs.at(1).props().name).to.equal('dogName');
    expect(inputs.at(2).props().name).to.equal('dogAge');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true,
      dogAge: 1,
      dogName: 'Leo'
    });
  });

  it('irrelevant fields should still validate if keepState is passed', () => {
    const apiRef = {};

    const validateLength = value => {
      if (!value || value.length < 5)
        return 'Field must be at least five characters';
    };

    const validateAge = value => {
      if (!value || value < 5) return 'Field must be at least five';
    };

    const wrapper = mount(
      <Form apiRef={apiRef}>
        <Checkbox field="hasDog" />
        <Relevant when={({ values }) => values.hasDog}>
          <Text field="dogName" keepState validate={validateLength} />
          <Text field="dogAge" keepState validate={validateAge} />
        </Relevant>
        <button type="submit">Submit</button>
      </Form>
    );

    // Validate single input
    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(inputs.at(0).props().name).to.equal('hasDog');
    expect(inputs.at(1).props().name).to.equal('dogName');
    expect(inputs.at(2).props().name).to.equal('dogAge');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true
    });

    // Fill in dog fields
    inputs.at(1).simulate('change', { target: { value: 'Leo' } });
    inputs.at(2).simulate('change', { target: { value: 1 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true,
      dogAge: 1,
      dogName: 'Leo'
    });

    // Un-Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: false,
      dogAge: 1,
      dogName: 'Leo'
    });

    expect(apiRef.current.getState().errors).to.deep.equal({});

    // Call submit
    const button = wrapper.find('button');
    button.simulate('submit');

    expect(apiRef.current.getState().errors).to.deep.equal({
      dogAge: 'Field must be at least five',
      dogName: 'Field must be at least five characters'
    });
  });

  it('irrelevant fields should NOT validate if keepState is NOT passed', () => {
    const apiRef = {};

    const validateLength = value => {
      if (!value || value.length < 5)
        return 'Field must be at least five characters';
    };

    const validateAge = value => {
      if (!value || value < 5) return 'Field must be at least five';
    };

    const wrapper = mount(
      <Form apiRef={apiRef}>
        <Checkbox field="hasDog" />
        <Relevant when={({ values }) => values.hasDog}>
          <Text field="dogName" validate={validateLength} />
          <Text field="dogAge" validate={validateAge} />
        </Relevant>
        <button type="submit">Submit</button>
      </Form>
    );

    // Validate single input
    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(inputs.at(0).props().name).to.equal('hasDog');
    expect(inputs.at(1).props().name).to.equal('dogName');
    expect(inputs.at(2).props().name).to.equal('dogAge');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true
    });

    // Fill in dog fields
    inputs.at(1).simulate('change', { target: { value: 'Leo' } });
    inputs.at(2).simulate('change', { target: { value: 1 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true,
      dogAge: 1,
      dogName: 'Leo'
    });

    // Un-Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: false
    });

    expect(apiRef.current.getState().errors).to.deep.equal({});

    // Call submit
    const button = wrapper.find('button');
    button.simulate('submit');

    expect(apiRef.current.getState().errors).to.deep.equal({});
  });

  it('formApis setValue should work after fields re-apear', () => {
    const apiRef = {};

    const wrapper = mount(
      <Form apiRef={apiRef}>
        <Checkbox field="hasDog" />
        <Relevant when={({ values }) => values.hasDog}>
          <Text field="dogName" keepState />
          <Text field="dogAge" keepState />
        </Relevant>
        <button type="submit">Submit</button>
      </Form>
    );

    // Validate single input
    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(inputs.at(0).props().name).to.equal('hasDog');
    expect(inputs.at(1).props().name).to.equal('dogName');
    expect(inputs.at(2).props().name).to.equal('dogAge');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true
    });

    // Fill in dog fields
    apiRef.current.setValue('dogName', 'Leo');
    apiRef.current.setValue('dogAge', 1);

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true,
      dogAge: 1,
      dogName: 'Leo'
    });

    // Un-Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: false,
      dogAge: 1,
      dogName: 'Leo'
    });

    // Check box to true again
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(inputs.at(0).props().name).to.equal('hasDog');
    expect(inputs.at(1).props().name).to.equal('dogName');
    expect(inputs.at(2).props().name).to.equal('dogAge');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true,
      dogAge: 1,
      dogName: 'Leo'
    });

    // Fill in dog fields
    apiRef.current.setValue('dogName', 'TC');
    apiRef.current.setValue('dogAge', 10);

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      hasDog: true,
      dogAge: 10,
      dogName: 'TC'
    });
  });

  it('relevant fields should keep state when keep state is passed even when in scope and fill values back after they reapear', () => {
    const apiRef = {};

    const wrapper = mount(
      <Form apiRef={apiRef}>
        <Scope scope="person">
          <Checkbox field="hasDog" />
          <Relevant
            when={({ values }) =>
              values && values.person && values.person.hasDog
            }>
            <Text field="dogName" keepState />
            <Text field="dogAge" keepState />
          </Relevant>
        </Scope>
        <button type="submit">Submit</button>
      </Form>
    );

    // Validate single input
    let inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(inputs.at(0).props().name).to.equal('hasDog');
    expect(inputs.at(1).props().name).to.equal('dogName');
    expect(inputs.at(2).props().name).to.equal('dogAge');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      person: {
        hasDog: true
      }
    });

    // Fill in dog fields
    inputs.at(1).simulate('change', { target: { value: 'Leo' } });
    inputs.at(2).simulate('change', { target: { value: 1 } });

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      person: {
        hasDog: true,
        dogAge: 1,
        dogName: 'Leo'
      }
    });

    // Un-Check the checkbox
    inputs.at(0).simulate('change', { target: { checked: false } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(1);
    expect(inputs.at(0).props().name).to.equal('hasDog');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      person: {
        hasDog: false,
        dogAge: 1,
        dogName: 'Leo'
      }
    });

    // Check box to true again
    inputs.at(0).simulate('change', { target: { checked: true } });

    // Validate new inputs
    inputs = wrapper.find('input');
    expect(inputs.length).to.equal(3);
    expect(inputs.at(0).props().name).to.equal('hasDog');
    expect(inputs.at(1).props().name).to.equal('dogName');
    expect(inputs.at(2).props().name).to.equal('dogAge');

    // Validate state
    expect(apiRef.current.getState().values).to.deep.equal({
      person: {
        hasDog: true,
        dogAge: 1,
        dogName: 'Leo'
      }
    });
  });
});
