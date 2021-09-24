import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '../../jest/components';
import { act } from 'react-dom/test-utils';

const getState = state => {
  const defaultState = {
    pristine: true,
    dirty: false,
    submitted: false,
    valid: true,
    invalid: false,
    submitting: false,
    validating: 0,
    values: {},
    maskedValues: {},
    errors: {},
    touched: {},
    initialValues: {}
  };
  return Object.assign({}, defaultState, state);
};

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
  
    expect(formApiRef.current.getFormState()).toEqual(getState());
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
  
    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
    }));
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

    expect(formApiRef.current.getFormState()).toEqual(getState({
      touched: {
        greeting1: true
      },
    }));
  
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

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      submitted: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      touched: {
        greeting: true
      }
    }));

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

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
    }));

    fireEvent.click(reset);

    expect(formApiRef.current.getFormState()).toEqual(getState());

  });

  it('should resetField should reset the field to its field level initial value', () => {
    const formApiRef = {};

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" initialValue="Hello"/>
      </Form>
    );

    let input = getByLabelText('input1');
    expect(input).toHaveValue('Hello');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        greeting: 'Hello'
      },
      maskedValues: {
        greeting: 'Hello'
      },
    }));

    userEvent.type(input, ' World');

    expect(input).toHaveValue('Hello World');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false, 
      dirty: true,
      values: {
        greeting: 'Hello World'
      },
      maskedValues: {
        greeting: 'Hello World'
      },
    }));

    act(()=>{
      formApiRef.current.resetField('greeting');
    });

    expect(input).toHaveValue('Hello');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false, 
      dirty: true,
      values: {
        greeting: 'Hello'
      },
      maskedValues: {
        greeting: 'Hello'
      },
    }));   

  });

  it('should resetField should reset the field to its form level initial value', () => {
    const formApiRef = {};
    const initialValues = {
      greeting: 'Hello'
    };

    const { getByLabelText } = render(
      <Form
        initialValues={initialValues}
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1"/>
      </Form>
    );

    let input = getByLabelText('input1');
    expect(input).toHaveValue('Hello');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        greeting: 'Hello'
      },
      maskedValues: {
        greeting: 'Hello'
      },
      initialValues,
    }));

    userEvent.type(input, ' World');

    expect(input).toHaveValue('Hello World');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false, 
      dirty: true,
      values: {
        greeting: 'Hello World'
      },
      maskedValues: {
        greeting: 'Hello World'
      },
      initialValues
    }));

    act(()=>{
      formApiRef.current.resetField('greeting');
    });

    expect(input).toHaveValue('Hello');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false, 
      dirty: true,
      values: {
        greeting: 'Hello'
      },
      maskedValues: {
        greeting: 'Hello'
      },
      initialValues
    }));   

  });

  it('should update the state when field level validation occurs and validateOnChange is passed', () => {
    const formApiRef = {};

    const validate = value => {
      return !value || value.length < 5
        ? 'Field must be at least five characters'
        : undefined;
    };

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" validateOn="change" validate={validate}/>
        <button type="submit">Submit</button>
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, 'Hi!');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      invalid: true,
      valid: false,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      errors: {
        greeting: 'Field must be at least five characters',
      },
    }));

  });

  it('should NOT submit the form when form is invalid due to field level validation failure', () => {
    const formApiRef = {};
    const onSubmit = jest.fn();

    const validate = value => {
      return !value || value.length < 5
        ? 'Field must be at least five characters'
        : undefined;
    };

    const { getByLabelText, getByText } = render(
      <Form
        onSubmit={onSubmit}
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" validate={validate}/>
        <button type="submit">Submit</button>
      </Form>
    );

    const input = getByLabelText('input1');
    const submit = getByText('Submit');

    userEvent.type(input, 'Hi!');

    fireEvent.click(submit);

    expect(onSubmit).not.toHaveBeenCalled();

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      invalid: true,
      valid: false,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      errors: {
        greeting: 'Field must be at least five characters',
      },
      touched: {
        greeting: true
      }
    }));

  });

  it('should NOT submit the form when form is invalid due to field level validation with only initial value', () => {
    const formApiRef = {};
    const onSubmit = jest.fn();

    const validate = value => {
      return !value || value.length < 5
        ? 'Field must be at least five characters'
        : undefined;
    };

    const { getByText } = render(
      <Form
        onSubmit={onSubmit}
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" validate={validate} initialValue="Hi!"/>
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(onSubmit).not.toHaveBeenCalled();

    expect(formApiRef.current.getFormState()).toEqual(getState({
      invalid: true,
      valid: false,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      errors: {
        greeting: 'Field must be at least five characters',
      },
      touched: {
        greeting: true,
      }
    }));

  });

});
