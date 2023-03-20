import { Debug, Relevant } from 'informed';
import { Form, Input, NumberInput } from 'YourComponents';

const Example = () => (
  <Form>
    <NumberInput name="age" label="Age" defaultValue={20} />
    <Relevant when={({ formState }) => formState.values.age >= 21}>
      <Input
        name="drink"
        label="Favorite Drink?"
        defaultValue="Tesla Tequila"
      />
    </Relevant>
    <Debug values />
  </Form>
);

export default Example;
