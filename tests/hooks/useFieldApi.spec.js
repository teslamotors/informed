import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, Text, useFieldApi, FormProvider } from '../../src';

describe('withFieldApi', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  const Stuff = () => <span>Hello World!</span>;

  const StuffUsingFieldApi = () => {
    const fieldApi = useFieldApi('greeting');
    return <Stuff fieldApi={fieldApi} />;
  };

  const checkFieldApi = api => {
    expect(api).to.have.own.property('setError');
    expect(api).to.have.own.property('setTouched');
    expect(api).to.have.own.property('setValue');
    expect(api).to.have.own.property('getError');
    expect(api).to.have.own.property('getTouched');
    expect(api).to.have.own.property('getValue');
    expect(api).to.have.own.property('reset');
    expect(api).to.have.own.property('validate');
  };

  it('should have all the correct function on the field api', () => {
    const wrapper = mount(
      <Form>
        <Text field="greeting" />
        <StuffUsingFieldApi />
      </Form>
    );
  
    const stuff = wrapper.find('Stuff');
    checkFieldApi(stuff.props().fieldApi);
  });

  it('should give access to the fieldApi when inside of form Provider', () => {
    const wrapper = mount(
      <FormProvider>
        <Text field="greeting" />
        <StuffUsingFieldApi />
      </FormProvider>
    );
  
    const stuff = wrapper.find('Stuff');
    checkFieldApi(stuff.props().fieldApi);
  });

  it('should have all the correct function on the field api when rendered before input', () => {
    const wrapper = mount(
      <Form>
        <StuffUsingFieldApi />
        <Text field="greeting" />
      </Form>
    );
  
    const stuff = wrapper.find('Stuff');
    checkFieldApi(stuff.props().fieldApi);
  });

});
