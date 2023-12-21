import { Informed, Debug, useInformedField } from 'informed';
import { useRef } from 'react';
import { Form, Input, Select, Option } from 'YourComponents';

const Color = () => {
  const renders = useRef(0);
  renders.current = renders.current + 1;

  // Note how we use useInformedField and pass 1: name of form and 2: the name of the field in that form
  const colorState = useInformedField('my-form', 'color');

  return (
    <>
      <h4>Renders {renders.current} </h4>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: colorState?.value
        }}
      />
      {colorState?.value}
    </>
  );
};

const Example = () => (
  <Informed>
    {/* --------------- Note how we pass a name to the form  --------------- */}
    <Form name="my-form">
      <Input name="name" label="Name:" />
      <Select name="color" label="Color" defaultValue="blue">
        <Option key="red">Red</Option>
        <Option key="green">Green</Option>
        <Option key="blue">Blue</Option>
      </Select>
      <button type="submit">Submit</button>
    </Form>
    {/* -------- Note how the color component is outside the Form  -------- */}
    <Color />
  </Informed>
);

export default Example;
