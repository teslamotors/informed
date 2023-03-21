import { Debug, ArrayField } from 'informed';
import { Form, Button, Input } from 'YourComponents';

const initialValue = [
  {
    name: 'Matt',
    age: '28'
  },
  {
    name: 'Hope',
    age: '23'
  }
];

const Example = () => (
  <Form>
    <ArrayField name="friends" initialValue={initialValue}>
      {({ add }) => {
        return (
          <>
            <Button
              onClick={add}
              type="button"
              variant="accent"
              style="outline">
              Add
            </Button>
            <ArrayField.Items>
              {({ remove, name }) => (
                <>
                  <h4>{name}</h4>
                  <Input name="name" label="Name" required />
                  <Input name="age" label="Age" type="number" />
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
    <Debug values />
  </Form>
);

export default Example;
