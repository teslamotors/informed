import React, { useRef, useState } from 'react';
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
  InformedProps,
  FormState,
  ArrayField,
  Relevant,
} from '.';

import {expectType} from 'tsd';


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

        formApi.validate();

        formApi.submitForm();

        formApi.validateField('name');

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

  // const elonValidate = Elon.inspect([
  //   (val: any, values: any) => val === 'Foo' || values.name === 'Bar' ? 'Ahh!!' : undefined
  // ]);

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
        required="Is required"
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
    initialValues
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


  return (
    <>
      {JSON.stringify( state )}
    </>
  );
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

/* ------------------------- useFieldState ------------------------- */

const ComponentUsingFieldState = () => {
  const state = useFieldState('name');

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
    focused
  } = state;

  expectType<FieldState>(state);

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

  return (
    <>
      {JSON.stringify( state )}
    </>
  );
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
        {(state)=> {
          expectType<FormState>(state);
          return (
              <pre>
                {JSON.stringify( state )}
              </pre>
            )
          }
        }
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

export const OtherShitTest = () => {
  const [externalDep, setExternalDep] = useState('FOO');

  const relevant1 = ({ formState, relevanceDeps }: any) => {
    return formState.values.showInfo && relevanceDeps[0] !== 'BAR';
  };

  const relevant2 = ({ formState }: any) => {
    return formState.values.showInfo;
  };

  return (
    <Form>
      <Input name="name" label="Name:" />
      <ComponentUsingOtherShit />
      {/* ---------- Relevance Test ---------- */}
      <Relevant when={({ formState }) => !!formState.values.showInfo}>
        <Input type="number" label="Age" name="age" />
        <Input label="Favorite Color" name="color" keepState />
      </Relevant>
      <Input
        label="Favorite Food"
        name="food"
        relevanceWhen={['showInfo']}
        relevanceDeps={[externalDep]}
        relevant={relevant1}
        required={true}
      />
      <Input label="Favorite Movie" name="movie" relevant={relevant2} />
    </Form>
  );
}