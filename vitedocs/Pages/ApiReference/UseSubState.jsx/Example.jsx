import { useSubState, Scope, Debug } from 'informed';
import { useRef } from 'react';
import { Form, Input, Code } from 'YourComponents';

const ShowSubState = ({ name }) => {
  const subState = useSubState(name);
  const renders = useRef(0);
  renders.current += 1;
  return (
    <>
      <h3>SubState: {name}</h3>
      <strong>Rendered {renders.current} times.</strong>
      <Code>{JSON.stringify(subState, null, 2)}</Code>
    </>
  );
};

const Example = () => {
  return (
    <Form initialValues={{ firstName: 'Hello', lastName: 'World' }}>
      <h3>Your Info</h3>
      <Input name="name" label="First name:" />
      <Input name="age" label="Age:" type="number" />
      <hr />
      <Scope scope="spouse">
        <h3>Spouses Info</h3>
        <Input name="name" label="First name:" />
        <Input name="age" label="Age:" type="number" />
      </Scope>
      <ShowSubState name="spouse" />
      <hr />
      <Scope scope="mother">
        <h3>Mothers Info</h3>
        <Input name="name" label="First name:" />
        <Input name="age" label="Age:" type="number" />
      </Scope>
      <ShowSubState name="mother" />
      <hr />
      <h3>FormState:</h3>
      <Debug />
    </Form>
  );
};

export default Example;
