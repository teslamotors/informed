import React from 'react';
import { render } from '@testing-library/react';
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

  it('should pass props to input', () => {
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

    userEvent.type(input, ' World');
  
    expect(input).toHaveValue('Hello World');
    expect(formApiRef.current.getFormState().values).toEqual({ greeting: 'Hello World' });
  });
  

  it('should update value when user types in number input', () => {
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
    userEvent.type(input, '27');
  
    expect(input).toHaveValue(27);
    expect(formApiRef.current.getFormState().values).toEqual({ age: 27 });
  });

  it('should call onChange that was passed', () => {

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
    userEvent.type(input, 'Hi!');
  
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
  
    expect(validate).toBeCalledWith('Hello', {greeting1: 'Hello'});
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

  


});
