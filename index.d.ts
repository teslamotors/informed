import React from 'react';

export type FormState = {
  pristine: boolean;
  dirty: boolean;
  submitted: boolean;
  valid: boolean;
  invalid: boolean;
  submitting: boolean;
  validating: number;
  values: Record<string, unknown>;
  maskedValues: Record<string, unknown>;
  errors: Record<string, unknown>;
  touched: Record<string, unknown>;
  dirt: Record<string, unknown>;
  focused: Record<string, unknown>;
  initialValues: Record<string, unknown>;
};

export type FormApi = {
  getValue: (name: string) => unknown;
  setValue: (name: string, value: unknown) => void;
  getMaskedValue: (name: string) => unknown;
  setMaskedValue: (name: string, value: unknown) => void;
  getTouched: (name: string) => unknown;
  setTouched: (name: string, value: boolean) => void;
  getError: (name: string) => unknown;
  setError: (name: string, value: unknown) => void;
  getFocused: (name: string) => unknown;
  setFocused: (name: string, value: boolean) => void;
  resetField: (name: string) => void;
  reset: () => void;
  getFormState: () => FormState;
  getPristine: () => boolean;
  getDirty: () => boolean;
  getFieldState: (name: string) => FieldState;
  validate: () => void;
  validateField: (name: string) => void;
  submitForm: () => void;
};

export type FieldState = {
  value: unknown;
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
};

export type FieldApi = {
  getValue: () => unknown;
  setValue: (value: unknown, event?: React.SyntheticEvent) => void;
  getTouched: () => boolean;
  setTouched: (value: boolean, event?: React.SyntheticEvent) => void;
  getError: () => unknown;
  setError: (value: unknown, event?: React.SyntheticEvent) => void;
  getFocused: () => boolean;
  setFocused: (value: boolean, event?: React.SyntheticEvent) => void;
  reset: () => void;
  validate: () => unknown;
  getDirty: () => boolean;
  getPristine: () => boolean;
  getMaskedValue: () => unknown;
};

export type MultistepApi = {
  next: () => void;
  previous: () => void;
  getNextStep: () => void;
  getPreviousStep: () => string;
  setCurrent: (name: string) => string;
  getCurrentStep: () => string;
};

export type MultistepState = {
  steps: Array<string>;
  goal: string;
  current: string;
  nextStep: string;
  previousStep: string;
};

export type ArrayFieldApi = {
  add: (amount?: number) => void;
  reset: () => void;
  swap: (a: number, b: number) => void;
  addWithInitialValue: (value: any) => void;
};

export type ArrayFieldItemApi = {
  remove: () => void;
  reset: () => void;
  setValue: (name: string, value: unknown) => void;
  resetField: (name: string) => void;
};

export type ArrayFieldItemInfo = {
  name: string;
  index: number;
};

export type ArrayFieldItemState = {
  key: string;
  name: string;
  index: number;
  parent: string;
  values: Record<string, unknown>;
  errors: Record<string, unknown>;
  touched: Record<string, unknown>;
  initialValue: unknown | Record<string, unknown>;
};

