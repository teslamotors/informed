import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import {
  Form,
  Input,
  RadioGroup,
  Radio,
  Relevant,
  Debug,
  Checkbox
} from '../../../src';

const RelevantComonent = () => (
  <Form>
    <Input name="name" label="First name:" />
    <Checkbox name="married" label="Are you married?" />
    <Relevant when={({ formState }) => formState.values.married}>
      <Input name="spouse" label="Spouse name:" />
    </Relevant>
    <Debug values />
  </Form>
);

export default withDocs(readme, RelevantComonent);
