import Form from './Form';
import Input from './Input';
import NumberInput from './NumberInput';
import Checkbox from './Checkbox';
import Select from './Select';
import Slider from './Slider';
import Switch from './Switch';
import TextArea from './TextArea';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import ComboBox from './ComboBox';

import ArrayField, { AddButton, RemoveButton } from './ArrayField';

import {
  Button as AdobeButton,
  ButtonGroup as AdobeButtonGroup,
  Item,
  Checkbox as CheckboxItem,
  Radio
} from '@adobe/react-spectrum';
import Code from './Code';
import { Car } from './Car';

const Option = Item;

const ButtonGroup = ({ children, ...props }) => {
  return (
    <AdobeButtonGroup {...props} UNSAFE_className="button-group">
      {children}
    </AdobeButtonGroup>
  );
};

const Button = ({ children, ...props }) => {
  return (
    <AdobeButton {...props} UNSAFE_className="button">
      {children}
    </AdobeButton>
  );
};

export {
  Form,
  Input,
  NumberInput,
  Checkbox,
  CheckboxGroup,
  Select,
  Option,
  Slider,
  Switch,
  Button,
  Code,
  Car,
  ButtonGroup,
  TextArea,
  CheckboxItem,
  RadioGroup,
  Radio,
  ArrayField,
  AddButton,
  RemoveButton,
  ComboBox
};
