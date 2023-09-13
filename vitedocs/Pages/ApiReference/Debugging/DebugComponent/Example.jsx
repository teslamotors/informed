import { Debug, DebugField } from 'informed';
import { Form, Input } from 'YourComponents';

const Example = () => (
  <Form>
    <Input name="name" label="Name:" />
    <button type="submit">Submit</button>
    <Debug />
    <DebugField name="name" />
  </Form>
);

export default Example;
