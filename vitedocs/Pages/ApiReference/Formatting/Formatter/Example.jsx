import { Debug } from 'informed';
import { Form, Button, Input } from 'YourComponents';

const formatter = '+1 ###-###-####';

const parser = value => {
  return value.replace('+1 ', '').replace(/-/g, '');
};

const Example = () => (
  <Form>
    <Input
      name="phone"
      label="Phone Number:"
      formatter={formatter}
      parser={parser}
      initialValue="1231231234"
    />
    <Input
      name="maskedField"
      label="Word Formatting"
      formatter="$***-**(**)***"
      initialValue="HelloWorld"
    />
    <Button type="submit">submit</Button>
    <Debug values maskedValues />
  </Form>
);

export default Example;
