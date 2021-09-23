import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '../../jest/components';

// prettier-ignore
describe('useField', () => {

  const validate = value => {
    return !value || value.length < 5
      ? 'Field must be at least five characters'
      : undefined;
  };

  it('should update value when user types', () => {
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

  it('placeholder should end up on input', () => {

    const { getByLabelText } = render(
      <Form>
        <Input name="greeting" label="input1" placeholder="Hello World"/>
      </Form>
    );

    const input = getByLabelText('input1');

    expect(input).toHaveAttribute('placeholder', 'Hello World');
  });

  it('id should end up on input', () => {

    const { getByLabelText } = render(
      <Form>
        <Input name="greeting" label="input1" id="1234567"/>
      </Form>
    );

    const input = getByLabelText('input1');

    expect(input).toHaveAttribute('id', '1234567');
  });

  it('should show error message when validation error occurs', () => {
    const { getByLabelText, getByText }  = render(
      <Form>
        <Input name="greeting"  label="input1" validateOnChange validate={validate} />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, 'Hi!');
    expect(getByText('Field must be at least five characters')).toBeInTheDocument();
  });

  it('should update value when user types in number input', () => {
    const formApiRef = {};

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input type="number" name="age" label="input1" />
      </Form>
    );

    const input = getByLabelText('input1');
    userEvent.type(input, '27');
  
    expect(input).toHaveValue(27);
    expect(formApiRef.current.getFormState().values).toEqual({ age: 27 });
  });

  it('should call onChange that was passed', () => {

    const onChange = jest.fn();

    const { getByLabelText } = render(
      <Form>
        <Input name="greeting" label="input1" onChange={onChange} />
      </Form>
    );

    const input = getByLabelText('input1');
    userEvent.type(input, 'Hi!');
  
    expect(onChange).toHaveBeenCalled();
  });

  it('should call onBlur that was passed', () => {

    const onBlur = jest.fn();

    const { getByLabelText } = render(
      <Form>
        <Input name="greeting1" label="input1" onBlur={onBlur} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
  
    expect(onBlur).toHaveBeenCalled();
  });

  it('should set the initial value', () => {
    const formApiRef = {};

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" initialValue="Hello" />
      </Form>
    );

    const input = getByLabelText('input1');
  
    expect(input).toHaveAttribute('value', 'Hello');
    expect(input).toHaveValue('Hello');
    expect(formApiRef.current.getFormState().values).toEqual({ greeting: 'Hello' });
  });

  it('should run formatter and parser when user types', () => {
    const formApiRef = {};

    const formatter = [
      '+',
      '1',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ];
  
    const parser = value => {
      return value.replace('+1 ', '').replace(/-/g, '');
    };

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="phone" label="input1" formatter={formatter} parser={parser} />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, '1');  
    expect(input).toHaveValue('+1 1');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '1' });

    userEvent.type(input, '2');  
    expect(input).toHaveValue('+1 12');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '12' });

    userEvent.type(input, '3');  
    expect(input).toHaveValue('+1 123');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '123' });

    userEvent.type(input, '4');  
    expect(input).toHaveValue('+1 123-4');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '1234' });
  });

  it('should run formatter and parser when user types +1 1', () => {
    const formApiRef = {};

    const formatter = '+1 ###-###-####';
  
    const parser = value => {
      return value.replace('+1 ', '').replace(/-/g, '');
    };

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="phone" label="input1" formatter={formatter} parser={parser} />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, '+1 1');  
    expect(input).toHaveValue('+1 1');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '1' });
  });

  it('should run formatter and parser when user types "+1 123a"', () => {
    const formApiRef = {};

    const formatter = '+1 ###-###-####';
  
    const parser = value => {
      return value.replace('+1 ', '').replace(/-/g, '');
    };

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="phone" label="input1" formatter={formatter} parser={parser} />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, '+1 123a');  
    expect(input).toHaveValue('+1 123-');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '123' });
  });

  it('should run formatter and parser when user types "+1 123abc"', () => {
    const formApiRef = {};

    const formatter = '+1 ###-###-####';
  
    const parser = value => {
      return value.replace('+1 ', '').replace(/-/g, '');
    };

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="phone" label="input1" formatter={formatter} parser={parser} />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, '+1 123abc');  
    expect(input).toHaveValue('+1 123-');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '123' });
  });

  it('should run formatter when user types and only formatter is passed', () => {
    const formApiRef = {};

    const formatter = '+1 ###-###-####';

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="phone" label="input1" formatter={formatter} />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, '1');  
    expect(input).toHaveValue('+1 1');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '+1 1' });

    userEvent.type(input, '2');  
    expect(input).toHaveValue('+1 12');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '+1 12' });

    userEvent.type(input, '3');  
    expect(input).toHaveValue('+1 123');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '+1 123' });

    userEvent.type(input, '4');  
    expect(input).toHaveValue('+1 123-4');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '+1 123-4' });
  });

  it('should run formatter on initial value', () => {
    const formApiRef = {};

    const formatter = '+1 ###-###-####';

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="phone" label="input1" formatter={formatter} initialValue="1231231234" />
      </Form>
    );

    const input = getByLabelText('input1');

    expect(input).toHaveValue('+1 123-123-1234');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '+1 123-123-1234' });
  });

  it('should run formatter and parser on initial value', () => {
    const formApiRef = {};

    const parser = value => {
      return value.replace('+1 ', '').replace(/-/g, '');
    };

    const formatter = '+1 ###-###-####';

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="phone" label="input1" formatter={formatter} parser={parser} initialValue="1231231234" />
      </Form>
    );

    const input = getByLabelText('input1');

    expect(input).toHaveValue('+1 123-123-1234');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '1231231234' });
  });

  it('should run formatter on initial values', () => {
    const formApiRef = {};

    const formatter = '+1 ###-###-####';

    const { getByLabelText } = render(
      <Form
        initialValues={{
          phone: '1231231234'
        }}
        formApiRef={formApiRef}>
        <Input name="phone" label="input1" formatter={formatter} />
      </Form>
    );

    const input = getByLabelText('input1');

    expect(input).toHaveValue('+1 123-123-1234');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '+1 123-123-1234' });
  });

  it('should run formatter and parser on initial values', () => {
    const formApiRef = {};

    const parser = value => {
      return value.replace('+1 ', '').replace(/-/g, '');
    };

    const formatter = '+1 ###-###-####';

    const { getByLabelText } = render(
      <Form
        initialValues={{
          phone: '1231231234'
        }}
        formApiRef={formApiRef}>
        <Input name="phone" label="input1" formatter={formatter} parser={parser} />
      </Form>
    );

    const input = getByLabelText('input1');

    expect(input).toHaveValue('+1 123-123-1234');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: '1231231234' });
  });

  it('should run formatter with functions', () => {
    const formApiRef = {};

    const mask = value => value.toUpperCase();

    const formatter = [
      mask,
      mask,
      '-',
      mask,
      mask,
      '-',
      mask,
      mask,
      mask,
      mask
    ];

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="phone" label="input1" formatter={formatter} initialValue="abcdefg" />
      </Form>
    );

    const input = getByLabelText('input1');

    expect(input).toHaveValue('AB-CD-EFG');
    expect(formApiRef.current.getFormState().values).toEqual({ phone: 'AB-CD-EFG' });
  });

  it('should update props when they change', () => {
    const formApiRef = {};

    const Component = () => {
      const [props, setProps] = useState({ placeholder: 'Hello', disabled: true });

      return (
        <Form formApiRef={formApiRef}>
          <Input name="foo" label="input1" {...props}/>
          <button type="button" onClick={() => setProps({
            placeholder: 'World', disabled: false
          })}>
            Change
          </button>
        </Form>
      );
    };

    const { getByLabelText, getByText } = render(
      <Component />
    );

    const input = getByLabelText('input1');
  
    expect(input).toHaveAttribute('name', 'foo');
    expect(input).toHaveAttribute('placeholder', 'Hello');
    expect(input).toHaveAttribute('disabled');

    const button = getByText('Change');
    fireEvent.click(button);

    expect(input).toHaveAttribute('name', 'foo');
    expect(input).toHaveAttribute('placeholder', 'World');
    expect(input).not.toHaveAttribute('disabled');

  });


  it('should update formatter when it changes', () => {
    const formApiRef = {};

    const Component = () => {
      const [formatter, setFormatter] = useState('###-###-###-###');

      return (
        <Form formApiRef={formApiRef} >
          <Input 
            name="foo" 
            label="input1" 
            initialValue="123123456456" 
            formatterDependencies={[formatter]} 
            formatter={formatter}/>
          <button type="button" onClick={() => setFormatter('######-######')}>
            Change
          </button>
        </Form>
      );
    };

    const { getByLabelText, getByText } = render(
      <Component />
    );

    const input = getByLabelText('input1');
  
    expect(input).toHaveValue('123-123-456-456');

    const button = getByText('Change');
    fireEvent.click(button);

    expect(input).toHaveValue('123123-456456');

  });


  it('should update state when field name changes', () => {
    const formApiRef = {};

    const Component = () => {
      const [field, setField] = useState('foo');

      return (
        <Form formApiRef={formApiRef}>
          <Input name={field} label="input1" />
          <button type="button" onClick={() => setField('bar')}>
            Change
          </button>
        </Form>
      );
    };

    const { getByLabelText, getByText } = render(
      <Component />
    );

    const input = getByLabelText('input1');
    userEvent.type(input, 'Hello');
  
    expect(input).toHaveAttribute('value', 'Hello');
    expect(input).toHaveAttribute('name', 'foo');
    expect(input).toHaveValue('Hello');
    expect(formApiRef.current.getFormState().values).toEqual({ foo: 'Hello' });

    const button = getByText('Change');
    fireEvent.click(button);

    expect(input).toHaveAttribute('value', '');
    expect(input).toHaveAttribute('name', 'bar');
    expect(input).toHaveValue('');
    expect(formApiRef.current.getFormState().values).toEqual({ foo: 'Hello' });

    userEvent.type(input, 'World!');

    expect(input).toHaveAttribute('value', 'World!');
    expect(input).toHaveAttribute('name', 'bar');
    expect(input).toHaveValue('World!');
    expect(formApiRef.current.getFormState().values).toEqual({ foo: 'Hello', bar: 'World!' });
  });

  // * 1. Hide and show relevant field with relevant prop
  // it('should hide and show relevant field with relevant prop', () => {
  //   const formApiRef = {};

  //   const { getByLabelText } = render(
  //     <Form
  //       formApiRef={formApiRef}>
  //       <Input name="greeting" label="input1" />
  //     </Form>
  //   );

  //   const input = getByLabelText('input1');
  //   userEvent.type(input, 'Hi!');
  
  //   expect(input).toHaveAttribute('value', 'Hi!');
  //   expect(input).toHaveValue('Hi!');
  //   expect(formApiRef.current.getFormState().values).toEqual({ greeting: 'Hi!' });
  // });

  // * 2. Hide and show relevant field with relevant prop and keep state
  // * 3. Hide and show field wrapped in relevant
  // * 4. Hide and show field wrapped in relevant with keep state
  // * 5. Do 1 - 4 within a multistep step
  // * 6. Multisteps should maintain state between stesps
  // * 7. Reset should reset normal fields
  // * 8. Reset should reset array fields
  // * 9. Array field reset should reset array field
  // * 10. Removing a field from an array field then adding a new one back should NOT use initial value
  // * 11. Test 1 - 4 within an array field
  // * 12. Removing a field from the end of an array field should maintain state
  // * 13. 12 But also have 1-4 where relevance is true
  // * 14. Do 12 and 13 but remove a field from the middle of the array instead of end
  // * 15. Swap two fields within an array field
  // * 16. Do 15 But also with 1-4 where relevance is true
  // * 17. Perform validation
  // * 18. Ability to control form from outside the form
  // * 19. Ability to render a form without a `form`

});
