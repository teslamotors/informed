import { Debug } from 'informed';
import { Form, Button, Input } from 'YourComponents';

const Example = () => (
  <Form>
    <Input name="username" label="Username:" initialValue="Joe" />
    <Input name="mothers.mother" label="Mothers Mother:" initialValue="Jill" />
    <Input name="friends[0]" label="Friend[0]:" initialValue="Jake" />
    <Input name="siblings.1" label="Siblings.1:" initialValue="Jeff" />
    <Input name="parents[0].name" label="parents[0].name" initialValue="John" />
    <Input
      name="foo.bar[0].baz[1]"
      label="foo.bar[0].baz[1]"
      initialValue="Taz"
    />
    <Button type="submit">submit</Button>
    <Debug values />
  </Form>
);

export default Example;
