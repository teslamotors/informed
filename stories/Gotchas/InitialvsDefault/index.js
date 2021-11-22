import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, Input, RadioGroup, Radio, Debug } from '../../../src';

const Example = () => {
  const initialValues = {
    name: 'Joe',
    age: 26,
    love: 'no' // << GOAL the form should read NO
  };

  return (
    <React.Fragment>
      {/* <a
        href="https://teslamotorsinc-my.sharepoint.com/:v:/g/personal/jpuzzo_tesla_com/EQJkU2trILFEqSrZFZcOa5sBJTYjydAkuo9RwiFydVf4tA?e=DL5PPO"
        target="_blank">
        Example Video
      </a> */}
      <Form initialValues={initialValues}>
        <Input name="name" label="First Name" />
        <Input type="number" name="age" label="Age" />
        {/* Note we passed defaultValue here ( GOOD ) */}
        <RadioGroup name="love" label="Do You Love Tesla?" defaultValue="yes">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>
        <button type="submit" variant="primary">
          submit
        </button>
        <Debug values initialValues defaultValues />
      </Form>
      <Form initialValues={initialValues}>
        <Input name="name" label="First Name" />
        <Input type="number" name="age" label="Age" />
        {/* Note we passed initialValue here ( BAD ) */}
        <RadioGroup name="love" label="Do You Love Tesla?" initialValue="yes">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>
        <button type="submit" variant="primary">
          submit
        </button>
        <Debug values initialValues defaultValues />
      </Form>
    </React.Fragment>
  );
};

export default withDocs(readme, Example);
