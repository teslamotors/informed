import React, { useState } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
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

});
