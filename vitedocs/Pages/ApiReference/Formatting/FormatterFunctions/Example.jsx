import { Debug } from 'informed';
import { Form, Input, Button } from 'YourComponents';

const mask = value => value.toUpperCase();

const formatter = [mask, mask, '-', mask, mask, '-', mask, mask, mask, mask];

export default function Example() {
  return (
    <Form>
      <div>
        <Input
          field="uppercase"
          label="Uppercase"
          formatter={formatter}
          initialValue="abcdefg"
        />
        <Button type="submit">Submit</Button>
        <Debug values maskedValues />
      </div>
    </Form>
  );
}
