import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '../../jest/components';

// prettier-ignore
describe('useForm', () => {

  it('should have correct initial state', () => {
    const formApiRef = {};

    render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
      </Form>
    );
  
    expect(formApiRef.current.getFormState()).toEqual({
      pristine: true,
      dirty: false,
      submitted: false,
      valid: true,
      invalid: false,
      values: {},
      maskedValues: {},
      errors: {},
      touched: {},
      initialValues: {}
    });
  });

  it('should update state correctly when user types', () => {
    const formApiRef = {};

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
      </Form>
    );

    const input = getByLabelText('input1');
    userEvent.type(input, 'Hi!');
  
    expect(formApiRef.current.getFormState()).toEqual({
      pristine: false,
      dirty: true,
      submitted: false,
      valid: true,
      invalid: false,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      errors: {},
      touched: {},
      initialValues: {}
    });
  });


  it('should update state correctly when user blurs', () => {

    const formApiRef = {};

    const { getByLabelText } = render(
      <Form formApiRef={formApiRef}>        
        <Input name="greeting1" label="input1" />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();

    expect(formApiRef.current.getFormState()).toEqual({
      pristine: true,
      dirty: false,
      submitted: false,
      invalid: false,
      valid: true,
      values: {},
      maskedValues: {},
      errors: {},
      touched: {
        greeting1: true
      },
      initialValues: {}
    });
  
  });

  it('should submit the form with the values on valid submission', () => {
    const formApiRef = {};
    const onSubmit = jest.fn();

    const { getByLabelText, getByText } = render(
      <Form
        onSubmit={onSubmit}
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
        <button type="submit">Submit</button>
      </Form>
    );

    const input = getByLabelText('input1');
    const submit = getByText('Submit');

    userEvent.type(input, 'Hi!');

    fireEvent.click(submit);

    expect(onSubmit).toHaveBeenCalledWith({
      greeting: 'Hi!'
    });

    expect(formApiRef.current.getFormState()).toEqual({
      pristine: false,
      dirty: true,
      submitted: true,
      invalid: false,
      valid: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      errors: {},
      touched: {},
      initialValues: {}
    });

  });

  it('should reset the form when reset button is called', () => {
    const formApiRef = {};

    const { getByLabelText, getByText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
        <button type="reset">Reset</button>
      </Form>
    );

    const input = getByLabelText('input1');
    const reset = getByText('Reset');

    userEvent.type(input, 'Hi!');

    expect(formApiRef.current.getFormState()).toEqual({
      pristine: false,
      dirty: true,
      submitted: false,
      invalid: false,
      valid: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      errors: {},
      touched: {},
      initialValues: {}
    });

    fireEvent.click(reset);

    expect(formApiRef.current.getFormState()).toEqual({
      pristine: true,
      dirty: false,
      submitted: false,
      invalid: false,
      valid: true,
      values: {},
      maskedValues: {},
      errors: {},
      touched: {},
      initialValues: {}
    });

  });

});
