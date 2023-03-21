import { Debug } from 'informed';
import { Form, Input, Button } from 'YourComponents';

const validate = value => {
  if (value && !value.includes('!')) return 'Field must contain a "!"';
};

const Example = () => {
  return (
    <Form>
      <Input label="Name:" name="name" required validate={validate} />
      <Button type="submit">Submit</Button>
      <Debug values errors />
    </Form>
  );
};

export default Example;
