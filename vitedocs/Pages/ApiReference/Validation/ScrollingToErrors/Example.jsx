import { Debug } from 'informed';
import { Form, Input, Button } from 'YourComponents';

const Example = () => {
  return (
    <Form
      scrollOnInvalid={{
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      }}>
      <Input label="A:" name="a" required defaultValue="A" />
      <Input label="B:" name="b" required defaultValue="B" />
      <Input label="C:" name="c" required />
      <Input label="D:" name="d" required />
      <Input label="E:" name="e" required />
      <Input label="F:" name="f" required />
      <Input label="G:" name="g" required />
      <Input label="H:" name="h" required />
      <Input label="I:" name="i" required />
      <Input label="J:" name="j" required />
      <Input label="K:" name="k" required />

      <Button type="submit">Submit</Button>
      <Debug values errors />
    </Form>
  );
};

export default Example;
