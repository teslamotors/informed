import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Form, useField, BasicText } from '../../src';

describe('withFieldState', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  const validate = value => {
    return !value || value.length < 5
      ? 'Field must be at least five characters'
      : undefined;
  };

  const BasicErrorText = (props) => {
    const { fieldState, fieldApi, render, ref, userProps } = useField( { ...props, validate });

    return render(
      <React.Fragment>
        <BasicText
          fieldState={fieldState}
          forwardedRef={ref}
          fieldApi={fieldApi}
          {...userProps}
          style={fieldState.error ? { border: 'solid 1px red' } : null}
        />
        {fieldState.error ? (
          <small style={{ color: 'red' }}>{fieldState.error}</small>
        ) : null}
      </React.Fragment>
    );
  };

  it('should update value when user types', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <BasicErrorText field="greeting"/>
      </Form>
    );
    let input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hi!' } });
    input = wrapper.find('input');
    expect(input.props().value).to.equal('Hi!');
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hi!' });
  });

  it('should show error message when validation error occurs', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <BasicErrorText 
          field="greeting" 
          validateOnChange/>
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hi!' } });
    const error = wrapper.find('small');
    expect(error.text()).to.equal('Field must be at least five characters');
  });

  const ErrorText = (props) => {

    const { fieldState, fieldApi, render, ref, userProps } = useField( { ...props, validate });

    const { value } = fieldState;
    const { setValue, setTouched } = fieldApi;
    const { onChange, onBlur, ...rest } = userProps;
    return render (
      <React.Fragment>
        <input
          {...rest}
          ref={ref}
          value={!value && value !== 0 ? '' : value}
          onChange={e => {
            setValue(e.target.value);
            if (onChange) {
              onChange(e);
            }
          }}
          onBlur={e => {
            setTouched();
            if (onBlur) {
              onBlur(e);
            }
          }}
          style={fieldState.error ? { border: 'solid 1px red' } : null}
        />
        {fieldState.error ? (
          <small style={{ color: 'red' }}>{fieldState.error}</small>
        ) : null}
      </React.Fragment>
    );
  };

  it('should update value when user types', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <ErrorText field="greeting"/>
      </Form>
    );
    let input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hi!' } });
    input = wrapper.find('input');
    expect(input.props().value).to.equal('Hi!');
    expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hi!' });
  });

  it('should show error message when validation error occurs', () => {
    let savedApi;
    const wrapper = mount(
      <Form
        getApi={api => {
          savedApi = api;
        }}>
        <ErrorText 
          field="greeting" 
          validateOnChange/>
      </Form>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hi!' } });
    const error = wrapper.find('small');
    expect(error.text()).to.equal('Field must be at least five characters');
  });


});
