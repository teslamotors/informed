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
    const input = wrapper.find('textarea').at(0);
    input.simulate('change', { target: { value: 'Hello!' } });
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hello!' });
  });
});
