import { Debug, useFieldState, useFormApi } from 'informed';
import { Form, Select, Option, Button } from 'YourComponents';
import { Car } from '../../../Nav/Car';

const ColoredCar = () => {
  const { value } = useFieldState('color');
  const formApi = useFormApi();

  const random = () => {
    const colors = ['red', 'green', 'blue', 'pink'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    formApi.setValue('color', colors[randomIndex]);
  };

  return (
    <div className={`car-color-${value}`}>
      <Car />
      <Button type="button" onClick={random}>
        Random Color
      </Button>
    </div>
  );
};

const Example = () => (
  <Form>
    <Select name="color" label="Color" initialValue="blue">
      <Option key="red">Red</Option>
      <Option key="green">Green</Option>
      <Option key="blue">Blue</Option>
      <Option key="pink">Pink</Option>
    </Select>
    <Button type="submit">Submit</Button>
    <Debug values />
    <ColoredCar />
  </Form>
);

export default Example;
