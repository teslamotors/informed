import React from 'react';
import { useForm, useField } from '../src';

export const Form = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm(rest);

  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}>
      {children}
    </form>
  );
};

export const Input = React.memo(({ label, ...props }) => {
  const { render, informed, ref, fieldState } = useField({
    type: 'text',
    ...props
  });
  const { error } = fieldState;
  return render(
    <label>
      {label}
      <input
        ref={ref}
        {...informed}
        style={error ? { border: 'solid 1px red' } : null}
      />
      {error ? (
        <small style={{ color: 'red' }}>{fieldState.error}</small>
      ) : null}
    </label>
  );
});

export const Checkbox = ({ label, ...props }) => {
  const { render, informed } = useField({ type: 'checkbox', ...props });

  return render(
    <label>
      {label}
      <input {...informed} checked={informed.value} />
    </label>
  );
};
