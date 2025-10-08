import { useState } from 'react';
import { Relevant, Debug } from 'informed';
import { Form, Input, Checkbox, Button } from 'YourComponents';

export default function Example() {
  const [show, setShow] = useState(true);

  const toggle = () => setShow(prev => !prev);

  return (
    <Form>
      {show ? <Input name="name1" label="Name:" /> : null}
      <Checkbox name="show" label="Show" defaultValue={true} />
      <Relevant when={({ formState }) => formState.values.show}>
        {show ? <Input name="name2" label="Name:" keepStateIfRelevant /> : null}
      </Relevant>
      <br />
      <Button type="button" onClick={toggle}>
        {show ? 'Hide' : 'Show'}
      </Button>
      <Debug values />
    </Form>
  );
}
