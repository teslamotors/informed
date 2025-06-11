import React, { useCallback, useRef, useState } from 'react';

import {
  Informed,
  Debug,
  useInformedField,
  useInformedApi,
  useInformedState
} from 'informed';
import { Form, Input, Select, Option } from 'YourComponents';

const PurpleBorder = ({ children }) => {
  return (
    <div
      style={{
        borderLeft: '2px solid purple',
        padding: '1rem',
        margin: '1rem'
      }}>
      {children}
    </div>
  );
};

const Overview = () => {
  const renders = useRef(0);
  renders.current = renders.current + 1;

  const infoState = useInformedState('info');
  const questionState = useInformedState('questions');

  return (
    <PurpleBorder>
      <h4>Renders: {renders.current}</h4>
      <h3>
        {infoState?.values?.name}s favorite color is{' '}
        {questionState?.values?.color}
      </h3>
    </PurpleBorder>
  );
};

const Color = () => {
  const renders = useRef(0);
  renders.current = renders.current + 1;

  const colorState = useInformedField('questions', 'color');

  return (
    <PurpleBorder>
      <h4>Renders {renders.current} </h4>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: colorState?.value
        }}
      />
      {colorState?.value}
    </PurpleBorder>
  );
};

const IntroControl = () => {
  const informedApi = useInformedApi();

  const renders = useRef(0);
  renders.current = renders.current + 1;

  const onClick = useCallback(() => {
    informedApi.getFormApi('info').setValue('name', 'Joe Puzzo');
  }, []);

  return (
    <PurpleBorder>
      <h4>Renders {renders.current} </h4>
      <button type="button" onClick={onClick}>
        Set First Name
      </button>
    </PurpleBorder>
  );
};

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <Informed>
      <PurpleBorder>
        <Form autocomplete="off" name="info">
          <h3>Info</h3>
          <Input name="name" label="First name:" />
          <button type="submit">Submit</button>
          <Debug values />
        </Form>
      </PurpleBorder>
      <IntroControl />
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? (
        <PurpleBorder>
          <Form autocomplete="off" name="questions">
            <h3>Questions</h3>
            <Select name="color" label="Color" defaultValue="blue">
              <Option key="red">Red</Option>
              <Option key="green">Green</Option>
              <Option key="blue">Blue</Option>
            </Select>
            <button type="submit">Submit</button>
            <Debug values />
          </Form>
        </PurpleBorder>
      ) : null}
      <Overview />
      <Color />
    </Informed>
  );
};

export default Example;
