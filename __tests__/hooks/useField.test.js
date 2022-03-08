import React, { useState } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input } from '../../jest/components';
import { utils } from '../../src';

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
  
    expect(onChange).toHaveBeenCalledWith({
      value: 'Hi!',
      maskedValue: 'Hi!',
      error: undefined,
      touched: false,
      pristine: false,
      dirty: true,
      valid: true, 
      invalid: false,
      showError: false,
      validating: false,
      focused: true,
    }, expect.anything());

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
  
    expect(onBlur).toHaveBeenCalledWith({
      value: undefined,
      maskedValue: undefined,
      error: undefined,
      touched: true,
      pristine: true,
      dirty: false,
      valid: true, 
      invalid: false,
      showError: false,
      validating: false,
      focused: true,
    }, expect.anything());
  });

  it('should call onFocus that was passed', () => {

    const onFocus = jest.fn();

    const { getByLabelText } = render(
      <Form>
        <Input name="greeting1" label="input1" onFocus={onFocus} />
      </Form>
    );

    const input1 = getByLabelText('input1');
    input1.focus();
  
    expect(onFocus).toHaveBeenCalledWith({
      value: undefined,
      maskedValue: undefined,
      error: undefined,
      touched: false,
      pristine: true,
      dirty: false,
      valid: true, 
      invalid: false,
      showError: false,
      validating: false,
      focused: true,
    }, expect.anything());
  });

  it('should call validate that was passed on blur', () => {

    const validate = jest.fn();

    const { getByLabelText } = render(
      <Form>
        <Input 
          name="greeting1" 
          label="input1" 
          initialValue="Hello"
          validate={validate} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
  
    expect(validate).toBeCalledWith('Hello', {greeting1: 'Hello'});
  });

  it('should call validate that was passed on blur and be in error state even when "" is returned', () => {

    const validate = () => '';

    const formApiRef = {};

    const { getByLabelText } = render(
      <Form formApiRef={formApiRef} >
        <Input 
          name="greeting1" 
          label="input1" 
          initialValue="Hello"
          validate={validate} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting1: '' });
  });

  it('should NOT call validate that was passed on blur when validateOn="submit" at field level', () => {

    const validate = jest.fn();

    const { getByLabelText } = render(
      <Form>
        <Input 
          name="greeting1" 
          label="input1" 
          initialValue="Hello"
          validateOn="submit"
          validate={validate} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
  
    expect(validate).not.toBeCalledWith('Hello', {greeting1: 'Hello'});
  });

  it('should NOT call validate that was passed on blur when validateOn="submit" at form level', () => {

    const validate = jest.fn();

    const { getByLabelText } = render(
      <Form validateOn="submit">
        <Input 
          name="greeting1" 
          label="input1" 
          initialValue="Hello"
          validate={validate} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
  
    expect(validate).not.toBeCalledWith('Hello', {greeting1: 'Hello'});
  });

  it('should call validate that was passed on blur when validateOn="change" at field level', () => {

    const validate = jest.fn();

    const { getByLabelText } = render(
      <Form>
        <Input 
          name="greeting1" 
          label="input1" 
          validateOn="change"
          initialValue="Hello"
          validate={validate} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
  
    expect(validate).toBeCalledWith('Hello', {greeting1: 'Hello'});
  });

  it('should call validate that was passed on blur when validateOn="change" at form level', () => {

    const validate = jest.fn();

    const { getByLabelText } = render(
      <Form validateOn="change">
        <Input 
          name="greeting1" 
          label="input1" 
          initialValue="Hello"
          validate={validate} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
  
    expect(validate).toBeCalledWith('Hello', {greeting1: 'Hello'});
  });


  // TODO maybe need ? 
  // const getAsyncValidate = (done) => {
  //   return  username => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         // Simulate username check
  //         if (['joe', 'tanner', 'billy', 'bob'].includes(username)) {
  //           resolve('That username is taken');
  //           done();
  //           return;
  //         }
  //         // Simulate request faulure
  //         if (username === 'reject') {
  //           reject(new Error('Unable to validate username.'));
  //           done();
  //           return;
  //         }
  //         console.log('HERE');
  //         resolve();
  //         done();
  //         return;
  //       }, 2000);
  //     });
  //   };
  // };

  it('should call validateAsync that was passed on blur', async () => {

    const validate = jest.fn();
    const asyncValidate = jest.fn().mockResolvedValue();

    const { getByLabelText } = render(
      <Form>
        <Input 
          name="greeting1" 
          label="input1" 
          initialValue="Hello"
          asyncValidate={asyncValidate}
          validate={validate} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
    

    await waitFor(() => expect(asyncValidate).toHaveBeenCalledTimes(1));
  
    expect(validate).toBeCalledWith('Hello', {greeting1: 'Hello'});
    expect(asyncValidate).toBeCalledWith('Hello', {greeting1: 'Hello'});
  });

  it('should call validateAsync that was passed on blur when validateOn="change"', async () => {

    const validate = jest.fn();
    const asyncValidate = jest.fn().mockResolvedValue();

    const { getByLabelText } = render(
      <Form>
        <Input 
          name="greeting1" 
          label="input1" 
          initialValue="Hello"
          validateOn="change"
          asyncValidate={asyncValidate}
          validate={validate} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
    

    await waitFor(() => expect(asyncValidate).toHaveBeenCalledTimes(1));
  
    expect(validate).toBeCalledWith('Hello', {greeting1: 'Hello'});
    expect(asyncValidate).toBeCalledWith('Hello', {greeting1: 'Hello'});
  });

  it('should NOT call validateAsync that was passed on blur when validateOn="submit"', async () => {

    const validate = jest.fn();
    const asyncValidate = jest.fn().mockResolvedValue();

    const { getByLabelText } = render(
      <Form>
        <Input 
          name="greeting1" 
          label="input1" 
          initialValue="Hello"
          validateOn="submit"
          asyncValidate={asyncValidate}
          validate={validate} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
    

    await waitFor(() => expect(asyncValidate).toHaveBeenCalledTimes(0));
  
    expect(validate).not.toBeCalledWith('Hello', {greeting1: 'Hello'});
    expect(asyncValidate).not.toBeCalledWith('Hello', {greeting1: 'Hello'});
  });

  it('should NOT call validateAsync that was passed on blur when validateOn="change-submit"', async () => {

    const validate = jest.fn();
    const asyncValidate = jest.fn().mockResolvedValue();

    const { getByLabelText } = render(
      <Form>
        <Input 
          name="greeting1" 
          label="input1" 
          initialValue="Hello"
          validateOn="change-submit"
          asyncValidate={asyncValidate}
          validate={validate} />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();
    

    await waitFor(() => expect(asyncValidate).toHaveBeenCalledTimes(0));
  
    expect(validate).toBeCalledWith('Hello', {greeting1: 'Hello'});
    expect(asyncValidate).not.toBeCalledWith('Hello', {greeting1: 'Hello'});
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

  it('should run intl formatter and parser when user types', () => {
    const formApiRef = {};

    const { formatter, parser } = utils.createIntlNumberFormatter('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="number" label="input1" formatter={formatter} parser={parser} />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, '-');  
    expect(input).toHaveValue('-');
    expect(formApiRef.current.getFormState().values).toEqual({ number: NaN });
    expect(formApiRef.current.getFormState().maskedValues).toEqual({ number: '-' });

    userEvent.type(input, '3');  
    expect(input).toHaveValue('-$3');
    expect(formApiRef.current.getFormState().values).toEqual({ number: -3 });
    expect(formApiRef.current.getFormState().maskedValues).toEqual({ number: '-$3' });

    userEvent.type(input, '0');  
    expect(input).toHaveValue('-$30');
    expect(formApiRef.current.getFormState().values).toEqual({ number: -30 });
    expect(formApiRef.current.getFormState().maskedValues).toEqual({ number: '-$30' });

    userEvent.type(input, '0');  
    expect(input).toHaveValue('-$300');
    expect(formApiRef.current.getFormState().values).toEqual({ number: -300 });
    expect(formApiRef.current.getFormState().maskedValues).toEqual({ number: '-$300' });

    userEvent.type(input, '0');  
    expect(input).toHaveValue('-$3,000');
    expect(formApiRef.current.getFormState().values).toEqual({ number: -3000 });
    expect(formApiRef.current.getFormState().maskedValues).toEqual({ number: '-$3,000' });

    userEvent.type(input, '.');  
    expect(input).toHaveValue('-$3,000.');
    expect(formApiRef.current.getFormState().values).toEqual({ number: -3000 });
    expect(formApiRef.current.getFormState().maskedValues).toEqual({ number: '-$3,000.' });

    userEvent.type(input, '2');  
    expect(input).toHaveValue('-$3,000.2');
    expect(formApiRef.current.getFormState().values).toEqual({ number: -3000.2 });
    expect(formApiRef.current.getFormState().maskedValues).toEqual({ number: '-$3,000.2' });

    userEvent.type(input, '5');  
    expect(input).toHaveValue('-$3,000.25');
    expect(formApiRef.current.getFormState().values).toEqual({ number: -3000.25 });
    expect(formApiRef.current.getFormState().maskedValues).toEqual({ number: '-$3,000.25' });


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

  /* ----------------------------------- Error Tests ----------------------------------- */

  it('should show error message when blurred by default', () => {
    const { getByLabelText, getByText }  = render(
      <Form>
        <Input 
          name="greeting"  
          label="input1" 
          validate={validate} />
        <Input 
          name="greeting2"  
          label="input2"/>
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');

    userEvent.type(input1, 'Hi!');
    input2.focus();

    expect(getByText('Field must be at least five characters')).toBeInTheDocument();
  });

  it('should NOT show error message when blurred and showErrorIfTouched={false} at field level', () => {
    const { getByLabelText, queryByText }  = render(
      <Form>
        <Input 
          name="greeting"  
          label="input1" 
          showErrorIfTouched={false}
          validate={validate} />
        <Input 
          name="greeting2"  
          label="input2"/>
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');

    userEvent.type(input1, 'Hi!');
    input2.focus();

    expect(queryByText('Field must be at least five characters')).not.toBeInTheDocument();
  });

  it('should NOT show error message when blurred and showErrorIfTouched={false} at form level', () => {
    const { getByLabelText, queryByText }  = render(
      <Form showErrorIfTouched={false}>
        <Input 
          name="greeting"  
          label="input1" 
          validate={validate} />
        <Input 
          name="greeting2"  
          label="input2"/>
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');

    userEvent.type(input1, 'Hi!');
    input2.focus();

    expect(queryByText('Field must be at least five characters')).not.toBeInTheDocument();
  });

  it('should show error message when submitted by default', () => {
    const { getByText }  = render(
      <Form>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="Hi!"
          validate={validate} />
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(getByText('Field must be at least five characters')).toBeInTheDocument();
  });

  it('should NOT show error message when blurred and form validateOn="submit"', () => {

    const formApiRef = {};

    const { getByLabelText, queryByText }  = render(
      <Form validateOn="submit" formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          validate={validate} />
        <Input 
          name="greeting2"  
          label="input2"/>
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');

    userEvent.type(input1, 'Hi!');
    input2.focus();

    expect(formApiRef.current.getFormState().errors).toEqual({});

    expect(queryByText('Field must be at least five characters')).not.toBeInTheDocument();
  });

  it('should show error message when blurred and form validateOn="submit" when submitted', () => {

    const formApiRef = {};

    const { getByLabelText, queryByText, getByText }  = render(
      <Form validateOn="submit" formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          validate={validate} />
        <Input 
          name="greeting2"  
          label="input2"/>
        <button type="submit">Submit</button>
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');

    userEvent.type(input1, 'Hi!');
    input2.focus();

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'Field must be at least five characters' });

    expect(queryByText('Field must be at least five characters')).toBeInTheDocument();
  });

  it('should NOT show error message when rendered with validateOnMount at field', () => {

    const formApiRef = {};

    const { queryByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="Hi!"
          validateOnMount
          validate={validate} />
        <button type="submit">Submit</button>
      </Form>
    );

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'Field must be at least five characters' });

    expect(queryByText('Field must be at least five characters')).not.toBeInTheDocument();
  });

  it('should show error message when rendered with validateOnMount and showErrorIfError at field', () => {

    const formApiRef = {};

    const { queryByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="Hi!"
          showErrorIfError
          validateOnMount
          validate={validate} />
        <button type="submit">Submit</button>
      </Form>
    );

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'Field must be at least five characters' });

    expect(queryByText('Field must be at least five characters')).toBeInTheDocument();
  });

  it('should show error message when rendered with validateOnMount and showErrorIfError at field with required prop and no initial value', () => {

    const formApiRef = {};

    const { queryByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          required
          showErrorIfError
          validateOnMount
          validate={validate} />
        <button type="submit">Submit</button>
      </Form>
    );

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field is required' });

    expect(queryByText('This field is required')).toBeInTheDocument();
  });

  it('should call validate with initial values when validateOnMount is passed', () => {

    const validateSpy = jest.fn();

    render(
      <Form initialValues={{greeting: 'Hello!'}}>
        <Input name="greeting" label="input1" validate={validateSpy} validateOnMount/>
      </Form>
    );
  
    expect(validateSpy).toHaveBeenCalledWith('Hello!', {greeting: 'Hello!'});

  });

  it('should call validate with initial value when validateOnMount is passed', () => {

    const validateSpy = jest.fn();

    render(
      <Form>
        <Input name="greeting" label="input1" initialValue="Hello!" validate={validateSpy} validateOnMount/>
      </Form>
    );
  
    expect(validateSpy).toHaveBeenCalledWith('Hello!', {greeting: 'Hello!'});

  });

  it('should call validate with sibling initial value when validateOnMount is passed', () => {

    let value = null;
    let values = null;
    const validateSpy = (v, vs) =>  {
      value = v;
      values = JSON.stringify(vs);
    };

    render(
      <Form>
        <Input name="greeting1" label="input1" initialValue="Hello" validate={validateSpy} validateOnMount validateWhen={['greeting2']} />
        <Input name="greeting2" label="input1" initialValue="World" validateOnMount/>
      </Form>
    );
  
    expect(value).toEqual('Hello');
    expect(values).toEqual(JSON.stringify({ greeting1: 'Hello', greeting2: 'World' }));

  });

  it('should NOT show error message when rendered with validateOnMount at form', () => {

    const formApiRef = {};

    const { queryByText }  = render(
      <Form formApiRef={formApiRef} validateOnMount>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="Hi!"
          validate={validate} />
        <button type="submit">Submit</button>
      </Form>
    );

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'Field must be at least five characters' });

    expect(queryByText('Field must be at least five characters')).not.toBeInTheDocument();
  });

  it('should show error message when rendered with validateOnMount at form and showErrorIfError at field', () => {

    const formApiRef = {};

    const { queryByText }  = render(
      <Form formApiRef={formApiRef} validateOnMount>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="Hi!"
          showErrorIfError
          validate={validate} />
        <button type="submit">Submit</button>
      </Form>
    );

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'Field must be at least five characters' });

    expect(queryByText('Field must be at least five characters')).toBeInTheDocument();
  });

  it('should show error message when rendered with validateOnMount at form and showErrorIfError at form', () => {

    const formApiRef = {};

    const { queryByText }  = render(
      <Form formApiRef={formApiRef} validateOnMount showErrorIfError>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="Hi!"
          validate={validate} />
        <button type="submit">Submit</button>
      </Form>
    );

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'Field must be at least five characters' });

    expect(queryByText('Field must be at least five characters')).toBeInTheDocument();
  });

  it('should NOT show error message when validateOn="change" and its only been changed', () => {
    const formApiRef = {};

    const { getByLabelText, queryByText }  = render(
      <Form formApiRef={formApiRef} >
        <Input 
          name="greeting"  
          label="input1" 
          validateOn="change" 
          validate={validate} />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, 'Hi!');

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'Field must be at least five characters' });

    expect(queryByText('Field must be at least five characters')).not.toBeInTheDocument();
  });

  it('should show error message when validateOn="change" + showErrorIfDirty at field', () => {
    const { getByLabelText, getByText }  = render(
      <Form>
        <Input 
          name="greeting"  
          label="input1" 
          validateOn="change"
          showErrorIfDirty 
          validate={validate} />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, 'Hi!');
    expect(getByText('Field must be at least five characters')).toBeInTheDocument();
  });

  it('should show error message when validateOn="change" + showErrorIfDirty at form', () => {
    const { getByLabelText, getByText }  = render(
      <Form validateOn="change" showErrorIfDirty >
        <Input 
          name="greeting"  
          label="input1" 
          validate={validate} />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, 'Hi!');
    expect(getByText('Field must be at least five characters')).toBeInTheDocument();
  });

  it('should show required error message after required prop changes', () => {

    const formApiRef = {};

    const Comp = () => {
      const [required, setRequired] = useState(false);
      return (
        <>
          <Form formApiRef={formApiRef}>
            <Input 
              name="greeting"  
              label="input1" 
              required={required} />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setRequired(true)}>
              Change
            </button>
          </Form>
        </>
      );
    };

    const { getByText }  = render(
      <Comp />
    );

    const submit = getByText('Submit');
    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({});

    // act(()=>{
    const button = getByText('Change');
    fireEvent.click(button);
    // });

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field is required' });
    expect(getByText('This field is required')).toBeInTheDocument();
  });

  it('should show correct default required error message', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          required />
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field is required' });
    expect(getByText('This field is required')).toBeInTheDocument();
  });

  it('should show correct required error message when string is passed', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          required="MUST ENTER!" />
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'MUST ENTER!' });
    expect(getByText('MUST ENTER!')).toBeInTheDocument();
  });

  it('should show correct required error message when errorMessage object is passed', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          required
          errorMessage={{
            required: 'MUST ENTER!'
          }}/>
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'MUST ENTER!' });
    expect(getByText('MUST ENTER!')).toBeInTheDocument();
  });

  it('should show correct required error message when errorMessage object is passed to form', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef} errorMessage={{
        required: 'MUST ENTER!'
      }}>
        <Input 
          name="greeting"  
          label="input1" 
          required />
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'MUST ENTER!' });
    expect(getByText('MUST ENTER!')).toBeInTheDocument();
  });

  it('should show correct required error message when errorMessage string is passed', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          required
          errorMessage="MUST ENTER!"/>
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'MUST ENTER!' });
    expect(getByText('MUST ENTER!')).toBeInTheDocument();
  });

  it('should show correct default pattern error message', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="foobar"
          pattern="^[0-9]{4}[a-zA-Z]{2}$" />
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field should match pattern "^[0-9]{4}[a-zA-Z]{2}$";' });
    expect(getByText('This field should match pattern "^[0-9]{4}[a-zA-Z]{2}$";')).toBeInTheDocument();
  });

  it('should show correct default pattern error message when errorMessage object is passed', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="foobar"
          pattern="^[0-9]{4}[a-zA-Z]{2}$"  
          errorMessage={{
            pattern: 'Please enter the required pattern'
          }}/>
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'Please enter the required pattern' });
    expect(getByText('Please enter the required pattern')).toBeInTheDocument();
  });

  it('should show correct default maxLength error message', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="foobar"
          maxLength={4} />
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field should NOT be more than 4 characters' });
    expect(getByText('This field should NOT be more than 4 characters')).toBeInTheDocument();
  });

  it('should show correct default maxLength error message when errorMessage object is passed', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="foobar"
          maxLength={4} 
          errorMessage={{
            maxLength: 'This field is not long enough'
          }}/>
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field is not long enough' });
    expect(getByText('This field is not long enough')).toBeInTheDocument();
  });

  it('should show correct default minLength error message', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="fo"
          minLength={4} />
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field should NOT be shorter than 4 characters' });
    expect(getByText('This field should NOT be shorter than 4 characters')).toBeInTheDocument();
  });

  it('should show correct default minLength error message when errorMessage object is passed', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue="fo"
          minLength={4}
          errorMessage={{
            minLength: 'This field is to short'
          }}/>
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field is to short' });
    expect(getByText('This field is to short')).toBeInTheDocument();
  });

  it('should show correct default maximum error message', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue={5}
          type="number"
          maximum={4} />
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field should NOT be more than 4' });
    expect(getByText('This field should NOT be more than 4')).toBeInTheDocument();
  });

  it('should show correct default maximum error message when errorMessage object is passed', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue={5}
          maximum={4}
          errorMessage={{
            maximum: 'This field is to big'
          }}/>
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field is to big' });
    expect(getByText('This field is to big')).toBeInTheDocument();
  });

  it('should show correct default minimum error message', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue={2}
          type="number"
          minimum={4} />
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field should NOT be less than 4' });
    expect(getByText('This field should NOT be less than 4')).toBeInTheDocument();
  });

  it('should show correct default minimum error message when errorMessage object is passed', () => {

    const formApiRef = {};

    const { getByText }  = render(
      <Form formApiRef={formApiRef}>
        <Input 
          name="greeting"  
          label="input1" 
          initialValue={2}
          minimum={4}
          errorMessage={{
            minimum: 'This field is to small'
          }}/>
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(formApiRef.current.getFormState().errors).toEqual({ greeting: 'This field is to small' });
    expect(getByText('This field is to small')).toBeInTheDocument();
  });


});
