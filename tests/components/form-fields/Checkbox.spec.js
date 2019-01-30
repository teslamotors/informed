import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, Checkbox } from '../../../src';

describe('Checkbox', () => {
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
        <Checkbox field="greeting" />
      </Form>
    );
    const input = wrapper.find('input').at(0);
    input.simulate('change', { target: { checked: true } });
    expect(savedApi.getState().values).to.deep.equal({ greeting: true });
  });

  it('should set initial value to true', () => {
    let savedApi;
    mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Checkbox field="greeting" initialValue={false} />
      </Form>
    );
    expect(savedApi.getState().values).to.deep.equal({ greeting: false });
  });

  it('should set initial value to false', () => {
    let savedApi;
    mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <Checkbox field="greeting" initialValue={false} />
      </Form>
    );
    expect(savedApi.getState().values).to.deep.equal({ greeting: false });
  });

  it('should call onChange function when checked value changes', () => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form>
        <Checkbox field="greeting" onChange={spy} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { checked: 'true' } });
    expect(spy.called).to.equal(true);
    expect(spy.args[0][0].target.checked).to.deep.equal('true');
  });

  it('should call onBlur function when checked value changes', () => {
    const spy = sandbox.spy();
    const wrapper = mount(
      <Form>
        <Checkbox field="greeting" onBlur={spy} />
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('blur');
    expect(spy.called).to.equal(true);
  });
});
