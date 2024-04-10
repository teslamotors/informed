import { Input, RadioGroup, Radio, Relevant, Debug } from 'informed';
import { Form, Button } from 'YourComponents';
const Example = () => (
  <Form
    initialValues={{
      married: 'yes',
      spouseFirst: 'Hope',
      spouseLast: 'Foobar'
    }}>
    <Input name="name" label="First Name" />
    <RadioGroup name="married" label="Are You Married?">
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
    </RadioGroup>
    <Relevant when={({ formState }) => formState.values.married === 'yes'}>
      <Input name="spouseFirst" label="Spouse First Name" />
      <Input
        name="spouseLast"
        label="Spouse Last Name"
        initializeValueIfPristine
      />
    </Relevant>
    <Button type="submit" variant="primary">
      submit
    </Button>
    <Debug values />
  </Form>
);

export default Example;
