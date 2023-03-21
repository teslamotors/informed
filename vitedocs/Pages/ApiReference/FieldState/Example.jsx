import { useFieldState, Debug } from 'informed';
import { useRef } from 'react';
import { Form, Input, Button, Code } from 'YourComponents';

const ShowFieldState = ({ name }) => {
  const fieldState = useFieldState(name);
  const renders = useRef(0);
  renders.current += 1;
  return (
    <>
      <h5>Component using fieldState: {name}</h5>
      <strong>Rendered {renders.current} times.</strong>
      <pre>
        <Code>{JSON.stringify(fieldState, null, 2)}</Code>
      </pre>
    </>
  );
};

const Example = () => {
  return (
    <Form>
      <Input label="First Name:" name="firstName" required />
      <ShowFieldState name="firstName" />
      <Input label="Last Name:" name="lastName" required />
      <ShowFieldState name="lastName" />
      <Button type="submit">Submit</Button>
      <Debug />
    </Form>
  );
};

export default Example;
