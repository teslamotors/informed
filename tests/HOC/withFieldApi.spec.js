import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, Text, withFieldApi, FormProvider } from '../../src';

describe('withFieldApi', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  const Stuff = ({ fieldApi }) => {
    return <span>Hello World!</span>;
  };

  const StuffWithFieldApi = withFieldApi('greeting')(Stuff);

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
        <StuffWithFieldApi />
      </Form>
    );
  
    const stuff = wrapper.find('Stuff');
    checkFieldApi(stuff.props().fieldApi);
  });

  it('should give access to the fieldApi when inside of form Provider', () => {
    const wrapper = mount(
      <FormProvider>
        <Text field="greeting" />
        <StuffWithFieldApi />
      </FormProvider>
    );
  
    const stuff = wrapper.find('Stuff');
    checkFieldApi(stuff.props().fieldApi);
  });

});
