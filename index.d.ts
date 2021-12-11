import React, { FormEventHandler, KeyboardEventHandler } from 'react';

// utility types come from the wonderful react-hook-form library.
// https://github.com/react-hook-form/react-hook-form/blob/master/src/types/utils.ts


declare const $NestedValue: unique symbol;

type Primitive = null | undefined | string | number | boolean | symbol | bigint;

type EmptyObject = { [K in string | number]: never };

type NestedValue<TValue extends object = object> = {
  [$NestedValue]: never;
} & TValue;

export type UnpackNestedValue<T> = T extends NestedValue<infer U>
  ? U
  : T extends Date
  ? T
  : T extends object
  ? { [K in keyof T]: UnpackNestedValue<T[K]> }
  : T;

export type InitialValues<TValues> = UnpackNestedValue<DeepPartial<TValues>>;

type NonUndefined<T> = T extends undefined ? never : T;

type DeepPartial<T> = T extends Date | NestedValue
  ? T
  : { [K in keyof T]?: DeepPartial<T[K]> };

type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false;

type DeepMap<T, TValue> = IsAny<T> extends true
  ? any
  : T extends Date | FileList | File | NestedValue
  ? TValue
  : T extends object
  ? { [K in keyof T]: DeepMap<NonUndefined<T[K]>, TValue> }
  : TValue;

type UnionKeys<T> = T extends any ? keyof T : never;

type UnionValues<T, K> = T extends any
  ? K extends keyof T
    ? T[K]
    : never
  : never;

type OptionalKeys<T> = T extends any
  ? { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T]
  : never;

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type UnionLike<T> = [T] extends [Date | FileList | File | NestedValue]
  ? T
  : [T] extends [ReadonlyArray<any>]
  ? { [K in keyof T]: UnionLike<T[K]> }
  : [T] extends [object]
  ? PartialBy<
      {
        [K in UnionKeys<T>]: UnionLike<UnionValues<T, K>>;
      },
      Exclude<UnionKeys<T>, keyof T> | OptionalKeys<T>
    >
  : T;

type IsFlatObject<T extends object> = Extract<
  Exclude<T[keyof T], NestedValue | Date | FileList>,
  any[] | object
> extends never
  ? true
  : false;

type IsTuple<T extends ReadonlyArray<any>> = number extends T['length']
  ? false
  : true;

type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

type ArrayKey = number;

type PathImpl<K extends string | number, V> = V extends Primitive
  ? `${K}`
  : `${K}` | `${K}.${Path<V>}`;

type Path<T> = T extends ReadonlyArray<infer V>
  ? IsTuple<T> extends true
    ? {
        [K in TupleKey<T>]-?: PathImpl<K & string, T[K]>;
      }[TupleKey<T>]
    : PathImpl<ArrayKey, V>
  : {
      [K in keyof T]-?: PathImpl<K & string, T[K]>;
    }[keyof T];

type ArrayPathImpl<K extends string | number, V> = V extends Primitive
  ? never
  : V extends ReadonlyArray<infer U>
  ? U extends Primitive
    ? never
    : `${K}` | `${K}.${ArrayPath<V>}`
  : `${K}.${ArrayPath<V>}`;

type ArrayPath<T> = T extends ReadonlyArray<infer V>
  ? IsTuple<T> extends true
    ? {
        [K in TupleKey<T>]-?: ArrayPathImpl<K & string, T[K]>;
      }[TupleKey<T>]
    : ArrayPathImpl<ArrayKey, V>
  : {
      [K in keyof T]-?: ArrayPathImpl<K & string, T[K]>;
    }[keyof T];

type FieldValues = Record<string, any>;

type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>;
type FieldArrayPath<TFieldValues extends FieldValues> = ArrayPath<TFieldValues>;

