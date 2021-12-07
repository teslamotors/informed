import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input, Checkbox } from '../../jest/components';
import { Relevant } from '../../src';

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
      return formState.values.showInfo ;
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
    expect(call2).toBe(38);

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
    expect(call2).toBe(49);

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
    expect(call2).toBe(50);


  });

});
