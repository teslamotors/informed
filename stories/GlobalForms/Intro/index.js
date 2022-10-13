import React, { useCallback, useRef, useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import {
  Form,
  Input,
  Select,
  Debug,
  Informed,
  useInformedApi
} from '../../../src';
import { useInformedState, useInformedField } from '../../../src';

const PurpleBorder = ({ children }) => {
  return (
    <div
      style={{ border: '2px solid purple', padding: '1rem', margin: '1rem' }}>
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
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
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

export default withDocs(readme, Example);
