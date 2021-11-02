import React from 'react';
import { useFormApi, useForm, useField, FieldState } from '.';
import {expectType} from 'tsd';

import { FieldProps } from '.';

export const Form = props => {
  const { formController, render, userProps } = useForm(props);

  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}
    />
  );
};

type InputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.memo((props: FieldProps<InputProps>) => {
  const { render, informed, ref, fieldState, userProps } = useField<InputProps, string | readonly string[] | number>(
    {
      type: 'text',
      ...props
    }
  );
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

/* ------------------------- inputProps ------------------------- */

const InputProps = () => (
  <Form>
    <Input 
      // Informed Prop
      name="name" 
      // Custom Props
      label="Name:" 
      // Input Props
      disabled
      autoComplete="off"
      // More informed props
      onChange={(fieldState)=>{
        expectType<FieldState>(fieldState)
      }}
      onBlur={(fieldState)=>{
        expectType<FieldState>(fieldState)
      }}
      onFocus={(fieldState)=>{
        expectType<FieldState>(fieldState)
      }}/>
    <ComponentUsingFormApi />
  </Form>
);
