import React from 'react';

export type FormState = {
  pristine: boolean;
  dirty: boolean;
  disabled: boolean;
  submitted: boolean;
  valid: boolean;
  invalid: boolean;
  submitting: boolean;
  validating: number;
  gathering: number;
  values: Record<string, unknown>;
  maskedValues: Record<string, unknown>;
  errors: Record<string, unknown>;
  touched: Record<string, unknown>;
  modified: Record<string, unknown>;
  dirt: Record<string, unknown>;
  focused: Record<string, unknown>;
  initialValues: Record<string, unknown>;
  data: Record<string, unknown>;
  memory: Record<string, unknown>;
};

export type InformedApi = {
  getFormApi: (name: string) => FormApi;
};

export type FormApi = {
  getValue: (name: string) => unknown;
  setValue: (name: string, value: unknown) => void;
  setValueQuietly: (name: string, value: unknown) => void;
  clearValue: (name: string) => void;
  clearAllValues: () => void;
  setValues: (values: unknown) => void;
  setTheseValues: (values: unknown) => void;
  getInitialValue: (name: string) => unknown;
  getMaskedValue: (name: string) => unknown;
  setMaskedValue: (name: string, value: unknown) => void;
  setModifiedValue: (name: string, value: unknown) => void;
  getTouched: (name: string) => unknown;
  setTouched: (name: string, value: boolean) => void;
  getError: (name: string) => unknown;
  setError: (name: string, value: unknown) => void;
  clearError: (name: string) => void;
  clearAllErrors: () => void;
  getFocused: (name: string) => unknown;
  setFocused: (name: string, value: boolean) => void;
  getData: (name: string) => unknown;
  getModified: (name: string) => unknown;
  resetField: (name: string, options?: FieldResetOptions) => void;
  resetPath: (name: string) => void;
  reset: (options?: { values?: unknown; resetValues?: boolean }) => void;
  getFormState: () => FormState;
  getPristine: () => boolean;
  getDirty: () => boolean;
  getFieldState: (name: string) => FieldState;
  validate: () => void;
  validateField: (name: string) => void;
  submitForm: () => void;
  touchAllFields: () => void;
  asyncValidate: () => void;
  focusFirstError: () => void;
  disable: () => void;
  enable: () => void;
  fieldExists: (fieldName: string) => boolean;
  restore: (name: string) => void;
  getMemory: (name: string) => unknown;
};

export type FieldState = {
  value: unknown;
  maskedValue: unknown;
  previousValue?: unknown;
  error: unknown;
  modified: boolean;
  touched: boolean;
  pristine: boolean;
  dirty: boolean;
  valid: boolean;
  invalid: boolean;
  showError: boolean;
  validating: boolean;
  focused: boolean;
  data: unknown;
  gathering: boolean;
  memory: unknown;
};

export type FieldResetOptions = {
  value?: any;
  resetError?: boolean;
  resetTouched?: boolean;
  resetDirt?: boolean;
};

export type FieldApi = {
  getValue: () => unknown;
  setValue: (value: unknown, event?: React.SyntheticEvent) => void;
  setValueQuietly: (value: unknown) => void;
  getTouched: () => boolean;
  setTouched: (value: boolean, event?: React.SyntheticEvent) => void;
  getError: () => unknown;
  setError: (value: unknown, event?: React.SyntheticEvent) => void;
  getFocused: () => boolean;
  setFocused: (value: boolean, event?: React.SyntheticEvent) => void;
  reset: (options?: FieldResetOptions) => void;
  validate: () => unknown;
  getDirty: () => boolean;
  getPristine: () => boolean;
  getMaskedValue: () => unknown;
  clearValue: () => void;
  getMemory: () => unknown;
};

export type MultistepApi = {
  next: () => void;
  previous: () => void;
  getNextStep: () => void;
  getPreviousStep: () => string;
  setCurrent: (name: string) => string;
  getCurrentStep: () => string;
};

export type MultistepStep = {
  name: string;
  index: number;
  relevant?: (relevantParams: RelevantParams) => boolean;
};

export type MultistepState = {
  steps: Array<MultistepStep>;
  goal: string;
  current: string;
  nextStep: string;
  previousStep: string;
};

export type ArrayFieldState = {
  fields: any[];
  name: string;
};

