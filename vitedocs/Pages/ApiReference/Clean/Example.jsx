import { Debug } from 'informed';
import { Form, Button, Input } from 'YourComponents';

const clean = value => value.replace(/[!@#$%^&*()]/g, '');

const Example = () => (
  <Form>
    <Input
      field="name"
      label="Name"
      initialValue="Joe!@#$%^*()Puzzo"
      clean={clean}
    />
    <Button type="submit">submit</Button>
    <Debug values />
  </Form>
);

export default Example;
