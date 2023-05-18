import { Debug } from 'informed';
import { useRef } from 'react';
import { Form, Input, Button, ButtonGroup } from 'YourComponents';

const Example = () => {
  const formApiRef = useRef();
  return (
    <>
      {/* --------- Note how this is outside of the <Form> -------- */}
      <ButtonGroup orientation="vertical" align="center">
        <Button
          type="button"
          onClick={() => formApiRef.current.setValue('name', 'Bill')}>
          Set Name
        </Button>
        <Button
          type="button"
          onClick={() => formApiRef.current.setValueQuietly('name', 'Kevin')}>
          Set Name Quietly
        </Button>
        <Button type="button" onClick={() => formApiRef.current.reset()}>
          Reset
        </Button>
        <Button
          type="button"
          onClick={() => formApiRef.current.setValue('foo', 'Bar')}>
          Set Hidden Field
        </Button>
        <Button type="button" onClick={() => formApiRef.current.disable()}>
          Disable
        </Button>
        <Button type="button" onClick={() => formApiRef.current.enable()}>
          Enable
        </Button>
        <Button
          type="button"
          onClick={() =>
            formApiRef.current.setTheseValues({ age: 30, phone: '6991234567' })
          }>
          Set These Values
        </Button>
        <Button
          type="button"
          onClick={() =>
            formApiRef.current.setValues({ age: 26, phone: '1234567899' })
          }>
          Set Values
        </Button>
      </ButtonGroup>
      {/* --------- Below is where we render our <Form> -------- */}
      <Form formApiRef={formApiRef}>
        <Input name="name" label="First Name:" initialValue="Joe" required />
        <Input name="age" label="First Name:" type="number" initialValue={28} />
        <Input
          name="phone"
          label="Phone Number:"
          formatter="+1 (###) ###-####"
        />
        <Button type="submit">Submit</Button>
        <Debug values />
      </Form>
    </>
  );
};

export default Example;
