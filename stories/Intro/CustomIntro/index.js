import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { useField, useForm, Relevant, Debug } from '../../../src';

// Step 1. Build your form component ---------------------

const Form = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm(rest);

  return render(
    <form noValidate {...userProps} onSubmit={formController.submitForm}>
      {children}
    </form>
  );
};

// Step 2. Build your input components --------------------

const Input = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'text',
    ...props
  });
  const { label, id, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} />
    </>
  );
};

const Checkbox = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'checkbox',
    ...props
  });
  const { label, id, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} />
    </>
  );
};

const ErrorInput = props => {
  const { render, informed, userProps, fieldState, ref } = useField({
    type: 'text',
    ...props
  });
  const { label, id, ...rest } = userProps;
  const { showError } = fieldState;
  const style = showError ? { border: 'solid 1px red' } : null;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={ref} {...informed} {...rest} style={style} />
      {showError && <small style={{ color: 'red' }}>{fieldState.error}</small>}
    </>
  );
};

const Select = props => {
  const { render, informed, userProps, ref } = useField({
    type: 'select',
    ...props
  });
  const { label, id, children, ...rest } = userProps;
  return render(
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} ref={ref} {...informed} {...rest}>
        {children}
      </select>
    </>
  );
};

const onSubmit = ({ values }) => console.log(values);

const GettingStarted = () => (
  <Form onSubmit={onSubmit} autocomplete="off">
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <Input field="name" label="Name" placeholder="Elon" />
        <ErrorInput
          field="age"
          type="number"
          label="Age"
          required="Age Required"
        />
        <Input field="phone" label="Phone" formatter="+1 (###)-###-####" />
        <Select field="car" label="Car" initialValue="ms">
          <option value="ms">Model S</option>
          <option value="m3">Model 3</option>
          <option value="mx">Model X</option>
          <option value="my">Model Y</option>
        </Select>
        <Checkbox field="married" label="Married: " />
        <Relevant when={({ formState }) => formState.values.married}>
          <Input field="spouse" label="Spouse" />
        </Relevant>
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: '1' }}>
        <Debug />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, GettingStarted);
