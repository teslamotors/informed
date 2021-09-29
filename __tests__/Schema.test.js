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

});
