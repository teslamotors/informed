import Form from './Form';
import Input from './Input';
import NumberInput from './NumberInput';
import Checkbox from './Checkbox';
import Select from './Select';
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
  Checkbox,
  Select,
  Option,
  Button,
  NumberInput,
  Code,
  Car,
  ButtonGroup
};