export type ArrayFieldApi = {
  add: (amount?: number) => void;
  remove: (index: number) => void;
  reset: () => void;
  swap: (a: number, b: number) => void;
  insert: (index: number, value: any) => void;
  addWithInitialValue: (value: any) => void;
  clear: () => void;
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
  onSubmit?: (formState: FormState) => void;
  onReset?: (formState: FormState) => void;
  onChange?: (formState: FormState) => void;
  onValid?: (formState: FormState) => void;
  onInvalid?: (formState: FormState) => void;
  onValueChange?: (formState: FormState) => void;
  onValueModified?: (formState: FormState) => void;
  onSubmitFailure?: (errors: Record<string, unknown>) => void;
  initialValues?: Record<string, unknown>;
  keepState?: boolean;
  keepStateIfRelevant?: boolean;
  validateFields?: (values: Record<string, unknown>) => Record<string, unknown>;
  validateModified?: boolean;
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
  adapter?: Record<string | number | symbol, React.FC>;
  errorMessage?: Record<string, unknown>;
  focusOnInvalid?: boolean;
  resetOnlyOnscreen?: boolean;
  scrollOnInvalid?: ScrollIntoViewOptions;
  debounceGather?: number;
  debounceError?: number;
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
  onNativeChange?: (
    fieldState: FieldState,
    event: React.SyntheticEvent
  ) => void;
  onChange?: (fieldState: FieldState, event: React.SyntheticEvent) => void;
  onBlur?: (fieldState: FieldState, event: React.SyntheticEvent) => void;
  onFocus?: (fieldState: FieldState, event: React.SyntheticEvent) => void;
  gatherData?: (value: unknown) => Promise<any>;
  validateOn?:
    | 'change'
    | 'blur'
    | 'change-blur'
    | 'change-submit'
    | 'blur-submit'
    | 'submit';
  validateWhen?: string[] | ((scope?: string) => string[]);
  validateOnMount?: boolean;
  modifyOnMount?: boolean;
  validateModified?: boolean;
  keepState?: boolean;
  keepStateIfRelevant?: boolean;
  remember?: boolean;
  maintainCursor?: boolean;
  allowEmptyString?: boolean;
  emptyValue?: any;
  inputRef?: React.MutableRefObject<any>;
  showErrorIfError?: boolean;
  showErrorIfTouched?: boolean;
  showErrorIfDirty?: boolean;
  relevanceWhen?: string[];
  relevanceDeps?: unknown[];
  required?: string | boolean;
  validateDeps?: unknown[];
  parser?: (value: any) => any;
  formatter?:
    | Array<string | RegExp | Function>
    | string
    | Object
    | ((value: unknown) => Array<string | RegExp | Function>);
} & Omit<
  UserProps,
  'onChange' | 'onBlur' | 'onFocus' | 'value' | 'defaultValue' | 'required'
>;

