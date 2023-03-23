/* ----------------- Grab Wrapped Components ------------------ */
import {
  Button,
  Input,
  Checkbox,
  CheckboxGroup,
  Select,
  Slider,
  Switch,
  NumberInput,
  TextArea,
  RadioGroup,
  ArrayField,
  AddButton,
  RemoveButton
} from 'YourComponents';

/* ------------------- Map them in adapter -------------------- */

export const adapter = {
  button: Button,
  array: ArrayField,
  checkbox: Checkbox,
  boolean: Checkbox,
  radio: RadioGroup,
  select: Select,
  input: Input,
  string: Input,
  textarea: TextArea,
  number: NumberInput,
  checkbox_group: CheckboxGroup,
  switch_toggle: Switch,
  range: Slider,
  add: AddButton,
  remove: RemoveButton,
  withOptions: {
    string: Select,
    number: Select,
    array: CheckboxGroup
  }
};
