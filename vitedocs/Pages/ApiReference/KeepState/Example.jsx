import { ActionButton } from '@adobe/react-spectrum';
import Refresh from '@spectrum-icons/workflow/Refresh';
import { Relevant, Debug, useFieldApi } from 'informed';
import { useState } from 'react';

import { Form, Input, TextArea, Checkbox, Button } from 'YourComponents';

const onSubmit = ({ values }) => window.alert(`Hello ${values.name}`);

const RestoreButton = () => {
  const { restore } = useFieldApi('question4');

  return (
    <ActionButton onClick={restore}>
      <Refresh />
    </ActionButton>
  );
};

export const If = ({ condition, children }) => {
  return condition ? children : null;
};

export const Example = () => {
  const [show, setShow] = useState(true);

  const toggle = () => setShow(prev => !prev);

  return (
    <Form onSubmit={onSubmit}>
      <Checkbox
        name="questions"
        label="Answer Questions?"
        initialValue={true}
      />
      <If condition={show}>
        <Relevant when={({ formState }) => formState.values.questions}>
          <Input name="question1" label="Question 1" />
          <Input name="question2" label="Question 2" keepState />
          <Input name="question3" label="Question 3" keepStateIfRelevant />
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
            <TextArea name="question4" label="Question 4" remember />
            <RestoreButton />
          </div>
        </Relevant>
      </If>
      <Button type="button" onClick={toggle}>
        {show ? 'Hide' : 'Show'}
      </Button>
      <Button type="submit">Submit</Button>
      <Debug values memory />
    </Form>
  );
};

export default Example;
