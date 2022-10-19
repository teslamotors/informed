import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '../jest/components';
import { SchemaFields } from '../src';

// prettier-ignore
describe('Schema', () => {

  // const validate = value => {
  //   return !value || value.length < 5
  //     ? 'Field must be at least five characters'
  //     : undefined;
  // };

  it('should pass props to input', async () => {
    const formApiRef = {};

    const schema = {
      type: 'object',
      properties: {
        greeting: {
          type: 'string',
          title: 'input1',
          'ui:control': 'input',
          'ui:props': {
            placeholder: 'Hello World',
            initialValue: 'Hello'
          }
        },
      }
    };

    const { getByLabelText } = render(
      <Form schema={schema} formApiRef={formApiRef} >
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    const input = getByLabelText('input1');

    expect(input).toHaveAttribute('name', 'greeting');
    expect(input).toHaveAttribute('placeholder', 'Hello World');
    expect(input).toHaveValue('Hello');
    expect(formApiRef.current.getFormState().values).toEqual({ greeting: 'Hello' });

    await userEvent.type(input, ' World');
  
    expect(input).toHaveValue('Hello World');
    expect(formApiRef.current.getFormState().values).toEqual({ greeting: 'Hello World' });
  });
  

  it('should update value when user types in number input', async () => {
    const formApiRef = {};

    const schema = {
      type: 'object',
      properties: {
        age: {
          type: 'number',
          title: 'input1',
          'ui:control': 'input',
          'ui:props': {
            type: 'number'
          }
        },
      }
    };

    const { getByLabelText } = render(
      <Form schema={schema} formApiRef={formApiRef} >
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    const input = getByLabelText('input1');
    await userEvent.type(input, '27');
  
    expect(input).toHaveValue(27);
    expect(formApiRef.current.getFormState().values).toEqual({ age: 27 });
  });

  it('should re evaluate conditional', async () => {
    const formApiRef = {};

    const evaluate = ({ formState, formApi }) => {
      if (!formState.values.age || formState.values.age < 16) {
        formApi.clearValue('car');
        return { disabled: true };
      }
      return { disabled: false };
    };
    
    const schema = {
      type: 'object',
      properties: {
        age: {
          type: 'number',
          title: 'Age',
          'ui:control': 'input',
          'ui:props': {
            type: 'number'
          }
        },
        car: {
          type: 'string',
          title: 'Car',
          'ui:control': 'select',
          oneOf: [
            { const: 'ms', title: 'Model S' },
            { const: 'm3', title: 'Model 3' },
            { const: 'mx', title: 'Model X' },
            { const: 'my', title: 'Model Y' }
          ],
          default: null,
          'ui:props': {
            evaluate,
            evaluateWhen: ['age']
          }
        }
      }
    };

    const { getByLabelText } = render(
      <Form schema={schema} formApiRef={formApiRef} >
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    const age = getByLabelText('Age');
    const car = getByLabelText('Car');
    await userEvent.type(age, '2');
  
    expect(age).toHaveValue(2);
    expect(car).toHaveValue(undefined);
    expect(car).toHaveAttribute('disabled');
    expect(formApiRef.current.getFormState().values).toEqual({ age: 2 });

    await userEvent.type(age, '7');
    expect(age).toHaveValue(27);
    expect(car).toHaveValue(undefined);
    expect(car).not.toHaveAttribute('disabled');
    expect(formApiRef.current.getFormState().values).toEqual({ age: 27 });

    // Select Model3 
    fireEvent.change(car, { target: { value: 'm3' } });
    expect(car).toHaveValue('m3');
    expect(formApiRef.current.getFormState().values).toEqual({ age: 27, car: 'm3' });

    // Backspace to make person 2 years old
    await userEvent.type(age, '{backspace}');
    expect(age).toHaveValue(2);
    expect(car).toHaveValue(undefined);
    expect(car).toHaveAttribute('disabled');
    expect(formApiRef.current.getFormState().values).toEqual({ age: 2 });

  });

  it('should call onChange that was passed', async () => {

    const onChange = jest.fn();

    const schema = {
      type: 'object',
      properties: {
        greeting: {
          type: 'string',
          title: 'input1',
          'ui:control': 'input',
          'ui:props': {
            onChange
          }
        },
      }
    };

    const { getByLabelText } = render(
      <Form schema={schema} >
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    const input = getByLabelText('input1');
    await userEvent.type(input, 'Hi!');
  
    expect(onChange).toHaveBeenCalled();
  });

  it('should call onBlur that was passed', () => {

    const onBlur = jest.fn();

    const schema = {
      type: 'object',
      properties: {
        greeting1: {
          type: 'string',
          title: 'input1',
          'ui:control': 'input',
          'ui:props': {
            onBlur
          }
        },
        greeting2: {
          type: 'string',
          title: 'input2',
          'ui:control': 'input',
        },
      }
    };

    const { getByLabelText } = render(
      <Form schema={schema} >
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
  
    expect(onBlur).toHaveBeenCalled();
  });

  it('should call validate that was passed on blur', () => {

    const validate = jest.fn();

    const schema = {
      type: 'object',
      properties: {
        greeting1: {
          type: 'string',
          title: 'input1',
          'ui:control': 'input',
          'ui:props': {
            validate,
            initialValue: 'Hello'
          }
        },
        greeting2: {
          type: 'string',
          title: 'input2',
          'ui:control': 'input',
        },
      }
    };

    const { getByLabelText } = render(
      <Form schema={schema} >
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
  
    expect(validate).toBeCalledWith('Hello', {greeting1: 'Hello'}, expect.anything());
  });

  it('should render a form with all types of fields', () => {

    const schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          title: 'First name',
          'ui:control': 'input'
        },
        age: {
          type: 'number',
          title: 'Age',
          'ui:control': 'input',
          'ui:props': {
            type: 'number'
          }
        },
        bio: {
          type: 'string',
          title: 'Bio',
          'ui:control': 'textarea'
        },
        authorize: {
          type: 'string',
          title: 'Authorize',
          'ui:control': 'checkbox'
        },
        color: {
          type: 'string',
          title: 'Color',
          'ui:control': 'select',
          oneOf: [
            {
              const: '',
              title: '- Select -',
              'ui:props': {
                disabled: true
              }
            },
            { const: 'red', title: 'Red' },
            { const: 'black', title: 'Black' },
            { const: 'white', title: 'White' }
          ]
        },
        model: {
          type: 'string',
          title: 'Model',
          'ui:control': 'radio',
          oneOf: [
            { const: 'ms', title: 'Model S' },
            { const: 'm3', title: 'Model 3' },
            { const: 'mx', title: 'Model X' },
            { const: 'my', title: 'Model Y' }
          ],
          default: null
        },
        cars: {
          type: 'array',
          title: 'Cars',
          'ui:control': 'select',
          'ui:props': {
            multiple: true
          },
          items: {
            oneOf: [
              { const: 'tesla', title: 'Tesla' },
              { const: 'volvo', title: 'Volvo' },
              { const: 'audi', title: 'Audi' },
              { const: 'jeep', title: 'Jeep' }
            ]
          }
        }
      }
    };
  
    const { getByLabelText, getByText, queryAllByRole } = render(
      <Form schema={schema}>
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    const name = getByLabelText('First name');
    expect(name).toHaveAttribute('name', 'name');

    const age = getByLabelText('Age');
    expect(age).toHaveAttribute('name', 'age');
    expect(age).toHaveAttribute('type', 'number');

    const bio = getByLabelText('Bio');
    expect(bio).toHaveAttribute('name', 'bio');

    const authorize = getByLabelText('Authorize');
    expect(authorize).toHaveAttribute('name', 'authorize');

    // Color Field

    const color = getByLabelText('Color');
    expect(color).toHaveAttribute('name', 'color');

    const colorOption1 = getByText('- Select -');
    const red = getByText('Red');
    const black = getByText('Black');
    const white = getByText('White');
    
    expect(colorOption1).toHaveAttribute('value', '');
    expect(red).toHaveAttribute('value', 'red');
    expect(black).toHaveAttribute('value', 'black');
    expect(white).toHaveAttribute('value', 'white');

    // Model Field

    const options = queryAllByRole('radio');
    expect(options.length).toEqual(4);

    expect(options[0]).toHaveAttribute('value', 'ms');
    expect(options[1]).toHaveAttribute('value', 'm3');
    expect(options[2]).toHaveAttribute('value', 'mx');
    expect(options[3]).toHaveAttribute('value', 'my');

    // Car Field

    const cars = getByLabelText('Cars');
    expect(cars).toHaveAttribute('name', 'cars');

    const carsOption1 = getByText('- Select -');
    const tesla = getByText('Tesla');
    const volvo = getByText('Volvo');
    const audi = getByText('Audi');
    const jeep = getByText('Jeep');
    
    expect(carsOption1).toHaveAttribute('value', '');
    expect(tesla).toHaveAttribute('value', 'tesla');
    expect(volvo).toHaveAttribute('value', 'volvo');
    expect(audi).toHaveAttribute('value', 'audi');
    expect(jeep).toHaveAttribute('value', 'jeep');

    // expect(formApiRef.current.getFormState().values).toEqual({ greeting: 'Hello' });
  
  });

  it('should render a form with all types of fields without ui:control', () => {

    const schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          title: 'First name',
        },
        age: {
          type: 'number',
          title: 'Age',
          'ui:props': {
            type: 'number'
          }
        },
        authorize: {
          type: 'boolean',
          title: 'Authorize',
        },
        color: {
          type: 'string',
          title: 'Color',
          oneOf: [
            {
              const: '',
              title: '- Select -',
              'ui:props': {
                disabled: true
              }
            },
            { const: 'red', title: 'Red' },
            { const: 'black', title: 'Black' },
            { const: 'white', title: 'White' }
          ]
        },
      }
    };
  
    const { getByLabelText, getByText } = render(
      <Form schema={schema}>
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    const name = getByLabelText('First name');
    expect(name).toHaveAttribute('name', 'name');

    const age = getByLabelText('Age');
    expect(age).toHaveAttribute('name', 'age');
    expect(age).toHaveAttribute('type', 'number');

    const authorize = getByLabelText('Authorize');
    expect(authorize).toHaveAttribute('name', 'authorize');

    // Color Field

    const color = getByLabelText('Color');
    expect(color).toHaveAttribute('name', 'color');

    const colorOption1 = getByText('- Select -');
    const red = getByText('Red');
    const black = getByText('Black');
    const white = getByText('White');
    
    expect(colorOption1).toHaveAttribute('value', '');
    expect(red).toHaveAttribute('value', 'red');
    expect(black).toHaveAttribute('value', 'black');
    expect(white).toHaveAttribute('value', 'white');

  });

  it('should conditionally render fields based on relevant prop', async () => {
    const formApiRef = {};

    const schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          title: 'First name',
          'ui:control': 'input'
        },
        married: {
          type: 'string',
          title: 'Are you married?',
          enum: ['yes', 'no'],
          'ui:control': 'radio'
        },
        spouse: {
          type: 'string',
          title: 'Spouse name',
          'ui:control': 'input',
          'ui:props': {
            relevant: ({ formState }) => {
              return formState.values.married === 'yes';
            },
            relevanceWhen: ['married'],
            keepState: true
          }
        }
      }
    };

    const { queryAllByRole, queryByLabelText } = render(
      <Form schema={schema} formApiRef={formApiRef} >
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    let spouse = queryByLabelText('Spouse name');

    // Field should NOT be there yet
    expect(spouse).toBeNull();

    const options = queryAllByRole('radio');
    expect(options.length).toEqual(2);

    expect(options[0]).toHaveAttribute('value', 'yes');
    expect(options[1]).toHaveAttribute('value', 'no');

    // Toggle on  -------------------------------------------
    fireEvent.click(options[0]);

    // Validate everything is there
    spouse = queryByLabelText('Spouse name');
    expect(spouse).not.toBeNull();
    await userEvent.type(spouse, 'Hope');
  
    expect(spouse).toHaveValue('Hope');
    expect(formApiRef.current.getFormState().values).toEqual({ married: 'yes', spouse: 'Hope' });
  });

  it('should conditionally render fields based on schema if conditions', async () => {
    const formApiRef = {};

    const schema = {
      type: 'object',
      required: ['name'],
      properties: {
        name: {
          type: 'string',
          title: 'First name',
          'ui:control': 'input'
        },
        married: {
          type: 'string',
          title: 'Are you married?',
          enum: ['yes', 'no'],
          'ui:control': 'radio'
        }
      },
      allOf: [
        {
          if: {
            properties: {
              married: { const: 'yes' }
            },
            required: ['married']
          },
          then: {
            properties: {
              spouse: {
                type: 'string',
                title: 'Spouse name',
                'ui:control': 'input'
              }
            }
          }
        }
      ]
    };

    const { queryAllByRole, queryByLabelText } = render(
      <Form schema={schema} formApiRef={formApiRef} >
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    let spouse = queryByLabelText('Spouse name');

    // Field should NOT be there yet
    expect(spouse).toBeNull();

    const options = queryAllByRole('radio');
    expect(options.length).toEqual(2);

    expect(options[0]).toHaveAttribute('value', 'yes');
    expect(options[1]).toHaveAttribute('value', 'no');

    // Toggle on  -------------------------------------------
    fireEvent.click(options[0]);

    // Validate everything is there
    spouse = queryByLabelText('Spouse name');
    expect(spouse).not.toBeNull();
    await userEvent.type(spouse, 'Hope');
  
    expect(spouse).toHaveValue('Hope');
    expect(formApiRef.current.getFormState().values).toEqual({ married: 'yes', spouse: 'Hope' });
  });

  it('should conditionally render options based on schema if conditions', () => {
    const formApiRef = {};

    const schema = {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          'ui:control': 'select',
          title: 'Would you like a car or truck?',
          oneOf: [
            { const: 'car', title: 'Car' },
            { const: 'truck', title: 'Truck' }
          ],
          'ui:props': {
            initialValue: 'car',
            'data-testid': 'select'
          }
        },
        product: {
          type: 'string',
          'ui:control': 'select',
          title: 'Product'
        }
      },
      allOf: [
        {
          if: { properties: { type: { const: 'car' } }, required: ['type'] },
          then: {
            properties: {
              product: {
                oneOf: [
                  { const: '', title: '- Select -' },
                  { const: 'modelS', title: 'Model S' },
                  { const: 'modelX', title: 'Model X' },
                  { const: 'model3', title: 'Model 3' }
                ]
              }
            }
          }
        },
        {
          if: { properties: { type: { const: 'truck' } }, required: ['type'] },
          then: {
            properties: {
              product: {
                oneOf: [
                  { const: '', title: '- Select -' },
                  { const: 'semi', title: 'Semi Truck' },
                  { const: 'cyber', title: 'Cyber Truck' }
                ]
              }
            }
          }
        }
      ]
    };

    const { getByText, getByTestId } = render(
      <Form schema={schema} formApiRef={formApiRef} >
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    const carOrTruck = getByTestId('select');

    let productOption1 = getByText('- Select -');
    let productOption2 = getByText('Model S');
    let productOption3 = getByText('Model X');
    let productOption4 = getByText('Model 3');

    expect(productOption1).toHaveAttribute('value', '');
    expect(productOption2).toHaveAttribute('value', 'modelS');
    expect(productOption3).toHaveAttribute('value', 'modelX');
    expect(productOption4).toHaveAttribute('value', 'model3');

    expect(formApiRef.current.getFormState().values).toEqual({ type: 'car' });

    // Select Truck 
    fireEvent.change(carOrTruck, { target: { value: 'truck' } });

    expect(formApiRef.current.getFormState().values).toEqual({ type: 'truck' });

    productOption1 = getByText('- Select -');
  
    productOption1 = getByText('- Select -');
    productOption2 = getByText('Semi Truck');
    productOption3 = getByText('Cyber Truck');

  });

  it('should update error messages according to schema error message', async () => {
    const formApiRef = {};

    const schema = {
      type: 'object',
      required: ['name', 'brother'],
      errorMessage: {
        required: 'You def need this field!',
        maximum: 'must be smaller than that!'
      },
      properties: {
        name: {
          type: 'string',
          title: 'First name',
          'ui:control': 'input',
        },
        brother: {
          type: 'object',
          required: ['name', 'age', 'height', 'sameError', 'weight'],
          errorMessage: {
            required: 'brothers field is required',
          },
          properties: {
            name: {
              type: 'string',
              title: 'Brother name',
              'ui:control': 'input'
            },
            age: {
              type: 'number',
              title: 'Brother age',
              'ui:control': 'input',
              'ui:props': {
                type: 'number'
              },
              errorMessage: {
                required: 'brothers age is required',
              }
            },
            height: {
              type: 'string',
              title: 'Brother height',
              'ui:control': 'input',
              'ui:props': {
                type: 'number'
              },
              maximum: 8
            },
            sameError: {
              type: 'string',
              title: 'Same error',
              'ui:control': 'input',
              errorMessage: 'Ahhh!!!!!!'
            },
            weight: {
              type: 'string',
              title: 'Brother weight',
              'ui:control': 'input',
              'ui:props': {
                type: 'number'
              },
              minimum: 80
            },
          }
        }
      }
    };

    const { getByLabelText, getByText } = render(
      <Form schema={schema} formApiRef={formApiRef} >
        <SchemaFields />
        <button type="submit">Submit</button>
      </Form>
    );

    // Submit the form to trigger validation

    const submit = getByText('Submit');
    fireEvent.click(submit);

    // const name = getByLabelText('First name');
    // const brotherName = getByLabelText('Brother name');
    // const brotherAge = getByLabelText('Brother age');
    const brotherHeight = getByLabelText('Brother height');
    // const sameError = getByLabelText('Same error');
    const brotherWeight = getByLabelText('Brother weight');

    expect(formApiRef.current.getFormState().errors).toEqual({
      name: 'You def need this field!',
      brother: {
        name: 'brothers field is required',
        age: 'brothers age is required',
        height: 'brothers field is required',
        sameError: 'Ahhh!!!!!!',
        weight: 'brothers field is required'
      }
    });

    // Trigger other validations
    await userEvent.type(brotherHeight, '9');
    await userEvent.type(brotherWeight, '70');
    
    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({
      name: 'You def need this field!',
      brother: {
        name: 'brothers field is required',
        age: 'brothers age is required',
        height: 'must be smaller than that!',
        sameError: 'Ahhh!!!!!!',
        weight: 'This field should NOT be less than 80'
      }
    });

  
  });

});