export type FormController = {
  getValue: (name: string) => unknown;
  setValue: (name: string, value: unknown) => void;
  setValueQuietly: (name: string, value: unknown) => void;
  getMaskedValue: (name: string) => unknown;
  setMaskedValue: (name: string, value: unknown) => void;
  getTouched: (name: string) => unknown;
  setTouched: (name: string, value: boolean) => void;
  getFocused: (name: string) => unknown;
  setFocused: (name: string, value: boolean) => void;
  getError: (name: string) => unknown;
  setError: (name: string, value: unknown) => void;
  resetField: (name: string, options?: FieldResetOptions) => void;
  resetPath: (name: string) => void;
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
  insert: (name: string, index: number, value: unknown) => void;
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

export function useInformedApi(): InformedApi;

export function useFormApi(): FormApi;

export function useFormState(): FormState;

export function useFormStateSelector<T>(
  selector: (formState: FormState) => T
): T;

export function useFieldApi(name: string, scoped?: boolean): FieldApi;

export function useFieldState(name: string, scoped?: boolean): FieldState;

export function useScope(name?: string): string;

export function useScoper(name: string): (name: string) => string;

export function useScopedState(): FieldState;

export function useMultistepApi(): MultistepApi;

export function useMultistepState(): MultistepState;

export function useArrayFieldItemState(): ArrayFieldItemState;

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
  userProps: Omit<
    UserProps,
    'onChange' | 'onBlur' | 'onFocus' | 'value' | 'defaultValue' | 'required'
  >;
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

export type EvaluateParams = {
  formState: FormState;
  formApi: FormApi;
  scope: string;
  dependsOn?: unknown[];
};

export function useConditional(params: {
  name: string;
  evaluate: (params: EvaluateParams) => unknown;
  evaluateWhen: string[];
  dependsOn?: unknown[];
  native: boolean;
}): unknown;

export function useArrayField(params: {
  name: string;
  initialValue: any;
  defaultValue: any;
  arrayFieldApiRef: React.MutableRefObject<any>;
}): {
  render: (children: any) => JSX.Element;
  arrayFieldState: ArrayFieldState;
  arrayFieldApi: ArrayFieldApi;
};

export function useArrayFieldApi(): ArrayFieldApi;

export function useArrayFieldItemApi(): ArrayFieldItemApi;

export function FormStateAccessor({
  children
}: {
  children: (formState: FormState) => JSX.Element;
}): JSX.Element;

declare function FormFields({
  schema,
  onlyValidateSchema
}: {
  /** Json Schema */
  schema: any;
  onlyValidateSchema?: boolean;
}): JSX.Element[];

declare function ArrayField({
  children,
  name,
  initialValue,
  arrayFieldApiRef
}: {
  children: (arrayFieldApi: ArrayFieldApi & ArrayFieldState) => JSX.Element;
  name: string;
  initialValue?: [unknown];
  arrayFieldApiRef?: React.MutableRefObject<any>;
}): JSX.Element;

declare namespace ArrayField {
  function Items({
    children
  }: {
    children: (props: ArrayFieldItemApi & ArrayFieldItemInfo) => JSX.Element;
  }): JSX.Element;
}

declare function Scope({
  children,
  scope
}: {
  children: JSX.Element | JSX.Element[];
  scope: string;
}): JSX.Element;

declare function Multistep({
  children,
  initialStep
}: {
  children: JSX.Element | JSX.Element[];
  initialStep?: string;
}): JSX.Element;

declare namespace Multistep {
  function Step({
    children,
    step
  }: {
    children: React.ReactNode;
    step: string;
  }): JSX.Element;
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
  function createIntlNumberFormatter(
    locale?: string | string[],
    opts?: Intl.NumberFormatOptions,
    {
      formatToParts
    }?: {
      formatToParts: (
        v: number | bigint,
        locale: string | string[],
        opts: any
      ) => any[];
    }
  ): {
    formatter: (value: any, ogValue: any) => Intl.NumberFormatPart;
    parser: (value: any) => number | undefined;
  };
}

export function SchemaFields(): JSX.Element;

type DebugProps = { [FormStateKey in keyof FormState]?: boolean };
export function Debug(props: DebugProps): JSX.Element;

// export class Elon {
//   static inspect([any]): any;
// }

/* ------------------------------- Informed ------------------------------- */
export type InformedGlobalProps = {
  children: React.ReactNode;
};

export function Informed(props: InformedGlobalProps): JSX.Element;

/* ------------------------------- Inputs ------------------------------ */

/* -------------------------- Form/FormProvider ------------------------ */
type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function Form(props: InformedProps<FormProps>): JSX.Element;

export function FormProvider(props: InformedProps<FormProps>): JSX.Element;

/* ------------------------------- Input ------------------------------- */
type InputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: FieldProps<InputProps>): JSX.Element;

/* ------------------------------- TextArea ------------------------------- */
type TextAreaProps = {
  label?: string;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export function TextArea(props: FieldProps<TextAreaProps>): JSX.Element;

/* ------------------------------- Checkbox ------------------------------- */
type CheckboxProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox(props: FieldProps<CheckboxProps>): JSX.Element;

/* ------------------------------- Radio Group ------------------------------- */
type RadioGroupProps = {
  label?: string;
  options?: Array<{ value: string; label: string; disabled?: boolean }>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function RadioGroup(props: FieldProps<RadioGroupProps>): JSX.Element;

/* --------------------------------- Radio ---------------------------------- */
type RadioProps = {
  label?: string;
  value: string;
  disabled?: boolean;
};
export function Radio(props: RadioProps): JSX.Element;

/* -------------------------------- Select --------------------------------- */
type SelectProps = {
  label?: string;
  options?: Array<{ value: string; label: string; disabled?: boolean }>;
} & React.InputHTMLAttributes<HTMLSelectElement>;

export function Select(props: FieldProps<SelectProps>): JSX.Element;