type PathValue<T, P extends Path<T> | ArrayPath<T>> = T extends any
  ? P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? R extends Path<T[K]>
        ? PathValue<T[K], R>
        : never
      : K extends `${ArrayKey}`
      ? T extends ReadonlyArray<infer V>
        ? PathValue<V, R & Path<V>>
        : never
      : never
    : P extends keyof T
    ? T[P]
    : P extends `${ArrayKey}`
    ? T extends ReadonlyArray<infer V>
      ? V
      : never
    : never
  : never;

type FieldPathValue<
  TFieldValues extends FieldValues,
  TFieldPath extends FieldPath<TFieldValues>
> = PathValue<TFieldValues, TFieldPath>;

type FieldArrayPathValue<
  TFieldValues extends FieldValues,
  TFieldArrayPath extends FieldArrayPath<TFieldValues>
> = PathValue<TFieldValues, TFieldArrayPath>;

type FieldPathValues<
  TFieldValues extends FieldValues,
  TPath extends FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[]
> = {} & {
  [K in keyof TPath]: FieldPathValue<
    TFieldValues,
    TPath[K] & FieldPath<TFieldValues>
  >;
};

type FieldArray<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>
> = FieldArrayPathValue<TFieldValues, TFieldArrayName> extends
  | ReadonlyArray<infer U>
  | null
  | undefined
  ? U
  : never;

type FieldNamesMarkedBoolean<TValues extends FieldValues> = DeepMap<
  DeepPartial<UnionLike<TValues>>,
  true
>;

type FieldErrors<TValues extends FieldValues = FieldValues> = DeepMap<
  DeepPartial<UnionLike<TValues>>,
  string
>;

type RenderFn = (children: React.ReactNode) => JSX.Element;

export type FormState<TValues extends FieldValues = FieldValues> = {
  pristine: boolean;
  dirty: boolean;
  submitted: boolean;
  valid: boolean;
  invalid: boolean;
  submitting: boolean;
  validating: number;
  values: TValues;
  maskedValues: TValues;
  errors: FieldErrors<TValues>;
  touched: FieldNamesMarkedBoolean<TValues>;
  dirt: FieldNamesMarkedBoolean<TValues>;
  focused: FieldNamesMarkedBoolean<TValues>;
  initialValues: TValues;
};

export type FormApi<TValues extends FieldValues = FieldValues> = {
  getFormState: () => FormState<TValues>;
  getValue: <TFieldName extends FieldPath<TValues> = FieldPath<TValues>>(
    name: TFieldName
  ) => UnpackNestedValue<FieldPathValue<TValues, TFieldName>>;
  setValue: <TFieldName extends FieldPath<TValues> = FieldPath<TValues>>(
    name: TFieldName,
    value: UnpackNestedValue<FieldPathValue<TValues, TFieldName>>
  ) => void;
  getMaskedValue: (name: FieldPath<TValues>) => unknown;
  setMaskedValue: (name: FieldPath<TValues>, value: unknown) => void;
  getTouched: (name: FieldPath<TValues>) => boolean;
  setTouched: (name: FieldPath<TValues>, value: boolean) => void;
  getError: <TFieldName extends FieldPath<TValues> = FieldPath<TValues>>(
    name: TFieldName
  ) => UnpackNestedValue<FieldPathValue<TValues, TFieldName>> extends Primitive
    ? string
    : FieldErrors<TValues>;
  setError: (name: FieldPath<TValues>, value: unknown) => void;
  getFocused: (name: FieldPath<TValues>) => unknown;
  setFocused: (name: FieldPath<TValues>, value: boolean) => unknown;
  getPristine: (name: FieldPath<TValues>) => boolean;
  getDirty: (name: FieldPath<TValues>) => boolean;
  getFieldState: <TFieldName extends FieldPath<TValues> = FieldPath<TValues>>(
    name: TFieldName
  ) => FieldState<TValues, TFieldName>;
  reset: () => void;
  resetField: (name: FieldPath<TValues>) => void;
  validateField: (name: FieldPath<TValues>) => void;
  touchAllFields: () => void;
};

