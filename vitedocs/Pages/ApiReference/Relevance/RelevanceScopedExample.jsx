import { Debug, Relevant, Scope } from 'informed';
import { Form, Input, NumberInput } from 'YourComponents';

const Example = () => (
  <Form>
    <Scope scope="child">
      <NumberInput name="age" label="Age" defaultValue={20} />
      <Relevant
        when={({ formApi, scope }) => formApi.getValue(`${scope}.age`) >= 21}>
        <Input
          name="drink"
          label="Favorite Drink?"
          defaultValue="Tesla Tequila"
        />
      </Relevant>
    </Scope>
    <Debug values />
  </Form>
);

export default Example;
