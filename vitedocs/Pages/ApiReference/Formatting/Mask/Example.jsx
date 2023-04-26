import { Debug } from 'informed';
import { Form, Button, Input } from 'YourComponents';

const mask = value => value.toUpperCase();
const parser = value => value.toLowerCase();

const Example = () => (
  <Form>
    <Input name="field1" label="Field 1 ( no parser )" mask={mask} />
    <Input
      name="field2"
      label="Field 2 ( with parser )"
      mask={mask}
      parser={parser}
    />
    <Input
      name="field3"
      label="Field 3 ( masks on blur )"
      mask={mask}
      maskOnBlur
    />
    <Button type="submit">submit</Button>
    <Debug values maskedValues />
  </Form>
);

export default Example;
