import { Debug } from 'informed';
import { Form, Input, Hidden } from 'YourComponents';

const Example = () => (
  <Form initialValues={{ name: 'Elon', age: 51, worth: 200_000_000_000 }}>
    <Input name="name" label="Name" />
    <Input name="age" type="number" label="Age" />
    <Hidden name="worth" />
    <Debug values />
  </Form>
);

export default Example;
