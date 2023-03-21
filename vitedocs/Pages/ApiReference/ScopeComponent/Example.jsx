import { Scope, Debug } from 'informed';
import { Form, Input } from 'YourComponents';

const initialValues = {
  name: 'Elon',
  age: 50,
  spouse: {
    name: 'Talulah',
    age: 36
  }
};

const Example = () => (
  <Form initialValues={initialValues}>
    <h3>Your Info</h3>
    <Input name="name" label="First name:" />
    <Input name="age" label="Age:" type="number" />
    <Scope scope="spouse">
      <h3>Spouses Info</h3>
      <Input name="name" label="First name:" />
      <Input name="age" label="Age:" type="number" />
    </Scope>
    <Debug values />
  </Form>
);

export default Example;
