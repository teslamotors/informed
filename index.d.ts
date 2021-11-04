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
};

export type FormProps<UserProps> = {
  onSubmit?: (values: Record<string, unknown>) => void;
  onSubmitFailure?: (errors: Record<string, unknown>) => void;
  initialValues?: Record<string, unknown>;
  validateFields?: (values: Record<string, unknown>) => Record<string, unknown>;
  onBlur(event: React.SyntheticEvent): void;
  onChange(event: React.SyntheticEvent): void;
  onFocus(event: React.SyntheticEvent): void;
  dontPreventDefault?: boolean;
  allowEmptyStrings?: boolean;
  preventEnter?: boolean;
  validationSchema?: any;
  schema?: any;
  ajv?: any;
} & UserProps;

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

export type FieldProps<UserProps> = {
  name: string;
  type?: string;
  initialValue?: unknown;
  defaultValue?: unknown;
  validate?: (value: unknown, values: Record<string, unknown>) => unknown;
  relevant?: (
    { formState: FormState, formApi: FormApi, scope: string }
  ) => boolean;
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
  lockRemoval: ({ index: number, name: string }) => void;
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

export function useFormApi(): FormApi;

export function useFormState(): FormState;

export function useForm<UserProps>(
  formProps: FormProps<UserProps>
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
