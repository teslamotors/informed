import Text from './components/form-fields/Text';
import Radio from './components/form-fields/Radio';
import TextArea from './components/form-fields/TextArea';
import Select from './components/form-fields/Select';
import Option from './components/form-fields/Option';
import Checkbox from './components/form-fields/Checkbox';
import RadioGroup from './components/form-fields/RadioGroup';
import AddButton from './components/form-fields/AddButton';
import RemoveButton from './components/form-fields/RemoveButton';

export default {
  select: Select,
  input: Text,
  textarea: TextArea,
  checkbox: Checkbox,
  radio: RadioGroup,
  add: AddButton,
  remove: RemoveButton
};
