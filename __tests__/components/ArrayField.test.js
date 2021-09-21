import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '../../jest/components';
import { ArrayField } from '../../src';

const FlatArrayfield = ({ formApiRef, initialValues }) => {
  return (
    <Form formApiRef={formApiRef} initialValues={initialValues}>
      <ArrayField name="siblings">
        {({ add, reset }) => (
          <>
            <button onClick={add} type="button">
              Add Sibling
            </button>
            <button onClick={reset} type="button">
              Reset Siblings
            </button>
            <ArrayField.Items>
              {({ remove, name, key }) => (
                <>
                  <span data-testid="key">{key}</span>
                  <Input label="Name" name={name} />
                  <button type="button" onClick={remove}>
                    Remove
                  </button>
                </>
              )}
            </ArrayField.Items>
          </>
        )}
      </ArrayField>
      <button type="submit">Submit</button>
    </Form>
  );
};

// prettier-ignore
describe('ArrayField', () => {

  it('should ', () => {
    const formApiRef = {};

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
      </Form>
    );

    const input = getByLabelText('input1');
    userEvent.type(input, 'Hi!');
  
    expect(input).toHaveAttribute('value', 'Hi!');
    expect(input).toHaveValue('Hi!');
    expect(formApiRef.current.getFormState().values).toEqual({ greeting: 'Hi!' });
  });

  it('should add unique fields when add is clicked', () => {

    const formApiRef = {};

    const { queryAllByLabelText, getByText, queryAllByTestId } = render(
      <FlatArrayfield formApiRef={formApiRef}/>
    );

    let inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(0);

    const add = getByText('Add Sibling');
    fireEvent.click(add);

    inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(1);
    expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');

    fireEvent.click(add);

    inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(2);
    expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');
    expect(inputs[1]).toHaveAttribute('name', 'siblings[1]');

    userEvent.type(inputs[0], 'Hello');  
    userEvent.type(inputs[1], 'World');  

    expect(inputs[0]).toHaveValue('Hello');
    expect(inputs[1]).toHaveValue('World');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello', 'World'] });

    let keys = queryAllByTestId('key');
    expect(keys.length).toBe(2);
  });

  it('should update state when user deletes 1 index [ a, b ] ---> [ a ]', () => {

    const formApiRef = {};

    const { queryAllByLabelText, getByText, queryAllByTestId, queryAllByText } = render(
      <FlatArrayfield formApiRef={formApiRef}/>
    );

    let inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(0);

    const add = getByText('Add Sibling');
    fireEvent.click(add);

    inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(1);
    expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');

    fireEvent.click(add);

    inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(2);
    expect(inputs[0]).toHaveAttribute('name', 'siblings[0]');
    expect(inputs[1]).toHaveAttribute('name', 'siblings[1]');

    userEvent.type(inputs[0], 'Hello');  
    userEvent.type(inputs[1], 'World');  

    expect(inputs[0]).toHaveValue('Hello');
    expect(inputs[1]).toHaveValue('World');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello', 'World'] });

    let keys = queryAllByTestId('key');
    expect(keys.length).toBe(2);

    const removeButtons = queryAllByText('Remove');
    expect(removeButtons.length).toBe(2);

    fireEvent.click(removeButtons[1]);

    inputs = queryAllByLabelText('Name');
    expect(inputs[0]).toHaveValue('Hello');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello'] });

    keys = queryAllByTestId('key');
    expect(keys.length).toBe(1);

  });

  it('should initialize array field with initialValues from from', () => {

    const formApiRef = {};
    const initialValues = { siblings: ['Hello', 'World'] };

    const { queryAllByLabelText, queryAllByTestId } = render(
      <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
    );

    let inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(2);

    expect(inputs[0]).toHaveValue('Hello');
    expect(inputs[1]).toHaveValue('World');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello', 'World'] });

    let keys = queryAllByTestId('key');
    expect(keys.length).toBe(2);
  });

  it('should update state when user deletes 0 index [ a, b ] ---> [ b ]', () => {

    const formApiRef = {};
    const initialValues = { siblings: ['Hello', 'World'] };

    const { queryAllByLabelText, queryAllByTestId, queryAllByText } = render(
      <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
    );

    let inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(2);

    let keys = queryAllByTestId('key');
    expect(keys.length).toBe(2);

    expect(inputs[0]).toHaveValue('Hello');
    expect(inputs[1]).toHaveValue('World');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Hello', 'World'] });

    const removeButtons = queryAllByText('Remove');
    expect(removeButtons.length).toBe(2);

    fireEvent.click(removeButtons[0]);

    inputs = queryAllByLabelText('Name');
    expect(inputs[0]).toHaveValue('World');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['World'] });

    keys = queryAllByTestId('key');
    expect(keys.length).toBe(1);

  });

  it('should update state when user deletes 2 index [ a, b, c ] ---> [ a, b ]', () => {

    const formApiRef = {};
    const initialValues = { siblings: ['Joe', 'Anthony', 'Bettina'] };

    const { queryAllByLabelText, queryAllByText } = render(
      <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
    );

    let inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(3);

    expect(inputs[0]).toHaveValue('Joe');
    expect(inputs[1]).toHaveValue('Anthony');
    expect(inputs[2]).toHaveValue('Bettina');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Joe', 'Anthony', 'Bettina'] });

    const removeButtons = queryAllByText('Remove');
    expect(removeButtons.length).toBe(3);

    fireEvent.click(removeButtons[2]);

    inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(2);
    expect(inputs[0]).toHaveValue('Joe');
    expect(inputs[1]).toHaveValue('Anthony');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Joe', 'Anthony'] });

  });

  it('should update state when user deletes 0 index [ a, b, c ] ---> [ b, c ]', () => {

    const formApiRef = {};
    const initialValues = { siblings: ['Joe', 'Anthony', 'Bettina'] };

    const { queryAllByLabelText, queryAllByText } = render(
      <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
    );

    let inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(3);

    expect(inputs[0]).toHaveValue('Joe');
    expect(inputs[1]).toHaveValue('Anthony');
    expect(inputs[2]).toHaveValue('Bettina');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Joe', 'Anthony', 'Bettina'] });

    const removeButtons = queryAllByText('Remove');
    expect(removeButtons.length).toBe(3);

    fireEvent.click(removeButtons[0]);

    inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(2);
    expect(inputs[0]).toHaveValue('Anthony');
    expect(inputs[1]).toHaveValue('Bettina');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Anthony', 'Bettina'] });

  });

  it('should update state when user deletes 1 index [ a, b, c ] ---> [ a, c ]', () => {

    const formApiRef = {};
    const initialValues = { siblings: ['Joe', 'Anthony', 'Bettina'] };

    const { queryAllByLabelText, queryAllByText } = render(
      <FlatArrayfield formApiRef={formApiRef} initialValues={initialValues}/>
    );

    let inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(3);

    expect(inputs[0]).toHaveValue('Joe');
    expect(inputs[1]).toHaveValue('Anthony');
    expect(inputs[2]).toHaveValue('Bettina');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Joe', 'Anthony', 'Bettina'] });

    const removeButtons = queryAllByText('Remove');
    expect(removeButtons.length).toBe(3);

    fireEvent.click(removeButtons[1]);

    inputs = queryAllByLabelText('Name');
    expect(inputs.length).toBe(2);
    expect(inputs[0]).toHaveValue('Joe');
    expect(inputs[1]).toHaveValue('Bettina');
    expect(formApiRef.current.getFormState().values).toEqual({ siblings: ['Joe', 'Bettina'] });

  });

});