export interface FormController<TValues extends FieldValues = FieldValues>
  extends FormApi<TValues> {
  options: any;
  subscriptions: any;
  state: FormState<TValues>;
  validate: () => void;
  asyncValidate: (done: () => void) => void;
  validateAsync: (name: FieldPath<TValues>) => void;
  debouncedValidateAsync: (name: string, res: unknown) => void;
  reformat: (name: FieldPath<TValues>) => void;
  getOptions: (...args: any[]) => any;
  getInitialValue: () => TValues;
  on: (event: string, handler: (...args: any[]) => void) => void;
  emit: (event: string, ...args: any[]) => void;
  submitForm: FormEventHandler;
  keyDown: KeyboardEventHandler<HTMLFormElement>;
  initialize: (name: FieldPath<TValues>, meta: any) => void;
  remove: (name: FieldPath<TValues>) => void;
  swap: (name: FieldArrayPath<TValues>, indexA: number, indexB: number) => void;
  pullOut: (name: FieldPath<TValues>) => void;
  register: (name: FieldPath<TValues>, meta: any) => void;
  deregister: (name: FieldPath<TValues>) => unknown;
  validated: (name: FieldPath<TValues>, res: any) => void;
  lockRemoval: () => void;
  unlockRemoval: () => void;
  getRemovalLocked: () => { index: number; name: string };
  isRemovalLock: () => boolean;
  valid: () => boolean;
  getErrorMessage: (
    key: string,
    name: FieldPath<TValues>
  ) => string | undefined;
  removeListener: (event: string, listeners: (...args: any[]) => void) => void;
}

export interface FieldState<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
> {
  value: UnpackNestedValue<FieldPathValue<TValues, TFieldName>>;
  maskedValue: unknown;
  error: unknown;
  touched: boolean;
  pristine: boolean;
  dirty: boolean;
  valid: boolean;
  invalid: boolean;
  showError: boolean;
  validating: boolean;
  focused: boolean;
}

export interface FieldApi<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
> {
  getValue: () => FieldPathValue<TValues, TFieldName>;
  setValue: (
    value: FieldPathValue<TValues, TFieldName>,
    event?: React.SyntheticEvent,
    key?: string
  ) => void;
  getTouched: () => boolean;
  setTouched: (value: boolean, event?: React.SyntheticEvent) => void;
  getError: () => FieldPathValue<TValues, TFieldName> extends Primitive
    ? string
    : FieldErrors<TValues>;
  setError: (value: unknown) => void;
  getFocused: () => boolean;
  setFocused: (value: boolean, event?: React.SyntheticEvent) => void;
  reset: () => void;
  validate: () => void;
  getDirty: () => boolean;
  getPristine: () => boolean;
  getMaskedValue: () => unknown;
}

export interface ArrayFieldState<
  TValues extends FieldValues = FieldValues,
  TFieldArrayName extends FieldArrayPath<TValues> = FieldArrayPath<TValues>
> {
  initialValue: FieldArrayPathValue<TValues, TFieldArrayName>;
  key: string;
  name: `${TFieldArrayName}[${number}]`;
  index: number;
  parent: `${TFieldArrayName}`;
}

export interface ArrayFieldApi<
  TValues extends FieldValues = FieldValues,
  TFieldArrayName extends FieldArrayPath<TValues> = FieldArrayPath<TValues>
> {
  add: () => void;
  reset: () => void;
  swap: (indexA: number, indexB: number) => void;
  addWithInitialValue: (
    value: Partial<FieldArray<TValues, TFieldArrayName>>
  ) => void;
}

export interface ArrayFieldItemApi<TValues extends FieldValues = FieldValues> {
  remove: () => void;
  reset: () => void;
  setValue: <TFieldName extends FieldPath<TValues> = FieldPath<TValues>>(
    name: TFieldName,
    value: FieldPathValue<TValues, TFieldName>
  ) => void;
  resetField: (name: FieldPath<TValues>) => void;
}

export interface ArrayFieldItemInfo {
  name: string;
  index: number;
}

export interface ArrayFieldItemState<
  TValues extends FieldValues = FieldValues
