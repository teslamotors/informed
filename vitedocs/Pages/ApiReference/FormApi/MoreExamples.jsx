import { Debug, useFieldState, useFormApi } from 'informed';
import { useRef } from 'react';
import { Form, Input, Button, ButtonGroup } from 'YourComponents';

// Helper function
const random = formApi => {
  const colors = ['red', 'green', 'blue', 'pink'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  formApi.setValue('color', colors[randomIndex]);
};

const Buttons = () => {
  // We get formApi from context via hook
  const formApi = useFormApi();

  return (
    <ButtonGroup orientation="vertical" align="center">
      <Button type="button" onClick={() => formApi.setValue('name', 'Bill')}>
        Set Name
      </Button>
      <Button
        type="button"
        onClick={() => formApi.setValueQuietly('name', 'Kevin')}>
        Set Name Quietly
      </Button>
      <Button type="button" onClick={() => formApi.reset()}>
        Reset
      </Button>
      <Button
        type="button"
        onClick={() =>
          formApi.reset({
            values: { name: 'Elon', age: 51, phone: '6991234567' }
          })
        }>
        Reset To New Values
      </Button>
      <Button
        type="button"
        onClick={() =>
          formApi.reset({
            resetValues: false
          })
        }>
        Reset But not Values
      </Button>
      <Button type="button" onClick={() => formApi.setValue('foo', 'Bar')}>
        Set Hidden Field
      </Button>
      <Button type="button" onClick={() => formApi.disable()}>
        Disable
      </Button>
      <Button type="button" onClick={() => formApi.enable()}>
        Enable
      </Button>
      <Button
        type="button"
        onClick={() =>
          formApi.setTheseValues({ age: 30, phone: '6991234567' })
        }>
        Set These Values
      </Button>
      <Button
        type="button"
        onClick={() => formApi.setValues({ age: 26, phone: '1234567899' })}>
        Set Values
      </Button>
    </ButtonGroup>
  );
};

const Example = () => {
  const formApiRef = useRef();
  return (
    <Form formApiRef={formApiRef}>
      <Input name="name" label="First Name:" defaultValue="Joe" required />
      <Input name="age" label="First Name:" type="number" defaultValue={28} />
      <Input name="phone" label="Phone Number:" formatter="+1 (###) ###-####" />
      <Buttons />
      <Button type="submit">Submit</Button>
      <Debug values dirt />
    </Form>
  );
};

export default Example;
