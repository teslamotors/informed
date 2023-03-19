import { Debug, useFormState } from 'informed';
import { Form, Select, Option, Button } from 'YourComponents';
import { Car } from '../../../Nav/Car';

const ColoredCars = () => {
  const { values } = useFormState();
  const { color1, color2 } = values;

  return (
    <>
      <div className={`car-color-${color1}`}>
        <Car />
      </div>
      <div className={`car-color-${color2}`}>
        <Car />
      </div>
    </>
  );
};

const Example = () => (
  <Form>
    <Select name="color1" label="Color" initialValue="red">
      <Option key="red">Red</Option>
      <Option key="green">Green</Option>
      <Option key="blue">Blue</Option>
    </Select>
    <Select name="color2" label="Color" initialValue="green">
      <Option key="red">Red</Option>
      <Option key="green">Green</Option>
      <Option key="blue">Blue</Option>
    </Select>
    <Button type="submit">Submit</Button>
    <Debug values />
    <ColoredCars />
  </Form>
);

export default Example;