> {
  key: string;
  name: string;
  index: number;
  parent: string;
  values: TValues;
  errors: FieldErrors<TValues>;
  touched: FieldNamesMarkedBoolean<TValues>;
  initialValue: TValues;
}

export interface MultistepState {
  steps: string[];
  goal: string | null;
}

export type MultistepApi = any;

export type UseFormParams<
  TValues extends FieldValues = FieldValues,
  UserProps = React.HTMLAttributes<HTMLFormElement>
> = {
  initialValues?: InitialValues<TValues>;
  onSubmit?: (values: TValues) => void;
  onReset?: (formState: FormState<TValues>) => void;
  onChange?: (formState: FormState<TValues>) => void;
  onSubmitFailure?: (errors: FieldErrors<TValues>) => void;
  validateFields?: () => void;
  showErrorIfError?: boolean;
  showErrorIfTouched?: boolean;
  showErrorIfDirty?: boolean;
  validateOn?:
    | 'change'
    | 'blur'
    | 'change-blur'
    | 'change-submit'
    | 'blur-submit'
    | 'submit';
  validateOnMount?: boolean;
  formApiRef?: React.MutableRefObject<FormApi<TValues>>;
  dontPreventDefault?: boolean;
  yupSchema?: any;
  allowEmptyStrings?: boolean;
  preventEnter?: boolean;
  schema?: any;
  ajv?: any;
  ajvErrors?: any;
  onlyValidateSchema?: boolean;
  components?: any;
  errorMessage?: Record<string, unknown>;
} & Omit<UserProps, 'onSubmit' | 'onReset' | 'onChange' | 'onSubmitFailure'>;

export interface UseArrayFieldParams<
  TValues extends FieldValues = FieldValues,
  TArrayFieldName extends FieldArrayPath<TValues> = FieldArrayPath<TValues>
> {
  name: TArrayFieldName;
  initialValue: FieldArrayPathValue<TValues, TArrayFieldName>;
  arrayFieldApiRef: React.MutableRefObject<
    ArrayFieldApi<TValues, TArrayFieldName>
  >;
}

export interface UseRelevanceParams<TValues extends FieldValues = FieldValues> {
  name: FieldPath<TValues>;
  relevant?: (params: {
    formState: FormState<TValues>;
    formApi: FormApi<TValues>;
    scope: string;
    relevanceDeps: UseRelevanceParams<TValues>['relevanceDeps'];
  }) => boolean;
  relevanceWhen?: FieldPath<TValues>[];
  relevanceDeps?: FieldPath<TValues>[];
}

export interface UseCursorPositionParams {
  value: any;
  inputRef?: React.MutableRefObject<HTMLInputElement>;
  inputRefs?: React.MutableRefObject<HTMLInputElement>[];
  maintainCursor?: boolean;
}

export interface UseMultistepParams {
  initialStep?: string;
  multiStepApiRef?: React.MutableRefObject<typeof useMultistepApi>;
}

export interface UseMultistepStepParams {
  step: string;
  relevant?: UseRelevanceParams['relevant'];
  relevantWhen?: UseRelevanceParams['relevanceWhen'];
  keepState?: boolean;
}

export type FormProps<
  TValues extends FieldValues = FieldValues,
  UserProps = React.FormHTMLAttributes<HTMLFormElement>
> = UseFormParams<TValues, UserProps> & {
  children:
    | React.ReactNode
    | (({
        formState,
        formApi,
      }: {
        formState: FormState<TValues>;
        formApi: FormApi<TValues>;
      }) => React.ReactNode);
};

export type FieldProps<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>,
  UserProps = React.InputHTMLAttributes<HTMLInputElement>
