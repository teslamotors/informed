import React, { useState, useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Input, Select } from '../../jest/components';
import { act } from 'react-dom/test-utils';

const getState = state => {
  const defaultState = {
    pristine: true,
    dirty: false,
    submitted: false,
    valid: true,
    invalid: false,
    submitting: false,
    validating: 0,
    values: {},
    maskedValues: {},
    modified: {},
    errors: {},
    focused: {},
    gathering: 0,
    data: {},
    touched: {},
    initialValues: {},
    dirt: {}
  };
  return Object.assign({}, defaultState, state);
};

// prettier-ignore
describe('useForm', () => {

  it('should have correct initial state', () => {
    const formApiRef = {};

    render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
      </Form>
    );
  
    expect(formApiRef.current.getFormState()).toEqual(getState());
  });

  it('should update state correctly when user types', async () => {
    const formApiRef = {};

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
      </Form>
    );

    const input = getByLabelText('input1');
    await userEvent.type(input, 'Hi!');
  
    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      modified: {
        greeting: 'Hi!'
      },
      dirt: {
        greeting: true
      },
      focused: {
        greeting: true,
      },
    }));
  });

  it('should call onChange that was passed', async () => {

    const onChange = jest.fn();

    const { getByLabelText } = render(
      <Form onChange={onChange}>
        <Input name="greeting" label="input1"  />
      </Form>
    );

    const input = getByLabelText('input1');
    await userEvent.type(input, 'Hi!');
  
    expect(onChange).toHaveBeenCalledWith( getState({
      pristine: false,
      dirty: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      modified: {
        greeting: 'Hi!'
      },
      touched: {},
      dirt: {
        greeting: true
      },
      focused: {
        greeting: true
      },
    }));

  });

  it('should call onValueChange that was passed', async () => {

    const onValueChange = jest.fn();

    const { getByLabelText } = render(
      <Form onValueChange={onValueChange}>
        <Input name="greeting" label="input1"  />
      </Form>
    );

    const input = getByLabelText('input1');
    await userEvent.type(input, 'Hi!');
  
    expect(onValueChange).toHaveBeenCalledWith( getState({
      pristine: false,
      dirty: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      modified: {
        greeting: 'Hi!'
      },
      touched: {},
      dirt: {
        greeting: true
      },
      focused: {
        greeting: true
      },
    }), 'greeting');

  });

  it('should call onChange that was passed when touched', () => {

    const onChange = jest.fn();

    const { getByLabelText } = render(
      <Form onChange={onChange}>
        <Input name="greeting1" label="input1" />
        <Input name="greeting2" label="input2" />
      </Form>
    );


    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();

    expect(onChange).toHaveBeenCalledWith(getState({
      touched: {
        greeting1: true
      },
      focused: {
        greeting1: true,
        greeting2: true
      },
    }));
  });

  it('should NOT call onValueChange that was passed when touched', () => {

    const onValueChange = jest.fn();

    const { getByLabelText } = render(
      <Form onValueChange={onValueChange}>
        <Input name="greeting1" label="input1" />
        <Input name="greeting2" label="input2" />
      </Form>
    );


    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();

    expect(onValueChange).not.toHaveBeenCalledWith(getState({
      touched: {
        greeting1: true
      },
      focused: {
        greeting1: true,
        greeting2: true
      },
    }));
  });

  it('should call onValueModified that was passed', async () => {

    const onValueModified = jest.fn();

    const { getByLabelText } = render(
      <Form onValueChange={onValueModified}>
        <Input name="greeting" label="input1"  />
      </Form>
    );

    const input = getByLabelText('input1');
    await userEvent.type(input, 'Hi!');
  
    expect(onValueModified).toHaveBeenCalledWith( getState({
      pristine: false,
      dirty: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      modified: {
        greeting: 'Hi!'
      },
      touched: {},
      dirt: {
        greeting: true
      },
      focused: {
        greeting: true
      },
    }), 'greeting');

  });

  it('should NOT call onValueModified that was passed when touched', () => {

    const onValueModified = jest.fn();

    const { getByLabelText } = render(
      <Form onValueModified={onValueModified}>
        <Input name="greeting1" label="input1" />
        <Input name="greeting2" label="input2" />
      </Form>
    );


    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();

    expect(onValueModified).not.toHaveBeenCalledWith(getState({
      touched: {
        greeting1: true
      },
      focused: {
        greeting1: true,
        greeting2: true
      },
    }));
  });


  it('should update state correctly when user blurs', () => {

    const formApiRef = {};

    const { getByLabelText } = render(
      <Form formApiRef={formApiRef}>        
        <Input name="greeting1" label="input1" />
        <Input name="greeting2" label="input2" />
      </Form>
    );

    const input1 = getByLabelText('input1');
    const input2 = getByLabelText('input2');
    input1.focus();
    input2.focus();

    expect(formApiRef.current.getFormState()).toEqual(getState({
      touched: {
        greeting1: true
      },
      focused: {
        greeting1: true,
        greeting2: true
      },
    }));
  
  });

  it('should submit the form with the values on valid submission', async () => {
    const formApiRef = {};
    const onSubmit = jest.fn();

    const { getByLabelText, getByText } = render(
      <Form
        onSubmit={onSubmit}
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
        <button type="submit">Submit</button>
      </Form>
    );

    const input = getByLabelText('input1');
    const submit = getByText('Submit');

    await userEvent.type(input, 'Hi!');

    fireEvent.click(submit);

    expect(onSubmit).toHaveBeenCalledWith(getState({
      pristine: false,
      dirty: true,
      submitted: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      modified: {
        greeting: 'Hi!'
      },
      touched: {
        greeting: true
      },
      dirt: {
        greeting: true
      },
      focused: {
        greeting: true
      },
    }));

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      submitted: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      modified: {
        greeting: 'Hi!'
      },
      touched: {
        greeting: true
      },
      dirt: {
        greeting: true
      },
      focused: {
        greeting: true
      },
    }));

  });

  it('should reset the form when reset button is called', async () => {
    const formApiRef = {};

    const { getByLabelText, getByText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
        <button type="reset">Reset</button>
      </Form>
    );

    const input = getByLabelText('input1');
    const reset = getByText('Reset');

    await userEvent.type(input, 'Hi!');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      modified: {
        greeting: 'Hi!'
      },
      dirt: {
        greeting: true
      },
      focused: {
        greeting: true
      },
    }));

    fireEvent.click(reset);

    expect(formApiRef.current.getFormState()).toEqual(getState());

  });

  it('should resetField should reset the field to its field level initial value', async () => {
    const formApiRef = {};

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" initialValue="Hello"/>
      </Form>
    );

    let input = getByLabelText('input1');
    expect(input).toHaveValue('Hello');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        greeting: 'Hello'
      },
      maskedValues: {
        greeting: 'Hello'
      },
    }));

    await userEvent.type(input, ' World');

    expect(input).toHaveValue('Hello World');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false, 
      dirty: true,
      values: {
        greeting: 'Hello World'
      },
      maskedValues: {
        greeting: 'Hello World'
      },
      modified: {
        greeting: 'Hello World'
      },
      dirt: {
        greeting: true
      },
      focused: {
        greeting: true
      },
    }));

    act(()=>{
      formApiRef.current.resetField('greeting');
    });

    expect(input).toHaveValue('Hello');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false, 
      dirty: true,
      values: {
        greeting: 'Hello'
      },
      maskedValues: {
        greeting: 'Hello'
      },
      focused: {
        greeting: true
      },
    }));   

  });

  it('should resetField should reset the field to its form level initial value', async () => {
    const formApiRef = {};
    const initialValues = {
      greeting: 'Hello'
    };

    const { getByLabelText } = render(
      <Form
        initialValues={initialValues}
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1"/>
      </Form>
    );

    let input = getByLabelText('input1');
    expect(input).toHaveValue('Hello');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        greeting: 'Hello'
      },
      maskedValues: {
        greeting: 'Hello'
      },
      initialValues,
    }));

    await userEvent.type(input, ' World');

    expect(input).toHaveValue('Hello World');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false, 
      dirty: true,
      values: {
        greeting: 'Hello World'
      },
      maskedValues: {
        greeting: 'Hello World'
      },
      modified: {
        greeting: 'Hello World'
      },
      dirt: {
        greeting: true
      },
      focused: {
        greeting: true,
      },
      initialValues
    }));

    act(()=>{
      formApiRef.current.resetField('greeting');
    });

    expect(input).toHaveValue('Hello');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false, 
      dirty: true,
      values: {
        greeting: 'Hello'
      },
      maskedValues: {
        greeting: 'Hello'
      },
      initialValues,
      focused: {
        greeting: true
      },
    }));   

  });

  it('reset should reset the the form to new initial values when they change and form is pristine', async () => {
    const formApiRef = {};
   
    // Use your imagination and pretend these came from an api call :)
    const profiles = [
      {
        name: 'Joe',
        age: 25
      },
      {
        name: 'Kimbal',
        age: 47
      },
      {
        name: 'Elon',
        age: 48
      }
    ];

    const ProfileForm = ({ profile: initialValues }) => {
    
      // Reset the form whenever initial values change ( happens when user selects profile )
      useEffect(
        () => {
          //formApiRef.current.reset();
        },
        [initialValues]
      );

      return (
        // Remember to get access to the formApi and pass in the initial values
        <Form formApiRef={formApiRef} initialValues={initialValues}>
          <Input name="name" label="First Name" />
          <Input type="number" name="age" label="Age" />
          <button type="submit">submit</button>
        </Form>
      );
    };

    const Profiles = () => {
      // Select the first profile by default
      const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

      const selectProfile = ({ value }) => setSelectedProfile(profiles[value]);

      return (
        <React.Fragment>
          <h2>Select Profile</h2>
          <Form>
            {/* A rare case where we want to track the value instead of rcf ( onChange ) */}
            <Select name="profile" label="Profile" data-testid="select" onChange={selectProfile}>
              {profiles.map((profile, i) => (
                <option key={`val-${i}`} value={i}>{profile.name}</option>
              ))}
            </Select>
          </Form>
          <h2>Edit {selectedProfile.name}</h2>
          <ProfileForm profile={selectedProfile} />
        </React.Fragment>
      );
    };

    const { getByLabelText, getByTestId } = render(
      <Profiles />
    );

    let input1 = getByLabelText('First Name');
    let input2 = getByLabelText('Age');
    expect(input1).toHaveValue('Joe');
    expect(input2).toHaveValue(25);

    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        age: 25,
        name: 'Joe'
      },
      maskedValues: {
        age: 25,
        name: 'Joe'
      },
      initialValues: profiles[0],
      pristine: true
    }));

    const select = getByTestId('select');

    // Select Second Profile 
    fireEvent.change(select, { target: { value: '1' } });

    // Should still be the same
    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        age: 47,
        name: 'Kimbal'
      },
      maskedValues: {
        age: 47,
        name: 'Kimbal'
      },
      initialValues: profiles[1],
      pristine: true
    }));

    await userEvent.type(input1, '!');

    // Should be non pristine
    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        age: 47,
        name: 'Kimbal!'
      },
      maskedValues: {
        age: 47,
        name: 'Kimbal!'
      },
      modified: {
        name: 'Kimbal!'
      },
      initialValues: profiles[1],
      pristine: false,
      dirty: true,
      dirt: { 
        name: true
      }, 
      focused: {
        name: true
      }
    }));

    // Select Third Profile 
    fireEvent.change(select, { target: { value: '2' } });

    // Should be SAME because non pristine
    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        age: 47,
        name: 'Kimbal!'
      },
      maskedValues: {
        age: 47,
        name: 'Kimbal!'
      },
      modified: {
        name: 'Kimbal!'
      },
      initialValues: profiles[1],
      pristine: false,
      dirty: true,
      dirt: { 
        name: true
      }, 
      focused: {
        name: true
      }
    }));

  });

  it('reset should reset the the form to new initial values when they change regardless of pristine if manually reset', async () => {
    const formApiRef = {};
   
    // Use your imagination and pretend these came from an api call :)
    const profiles = [
      {
        name: 'Joe',
        age: 25
      },
      {
        name: 'Kimbal',
        age: 47
      },
      {
        name: 'Elon',
        age: 48
      }
    ];

    const ProfileForm = ({ profile: initialValues }) => {
    
      // Reset the form whenever initial values change ( happens when user selects profile )
      useEffect(
        () => {
          formApiRef.current.reset();
        },
        [initialValues]
      );

      return (
        // Remember to get access to the formApi and pass in the initial values
        <Form formApiRef={formApiRef} initialValues={initialValues}>
          <Input name="name" label="First Name" />
          <Input type="number" name="age" label="Age" />
          <button type="submit">submit</button>
        </Form>
      );
    };

    const Profiles = () => {
      // Select the first profile by default
      const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

      const selectProfile = ({ value }) => setSelectedProfile(profiles[value]);

      return (
        <React.Fragment>
          <h2>Select Profile</h2>
          <Form>
            {/* A rare case where we want to track the value instead of rcf ( onChange ) */}
            <Select name="profile" label="Profile" data-testid="select" onChange={selectProfile}>
              {profiles.map((profile, i) => (
                <option key={`val-${i}`} value={i}>{profile.name}</option>
              ))}
            </Select>
          </Form>
          <h2>Edit {selectedProfile.name}</h2>
          <ProfileForm profile={selectedProfile} />
        </React.Fragment>
      );
    };

    const { getByLabelText, getByTestId } = render(
      <Profiles />
    );

    let input1 = getByLabelText('First Name');
    let input2 = getByLabelText('Age');
    expect(input1).toHaveValue('Joe');
    expect(input2).toHaveValue(25);

    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        age: 25,
        name: 'Joe'
      },
      maskedValues: {
        age: 25,
        name: 'Joe'
      },
      initialValues: profiles[0],
      pristine: true
    }));

    const select = getByTestId('select');

    // Select Second Profile 
    fireEvent.change(select, { target: { value: '1' } });

    // Should still be the same
    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        age: 47,
        name: 'Kimbal'
      },
      maskedValues: {
        age: 47,
        name: 'Kimbal'
      },
      initialValues: profiles[1],
      pristine: true
    }));

    await userEvent.type(input1, '!');

    // Should be non pristine
    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        age: 47,
        name: 'Kimbal!'
      },
      maskedValues: {
        age: 47,
        name: 'Kimbal!'
      },
      modified: {
        name: 'Kimbal!'
      },
      initialValues: profiles[1],
      pristine: false,
      dirty: true,
      dirt: { 
        name: true
      }, 
      focused: {
        name: true
      }
    }));

    // Select Third Profile 
    fireEvent.change(select, { target: { value: '2' } });

    // Should be SAME because non pristine
    expect(formApiRef.current.getFormState()).toEqual(getState({
      values: {
        age: 48,
        name: 'Elon'
      },
      maskedValues: {
        age: 48,
        name: 'Elon'
      },
      initialValues: profiles[2],
    }));

  });

  it('should update the state when field level validation occurs and validateOnChange is passed', async () => {
    const formApiRef = {};

    const validate = value => {
      return !value || value.length < 5
        ? 'Field must be at least five characters'
        : undefined;
    };

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" validateOn="change" validate={validate}/>
        <button type="submit">Submit</button>
      </Form>
    );

    const input = getByLabelText('input1');

    await userEvent.type(input, 'Hi!');

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      invalid: true,
      valid: false,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      modified: {
        greeting: 'Hi!'
      },
      dirt: {
        greeting: true
      },
      errors: {
        greeting: 'Field must be at least five characters',
      },
      focused: {
        greeting: true
      },
    }));

  });

  it('should NOT submit the form when form is invalid due to field level validation failure', async () => {
    const formApiRef = {};
    const onSubmit = jest.fn();

    const validate = value => {
      return !value || value.length < 5
        ? 'Field must be at least five characters'
        : undefined;
    };

    const { getByLabelText, getByText } = render(
      <Form
        onSubmit={onSubmit}
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" validate={validate}/>
        <button type="submit">Submit</button>
      </Form>
    );

    const input = getByLabelText('input1');
    const submit = getByText('Submit');

    await userEvent.type(input, 'Hi!');

    fireEvent.click(submit);

    expect(onSubmit).not.toHaveBeenCalled();

    expect(formApiRef.current.getFormState()).toEqual(getState({
      pristine: false,
      dirty: true,
      invalid: true,
      valid: false,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      modified: {
        greeting: 'Hi!'
      },
      errors: {
        greeting: 'Field must be at least five characters',
      },
      touched: {
        greeting: true
      },
      focused: {
        greeting: true
      },
      dirt: {
        greeting: true
      }
    }));

  });

  it('should NOT submit the form when form is invalid due to field level validation with only initial value', () => {
    const formApiRef = {};
    const onSubmit = jest.fn();

    const validate = value => {
      return !value || value.length < 5
        ? 'Field must be at least five characters'
        : undefined;
    };

    const { getByText } = render(
      <Form
        onSubmit={onSubmit}
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" validate={validate} initialValue="Hi!"/>
        <button type="submit">Submit</button>
      </Form>
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    expect(onSubmit).not.toHaveBeenCalled();

    expect(formApiRef.current.getFormState()).toEqual(getState({
      invalid: true,
      valid: false,
      values: {
        greeting: 'Hi!'
      },
      maskedValues: {
        greeting: 'Hi!'
      },
      errors: {
        greeting: 'Field must be at least five characters',
      },
      touched: {
        greeting: true,
      }
    }));

  });

});
