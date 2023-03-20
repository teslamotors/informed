import { Debug, useFieldState, useFormApi } from 'informed';
import { useRef } from 'react';
import { Form, Select, Option, Button } from 'YourComponents';
import { Car } from '../../../Nav/Car';

// Helper function
const random = formApi => {
  const colors = ['red', 'green', 'blue', 'pink'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  formApi.setValue('color', colors[randomIndex]);
};

const ColoredCar = () => {
  const { value } = useFieldState('color');

  // We get formApi from context via hook
  const formApi = useFormApi();

  return (
    <div className={`car-color-${value}`}>
      <Car />
      <Button type="button" onClick={() => random(formApi)} width={'100%'}>
        Random Color via useFormApi
      </Button>
    </div>
  );
};

const Example = () => {
  const formApiRef = useRef();
  return (
    <Form formApiRef={formApiRef}>
      <Select name="color" label="Color" initialValue="green">
        <Option key="red">Red</Option>
        <Option key="green">Green</Option>
        <Option key="blue">Blue</Option>
        <Option key="pink">Pink</Option>
      </Select>
      <Button type="submit">Submit</Button>
      <Debug values />
      <ColoredCar />
      <Button type="button" onClick={() => random(formApiRef.current)}>
        Random Color via formApiRef
      </Button>
    </Form>
  );
};

export default Example;
