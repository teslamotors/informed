export type Touched = {
  [key: string]: boolean | Touched;
};

export type FormValue<T = unknown> =
  | string
  | number
  | boolean
  | Array<string | number | boolean | T>
  | T;

export type FormValues = {
  [key: string]: FormValue | FormValues;
};

export type FormState = {
  pristine: boolean;
  dirty: boolean;
  submitted: boolean;
  valid: boolean;
  invalid: boolean;
  submitting: boolean;
  validating: number;
  values: Values;
  maskedValues: {
    [key: string]: any;
  };
  errors: {
    [key: string]: any;
  };
  touched: Touched;
  initialValues: {
    [key: string]: any;
  };
  dirt: {
    [key: string]: any;
  };
};
