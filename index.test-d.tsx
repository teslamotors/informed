import React, { useRef } from 'react';
import {
  useFormApi,
  useForm,
  useField,
  FieldState,
  useFieldApi,
  useFieldState,
  useFormState,
  FormStateAccessor,
  FieldProps,
  FormProps,
  FormState,
  ArrayField,
} from '.';

import { expectType } from 'tsd';

interface FormValue {
  name: string;
  age: number;
  friends: { name: string; family: string }[];
}

export const Form = (props: FormProps<FormValue>) => {
  const { formController, render, userProps } = useForm<FormValue>(props);

  return render(
    <form
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}
    />
  );
};

const Input = React.memo(
  (props: { label?: string } & FieldProps<FormValue>) => {
    const {
      render,
      informed: { value },
      ref,
      fieldState,
      userProps,
    } = useField<
      FormValue,
      'name',
      React.InputHTMLAttributes<HTMLInputElement>
    >({
      name: 'name',
      type: 'text',
      ...props,
    });

    const { label, id } = userProps;
    const { showError } = fieldState;
    const error = fieldState.error as string;

    return render(
      <>
        {label ? <label htmlFor={id}>label</label> : null}
        <input
          ref={ref}
          style={showError ? { border: 'solid 1px red' } : undefined}
        />
        {showError ? <small style={{ color: 'red' }}>{error}</small> : null}
      </>
    );
  }
);

/* ------------------------- useFormApi ------------------------- */

const ComponentUsingFormApi = () => {
  const formApi = useFormApi();
  return (
    <>
      <button type="button" onClick={() => formApi.setValue('name', 1)}>
        Set Value
      </button>
      <button
        type="button"
        onClick={() => {
          formApi.setValue('name', 1);
          const value = formApi.getValue('name');
          expectType<unknown>(value);

          formApi.setMaskedValue('name', 1);
          const maskedValue = formApi.getMaskedValue('name');
          expectType<unknown>(maskedValue);

          formApi.setTouched('name', true);
          const touched = formApi.getTouched('name');
          expectType<unknown>(touched);

          formApi.setError('name', 'Ahhh!!!');
          const error = formApi.getError('name');
          expectType<unknown>(error);

          formApi.getFocused('name');
          const focused = formApi.getFocused('name');
          expectType<unknown>(focused);

          formApi.resetField('name');

          formApi.reset();

          const formState = formApi.getFormState();
          expectType<FormState<any>>(formState);

          const pristine = formApi.getPristine('name');
          expectType<boolean>(pristine);

          const dirty = formApi.getDirty('name');
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
        relevant={({ formState }) => !!formState.values.allowed}
        validate={(val, values) =>
          val === 'Foo' || values.name === 'Bar' ? 'Ahh!!' : undefined
        }
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
        onChange={fieldState => {
          expectType<FieldState<any, any>>(fieldState);
        }}
        onBlur={fieldState => {
          expectType<FieldState<any, any>>(fieldState);
        }}
        onFocus={fieldState => {
          expectType<FieldState<any, any>>(fieldState);
        }}
      />
      <Input
        name="friends.0.name"
        label="Formatter Function"
        formatter={value => {
          return ['A', /\d/, 'B'];
        }}
      />
      <ComponentUsingFormApi />
    </Form>
  );
};

/* ------------------------- useFormState ------------------------- */

const ComponentUsingFormState = () => {
  const state = useFormState();

  const {
    values,
    maskedValues,
    touched,
    errors,
    pristine,
    dirty,
    valid,
    invalid,
    validating,
    focused,
    submitted,
    submitting,
    dirt,
    initialValues,
  } = state;

  expectType<FormState>(state);

  expectType<Record<string, unknown>>(values);
  expectType<Record<string, unknown>>(maskedValues);
  expectType<Record<string, unknown>>(touched);
  expectType<Record<string, unknown>>(errors);
  expectType<Record<string, unknown>>(focused);
  expectType<Record<string, unknown>>(dirt);
  expectType<Record<string, unknown>>(initialValues);
  expectType<boolean>(pristine);
  expectType<boolean>(dirty);
  expectType<boolean>(valid);
  expectType<boolean>(invalid);
  expectType<number>(validating);
  expectType<boolean>(submitted);
  expectType<boolean>(submitting);

  return <>{JSON.stringify(state)}</>;
};

export const UseFormStateTest = () => (
  <Form>
    <Input name="name" label="Name:" />
    <ComponentUsingFormState />
  </Form>
);

/* ------------------------- useFieldApi ------------------------- */

const ComponentUsingFieldApi = () => {
  const fieldApi = useFieldApi('name');
  return (
    <>
      <button type="button" onClick={() => fieldApi.setValue(1)}>
        Set Value
      </button>
      <button
        type="button"
        onClick={() => {
          fieldApi.setValue('name');
          const value = fieldApi.getValue();
          expectType<unknown>(value);

          fieldApi.setTouched(true);
          const touched = fieldApi.getTouched();
          expectType<boolean>(touched);

          fieldApi.setError('Ahhh!!!');
          const error = fieldApi.getError();
          expectType<unknown>(error);

          fieldApi.setFocused(false);
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

/* ------------------------- useFieldState ------------------------- */

const ComponentUsingFieldState = () => {
  const state = useFieldState<FormValue, 'name'>('name');

  const {
    value,
    maskedValue,
    touched,
    error,
    pristine,
    dirty,
    valid,
    invalid,
    showError,
    validating,
    focused,
  } = state;

  expectType<FieldState<any, any>>(state);

  expectType<unknown>(value);
  expectType<unknown>(maskedValue);
  expectType<boolean>(touched);
  expectType<unknown>(error);
  expectType<boolean>(pristine);
  expectType<boolean>(dirty);
  expectType<boolean>(valid);
  expectType<boolean>(invalid);
  expectType<boolean>(showError);
  expectType<boolean>(validating);
  expectType<boolean>(focused);

  return <>{JSON.stringify(state)}</>;
};

export const UseFieldStateTest = () => (
  <Form>
    <Input name="name" label="Name:" />
    <ComponentUsingFieldState />
  </Form>
);

/* ------------------------- otherShit ------------------------- */

const ComponentUsingOtherShit = () => {
  return (
    <>
      {/* ---------- Form State Accessor ---------- */}
      <FormStateAccessor>
        {state => {
          expectType<FormState<any>>(state);
          return <pre>{JSON.stringify(state)}</pre>;
        }}
      </FormStateAccessor>
      {/* ---------- Array Field ---------- */}
      <ArrayField name="friends">
        {({ add }) => {
          return (
            <>
              <button
                onClick={() => {
                  add();
                }}
                type="button">
                Add
              </button>
              <ArrayField.Items>
                {({ remove, name }) => (
                  <label>
                    <h5>{name}</h5>
                    <Input name="name" label="Name" required />
                    <Input name="age" label="Age" type="number" />
                    <button type="button" onClick={remove}>
                      Remove
                    </button>
                  </label>
                )}
              </ArrayField.Items>
            </>
          );
        }}
      </ArrayField>
    </>
  );
};

export const OtherShitTest = () => (
  <Form>
    <Input name="name" label="Name:" />
    <ComponentUsingOtherShit />
  </Form>
);
