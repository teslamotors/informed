import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Form, Input } from '../../jest/components';
import { useFormApi } from '../../src';

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
    focused: {},
    touched: {},
    initialValues: {},
    dirt: {}
  };
  return Object.assign({}, defaultState, state);
};

// prettier-ignore
describe('useFormApi', () => {

  it('should update state correctly when setValue is called on field', () => {

    const formApiRef = {};

    const Button = () => {
      const formApi = useFormApi();

      return (
        <button type="button" onClick={()=>formApi.setValue('greeting', 'Hello World!')}>Click Me</button>
      );
    };

    const { getByLabelText, getByText } = render(
      <Form formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
        <Button />
      </Form>
    );

    const input = getByLabelText('input1');
    const button = getByText('Click Me');

    fireEvent.click(button);
  
    expect(input).toHaveAttribute('value', 'Hello World!');
    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      values: {
        greeting: 'Hello World!'
      },
      maskedValues: {
        greeting: 'Hello World!'
      },
      dirt: {
        greeting: true
      }
    }));

    expect(formApiRef.current.getFieldState('greeting')).toEqual({
      value: 'Hello World!',
      maskedValue: 'Hello World!',
      error: undefined,
      touched: false,
      pristine: false,
      dirty: true,
      valid: true, 
      invalid: false,
      showError: false,
      validating: false,
      focused: false,
    });
  });

  it('should update state correctly when setValue is called on field that does not exist', () => {

    const formApiRef = {};

    const Button = () => {
      const formApi = useFormApi();

      return (
        <button type="button" onClick={()=>formApi.setValue('foo', 'bar')}>Click Me</button>
      );
    };

    const { getByText } = render(
      <Form formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
        <Button />
      </Form>
    );

    const button = getByText('Click Me');

    fireEvent.click(button);
  
    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      values: {
        foo: 'bar'
      },
      maskedValues: {
        foo: 'bar'
      },
      dirt: {
        foo: true
      }
    }));

  });

  it('should update state correctly when setValues is called', () => {

    const formApiRef = {};

    const Button = () => {
      const formApi = useFormApi();

      return (
        <button type="button" onClick={()=>formApi.setValues({ foo: 'bar', bar: 'baz' })}>Click Me</button>
      );
    };

    const { getByText } = render(
      <Form formApiRef={formApiRef}>
        <Input name="foo" label="input1" />
        <Input name="bar" label="input1" formatter="*-*-*"/>
        <Input name="baz" label="input1" initialValue="joe" />
        <Button />
      </Form>
    );

    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        baz: 'joe'
      },
      maskedValues: {
        baz: 'joe'
      },
    }));

    const button = getByText('Click Me');

    fireEvent.click(button);
  
    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      values: {
        foo: 'bar',
        bar: 'b-a-z'
      },
      maskedValues: {
        foo: 'bar',
        bar: 'b-a-z'
      },
      dirt: {
        foo: true,
        bar: true,
        baz: true
      }
    }));

  });

  it('should update state correctly when setTheseValues is called', () => {

    const formApiRef = {};

    const Button = () => {
      const formApi = useFormApi();

      return (
        <button type="button" onClick={()=>formApi.setTheseValues({ foo: 'bar', bar: 'baz' })}>Click Me</button>
      );
    };

    const { getByText } = render(
      <Form formApiRef={formApiRef}>
        <Input name="foo" label="input1" />
        <Input name="bar" label="input1" formatter="*-*-*"/>
        <Input name="baz" label="input1" initialValue="joe" />
        <Button />
      </Form>
    );

    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        baz: 'joe'
      },
      maskedValues: {
        baz: 'joe'
      },
    }));

    const button = getByText('Click Me');

    fireEvent.click(button);
  
    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      values: {
        foo: 'bar',
        bar: 'b-a-z',
        baz: 'joe'
      },
      maskedValues: {
        foo: 'bar',
        bar: 'b-a-z',
        baz: 'joe'
      },
      dirt: {
        foo: true,
        bar: true,
      }
    }));

  });

  it('should update state correctly when resetField is called on field that does not exist', () => {

    const formApiRef = {};

    const Button = () => {
      const formApi = useFormApi();

      return (
        <button type="button" onClick={()=>formApi.resetField('foo')}>Click Me</button>
      );
    };

    const { getByText } = render(
      <Form formApiRef={formApiRef}>
        <Input name="greeting" label="input1"/>
        <Button />
      </Form>
    );


    act(()=>{
      formApiRef.current.setValue('foo', 'bar');
    });

    // Assert correct state
  
    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      values: {
        foo: 'bar'
      },
      maskedValues: {
        foo: 'bar'
      },
      dirt: {
        foo: true
      }
    }));

    // Click reset button

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      values: {},
      maskedValues: {},
      dirt: {}
    }));

  });

  it('should update state correctly when resetField is called on field with value option provided', () => {
    const formApiRef = {};

    const Button = () => {
      const formApi = useFormApi();

      return (
        <button type="button" onClick={()=>formApi.resetField('greeting', { value: 'elon' })}>Click Me</button>
      );
    };

    const { getByText } = render(
      <Form formApiRef={formApiRef}>
        <Input name="greeting" label="input1"/>
        <Button />
      </Form>
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: true,
      dirty: false,
      values: {
        greeting: 'elon'
      },
      maskedValues: {
        greeting: 'elon'
      },
    }));

  });

  it('should update state correctly when resetField is called on field with resetError set to false', () => {
    const formApiRef = {};

    const Button = () => {
      const formApi = useFormApi();

      return (
        <button type="button" onClick={() => formApi.resetField('greeting', { resetError: false })}>Click Me</button>
      );
    };


    const { getByText } = render(
      <Form formApiRef={formApiRef} initialValues={{ greeting: '123' }}>
        <Input name="greeting" label="input1" validate={value => !!Number(value)} validateOn="change" />
        <Button />
      </Form>
    );

    act(() => {
      formApiRef.current.setValue('greeting', 'bar');
    });

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      invalid: true,
      errors: {
        greeting: false
      },
      values: {
        greeting: '123'
      },
      maskedValues: {
        greeting: '123'
      },
      initialValues: {
        greeting: '123',
      },
      valid: false,
    }));

  });
});
