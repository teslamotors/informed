import { Scope, Relevant, Debug, useFieldState, utils } from 'informed';
import { Form, Input, Checkbox, Select, Option, Button, Car } from 'Components';

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

/* ------------- Intl Number Formatter ------------- */
const { formatter, parser } = utils.createIntlNumberFormatter('en-US', {
  style: 'currency',
  currency: 'USD'
});

const Example = () => (
  <Form initialValues={{ age: 51, worth: 191_400_000_000 }}>
    {/* --------- Field level initial value -------- */}
    <Input name="name" label="Name" initialValue="Elon" />
    {/* ----- Override default error messages ------ */}
    <Input name="nickname" label="Nickname" required="Must Enter!" />
    {/* ---------- Pass native attributes ---------- */}
    <Input name="age" type="number" label="Age" />
    {/* ------------- Formated inputs -------------- */}
    <Input name="worth" label="Worth" formatter={formatter} parser={parser} />
    {/* ------------- Relevance & Scoping ---------- */}
    <Scope scope="x">
      <Checkbox name="love" label="Do you love X?" />
      <Relevant when={({ formState }) => formState.values.x?.love}>
        <Input name="howMuch" label="How Much?" defaultValue="A LOT!" />
      </Relevant>
    </Scope>
    {/* --------- Input with name="color" --------- */}
    <Select name="color" label="Color" initialValue="red">
      <Option key="red">Red</Option>
      <Option key="green">Green</Option>
      <Option key="blue">Blue</Option>
    </Select>
    <Button type="submit">Submit</Button>
    {/* ---------- Debug the form state ----------- */}
    <Debug values />
    {/* --------- Render Color Component ---------- */}
    <ColoredCar />
  </Form>
);

export default Example;
