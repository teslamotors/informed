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
  resetField: (name: string) => void;
  reset: () => void;
  getFormState: () => FormState;
  getPristine: () => boolean;
  getDirty: () => boolean;
};

export type FormProps = {
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
};

export type FieldProps = {
  name: string;
  initialValue?: unknown;
  defaultValue?: unknown;
  validate?: (value: unkown, values: Record<string, unknown>) => unknown;
  relevant?: (
    { formState: FormState, formApi: FormApi, scope: string }
  ) => boolean;
  validateOn?:
    | 'change'
    | 'blur'
    | 'change-blur'
    | 'change-submit'
    | 'blur-submit'
    | 'submit';
  validateOnMount?: boolean;
  keepState?: boolean;
  keepStateIfRelevant?: boolean;
  maintainCursor?: boolean;
  allowEmptyString?: boolean;
  inputRef?: React.MutableRefObject<any>;
  showErrorIfError?: boolean;
  showErrorIfTouched?: boolean;
  showErrorIfDirty?: boolean;
};

export function useFormApi(): FormApi;

export function useFormState(): FormState;

export function useForm(): {
  formState: FormState;
  formApi: FormApi;
  formController: FormController;
  render: (children: React.ReactNode) => JSX.Element;
  userProps: Record<string, unknown>;
};
