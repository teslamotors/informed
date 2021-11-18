import React, { useRef } from 'react';
import { Button } from '@tesla/design-system-react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { FormState, Relevant } from '@tesla/react-context-form';
import { Form, Input, RadioGroup, Radio } from '@tesla/react-context-form-tds';

const RelevantExample = () => {
  const formApiRef = useRef();

  return (
    <Form
      formApiRef={formApiRef}
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
      {/* <Button type="button" onClick={() => formApiRef.current.setValue('spouseFirst', 'Foo')}>
        Set Name to "Foo"
      </Button> */}
      <FormState values />
    </Form>
  );
};
export default withDocs(readme, RelevantExample);
