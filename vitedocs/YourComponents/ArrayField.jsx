import {
  ArrayField,
  useArrayFieldApi,
  useArrayFieldItemApi,
  FormFields
} from 'informed';

import { Button } from 'YourComponents';

export const AddButton = () => {
  const { add } = useArrayFieldApi();
  return (
    <Button onClick={add} type="button" variant="accent" style="outline">
      Add
    </Button>
  );
};

export const RemoveButton = () => {
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

export default MyArrayField;
