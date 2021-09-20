import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { useField, useForm, Relevant, FormState } from '../../../src';

// Step 1. Build your form component ---------------------

const Form = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm(rest);

  return render(
    <form {...userProps} onSubmit={formController.submitForm}>
      {children}
    </form>
  );
};

// Step 2. Build your input components --------------------

const Input = ({ label, ...props }) => {
  const { render, informed } = useField({ type: 'text', ...props });

  return render(
    <label>
      {label}
      <input {...informed} />
    </label>
  );
};

const Checkbox = ({ label, ...props }) => {
  const { render, informed } = useField({ type: 'checkbox', ...props });

  return render(
    <label>
      {label}
      <input {...informed} />
    </label>
  );
};

const ErrorInput = props => {
  const { render, informed, fieldState } = useField({
    type: 'text',
    ...props
  });

  return render(
    <>
      <input
        {...informed}
        style={fieldState.error ? { border: 'solid 1px red' } : null}
      />
      {fieldState.error ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </>
  );
};

// const Checkbox = ({ label, ...props }) => {
//   const { render, informed } = useField({ fieldType: 'checkbox', ...props });

//   const { id } = informed;

//   return render(
//     <>
//       <label htmlFor={id}> {label} </label>
//       <input {...informed} />
//     </>
//   );
// };

const Select = ({ label, children, ...props }) => {
  const { render, informed } = useField({ type: 'select', ...props });

  return render(
    <label>
      {label}
      <select {...informed}>{children}</select>
    </label>
  );
};

const onSubmit = data => console.log(data);

const GettingStarted = () => (
  <Form onSubmit={onSubmit}>
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
        <Relevant when={({ values }) => values.married}>
          <Input field="spouse" label="Spouse" />
        </Relevant>
        <button type="submit">Submit</button>
      </div>
      <div style={{ flex: '1' }}>
        <FormState />
      </div>
    </div>
  </Form>
);

export default withDocs(readme, GettingStarted);
