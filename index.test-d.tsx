import React from 'react';
import { useFormApi, useForm, useField } from '.';

export const Form = props => {
  const { formController, render, userProps } = useForm(props);

  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
    />
  );
};

const Input = React.memo(props => {
  const { render, informed, ref, fieldState, userProps } = useField({
    type: 'text',
    ...props
  });
  const { label, id } = userProps;
  const { showError } = fieldState;
  return render(
    <>
      {label ? <label htmlFor={id}>label</label> : null}
      <input
        ref={ref}
        {...informed}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </>
  );
});

/* ------------------------- useFormApi ------------------------- */

const ComponentUsingFormApi = () => {
  const formApi = useFormApi();
  return (
    <button type="button" onClick={() => formApi.setValue('name', 1)}>
      Random
    </button>
  );
};

const UseFormApi = () => (
  <Form>
    <Input name="name" label="Name:" />
    <ComponentUsingFormApi />
  </Form>
);
