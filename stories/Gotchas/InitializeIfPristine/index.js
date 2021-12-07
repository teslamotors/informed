import React, { useRef } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, RadioGroup, Radio, Relevant, Debug } from '../../../src';

const RelevantExample = () => {
  const formApiRef = useRef();

  return (
    <Form
      formApiRef={formApiRef}
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
      <button type="submit" variant="primary">
        submit
      </button>
      {/* <Button type="button" onClick={() => formApiRef.current.setValue('spouseFirst', 'Foo')}>
        Set Name to "Foo"
      </Button> */}
      <Debug values />
    </Form>
  );
};
export default withDocs(readme, RelevantExample);
