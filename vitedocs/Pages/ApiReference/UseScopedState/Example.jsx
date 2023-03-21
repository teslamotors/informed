import { useScopedState, useScope, Scope, Debug } from 'informed';
import { useRef } from 'react';
import { Form, Input, Code } from 'YourComponents';

const ShowScopedState = () => {
  /* ---------- This hook gets the scoped state ---------- */
  const subState = useScopedState();

  /* ------- This hook gets the name of the scope -------- */
  const scope = useScope();

  /* --------- Use a ref to keep render count :) --------- */
  const renders = useRef(0);
  renders.current += 1;

  return (
    <>
      <h3>SubState: {scope}</h3>
      <strong>Rendered {renders.current} times.</strong>
      <Code>{JSON.stringify(subState, null, 2)}</Code>
    </>
  );
};

const Example = () => {
  return (
    <Form>
      <h3>Your Info</h3>
      <Input name="name" label="First name:" />
      <Input name="age" label="Age:" type="number" />
      <hr />
      <Scope scope="spouse">
        <h3>Spouses Info</h3>
        <Input name="name" label="First name:" />
        <Input name="age" label="Age:" type="number" />
        {/* ---------- Note how this is inside of scope ---------- */}
        <ShowScopedState />
      </Scope>
      <hr />
      <Scope scope="mother">
        <h3>Mothers Info</h3>
        <Input name="name" label="First name:" />
        <Input name="age" label="Age:" type="number" />
        {/* ---------- Note how this is inside of scope ---------- */}
        <ShowScopedState />
      </Scope>
      <hr />
      <h3>FormState:</h3>
      <Debug />
    </Form>
  );
};

export default Example;
