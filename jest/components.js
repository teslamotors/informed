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

// 1. showErrorIfError  --> error
// 2. showErrorIfTouched --> error && touched ( Default )
// 3. showErrorIfDirty --> error && dirty

// 1. validateOnMount
// 2. validateOnBlur ( Default )
// 3. validateOnChange
// 4. validateOnSubmit

// validateOn: 'blur'
// change // change-change
// change-blur
// change-submit
// blur // blur-blur
// blur-onSubmit
// onSubmit // onSubmit-onSubmit
// validateOnMount: false | true | 'sync'

export const Input = React.memo(({ label, ...props }) => {
  const { render, informed, ref, fieldState } = useField({
    type: 'text',
    ...props
  });
  const { showError } = fieldState;
  return render(
    <label>
      {label}
      <input
        ref={ref}
        {...informed}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError ? (
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
