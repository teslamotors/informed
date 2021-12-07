import { Input } from './components/form-fields/Input';
import { TextArea } from './components/form-fields/TextArea';
import { Select } from './components/form-fields/Select';
import { Checkbox } from './components/form-fields/Checkbox';
import { RadioGroup } from './components/form-fields/RadioGroup';
import { AddButton } from './components/form-fields/AddButton';
import { RemoveButton } from './components/form-fields/RemoveButton';
import { ArrayField } from './components/form-fields/ArrayField';

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
