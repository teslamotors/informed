import Form from './Form';
import Input from './Input';
import NumberInput from './NumberInput';
import Checkbox from './Checkbox';
import Select from './Select';
import Slider from './Slider';
import Switch from './Switch';
import {
  Button,
  ButtonGroup as AdobeButtonGroup,
  Item
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

export {
  Form,
  Input,
  NumberInput,
  Checkbox,
  Select,
  Option,
  Slider,
  Switch,
  Button,
  Code,
  Car,
  ButtonGroup
};
