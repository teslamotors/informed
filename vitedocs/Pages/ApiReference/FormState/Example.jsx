import { Debug } from 'informed';
import { Form, Input, Button } from 'YourComponents';

const Example = () => {
  return (
    <Form>
      <Input label="Name:" name="name" required />
      <Button type="submit">Submit</Button>
      <Debug />
    </Form>
  );
};

export default Example;
