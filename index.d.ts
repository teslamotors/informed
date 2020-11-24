import * as React from 'react'

// Type definitions for informed 2.0.0
// Project: https://github.com/joepuzzo/informed#readme
// Definitions by: Andrey Kamozin <https://github.com/jaffparker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

declare module 'informed' {
  export type FormValue<T = {}> = string | number | boolean | T
  export interface FormValues {
    [key: string]: FormValue
  }

  export type FormError = any

  export interface FormStateBasic<V = FormValues> {
    values: V
    touched: { [key in keyof V]: boolean }
    errors: { [key in keyof V]: FormError }
    asyncErrors: { [key in keyof V]: FormError }
    error: FormError
    step: number
    Current: any
  }
  export interface FormStateDerived {
    invalid: boolean
    pristine: boolean
    dirty: boolean
    submits: number
  }
  export interface FormState<V = FormValues>
    extends FormStateBasic<V>,
    FormStateDerived { }

  export interface FormApi<V = FormValues> {
    submitForm: () => void
    setValue: <V>(name: string, value: V) => void
    getValue: <V = FormValue>(name: string) => V
    setTouched: (name: string, touched: boolean) => void
    getTouched: (name: string) => boolean
    setError: (name: string, error: FormError) => void
    getError: (name: string) => FormError
    setFormError: (error: FormError) => void
    getState: () => FormState<V>
    reset: () => void
    setValues: (values: V) => void
    validate: () => void
    back: (prevComponent: any) => void
    next: (nextComponent: any) => void
    setStep: (value: number) => void
    setCurrent: (component: any) => void
  }

  export interface FormContext<V = FormValues> {
    formApi: FormApi<V>
    formState: FormState<V>
  }

  export interface VOffset<V = FormValue> {
    value: V
    offset: number
  }

  export type ChildFunction<C> = (props: C) => React.ReactNode

  export interface FieldApi<V = FormValue> {
    getValue: () => V
    setValue: (value: V) => void
    getTouched: () => boolean
    setTouched: (touched: boolean) => void
    getError: () => FormError
    setError: (error: FormError) => void
    reset: () => void
    validate: () => void
    exists: () => boolean
  }

  export interface FieldState<V> {
    value: V
    maskedValue: V
    touched: boolean
    error?: string
  }

  export interface FieldContext<V = FormValue> {
    fieldState: FieldState<V>
    fieldApi: FieldApi<V>
    // not sure what this is for, I actually found it in https://github.com/joepuzzo/informed/blob/02584aeb10bbf04875bddc974f62db95c5612f57/src/hooks/useField.js#L205, not in the docs
    render: <T>(children: T, userProps?: any[]) => T
    ref: React.RefObject<any>
    userProps: any
  }

