import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input, Checkbox } from '../../jest/components';
import { Relevant } from '../../src';

// prettier-ignore
describe('Relevant', () => {

  it('should show fields after fields become relevant and have correct state', () => {

    const formApiRef = {};

    const { queryByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Checkbox label="Show Info?" name="showInfo" />
        <Relevant
          when={({formState}) => formState.values.showInfo}>
          <Input type="number" label="Age" name="age" />
          <Input
            label="Favorite Color"
            name="color"
            keepState
          />
        </Relevant>
        <Input
          label="Favorite Food"
          name="food"
          relevant={({ formState }) => formState.values.showInfo}
        />
      </Form>
    );

    let show = queryByLabelText('Show Info?');
    let age = queryByLabelText('Age');
    let color = queryByLabelText('Favorite Color');
    let food = queryByLabelText('Favorite Food');

    expect(show).not.toBeNull();
    expect(age).toBeNull();
    expect(color).toBeNull();
    expect(food).toBeNull();

    expect(formApiRef.current.getFormState().values).toEqual({});

    // Toggle on  -------------------------------------------
    fireEvent.click(show);

    // Validate everything is there
    age = queryByLabelText('Age');
    color = queryByLabelText('Favorite Color');
    food = queryByLabelText('Favorite Food');

    expect(show).not.toBeNull();
    expect(age).not.toBeNull();
    expect(color).not.toBeNull();
    expect(food).not.toBeNull();

    // Validate the form state
    expect(formApiRef.current.getFormState().values).toEqual({ showInfo: true });

    // Enter values and make sure they get set
    userEvent.type(age, '27');
    userEvent.type(color, 'Green');
    userEvent.type(food, 'Apples');

    age = queryByLabelText('Age');
    color = queryByLabelText('Favorite Color');
    food = queryByLabelText('Favorite Food');

    // expect(show).toHaveAttribute('checked', true);
    expect(show).toBeChecked();
    expect(age).toHaveValue(27);
    expect(color).toHaveValue('Green');
    expect(food).toHaveValue('Apples');

    // Validate the form state
    expect(formApiRef.current.getFormState().values).toEqual({ 
      showInfo: true,
      age: 27,
      color: 'Green', 
      food: 'Apples'
    });

    // Toggle off -------------------------------------------
    fireEvent.click(show);

    // Validate fields are gone
    age = queryByLabelText('Age');
    color = queryByLabelText('Favorite Color');
    food = queryByLabelText('Favorite Food');

    expect(show).not.toBeNull();
    expect(age).toBeNull();
    expect(color).toBeNull();
    expect(food).toBeNull();

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

    expect(show).not.toBeNull();
    expect(age).not.toBeNull();
    expect(color).not.toBeNull();
    expect(food).not.toBeNull();

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

  });

});
