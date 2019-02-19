import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, TextArea } from '../../../src';

describe('TextArea', () => {
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
        <TextArea field="greeting" />
      </Form>
    );
    let input = wrapper.find('textarea').at(0);
    input.simulate('change', { target: { value: 'Hello!' } });
    input = wrapper.find('textarea').at(0);
    expect(input.props().value).to.equal('Hello!');
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hello!' });
  });

  it('should set initial value', () => {
    let savedApi;
    mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <TextArea field="greeting" initialValue="foobarbaz" />
      </Form>
    );
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'foobarbaz' });
  });
});
