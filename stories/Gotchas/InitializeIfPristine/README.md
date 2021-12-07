# Initialize Value If Pristine

Sometimes you need to conditionally show or hide things based on the values in your form. This can easily be achieved with `<Relevant />`. However you may have initial values that you only want to use when the form fields were rendered on form load ( i.e ) `$pristine` state.

To achieve this you can optionally pass `initializeValueIfPristine` to a field.

#### Code:

```jsx
import { Button } from '@tesla/design-system-react';
import { Form, Input, RadioGroup, Radio, Relevant, Debug } from 'informed';

const RelevantExample = () => (
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
```

<!-- STORY -->
