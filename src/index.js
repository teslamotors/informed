import Form from './components/Form';
import Scope from './components/Scope';
import ArrayField from './components/ArrayField';
import FormProvider from './components/FormProvider';
import FormState from './components/FormState';
import Relevant from './components/Relevant';
import Multistep from './components/Multistep';
import FormField from './components/FormField';
import SchemaFields from './components/SchemaFields';
import FormFields from './components/FormFields';
import FormComponents from './components/FormComponents';

import withFormApi from './HOC/withFormApi';
import withFormState from './HOC/withFormState';
import withFieldState from './HOC/withFieldState';
import withFieldApi from './HOC/withFieldApi';
import withRadioGroup from './HOC/withRadioGroup';
import asField from './HOC/asField';

import useForm from './hooks/useForm';
import useField from './hooks/useField';
import useFieldApi from './hooks/useFieldApi';
import useFieldState from './hooks/useFieldState';
import useFormApi from './hooks/useFormApi';
import useFormState from './hooks/useFormState';
import useArrayField from './hooks/useArrayField';
import useMultistepApi from './hooks/useMultistepApi';
import useMultistepState from './hooks/useMultistepState';
import useArrayFieldApi from './hooks/useArrayFieldApi';
import useArrayFieldItemApi from './hooks/useArrayFieldItemApi';

import Text from './components/form-fields/Text';
import Radio from './components/form-fields/Radio';
import TextArea from './components/form-fields/TextArea';
import Select from './components/form-fields/Select';
import Option from './components/form-fields/Option';
import Checkbox from './components/form-fields/Checkbox';
import RadioGroup from './components/form-fields/RadioGroup';

import { BasicText } from './components/form-fields/Text';
import { BasicRadio } from './components/form-fields/Radio';
import { BasicRadioGroup } from './components/form-fields/RadioGroup';
import { BasicTextArea } from './components/form-fields/TextArea';
import { BasicSelect } from './components/form-fields/Select';
import { BasicCheckbox } from './components/form-fields/Checkbox';

const Input = Text;

export {
  Form,
  FormProvider,
  withFormApi,
  withFormState,
  withFieldApi,
  withFieldState,
  withRadioGroup,
  asField,
  useForm,
  useField,
  useFieldApi,
  useFieldState,
  useFormApi,
  useFormState,
  useMultistepState,
  useMultistepApi,
  useArrayFieldApi,
  useArrayFieldItemApi,
  Text,
  Input,
  Radio,
  TextArea,
  Select,
  Option,
  Checkbox,
  RadioGroup,
  BasicText,
  BasicRadio,
  BasicRadioGroup,
  BasicTextArea,
  BasicSelect,
  BasicCheckbox,
  Scope,
  ArrayField,
  useArrayField,
  FormState,
  Relevant,
  Multistep,
  FormField,
  SchemaFields,
  FormFields,
  FormComponents
};
