import React, { act } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '../../jest/components';
import { useFormApi, Scope } from '../../src';

const getState = state => {
  const defaultState = {
    pristine: true,
    dirty: false,
    disabled: false,
    submitted: false,
    valid: true,
    invalid: false,
    submitting: false,
    validating: 0,
    values: {},
    maskedValues: {},
    modified: {},
    errors: {},
    focused: {},
    gathering: 0,
    data: {},
    touched: {},
    initialValues: {},
    dirt: {},
    memory: {}
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
      modified: {
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
      modified: true,
      touched: false,
      pristine: false,
      dirty: true,
      valid: true, 
      invalid: false,
      showError: false,
      validating: false,
      focused: false,
      gathering: false,
      data: undefined
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
      modified: {
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
      modified: {
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
      modified: {
        foo: 'bar',
        bar: 'b-a-z',
      },
      dirt: {
        foo: true,
        bar: true,
      }
    }));

  });

  it('should set errors on many fields at once when setErrors is called', () => {

    const formApiRef = {};

    render(
      <Form formApiRef={formApiRef}>
        <Input name="email" label="input1" />
        <Input name="password" label="input2" />
        <Input name="username" label="input3" />
      </Form>
    );

    expect(formApiRef.current.getFormState()).toEqual(getState({}));

    act(() => {
      formApiRef.current.setErrors({
        email: 'already exists',
        password: 'password should not contain your name'
      });
    });

    expect(formApiRef.current.getFormState()).toEqual(getState({
      valid: false,
      invalid: true,
      errors: {
        email: 'already exists',
        password: 'password should not contain your name'
      }
    }));

  });

  it('should clear the errors of fields it was not given when setErrors is called', () => {

    const formApiRef = {};

    render(
      <Form formApiRef={formApiRef}>
        <Input name="email" label="input1" />
        <Input name="password" label="input2" />
      </Form>
    );

    act(() => {
      formApiRef.current.setErrors({ email: 'already exists', password: 'too short' });
    });

    expect(formApiRef.current.getFormState()).toEqual(getState({
      valid: false,
      invalid: true,
      errors: {
        email: 'already exists',
        password: 'too short'
      }
    }));

    // password is absent this time, so its error is cleared
    act(() => {
      formApiRef.current.setErrors({ email: 'still taken' });
    });

    expect(formApiRef.current.getFormState()).toEqual(getState({
      valid: false,
      invalid: true,
      errors: {
        email: 'still taken'
      }
    }));

  });

  it('should become valid again when setErrors is called with an empty object', () => {

    const formApiRef = {};

    render(
      <Form formApiRef={formApiRef}>
        <Input name="email" label="input1" />
        <Input name="password" label="input2" />
      </Form>
    );

    act(() => {
      formApiRef.current.setErrors({ email: 'already exists', password: 'too short' });
    });

    expect(formApiRef.current.getFormState().valid).toEqual(false);

    act(() => {
      formApiRef.current.setErrors({});
    });

    expect(formApiRef.current.getFormState()).toEqual(getState({}));

  });

  it('should ignore errors for fields that are not registered when setErrors is called', () => {

    const formApiRef = {};

    render(
      <Form formApiRef={formApiRef}>
        <Input name="email" label="input1" />
      </Form>
    );

    act(() => {
      formApiRef.current.setErrors({ email: 'already exists', nonExistent: 'nope' });
    });

    expect(formApiRef.current.getFormState()).toEqual(getState({
      valid: false,
      invalid: true,
      errors: {
        email: 'already exists'
      }
    }));

  });

  it('should set errors on scoped fields when setErrors is called', () => {

    const formApiRef = {};

    render(
      <Form formApiRef={formApiRef}>
        <Input name="name" label="input1" />
        <Scope scope="spouse">
          <Input name="name" label="input2" />
          <Input name="age" label="input3" />
        </Scope>
      </Form>
    );

    act(() => {
      formApiRef.current.setErrors({
        name: 'required',
        spouse: { age: 'must be a number' }
      });
    });

    expect(formApiRef.current.getFormState()).toEqual(getState({
      valid: false,
      invalid: true,
      errors: {
        name: 'required',
        spouse: {
          age: 'must be a number'
        }
      }
    }));

  });

  it('should re render every field so the errors are displayed when setErrors is called', () => {

    const formApiRef = {};

    const { queryByText, getByText } = render(
      <Form formApiRef={formApiRef}>
        <Input name="email" label="input1" showErrorIfError />
        <Input name="password" label="input2" showErrorIfError />
      </Form>
    );

    expect(queryByText('already exists')).toBeNull();
    expect(queryByText('too short')).toBeNull();

    act(() => {
      formApiRef.current.setErrors({ email: 'already exists', password: 'too short' });
    });

    // setErrors updates the whole form in one pass, so both fields must have
    // re rendered, not just the last one that was touched.
    expect(getByText('already exists')).toBeInTheDocument();
    expect(getByText('too short')).toBeInTheDocument();

    act(() => {
      formApiRef.current.setErrors({});
    });

    expect(queryByText('already exists')).toBeNull();
    expect(queryByText('too short')).toBeNull();

  });

  it('should only set the errors it was given when setTheseErrors is called', () => {

    const formApiRef = {};

    render(
      <Form formApiRef={formApiRef}>
        <Input name="email" label="input1" />
        <Input name="password" label="input2" />
        <Input name="username" label="input3" />
      </Form>
    );

    act(() => {
      formApiRef.current.setErrors({ email: 'already exists' });
    });

    // username gains an error, email keeps the one it already had
    act(() => {
      formApiRef.current.setTheseErrors({ username: 'already taken' });
    });

    expect(formApiRef.current.getFormState()).toEqual(getState({
      valid: false,
      invalid: true,
      errors: {
        email: 'already exists',
        username: 'already taken'
      }
    }));

  });

  it('should not clear an existing error when setTheseErrors is called without it', () => {

    const formApiRef = {};

    render(
      <Form formApiRef={formApiRef}>
        <Input name="email" label="input1" />
        <Input name="password" label="input2" />
      </Form>
    );

    act(() => {
      formApiRef.current.setErrors({ email: 'already exists', password: 'too short' });
    });

    act(() => {
      formApiRef.current.setTheseErrors({ email: undefined });
    });

    // An absent error is how a field says it is valid, so setTheseErrors
    // cannot be used to clear one.
    expect(formApiRef.current.getFormState()).toEqual(getState({
      valid: false,
      invalid: true,
      errors: {
        email: 'already exists',
        password: 'too short'
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
      modified: {
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
      modified: {},
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

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: true,
      dirty: false,
      values: {},
      maskedValues: {}
    }));

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

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      invalid: true,
      valid: false,
      errors: {
        greeting: false,
      },
      dirt: {
        greeting: true
      },
      values: {
        greeting: 'bar'
      },
      maskedValues: {
        greeting: 'bar'
      },
      modified: {
        greeting: 'bar'
      },
      initialValues: {
        greeting: '123'
      }
    }));

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      invalid: true,
      valid: false,
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
    }));

  });

  it('should update state correctly when resetField is called on field with resetTouched set to false', async () => {
    const formApiRef = {};

    const Button = () => {
      const formApi = useFormApi();

      return (
        <button type="button" onClick={() => formApi.resetField('greeting', { resetTouched: false })}>Click Me</button>
      );
    };

    const { getByLabelText, getByText } = render(
      <Form formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
        <Button />
        <button>submit</button>
      </Form>
    );

    await userEvent.type(getByLabelText('input1'), 'elon');

    const submitButton = getByText('submit');
    fireEvent.click(submitButton);

    expect(formApiRef.current.getFormState()).toEqual(getState({
      submitted: true,
      pristine: false,
      dirty: true,
      focused: {
        greeting: true
      },
      touched: {
        greeting: true
      },
      dirt: {
        greeting: true
      },
      values: {
        greeting: 'elon'
      },
      maskedValues: {
        greeting: 'elon'
      },
      modified: {
        greeting: 'elon'
      }
    }));

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(formApiRef.current.getFormState()).toEqual(getState({
      submitted: true,
      pristine: false,
      dirty: true,
      focused: {
        greeting: true
      },
      touched: {
        greeting: true
      },
    }));

  });

  it('should update state correctly when resetField is called on field with resetDirt set to false', () => {
    const formApiRef = {};

    const Button = () => {
      const formApi = useFormApi();

      return (
        <button type="button" onClick={() => formApi.resetField('greeting', { resetDirt: false })}>Click Me</button>
      );
    };

    const { getByText } = render(
      <Form formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
        <Button />
      </Form>
    );

    act(() => {
      formApiRef.current.setValue('greeting', 'bar');
    });
    
    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      dirt: {
        greeting: true,
      },
      values: {
        greeting: 'bar'
      },
      maskedValues: {
        greeting: 'bar'
      },
      modified: {
        greeting: 'bar'
      }
    }));

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      dirt: {
        greeting: true,
      },
    }));
  });
});
