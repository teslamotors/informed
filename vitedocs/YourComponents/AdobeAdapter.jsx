import {
  Button,
  Input,
  Checkbox,
  Select,
  Slider,
  Switch,
  NumberInput
} from 'YourComponents';

import {
  ArrayField,
  useArrayFieldApi,
  useArrayFieldItemApi,
  FormFields
} from 'informed';

const AddButton = () => {
  const { add } = useArrayFieldApi();
  return (
    <Button onClick={add} type="button" variant="accent" style="outline">
      Add
    </Button>
  );
};

const RemoveButton = () => {
  const { remove } = useArrayFieldItemApi();
  return (
    <Button onClick={remove} type="button" variant="negative">
      Remove
    </Button>
  );
};

const MyArrayField = ({ name, items, ...props }) => {
  return (
    <ArrayField name={name} {...props}>
      <AddButton />
      <ArrayField.Items>
        {() => (
          <>
            <FormFields schema={items} />
            <RemoveButton />
          </>
        )}
      </ArrayField.Items>
    </ArrayField>
  );
};

export const adapter = {
  button: Button,
  //   object: FormGroup,
  array: MyArrayField,
  checkbox: Checkbox,
  boolean: Checkbox,
  //   radio: RadioGroup,
  select: Select,
  input: Input,
  string: Input,
  //   textarea: TextArea,
  number: NumberInput,
  //   option_group: OptionGroup,
  //   checkbox_group: CheckboxGroup,
  switch_toggle: Switch,
  range: Slider,
  add: AddButton,
  remove: RemoveButton,
  //   hidden: Hidden,
  withOptions: {
    string: Select
    // number: Select,
    // array: CheckboxGroup,
  }
};
