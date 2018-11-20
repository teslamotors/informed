// Type definitions for informed 1.4.0
// Project: https://github.com/joepuzzo/informed#readme
// Definitions by: Andrey Kamozin <https://github.com/jaffparker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

declare module 'informed' {
    export type FormValue = string | number | boolean;
    export interface FormValues {
        [key: string]: FormValue;
    }

    export type FieldName<V> = string | keyof V;

    export type FormError = string | undefined;

    export interface FormStateBasic<V> {
        values: V;
        touched: { [key in keyof FormValues]: boolean };
        errors: { [key in keyof V]: FormError };
        asyncErrors: { [key in keyof V]: FormError };
    }
    export interface FormStateDerived {
        invalid: boolean;
        pristine: boolean;
        dirty: boolean;
        submits: number;
    }
    export interface FormState<V> extends FormStateBasic<V>, FormStateDerived {}

    export interface FormApi<V> {
        submitForm: () => void;
        setValue: (name: FieldName<V>, value: FormValue) => void;
        getValue: (name: FieldName<V>) => FormValue;
        setTouched: (name: FieldName<V>, touched: boolean) => void;
        getTouched: (name: FieldName<V>) => boolean;
        setError: (name: FieldName<V>, error: FormError) => void;
        getError: (name: FieldName<V>) => FormError;
        setState: (state: FormStateBasic<V>) => void;
        getState: () => FormState<V>;
        setValues: (values: V) => void;
        reset: () => void;
        fieldExists: (field: string) => boolean;
    }

    export interface FormContext<V> {
        formApi: FormApi<V>;
        formState: FormState<V>;
    }

    export type ChildFunction<C> = (props: C) => React.ReactNode;

    export interface BasicFormProps<V> {
        onSubmit?: (values: V) => void;
        preSubmit?: (values: V) => V | FormValues;
        initialValues?: V;
        onChange?: (formState: FormState<V>) => void;
        onValueChange?: (values: V) => void;
        dontPreventDefault?: boolean;
        getApi?: (formApi: FormApi<V>) => void;
        onSubmitFailure?: (
            errors: { [key in keyof V]: FormError },
            asyncErrors: { [key in keyof V]: FormError }
        ) => void;
    }
    export interface ChildrenFormProps<V> extends BasicFormProps<V> {
        children: React.ReactNode | ChildFunction<FormContext<V>>;
    }
    export interface ComponentFormProps<V> extends BasicFormProps<V> {
        component: React.ComponentType<FormContext<V>>;
    }
    export interface RenderFormProps<V> extends BasicFormProps<V> {
        render: ChildFunction<FormContext<V>>;
    }
    export type FormProps<V> =
        | ChildrenFormProps<V>
        | ComponentFormProps<V>
        | RenderFormProps<V>
        | React.FormHTMLAttributes<HTMLFormElement>;

    export class Form<V = FormValues> extends React.Component<
        FormProps<V>,
        any
    > {}

    export interface ScopeProps {
        scope: string;
    }
    export class Scope extends React.Component<ScopeProps, any> {}

    export interface FieldApi<V> {
        getValue: () => FormValue;
        setValue: (value: V) => void;
        getTouched: () => boolean;
        setTouched: (touched: boolean) => void;
        getError: () => FormError;
        setError: (error: FormError) => void;
        getAsyncError: () => FormError;
    }

    export interface FieldState<V> {
        value: V;
        touched: boolean;
        error?: string;
        asyncError?: string;
    }

    export interface FieldContext<V> {
        fieldState: FieldState<V>;
        fieldApi: FieldApi<V>;
    }

