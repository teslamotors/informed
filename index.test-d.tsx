import React, { useRef } from 'react';
import { useFormApi, useForm, useField, FieldState, useFieldApi } from '.';
import {expectType} from 'tsd';

import { FieldProps, InformedProps, FormState } from '.';

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export const Form = (props: InformedProps<FormProps>) => {
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
  const error = fieldState.error as string;
  return render(
    <>
      {label ? <label htmlFor={id}>label</label> : null}
      <input
        ref={ref}
        {...informed}
        style={showError ? { border: 'solid 1px red' } : undefined}
      />
      {showError ? (
        <small style={{ color: 'red' }}>{error}</small>
      ) : null}
    </>
  );
});

/* ------------------------- useFormApi ------------------------- */

const ComponentUsingFormApi = () => {
  const formApi = useFormApi();
  return (
    <>
      <button type="button" onClick={() => formApi.setValue('name', 1)}>
        Set Value
      </button>
      <button type="button" onClick={() => {

        formApi.setValue('name', 1)
        const value = formApi.getValue('name')
        expectType<unknown>(value);

        formApi.setMaskedValue('name', 1)
        const maskedValue = formApi.getMaskedValue('name');
        expectType<unknown>(maskedValue);

        formApi.setTouched('name', true)
        const touched = formApi.getTouched('name');
        expectType<unknown>(touched);

        formApi.setError('name', 'Ahhh!!!')
        const error = formApi.getError('name');
        expectType<unknown>(error);

        formApi.getFocused('name')
        const focused = formApi.getFocused('name');
        expectType<unknown>(focused);

        formApi.resetField('name');

        formApi.reset();

        const formState = formApi.getFormState();
        expectType<FormState>(formState);

        const pristine = formApi.getPristine();
        expectType<boolean>(pristine);

        const dirty = formApi.getDirty();
        expectType<boolean>(dirty);
      }}>
        Do It All
      </button>
    </>
  );
};

const UseFormApiTest = () => (
  <Form>
    <Input name="name" label="Name:" />
    <ComponentUsingFormApi />
  </Form>
);

/* ------------------------- inputProps ------------------------- */

const InputPropsTest = () => {
  const ref = useRef();
  return (
    <Form>
      <Input 
        // Informed Prop
        name="name" 
        defaultValue="Foo"
        initialValue="Bar"
        relevant={({ formState }) => !!formState.values.allowed }
        validate={(val, values) => val === 'Foo' || values.name === 'Bar' ? 'Ahh!!' : undefined}
        validateOn="change"
        validateOnMount
        keepState
        keepStateIfRelevant
        maintainCursor
        allowEmptyString
        inputRef={ref}
        showErrorIfError
        showErrorIfTouched
        showErrorIfDirty
        formatter="###-###"
        // Custom Props
        label="Name:" 
        // Input Props
        disabled
        autoComplete="off"
        type="number"
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
      <Input 
        name="formatterFunction" 
        label="Formatter Function" 
        formatter={(value)=>{ return ['A', /\d/, 'B'] }}/>
      <ComponentUsingFormApi />
    </Form>
  );
}


/* ------------------------- useFieldApi ------------------------- */

const ComponentUsingFieldApi = () => {
  const fieldApi = useFieldApi('name');
  return (
    <>
      <button type="button" onClick={() => fieldApi.setValue(1)}>
        Set Value
      </button>
      <button type="button" onClick={() => {

        fieldApi.setValue('name')
        const value = fieldApi.getValue()
        expectType<unknown>(value);

        fieldApi.setTouched(true)
        const touched = fieldApi.getTouched();
        expectType<boolean>(touched);

        fieldApi.setError('Ahhh!!!')
        const error = fieldApi.getError();
        expectType<unknown>(error);

        fieldApi.setFocused(false)
        const focused = fieldApi.getFocused();
        expectType<boolean>(focused);

        fieldApi.reset();

        const pristine = fieldApi.getPristine();
        expectType<boolean>(pristine);

        const dirty = fieldApi.getDirty();
        expectType<boolean>(dirty);
      }}>
        Do It All
      </button>
    </>
  );
};

const UseFieldApiTest = () => (
  <Form>
    <Input name="name" label="Name:" />
    <ComponentUsingFieldApi />
  </Form>
);