import { Debug } from 'informed';
import { Form, Button, Input } from 'YourComponents';

// Example 5 = 1 ( i.e a user typed the number 10 but we want to store a 2 ) .. 10 / 5 = 2
const parser = value => (value != null ? value / 5 : value);
const initialize = value => (value != null ? value * 5 : value);

const Example = () => (
  <Form>
    <Input
      name="field"
      label="5 = 1"
      parser={parser}
      initialValue={2}
      initialize={initialize}
      type="number"
    />
    <Button type="submit">submit</Button>
    <Debug values maskedValues />
  </Form>
);

export default Example;
