import { Debug, DebugField, useFieldState } from 'informed';
import { Form, Select, Option, Button } from 'YourComponents';
import { Car } from '../../../Nav/Car';

const ColoredCar = () => {
  /* ---------- Get acces to field state ----------- */
  const { value } = useFieldState('color');

  /* ---------- Use value to toggle class ---------- */
  return (
    <div className={`car-color-${value}`}>
      <Car />
    </div>
  );
};

const Example = () => (
  <Form>
    {/* --------- Input with name="color" --------- */}
    <Select name="color" label="Color" initialValue="blue">
      <Option key="red">Red</Option>
      <Option key="green">Green</Option>
      <Option key="blue">Blue</Option>
    </Select>
    <Button type="submit">Submit</Button>
    {/* ---------- Debug the form state ----------- */}
    <Debug values />
    {/* --------- Render Color Component ---------- */}
    <ColoredCar />
    {/* ---------- Debug the field state ----------- */}
    <DebugField name="color" />
  </Form>
);

export default Example;
