import { Debug, useFieldState } from 'informed';
import { Form, Select, Option, Button } from 'YourComponents';
import { Car } from '../../../Nav/Car';

const ColoredCar = () => {
  const { value } = useFieldState('color');

  return (
    <div className={`car-color-${value}`}>
      <Car />
    </div>
  );
};

const Example = () => (
  <Form>
    <Select name="color" label="Color" initialValue="blue">
      <Option key="red">Red</Option>
      <Option key="green">Green</Option>
      <Option key="blue">Blue</Option>
    </Select>
    <Button type="submit">Submit</Button>
    <Debug values />
    <br />
    <ColoredCar />
  </Form>
);

export default Example;