  export interface BaseFieldProps<V = FormValue, VS = FormValues>
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
    initialValue?: V
    keepState?: boolean
    validate?: (value: V, values: VS) => FormError
    validateOnBlur?: boolean
    validateOnChange?: boolean
    validateOnMount?: boolean
    notify?: (keyof VS)[]
    maintainCursor?: boolean
    allowEmptyString?: boolean
    mask?: (value: V) => V
    maskWithCursorOffset?: (value: V) => VOffset
    maskOnBlur?: boolean
    format?: (value: V) => V
    parse?: (value: V) => V
    onValueChange?: (value: V) => void
    value?: V
    forwardedRef?: React.RefObject<HTMLInputElement>
  }

  /*
   * FORM
   */

  export interface BasicFormProps<V = FormValues> {
    allowEmptyStrings?: boolean
    onSubmit?: (values: V) => void
    preSubmit?: (values: V) => V
    initialValues?: V
    onChange?: (formState: FormState<V>) => void
    onValueChange?: (values: V) => void
    dontPreventDefault?: boolean
    preventEnter?: boolean
    getApi?: (formApi: FormApi<V>) => void
    onSubmitFailure?: (errors: { [key in keyof V]: FormError }) => void
    validate?: (values: V) => FormError
    validateFields?: (values: V) => { [key in keyof V]: FormError } | undefined
  }
  export interface ChildrenFormProps<V> extends BasicFormProps<V> {
    children: React.ReactNode | ChildFunction<FormContext<V>>
  }
  export interface ComponentFormProps<V> extends BasicFormProps<V> {
    component: React.ComponentType<FormContext<V>>
  }
  export interface RenderFormProps<V> extends BasicFormProps<V> {
    render: ChildFunction<FormContext<V>>
  }
  export type FormProps<V = FormValues> =
    | ChildrenFormProps<V>
    | ComponentFormProps<V>
    | RenderFormProps<V>
    | React.FormHTMLAttributes<HTMLFormElement>
  export class Form<V = FormValues> extends React.Component<FormProps<V>> { }

  /*
   * FIELD ORGANIZING
   */

  export interface ScopeProps {
    scope: string
  }
  export class Scope extends React.Component<ScopeProps> { }

  export interface ArrayFieldProps {
    key?: React.Key
    field: string
    remove?: () => void
  }
  export interface ArrayFieldReturnPropParameters {
    add: () => void
    addWithInitialValue: (initialValue: any) => void
    fields: Array<ArrayFieldProps>
  }
  export interface ArrayFieldProps {
    field: string
    children: (props: ArrayFieldReturnPropParameters) => React.ReactNode
  }
  export class ArrayField extends React.Component<ArrayFieldProps, any> { }

  /*
   * INPUTS
   */

  export interface FieldProps<V, VS> extends BaseFieldProps<V, VS> {
    field: string
  }
  export interface ChildFieldProps<V, VS> extends BaseFieldProps<V, VS> {
    field?: string
  }

  export class Text<V = FormValue, VS = FormValues> extends React.Component<
    FieldProps<V, VS>,
    any
    > { }
  export class TextArea<V = FormValue, VS = FormValues> extends React.Component<
    FieldProps<V, VS>,
    any
    > { }
  export class RadioGroup<
    V = FormValue,
    VS = FormValues
    > extends React.Component<FieldProps<V, VS>, any> { }
  export class Radio<V = FormValue, VS = FormValues> extends React.Component<
    ChildFieldProps<V, VS>,
    any
    > { }
  export class Checkbox<V = FormValue, VS = FormValues> extends React.Component<
    FieldProps<V, VS>,
    any
    > { }

  export interface SelectFieldProps<V, VS> extends FieldProps<V, VS> {
    multiple?: boolean
  }
  export class Select<V = FormValue, VS = FormValues> extends React.Component<
    SelectFieldProps<V, VS>,
    any
    > { }
  export class Option<V = FormValue, VS = FormValues> extends React.Component<
    ChildFieldProps<V, VS>,
    any
    > { }

  /*
   * BASIC INPUTS
   */

  export interface BasicFieldProps<V, VS>
    extends BaseFieldProps<V, VS>,
    Omit<FieldContext<V>, 'render' | 'ref' | 'userProps'> {
    field?: string
  }

  export class BasicText<
    V = FormValue,
    VS = FormValues
    > extends React.Component<BasicFieldProps<V, VS>, any> { }
  export class BasicRadio<
    V = FormValue,
    VS = FormValues
    > extends React.Component<BasicFieldProps<V, VS>, any> { }
  export class BasicRadioGroup<
    V = FormValue,
    VS = FormValues
    > extends React.Component<BasicFieldProps<V, VS>, any> { }
  export class BasicTextArea<
    V = FormValue,
    VS = FormValues
    > extends React.Component<BasicFieldProps<V, VS>, any> { }

  export interface BasicSelectFieldProps<V, VS> extends BasicFieldProps<V, VS> {
    multiple?: boolean
  }
  export class BasicSelect<
    V = FormValue,
    VS = FormValues
    > extends React.Component<BasicSelectFieldProps<V, VS>, any> { }
  export class BasicCheckbox<
    V = FormValue,
    VS = FormValues
    > extends React.Component<BasicFieldProps<V, VS>, any> { }

  /*
   * HOCs
   */

  export function withFormApi<P, V = FormValues>(
    component: React.ComponentType<{ formApi: FormApi<V> } & P>,
  ): React.ComponentType<P>

  export function withFormState<P, V = FormValues>(
    component: React.ComponentType<{ formState: FormState<V> } & P>,
  ): React.ComponentType<P>

  export function withFieldApi<P, V = FormValue, VS = FormValues>(
    name: keyof VS,
  ): (
      component: React.ComponentType<{ fieldApi: FieldApi<V> } & P>,
    ) => React.ComponentType<P>

  export function withFieldState<P, V = FormValue, VS = FormValues>(
    name: keyof VS,
  ): (
      component: React.ComponentType<{ fieldState: FieldState<V> } & P>,
    ) => React.ComponentType<P>

  export interface RadioGroupApi<V> extends FieldApi<V> {
    onChange: (event: React.SyntheticEvent) => void
    onBlur: (event: React.SyntheticEvent) => void
  }
  export interface RadioGroupContext<V> {
    radioGroupApi: RadioGroupApi<V>
    radioGroupState: FieldState<V>
  }
  export function withRadioGroup<P, V = FormValue>(
    component: React.ComponentType<RadioGroupContext<V> & P>,
  ): React.ComponentType<P>

  export function asField<P, V = FormValue>(
    component: React.ComponentType<FieldContext<V> & P>,
  ): React.ComponentType<FieldProps<V, any> & P>

  /*
   * HOOKS
   */

  export function useFormApi<V = FormValues>(): FormApi<V>
  export function useFormState<V = FormValues>(): FormState<V>

  export function useFieldApi<V = FormValue>(field: string): FieldApi<V>
  export function useFieldState<V = FormValue>(field: string): FieldState<V>

  export interface useArrayFieldParams {
    field: string
    initialValue?: any
  }

  export function useArrayField(useArrayFieldParams: useArrayFieldParams): ArrayFieldReturnPropParameters

  export function useField<V = FormValue, VS = any>(
    fieldProps?: FieldProps<V, VS>,
  ): FieldContext<V>
}