export type InformedProps<UserProps> = {
  onSubmit?: (values: Record<string, unknown>) => void;
  onReset?: (formState: FormState) => void;
  onChange?: (formState: FormState) => void;
  onSubmitFailure?: (errors: Record<string, unknown>) => void;
  initialValues?: Record<string, unknown>;
  validateFields?: Function;
  showErrorIfError?: boolean;
  showErrorIfDirty?: boolean;
  validateOn?:
    | 'change'
    | 'blur'
    | 'change-blur'
    | 'change-submit'
    | 'blur-submit'
    | 'submit';
  validateOnMount?: boolean;
  formApiRef?: React.MutableRefObject<any>;
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

export type RelevantParams = {
  formState: FormState;
  formApi: FormApi;
  scope: string;
  relevanceDeps?: unknown[];
  relevanceWhen?: string[];
};

export type FieldProps<UserProps> = {
  name: string;
  type?: string;
  initialValue?: unknown;
  defaultValue?: unknown;
  validate?: (value: unknown, values: Record<string, unknown>) => unknown;
  relevant?: (relevantParams: RelevantParams) => boolean;
  onChange?: (fieldState: FieldState, event: React.SyntheticEvent) => void;
  onBlur?: (fieldState: FieldState, event: React.SyntheticEvent) => void;
  onFocus?: (fieldState: FieldState, event: React.SyntheticEvent) => void;
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
  showErrorIfError?: boolean;
  showErrorIfTouched?: boolean;
  showErrorIfDirty?: boolean;
  relevanceWhen?: string[];
  relevanceDeps?: unknown[];
  formatter?:
    | Array<string | RegExp | Function>
    | string
    | Object
    | ((value: unknown) => Array<string | RegExp | Function>);
} & Omit<
  UserProps,
  'onChange' | 'onBlur' | 'onFocus' | 'value' | 'defaultValue'
>;

export type FormController = {
  getValue: (name: string) => unknown;
  setValue: (name: string, value: unknown) => void;
  getMaskedValue: (name: string) => unknown;
  setMaskedValue: (name: string, value: unknown) => void;
  getTouched: (name: string) => unknown;
  setTouched: (name: string, value: boolean) => void;
  getFocused: (name: string) => unknown;
  setFocused: (name: string, value: boolean) => void;
  getError: (name: string) => unknown;
  setError: (name: string, value: unknown) => void;
  resetField: (name: string) => void;
  reset: () => void;
  getFormState: () => FormState;
  getPristine: () => boolean;
  getDirty: () => boolean;
  validate: () => void;
  asyncValidate: (done: () => void) => void;
  getFormApi: () => FormApi;
  getFieldState: (name: string) => FieldState;
  getValid: (name: string) => boolean;
  on: (event: string, handler: (...args: any[]) => void) => void;
  emit: (event: string, ...args: any[]) => void;
  removeListener: Function;
  remove: (name: string) => void;
  swap: (name: string, a: number, b: number) => void;
  register: (name: string, meta: any) => void;
  deregister: (name: string) => void;
  getInitialValue: (name: string) => unknown;
  initialize: (name: string, meta: any) => void;
  reformat: (name: string) => void;
  lockRemoval: ({ index, name }: { index: number; name: string }) => void;
  unlockRemoval: () => void;
  getRemovalLocked: () => { index: number; name: string };
  isRemovalLocked: () => boolean;
  submitForm: (e: any) => void;
  keyDown: (e: any) => void;
  validateAsync: (name: string) => void;
  validated: (name: string, res: unknown) => void;
  debouncedValidateAsync: (name: string, res: unknown) => void;
  getOptions: (...args: any[]) => any;
};

export function Relevant({
  when,
  relevanceWhen,
  relevanceDeps,
  children
}: {
  when: (relevantParams: RelevantParams) => boolean;
  relevanceWhen?: string[];
  relevanceDeps?: unknown[];
  children: React.ReactNode;
}): JSX.Element;

export function useFormApi(): FormApi;

export function useFormState(): FormState;

export function useFieldApi(name: string, scoped?: boolean): FieldApi;

export function useFieldState(name: string, scoped?: boolean): FieldState;

export function useScope(name: string): string;

export function useScoper(name: string): (name: string) => string;

export function useMultistepApi(): MultistepApi;

export function useForm<UserProps>(
  formProps: InformedProps<UserProps>
): {
  formState: FormState;
  formApi: FormApi;
  formController: FormController;
  render: (children: React.ReactNode) => JSX.Element;
  userProps: UserProps;
};

export function useField<UserProps, FieldValue>(
  fieldProps: FieldProps<UserProps>
): {
  fieldState: FieldState;
  fieldApi: FieldApi;
  userProps: UserProps;
  informed: {
    onChange(event: React.SyntheticEvent): void;
    onBlur(event: React.SyntheticEvent): void;
    onFocus(event: React.SyntheticEvent): void;
    value: FieldValue;
  };
  render: (children: React.ReactNode) => JSX.Element;
  ref: React.MutableRefObject<any>;
};

export function useRelevance(params: {
  name: string;
  relevant?: (params: RelevantParams) => boolean;
  relevanceWhen?: unknown[];
  relevanceDeps?: unknown[];
}): boolean;

export function FormStateAccessor({
  children
}: {
  children: (formState: FormState) => JSX.Element;
}): JSX.Element;

declare function ArrayField({
  children,
  name
}: {
  children: (arrayFieldItemApi: ArrayFieldApi) => JSX.Element;
  name: string;
}): JSX.Element;

declare namespace ArrayField {
  function Items({
    children
  }: {
    children: (props: ArrayFieldItemApi & ArrayFieldItemInfo) => JSX.Element;
  }): JSX.Element;
}

declare function Multistep({
  children
}: {
  children: (props: MultistepApi & MultistepState) => JSX.Element;
}): JSX.Element;

declare namespace Multistep {
  function Step({ children }: { children: () => JSX.Element }): JSX.Element;
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
      getErrorMessage
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
    frmtr: any,
    old?: any
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
    frmtr: any,
    old?: any
  ): {
    value: any;
    offset: number;
  };
  function getSchemaPathFromJsonPath(scopedName: string): string;
}
