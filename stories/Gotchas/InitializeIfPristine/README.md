# Initialize Value If Pristine

Sometimes you need to conditionally show or hide things based on the values in your form. This can easily be achieved with `<Relevant />`. However you may have initial values that you only want to use when the form fields were rendered on form load ( i.e ) `$pristine` state.

To achieve this you can optionally pass `initializeValueIfPristine` to a field.

#### Code:

```jsx
import { Button } from '@tesla/design-system-react';
import { FormState, Relevant } from '@tesla/react-context-form';
import { Form, Input, RadioGroup, Radio } from '@tesla/react-context-form-tds';

const RelevantExample = () => (
  <Form
    initialValues={{
      married: 'yes',
      spouseFirst: 'Juliet',
      spouseLast: 'FooBar'
    }}>
    <Input name="name" label="First Name" />
    <RadioGroup name="married" label="Are You Married?">
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
    </RadioGroup>
    <Relevant when={({ values }) => values.married === 'yes'}>
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
    <FormState values />
  </Form>
);
```

<!-- STORY -->
