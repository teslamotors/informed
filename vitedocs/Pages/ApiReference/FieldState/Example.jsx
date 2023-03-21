import { useFieldState, Debug } from 'informed';
import { useRef } from 'react';
import { Form, Input, Button, Code } from 'YourComponents';

const ShowFieldState = ({ name }) => {
  const fieldState = useFieldState(name);
  const renders = useRef(0);
  renders.current += 1;
  return (
    <>
      <h3>FieldState: {name}</h3>
      <strong>Rendered {renders.current} times.</strong>
      <Code>{JSON.stringify(fieldState, null, 2)}</Code>
    </>
  );
};

const Example = () => {
  return (
    <Form initialValues={{ firstName: 'Hello', lastName: 'World' }}>
      <Input label="First Name:" name="firstName" required />
      <ShowFieldState name="firstName" />
      <Input label="Last Name:" name="lastName" required />
      <ShowFieldState name="lastName" />
      <Button type="submit">Submit</Button>
      <h3>FormState:</h3>
      <Debug />
    </Form>
  );
};

export default Example;
