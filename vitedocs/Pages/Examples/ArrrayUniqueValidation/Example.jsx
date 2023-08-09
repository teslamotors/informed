import { Debug, ArrayField } from 'informed';
import { Form, Button, Input } from 'YourComponents';

const initialValue = [
  {
    name: 'Matt',
    age: '28'
  },
  {
    age: '23'
  }
];

const validate = (value, values) => {
  const uniqueNamesCount = new Set(values.friends.map(item => item.name)).size;
  if (uniqueNamesCount !== values.friends.length) {
    return 'This field must be unique';
  }
};

const Example = () => (
  <Form>
    <ArrayField name="friends" initialValue={initialValue}>
      {({ add }) => {
        return (
          <>
            <Button onClick={add} type="button" variant="accent">
              Add
            </Button>
            <ArrayField.Items>
              {({ remove, name }) => (
                <>
                  <h4>{name}</h4>
                  <Input
                    name="name"
                    label="Name"
                    required
                    validateOn="change"
                    // Note this line of code
                    validateWhen={() => ['friends']}
                    showErrorIfError
                    validate={validate}
                  />
                  <Input
                    name="age"
                    label="Age"
                    type="number"
                    validateOn="change"
                  />
                  <Button type="button" onClick={remove} variant="negative">
                    Remove
                  </Button>
                </>
              )}
            </ArrayField.Items>
          </>
        );
      }}
    </ArrayField>
    <Button type="submit">submit</Button>
    <Debug values modified dirty />
  </Form>
);

export default Example;