    export interface BaseFieldProps<V, VS>
        extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
        initialValue?: V;
        validate?: (value: V, values: VS) => FormError;
        validateOnBlur?: boolean;
        validateOnChange?: boolean;
        validateOnMount?: boolean;
        notify?: (keyof VS)[];
        asyncValidate?: (value: V) => FormError;
        asyncValidateOnBlur?: boolean;
        mask?: (value: V) => V;
        onValueChange?: (value: V) => void;
        value?: V;
        forwardedRef?: React.RefObject<HTMLInputElement>;
    }

    export interface FieldProps<V, VS> extends BaseFieldProps<V, VS> {
        field: string;
    }
    export interface ChildFieldProps<V, VS> extends BaseFieldProps<V, VS> {
        field?: string;
    }

    export interface SelectFieldProps<V, VS> extends FieldProps<V, VS> {
        multiple?: boolean;
    }

    export interface ChildrenFieldProps<V, VS> extends FieldProps<V, VS> {
        children: React.ReactNode | ChildFunction<FieldContext<V>>;
    }
    export interface ComponentFieldProps<V, VS> extends FieldProps<V, VS> {
        component: React.ComponentType<FieldContext<V>>;
    }
    export interface RenderFieldProps<V, VS> extends FieldProps<V, VS> {
        render: ChildFunction<FieldContext<V>>;
    }
    export type CustomFieldProps<V, VS> =
        | ChildrenFieldProps<V, VS>
        | ComponentFieldProps<V, VS>
        | RenderFieldProps<V, VS>;

    export class Text<V = FormValue, VS = FormValues> extends React.Component<
        FieldProps<V, VS>,
        any
    > {}
    export class TextArea<
        V = FormValue,
        VS = FormValues
    > extends React.Component<FieldProps<V, VS>, any> {}
    export class RadioGroup<
        V = FormValue,
        VS = FormValues
    > extends React.Component<FieldProps<V, VS>, any> {}
    export class Radio<V = FormValue, VS = FormValues> extends React.Component<
        ChildFieldProps<V, VS>,
        any
    > {}
    export class Checkbox<
        V = FormValue,
        VS = FormValues
    > extends React.Component<FieldProps<V, VS>, any> {}
    export class Select<V = FormValue, VS = FormValues> extends React.Component<
        SelectFieldProps<V, VS>,
        any
    > {}
    export class Option<V = FormValue, VS = FormValues> extends React.Component<
        ChildFieldProps<V, VS>,
        any
    > {}
    export class Field<V = FormValue, VS = FormValues> extends React.Component<
        CustomFieldProps<V, VS>,
        any
    > {}

    export interface BasicFieldProps<V, VS>
        extends BaseFieldProps<V, VS>,
            FieldContext<V> {
        field?: string;
    }
    export interface BasicSelectFieldProps<V, VS>
        extends BasicFieldProps<V, VS> {
        multiple?: boolean;
    }

    export class BasicText<
        V = FormValue,
        VS = FormValues
    > extends React.Component<BasicFieldProps<V, VS>, any> {}
    export class BasicRadio<
        V = FormValue,
        VS = FormValues
    > extends React.Component<BasicFieldProps<V, VS>, any> {}
    export class BasicRadioGroup<
        V = FormValue,
        VS = FormValues
    > extends React.Component<BasicFieldProps<V, VS>, any> {}
    export class BasicTextArea<
        V = FormValue,
        VS = FormValues
    > extends React.Component<BasicFieldProps<V, VS>, any> {}
    export class BasicSelect<
        V = FormValue,
        VS = FormValues
    > extends React.Component<BasicSelectFieldProps<V, VS>, any> {}
    export class BasicCheckbox<
        V = FormValue,
        VS = FormValues
    > extends React.Component<BasicFieldProps<V, VS>, any> {}

    export interface RadioGroupApi<V> extends FieldApi<V> {
        onChange: (event: React.SyntheticEvent) => void;
        onBlur: (event: React.SyntheticEvent) => void;
    }
    export interface RadioGroupContext<V> {
        radioGroupApi: RadioGroupApi<V>;
        radioGroupState: FieldState<V>;
    }

    export function withFormApi<P, V = FormValues>(
        component: React.ComponentType<{ formApi: FormApi<V> } & P>
    ): React.ComponentType<P>;

    export function withFormState<P, V = FormValues>(
        component: React.ComponentType<{ formState: FormState<V> } & P>
    ): React.ComponentType<P>;

    export function withFieldApi<P, V = FormValue, VS = FormValues>(
        name: keyof VS
    ): (
        component: React.ComponentType<{ fieldApi: FieldApi<V> } & P>
    ) => React.ComponentType<P>;

    export function withFieldState<P, V = FormValue, VS = FormValues>(
        name: keyof VS
    ): (
        component: React.ComponentType<{ fieldState: FieldState<V> } & P>
    ) => React.ComponentType<P>;

    export function withRadioGroup<P, V = FormValue>(
        component: React.ComponentType<RadioGroupContext<V> & P>
    ): React.ComponentType<P>;

    export function asField<P, V = FormValue>(
        component: React.ComponentType<FieldContext<V> & P>
    ): React.ComponentType<P>;
}
