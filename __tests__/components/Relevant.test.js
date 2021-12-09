import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input, Checkbox } from '../../jest/components';
import { Relevant, SchemaFields } from '../../src';

const RelevantComp = ({ relevant1, relevant2, formApiRef }) => {
  const [externalDep, setExternalDep] = useState('FOO');
  return (
    <Form formApiRef={formApiRef}>
      <Checkbox label="Show Info?" name="showInfo" />
      <Relevant when={({ formState }) => formState.values.showInfo}>
        <Input type="number" label="Age" name="age" />
        <Input label="Favorite Color" name="color" keepState />
      </Relevant>
      <Input
        label="Favorite Food"
        name="food"
        relevanceWhen={['showInfo']}
        relevanceDeps={[externalDep]}
        relevant={relevant1}
      />
      <Input label="Favorite Movie" name="movie" relevant={relevant2} />
      <button type="button" onClick={() => setExternalDep('BAR')}>
        Change
      </button>
    </Form>
  );
};

const SchemaFieldRelevanceComp = ({ formApiRef, schema }) => {
  return (
    <Form
      formApiRef={formApiRef}
      schema={schema}
      validateOnMount
      validateOn="change" // make it easy to test for error states, without having to blur the input
      errorMessage={{ required: 'this field is required' }} // global error message
    >
      <SchemaFields />
    </Form>
  );
};

