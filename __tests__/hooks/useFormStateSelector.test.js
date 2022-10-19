import React, { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '../../jest/components';
import { useFormStateSelector } from '../../src';

const ComponentUsingFormStateSelector = ({ selector }) => {
  const state = useFormStateSelector(selector);

  const i = useRef(0);
  i.current = i.current + 1;

  return (
    <>
      <span data-testid="render">Rendered: {i.current}</span>
      <pre data-testid="state">
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
    </>
  );
};

describe('useFormStateSelector', () => {
  const selector = state => ({
    field1: state.values.field1,
    field2: state.values.field2
  });

  it('should update computed state when user types in selected field', async () => {
    const formApiRef = {};

    const { getByLabelText, getByText, queryByTestId } = render(
      <Form formApiRef={formApiRef}>
        <Input name="field1" label="Field 1" />
        <Input name="field2" label="Field 2" />
        <ComponentUsingFormStateSelector selector={selector} />
        <button type="submit">Submit</button>
      </Form>
    );

    const $render = queryByTestId('render');
    const $state = queryByTestId('state');

    expect($render.textContent).toBe('Rendered: 1');

    const field1 = getByLabelText('Field 1');
    const field2 = getByLabelText('Field 2');

    await userEvent.type(field1, 'a');

    expect($render.textContent).toBe('Rendered: 2');

    await userEvent.type(field2, 'a');

    expect($render.textContent).toBe('Rendered: 3');

    expect(JSON.parse($state.textContent)).toEqual({
      field1: 'a',
      field2: 'a'
    });

    const submit = getByText('Submit');

    fireEvent.click(submit);

    // should not have changed as values are the same :-)
    expect($render.textContent).toBe('Rendered: 3');
  });

  it('should NOT update computed state when user types in a non-selected field', async () => {
    const formApiRef = {};

    const { getByLabelText, getByText, queryByTestId } = render(
      <Form formApiRef={formApiRef}>
        <Input name="field1" label="Field 1" />
        <Input name="field2" label="Field 2" />
        <Input name="field3" label="Field 3" />
        <ComponentUsingFormStateSelector selector={selector} />
        <button type="submit">Submit</button>
      </Form>
    );

    const $render = queryByTestId('render');
    const $state = queryByTestId('state');

    expect($render.textContent).toBe('Rendered: 1');

    const field1 = getByLabelText('Field 1');
    const field3 = getByLabelText('Field 3');

    await userEvent.type(field1, 'a');

    expect($render.textContent).toBe('Rendered: 2');

    await userEvent.type(field3, 'a');
    await userEvent.type(field3, 'b');
    await userEvent.type(field3, 'c');
    await userEvent.type(field3, 'd');

    // should be same amount of renders as before typing in field3!
    expect($render.textContent).toBe('Rendered: 2');

    await userEvent.type(field1, 'b');
    await userEvent.type(field1, 'c');
    await userEvent.type(field1, 'd');

    expect($render.textContent).toBe('Rendered: 5');

    expect(JSON.parse($state.textContent)).toEqual({
      field1: 'abcd',
      field2: undefined
    });

    expect(formApiRef.current.getFormState().values).toEqual({
      field1: 'abcd',
      field3: 'abcd'
    });

    const submit = getByText('Submit');

    fireEvent.click(submit);

    // should not have changed as values are the same :-)
    expect($render.textContent).toBe('Rendered: 5');
  });
});