> = {
  name: TFieldName;
  type?: string;
  initialValue?: unknown;
  defaultValue?: unknown;
  validate?: (
    value: UnpackNestedValue<FieldPathValue<TValues, TFieldName>>,
    values: TValues
  ) => unknown;
  relevant?: ({
    formState,
    formApi,
    scope,
    relevanceDeps,
  }: {
    formState: FormState<TValues>;
    formApi: FormApi<TValues>;
    scope: string;
    relevanceDeps: Array<any>;
  }) => boolean;
  onChange?: (
    fieldState: FieldState<TValues, TFieldName>,
    event: React.SyntheticEvent
  ) => void;
  onBlur?: (
    fieldState: FieldState<TValues, TFieldName>,
    event: React.SyntheticEvent
  ) => void;
  onFocus?: (
    fieldState: FieldState<TValues, TFieldName>,
    event: React.SyntheticEvent
  ) => void;
  validateOn?:
    | 'change'
    | 'blur'
    | 'change-blur'
    | 'change-submit'
    | 'blur-submit'
    | 'submit';
  validateWhen?: string[];
  validateOnMount?: boolean;
  keepState?: boolean;
  keepStateIfRelevant?: boolean;
  maintainCursor?: boolean;
  allowEmptyString?: boolean;
  inputRef?: React.MutableRefObject<any>;
  formatter?:
    | Array<string | RegExp | Function>
    | string
    | Object
    | ((
        value: UnpackNestedValue<FieldPathValue<TValues, TFieldName>>
      ) => Array<string | RegExp | Function>);
} & Pick<
  FormProps<TValues, UserProps>, 
  'showIfError' | 'showErrorIfTouched' | 'showErrorIfDirty'
> & Omit<
  UserProps,
  'name' | 'onChange' | 'onBlur' | 'onFocus' | 'value' | 'defaultValue'
>;

export interface ArrayFieldProps<
  TValues extends FieldValues = FieldValues,
  TArrayFieldName extends FieldArrayPath<TValues> = FieldArrayPath<TValues>
> {
  children: (
    arrayFieldItemApi: ArrayFieldApi<TValues, TArrayFieldName>
  ) => JSX.Element;
  name: TArrayFieldName;
}

export interface ScopeProps {
  scope: string;
  children: React.ReactNode;
}

export interface ArrayFieldItemsProps {
  children: {
    name: ArrayFieldItemState<FieldValues>['name'];
    remove: ArrayFieldItemApi<FieldValues>['remove'];
  };
}

export interface DebugFieldProps<TValues extends FieldValues = FieldValues> {
  name: FieldPath<TValues>;
  [x: string]: any;
}

export type RadioProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export interface RadioGroupProps<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
> extends FieldProps<
    TValues,
    TFieldName,
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>
  > {
  label?: string;
  options?: { label: string; value: string }[];
}

export interface CheckboxProps<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
> extends FieldProps<
    TValues,
    TFieldName,
    React.InputHTMLAttributes<HTMLInputElement>
  > {
  label?: string;
}

export interface SelectProps<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
> extends FieldProps<
    TValues,
    TFieldName,
    React.SelectHTMLAttributes<HTMLSelectElement>
  > {
  label?: string;
  options?: { label: string; value: string; disabled?: boolean }[];
}

export interface MultistepProps extends UseMultistepParams {
  children:
    | React.ReactNode
    | ((props: Omit<ReturnType<typeof useMultistep>, 'render'>) => JSX.Element);
}

export interface MultistepStepProps extends UseMultistepStepParams {
  children: React.ReactNode;
}

/* hooks */

export function useFormApi<
  TValues extends FieldValues = FieldValues
>(): FormApi<TValues>;

export function useFormState<
  TValues extends FieldValues = FieldValues
>(): FormState<TValues>;

export function useForm<
  TValues extends FieldValues = FieldValues,
  UserProps = React.FormHTMLAttributes<HTMLFormElement>
>(
  params: UseFormParams<TValues, UserProps>
): {
  formState: FormState<TValues>;
  formApi: FormApi<TValues>;
  formController: FormController<TValues>;
  render: RenderFn;
  userProps: UserProps;
};

export function useFieldApi<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
>(name: TFieldName, scoped?: boolean): FieldApi<TValues, TFieldName>;

export function useFieldState<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
>(name: TFieldName, scoped?: boolean): FieldState<TValues, TFieldName>;

export function useField<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>,
  UserProps = React.InputHTMLAttributes<HTMLInputElement>
