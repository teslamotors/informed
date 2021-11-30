import { Input } from './Components/form-fields/Input';
import { TextArea } from './Components/form-fields/TextArea';
import { Select } from './Components/form-fields/Select';
import { Checkbox } from './Components/form-fields/Checkbox';
import { RadioGroup } from './Components/form-fields/RadioGroup';
import { AddButton } from './Components/form-fields/AddButton';
import { RemoveButton } from './Components/form-fields/RemoveButton';
import { ArrayField } from './Components/form-fields/ArrayField';

export const FieldMap = {
  string: Input,
  number: Input,
  boolean: Checkbox,
  select: Select,
  input: Input,
  textarea: TextArea,
  checkbox: Checkbox,
  radio: RadioGroup,
  add: AddButton,
  remove: RemoveButton,
  array: ArrayField,
  withOptions: {
    string: Select
  }
};
