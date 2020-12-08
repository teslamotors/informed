import Text from './components/form-fields/Text';
import TextArea from './components/form-fields/TextArea';
import Select from './components/form-fields/Select';
import Checkbox from './components/form-fields/Checkbox';
import RadioGroup from './components/form-fields/RadioGroup';
import AddButton from './components/form-fields/AddButton';
import RemoveButton from './components/form-fields/RemoveButton';
import ArrayField from './components/form-fields/ArrayField';

export default {
  select: Select,
  input: Text,
  textarea: TextArea,
  checkbox: Checkbox,
  radio: RadioGroup,
  add: AddButton,
  remove: RemoveButton,
  array: ArrayField
};