>(
  params: FieldProps<TValues, TFieldName, UserProps>
): {
  fieldState: FieldState<TValues, TFieldName>;
  fieldApi: FieldApi<TValues, TFieldName>;
  userProps: UserProps & { label?: string };
  informed: {
    onChange(event: React.SyntheticEvent): void;
    onBlur(event: React.SyntheticEvent): void;
    onFocus(event: React.SyntheticEvent): void;
    value: UnpackNestedValue<FieldPathValue<TValues, TFieldName>>;
  };
  render: RenderFn;
  ref: React.MutableRefObject<any>;
};

export function useArrayFieldApi<
  TValues extends FieldValues,
  TFieldArrayName extends FieldArrayPath<TValues>
>(): ArrayFieldApi<TValues, TFieldArrayName>;

export function useArrayField<
  TValues extends FieldValues = FieldValues,
  TArrayFieldName extends FieldArrayPath<TValues> = FieldArrayPath<TValues>
>(
  params: UseArrayFieldParams<TValues, TArrayFieldName>
): {
  render: RenderFn;
  arrayFieldState: {
    name: string;
    fields: ArrayFieldItemState<TValues>;
  };
  arrayFieldItemApi: Pick<ArrayFieldItemApi<TValues>, 'remove'>;
};

export function useArrayFieldItemState<
  TValues extends FieldValues = FieldValues
>(): ArrayFieldItemState<TValues>;

export function useArrayFieldItemApi(): any;

export function useMultistepApi(): {
  register: (name: string, step: string) => void;
  next: () => void;
  previous: () => void;
  getNextStep: () => string;
  getPreviousStep: () => string;
  setCurrent: (step: string) => void;
  metGoal: () => void;
};

export function useMultistepState(): MultistepState;

export function useMultistep(
  params: UseMultistepParams
): MultistepApi & MultistepState & { render: RenderFn };

// TODO: fix it.
export function useMultistepStep(params: UseMultistepStepParams): {
  active: boolean;
  step: string;
  render: RenderFn;
  relevant: boolean;
};

export function useScope<TValues extends FieldValues = FieldValues>(
  name: FieldPath<TValues>
): string;

export function useScoper<TValues extends FieldValues = FieldValues>(
  name: FieldPath<TValues>
): (name: string) => string;

export function useScopedApi<TValues extends FieldValues = FieldValues>(
  name: FieldPath<TValues>
): FormApi<TValues>;

export function useRelevance<TValues extends FieldValues = FieldValues>(
  params: UseRelevanceParams<TValues>
): boolean;

export function useCursorPosition(params: UseCursorPositionParams): {
  setCursor: (cursor: number) => void;
  setCursorOffset: (cursor: number) => void;
  cursor: number;
  getCursor: () => number;
  cursorOffset: number;
};

export function useRadioGroup<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
>(): {
  radioGroupApi: FieldApi<TValues, TFieldName>;
  radioGroupState: FieldState<TValues, TFieldName>;
} & RadioGroupProps<TValues, TFieldName>;

/* components */

export function FormStateAccessor<TValues extends FieldValues = FieldValues>({
  children,
}: {
  children: (formState: FormState<TValues>) => JSX.Element;
}): JSX.Element;

export function Form<TValues extends FieldValues = FieldValues>(
  props: FormProps<TValues, React.FormHTMLAttributes<HTMLFormElement>>
): JSX.Element;

declare function ArrayField<
  TValues extends FieldValues = FieldValues,
  TArrayFieldName extends FieldArrayPath<TValues> = FieldArrayPath<TValues>
>({ children, name }: ArrayFieldProps<TValues, TArrayFieldName>): JSX.Element;

declare namespace ArrayField {
  function Items({
    children,
  }: {
    children: (
      props: ArrayFieldItemApi<FieldValues> & ArrayFieldItemInfo
    ) => JSX.Element;
  }): JSX.Element;
}

export function Scope(props: ScopeProps): JSX.Element;

export function SchemaFields(): JSX.Element;

