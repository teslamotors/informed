import React from 'react';
import { Input, RadioGroup, Radio, Debug } from 'informed';
import { Form, Button } from 'YourComponents';
const Example = () => {
  const initialValues = {
    name: 'Joe',
    age: 26,
    love: 'no' // << GOAL the form should read NO
  };

  return (
    <React.Fragment>
      <Form initialValues={initialValues}>
        <Input name="name" label="First Name" />
        <Input type="number" name="age" label="Age" />
        {/* Note we passed defaultValue here ( GOOD ) */}
        <RadioGroup name="love" label="Do You Love Tesla?" defaultValue="yes">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>
        <Button type="submit" variant="primary">
          submit
        </Button>
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
        <Button type="submit" variant="primary">
          submit
        </Button>
        <Debug values initialValues defaultValues />
      </Form>
    </React.Fragment>
  );
};

export default Example;
