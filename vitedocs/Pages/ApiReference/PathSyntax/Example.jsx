import { Debug } from 'informed';
import { Form, Button, Input } from 'YourComponents';

const Example = () => (
  <Form>
    <Input name="username" label="Username:" />
    <Input name="friends[0]" label="Friend[0]:" />
    <Input name="siblings.1" label="Siblings.1:" />
    <Input name="parents[0].name" label="parents[0].name" />
    <Input name="foo.bar[0].baz[1]" label="foo.bar[0].baz[1]" />
    <Button type="submit">submit</Button>
    <Debug values />
  </Form>
);

export default Example;
