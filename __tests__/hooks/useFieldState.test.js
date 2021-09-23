import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '../../jest/components';
import { useFieldState } from '../../src';

const ComponentUsingFieldState = ({ name }) => {
  const fieldState = useFieldState(name);

  const i = useRef(0);
  i.current = i.current + 1;

  return (
    <>
      <h5>Component using fieldState: {name}</h5>
      <span data-testid="renders">Rendered: {i.current}</span>
      <pre data-testid="state">
        <code>{JSON.stringify(fieldState, null, 2)}</code>
      </pre>
    </>
  );
};

const getState = state => {
  return JSON.stringify(state, null, 2);
};

// prettier-ignore
describe('useFieldState', () => {

  // const validate = value => {
  //   return !value || value.length < 5
  //     ? 'Field must be at least five characters'
  //     : undefined;
  // };

  it('should update state when user types', () => {
    const formApiRef = {};

    const { getByLabelText, queryAllByTestId } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="first" label="First Name" />
        <Input name="last" label="Last Name" />
        <ComponentUsingFieldState name="first" />
        <ComponentUsingFieldState name="last" />
      </Form>
    );

    const renders = queryAllByTestId('renders');
    const states = queryAllByTestId('state');

    expect(renders[0].textContent).toBe('Rendered: 2');
    expect(renders[1].textContent).toBe('Rendered: 2');

    const first = getByLabelText('First Name');
    const last = getByLabelText('Last Name');

    userEvent.type(first, 'J');

    expect(renders[0].textContent).toBe('Rendered: 3');
    expect(renders[1].textContent).toBe('Rendered: 2');
    expect(states[0].textContent).toBe(getState({
      value: 'J',
      maskedValue: 'J',
      pristine: false,
      dirty: true,
      valid: true, 
      invalid: false
    }));
    expect(states[1].textContent).toBe(getState({
      pristine: true,
      dirty: false,
      valid: true, 
      invalid: false
    }));

    userEvent.type(first, 'oe');

    expect(renders[0].textContent).toBe('Rendered: 5');
    expect(renders[1].textContent).toBe('Rendered: 2');
    expect(states[0].textContent).toBe(getState({
      value: 'Joe',
      maskedValue: 'Joe',
      pristine: false,
      dirty: true,
      valid: true, 
      invalid: false
    }));
    expect(states[1].textContent).toBe(getState({
      pristine: true,
      dirty: false,
      valid: true, 
      invalid: false
    }));

    // NOTE: when user starts typing in this field it will blur first field and cause a re-render!
    userEvent.type(last, 'Puzz');

    expect(renders[0].textContent).toBe('Rendered: 6');
    expect(renders[1].textContent).toBe('Rendered: 6');
    expect(states[0].textContent).toBe(getState({
      value: 'Joe',
      maskedValue: 'Joe',
      touched: true,
      pristine: false,
      dirty: true,
      valid: true, 
      invalid: false
    }));
    expect(states[1].textContent).toBe(getState({
      value: 'Puzz',
      maskedValue: 'Puzz',
      pristine: false,
      dirty: true,
      valid: true, 
      invalid: false
    }));

  });

  it('should have correct state on initial load with initial values at field level', () => {
    const formApiRef = {};

    const { queryAllByTestId } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="first" label="First Name" initialValue="Joe" />
        <Input name="last" label="Last Name" initialValue="Puzzo"/>
        <ComponentUsingFieldState name="first" />
        <ComponentUsingFieldState name="last" />
      </Form>
    );

    const renders = queryAllByTestId('renders');
    const states = queryAllByTestId('state');

    expect(renders[0].textContent).toBe('Rendered: 2');
    expect(renders[1].textContent).toBe('Rendered: 2');

    expect(states[0].textContent).toBe(getState({
      value: 'Joe',
      maskedValue: 'Joe',
      pristine: true,
      dirty: false,
      valid: true, 
      invalid: false
    }));
    expect(states[1].textContent).toBe(getState({
      value: 'Puzzo',
      maskedValue: 'Puzzo',
      pristine: true,
      dirty: false,
      valid: true, 
      invalid: false
    }));

  });

  it('should have correct state on initial load with initial values at form level', () => {
    const formApiRef = {};
    const initialValues = {
      first: 'Joe', 
      last: 'Puzzo'
    };

    const { queryAllByTestId } = render(
      <Form
        initialValues={initialValues}
        formApiRef={formApiRef}>
        <Input name="first" label="First Name" />
        <Input name="last" label="Last Name" />
        <ComponentUsingFieldState name="first" />
        <ComponentUsingFieldState name="last" />
      </Form>
    );

    const renders = queryAllByTestId('renders');
    const states = queryAllByTestId('state');

    expect(renders[0].textContent).toBe('Rendered: 2');
    expect(renders[1].textContent).toBe('Rendered: 2');

    expect(states[0].textContent).toBe(getState({
      value: 'Joe',
      maskedValue: 'Joe',
      pristine: true, 
      dirty: false,
      valid: true, 
      invalid: false
    }));
    expect(states[1].textContent).toBe(getState({
      value: 'Puzzo',
      maskedValue: 'Puzzo',
      pristine: true, 
      dirty: false,
      valid: true, 
      invalid: false
    }));

  });

});