export function Debug(props: any): JSX.Element;

export function DebugField(props: DebugFieldProps): JSX.Element;

export function Input<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
>(
  props: FieldProps<
    TValues,
    TFieldName,
    React.InputHTMLAttributes<HTMLInputElement>
  >
): JSX.Element;

export function Option(
  props: React.OptionHTMLAttributes<HTMLOptionElement>
): JSX.Element;

export function Radio(props: RadioProps): JSX.Element;

export function RadioGroup<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
>(props: RadioGroupProps<TValues, TFieldName>): JSX.Element;

export function Checkbox<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
>(props: CheckboxProps<TValues, TFieldName>): JSX.Element;

export function Select<
  TValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TValues> = FieldPath<TValues>
>(props: SelectProps<TValues, TFieldName>): JSX.Element;

declare function Multistep(props: MultistepProps): JSX.IntrinsicElements;

declare namespace Multistep {
  function Step(props: MultistepStepProps): JSX.Element;
}

declare namespace utils {
  function uuidv4(): string;
  function getParentPath(scopedFieldName: string): string;
  function isChild(
    scopedParentFieldName: string,
    scopedChildFieldName: string
  ): string;
  function generateOnChange(props: {
    fieldType: string;
    setValue: (value: unknown, event?: React.SyntheticEvent) => void;
    multiple?: boolean;
    ref: React.Ref<unknown>;
  }): (e: React.SyntheticEvent) => void;
  function generateOnBlur(props: {
    setTouched: (touched: true, e?: React.SyntheticEvent) => void;
  }): (e: React.SyntheticEvent) => void;
  function generateOnFocus(props: {
    setFocused: (focused: true, e?: React.SyntheticEvent) => void;
  }): (e: React.SyntheticEvent) => void;
  function generateValue(props: {
    fieldType: string;
    maskedValue: unknown;
    value: unknown;
    multiple?: boolean;
  }): unknown;
  function yupToFormErrors(yupError: any): { [fieldKey: string]: unknown };
  function validateYupSchema(
    schema: any,
    values: unknown
  ): ReturnType<typeof yupToFormErrors>;
  function yupToFormError(yupError: any): string | undefined;
  function validateYupField(
    schema: any,
    value: unknown
  ): ReturnType<typeof yupToFormError> | undefined;
  function validateAjvSchema(
    validate: (data: any) => any,
    data: unknown
  ): { [fieldKey: string]: unknown };
  function validateRequired(
    value: unknown,
    required: boolean,
    getErrorMessage: (key: 'required') => string | undefined
  ): string;
  function validateMax(
    value: unknown,
    max: number | null | undefined,
    getErrorMessage: (key: 'maximum') => string | undefined
  ): string;
  function validateMin(
    value: unknown,
    min: number | null | undefined,
    getErrorMessage: (key: 'minimum') => string | undefined
  ): string;
  function validateMaxLength(
    value: unknown,
    maxLength: number | null | undefined,
    getErrorMessage: (key: 'maxLength') => string | undefined
  ): string;
  function validateMinLength(
    value: unknown,
    minLength: number | null | undefined,
    getErrorMessage: (key: 'minLength') => string | undefined
  ): string;
  function generateValidationFunction(
    validationFunc: any,
    yupSchema: any,
    {
      required,
      minimum,
      maximum,
      minLength,
      maxLength,
      pattern,
      getErrorMessage,
    }: {
      required: any;
      minimum: any;
      maximum: any;
      minLength: any;
      maxLength: any;
      pattern: any;
      getErrorMessage: any;
    }
  ): (val: any, values: any) => any;
  function informedParse(val: any, parser: any): any;
  function informedFormat(
    val: any,
    frmtr: any
  ):
    | {
        value: any;
        offset: number;
      }
    | {
        value: {};
        offset: {};
      };
  function informedFormatter(
    val: any,
    frmtr: any
  ): {
    value: any;
    offset: number;
  };
  function getSchemaPathFromJsonPath(scopedName: string): string;
}