// prettier-ignore
describe('Relevant', () => {

  it('should show fields after fields become relevant and have correct state', () => {

    const formApiRef = {};

    let call1 = 0;
    let call2 = 0;

    const relevant1 = ({ formState, relevanceDeps }) => {
      call1++;
      return formState.values.showInfo && relevanceDeps[0] !== 'BAR';
    };

    const relevant2 = ({ formState }) => {
      call2++;
      return formState.values.showInfo;
    };

    const { queryByLabelText, getByText } = render(
      <RelevantComp relevant1={relevant1} relevant2={relevant2} formApiRef={formApiRef} />
    );

    let show = queryByLabelText('Show Info?');
    let age = queryByLabelText('Age');
    let color = queryByLabelText('Favorite Color');
    let food = queryByLabelText('Favorite Food');
    let movie = queryByLabelText('Favorite Movie');

    expect(show).not.toBeNull();
    expect(age).toBeNull();
    expect(color).toBeNull();
    expect(food).toBeNull();
    expect(movie).toBeNull();

    expect(formApiRef.current.getFormState().values).toEqual({});

    // Toggle on  -------------------------------------------
    fireEvent.click(show);

    // Validate everything is there
    age = queryByLabelText('Age');
    color = queryByLabelText('Favorite Color');
    food = queryByLabelText('Favorite Food');
    movie = queryByLabelText('Favorite Movie');

    expect(show).not.toBeNull();
    expect(age).not.toBeNull();
    expect(color).not.toBeNull();
    expect(food).not.toBeNull();
    expect(movie).not.toBeNull();

    // Validate the form state
    expect(formApiRef.current.getFormState().values).toEqual({ showInfo: true });

    // Enter values and make sure they get set
    userEvent.type(age, '27');
    userEvent.type(color, 'Green');
    userEvent.type(food, 'Apples');
    userEvent.type(movie, 'StarWars');

    age = queryByLabelText('Age');
    color = queryByLabelText('Favorite Color');
    food = queryByLabelText('Favorite Food');
    movie = queryByLabelText('Favorite Movie');

    // expect(show).toHaveAttribute('checked', true);
    expect(show).toBeChecked();
    expect(age).toHaveValue(27);
    expect(color).toHaveValue('Green');
    expect(food).toHaveValue('Apples');
    expect(movie).toHaveValue('StarWars');

    // Validate the form state
    expect(formApiRef.current.getFormState().values).toEqual({
      showInfo: true,
      age: 27,
      color: 'Green',
      food: 'Apples',
      movie: 'StarWars'
    });

    // Check calls on relevance
    expect(call1).toBe(3);
    expect(call2).toBe(39);

    // Toggle off -------------------------------------------
    fireEvent.click(show);

    // Validate fields are gone
    age = queryByLabelText('Age');
    color = queryByLabelText('Favorite Color');
    food = queryByLabelText('Favorite Food');
    movie = queryByLabelText('Favorite Movie');

    expect(show).not.toBeNull();
    expect(age).toBeNull();
    expect(color).toBeNull();
    expect(food).toBeNull();
    expect(movie).toBeNull();

    // Validate the form state
    expect(formApiRef.current.getFormState().values).toEqual({
      showInfo: false,
      color: 'Green', // <<< this had saved state !!!
    });

    // Toggle on  -------------------------------------------
    fireEvent.click(show);

    // Validate everything is there
    age = queryByLabelText('Age');
    color = queryByLabelText('Favorite Color');
    food = queryByLabelText('Favorite Food');
    movie = queryByLabelText('Favorite Movie');

    expect(show).not.toBeNull();
    expect(age).not.toBeNull();
    expect(color).not.toBeNull();
    expect(food).not.toBeNull();
    expect(movie).not.toBeNull();

    // Validate the form state
    expect(formApiRef.current.getFormState().values).toEqual({
      showInfo: true,
      color: 'Green',
    });

    // expect(show).toHaveAttribute('checked', true);
    expect(show).toBeChecked();
    expect(age).not.toHaveValue(27);
    expect(color).toHaveValue('Green');
    expect(food).not.toHaveValue('Apples');
    expect(movie).not.toHaveValue('StarWars');

    // Check calls on relevance
    expect(call1).toBe(5);
    expect(call2).toBe(52);

    // Toggle external dep  -------------------------------------------

    const button = getByText('Change');
    fireEvent.click(button);

    // Validate everything is there
    age = queryByLabelText('Age');
    color = queryByLabelText('Favorite Color');
    food = queryByLabelText('Favorite Food');
    movie = queryByLabelText('Favorite Movie');

    expect(show).not.toBeNull();
    expect(age).not.toBeNull();
    expect(color).not.toBeNull();
    expect(food).toBeNull();
    expect(movie).not.toBeNull();

    // Validate the form state
    expect(formApiRef.current.getFormState().values).toEqual({
      showInfo: true,
      color: 'Green',
    });

    // expect(show).toHaveAttribute('checked', true);
    expect(show).toBeChecked();
    expect(age).not.toHaveValue(27);
    expect(color).toHaveValue('Green');
    expect(movie).not.toHaveValue('StarWars');

    // Check calls on relevance
    expect(call1).toBe(6);
    expect(call2).toBe(53);
  });

  it('should update form state when a relevant field with errors unmounts', () => {
    const schema = {
      type: 'object',
      required: ['field_1'],
      properties: {
        field_1: {
          title: 'Regular Input',
          'ui:control': 'input',
          'ui:props': {
            type: 'number',
          },
        },
        field_2: {
          type: 'number',
          title: 'Conditional Input',
          'ui:control': 'input',
          'ui:props': {
            type: 'number',
            relevant: ({ formState }) => {
              return formState.values.field_1 > 1;
            },
            validate: (value) => {
              if (!value) {
                return 'this conditional field is required';
              }
              return undefined;
            }
          }
        }
      }
    };
    const formApiRef = {};

    const { queryByLabelText } = render(
      <SchemaFieldRelevanceComp formApiRef={formApiRef} schema={schema} />
    );

    let regularInput = queryByLabelText('Regular Input');
    let hiddenInput = queryByLabelText('Conditional Input');

    expect(regularInput).not.toBeNull();
    expect(hiddenInput).toBeNull();

    expect(formApiRef.current.getFormState().valid).toEqual(false);
    expect(formApiRef.current.getFormState().errors).toEqual({ field_1: 'this field is required' });

    // Simulate inputting "3" in the regular field. This should SHOW the condtional field
    fireEvent.change(regularInput, { target: { value: '3' } });

    regularInput = queryByLabelText('Regular Input');
    hiddenInput = queryByLabelText('Conditional Input');

    expect(regularInput).not.toBeNull();
    expect(hiddenInput).not.toBeNull(); // condtional field should be relevant now, expect to find it

    expect(formApiRef.current.getFormState().valid).toEqual(false);
    expect(formApiRef.current.getFormState().errors).toEqual({
      field_2: 'this conditional field is required',
    });

    // Simulate inputting "1" in the regular field. This should HIDE the condtional field
    fireEvent.change(regularInput, { target: { value: '1' } });
    regularInput = queryByLabelText('Regular Input');
    hiddenInput = queryByLabelText('Conditional Input');

    expect(regularInput).not.toBeNull();
    expect(hiddenInput).toBeNull(); // conditional field should be hidden now

    expect(formApiRef.current.getFormState().valid).toEqual(true);
    expect(formApiRef.current.getFormState().errors).toEqual({});
  });
});
