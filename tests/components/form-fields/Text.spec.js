import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, Text } from '../../../src';

describe('Text', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  it('should update value when user types', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="greeting" />
      </Form>
    );
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { value: 'Hello!' } });
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hello!' });
  });

  it('should call onChange function when value changes', () => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form>
        <Text field="hello" onChange={spy} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'world' } });
    expect(spy.called).to.equal(true);
    expect(spy.args[0][0].target.value).to.deep.equal('world');
  });

  it('should call onBlur function when value changes', () => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form>
        <Text field="hello" onBlur={spy} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('blur');
    expect(spy.called).to.equal(true);
  });

  it('should expose the field name', () => {
    const wrapper = mount(
      <Form getApi={() => {}}>
        <Text field="greeting" />
      </Form>
    );
    expect(wrapper.find('input').prop('name')).to.equal('greeting');
  });

  it.skip('should run mask when user types in text input and mask is passed', () => {
    let savedApi;
    const mask = value => `${value}!`;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Text field="hello" mask={mask} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'world' } });
    expect(savedApi.getState().values).to.deep.equal({ hello: 'world!' });
  });
});
