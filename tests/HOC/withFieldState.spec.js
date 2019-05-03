import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, Text, withFieldState, FormProvider } from '../../src';

describe('withFieldState', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  const Stuff = ({ fieldState }) => {
    return <span>{JSON.stringify(fieldState)}</span>;
  };

  const StuffWithFieldState = withFieldState('greeting')(Stuff);

  it('should update value when user types', () => {
    const wrapper = mount(
      <Form>
        <Text field="greeting" />
        <StuffWithFieldState />
      </Form>
    );
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'Hello!' } });
    const stuff = wrapper.find('Stuff');
    expect(stuff.text()).to.equal('{"value":"Hello!"}');
  });

  it('should give access to the field state when inside of form Provider', () => {
    const wrapper = mount(
      <FormProvider>
        <Text field="greeting" />
        <StuffWithFieldState />
      </FormProvider>
    );
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'Hello!' } });
    const stuff = wrapper.find('Stuff');
    expect(stuff.text()).to.equal('{"value":"Hello!"}');
  });

});
