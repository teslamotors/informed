import { Debug } from 'informed';
import { Form, Input, Button } from 'YourComponents';

const onSubmit = ({ modified }) => {
  window.alert(JSON.stringify(modified, null, 2));
};

export default function Example() {
  return (
    <Form
      onSubmit={onSubmit}
      autocomplete="off"
      initialValues={{
        name: 'Joe',
        age: 27
      }}>
      <Input name="name" label="Name:" />
      <Input name="age" type="number" label="Age:" />
      <Button type="submit">Submit</Button>
      <Debug values modified initialValues />
    </Form>
  );
}
