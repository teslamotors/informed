import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Form, Input } from '../../jest/components';
import { useFieldApi } from '../../src';

const ComponentUsingFieldApi = ({ name }) => {
  const fieldApi = useFieldApi(name);

  return (
    <>
      <h5>Component using fieldApi: {name}</h5>
      <button type="button" onClick={() => fieldApi.setValue('Hello World!')}>
        Set Value
      </button>
    </>
  );
};

const getState = state => {
  const defaultState = {
    error: undefined,
    modified: false,
    touched: false,
    pristine: true,
    dirty: false,
    valid: true,
    invalid: false,
    showError: false,
    validating: false,
    focused: false,
    gathering: false,
    data: undefined
  };
  return Object.assign({}, defaultState, state);
};

// prettier-ignore
describe('useFieldApi', () => {

  it('should update state when setValue is called', () => {
    const formApiRef = {};

    const { getAllByText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="first" label="First Name" />
        <Input name="last" label="Last Name" />
        <ComponentUsingFieldApi name="first" />
        <ComponentUsingFieldApi name="last" />
      </Form>
    );

    const setValues = getAllByText('Set Value'); 

    fireEvent.click(setValues[0]);

    expect(formApiRef.current.getFieldState('first')).toEqual(getState({
      value: 'Hello World!',
      maskedValue: 'Hello World!',
      pristine: false,
      dirty: true,
      modified: true
    }));
    expect(formApiRef.current.getFieldState('last')).toEqual(getState());

    fireEvent.click(setValues[1]);

    expect(formApiRef.current.getFieldState('first')).toEqual(getState({
      value: 'Hello World!',
      maskedValue: 'Hello World!',
      pristine: false,
      dirty: true,
      modified: true
    }));
    expect(formApiRef.current.getFieldState('last')).toEqual(getState({
      value: 'Hello World!',
      maskedValue: 'Hello World!',
      pristine: false,
      dirty: true,
      modified: true
    }));

  });

});
