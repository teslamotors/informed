import React, { useRef } from 'react';
import withDocs from '../../../utils/withDocs';
import readme from './README.md';
import { Form, Input } from '../../../../src';

const MyAwesomeForm = () => {
  const formApiRef = useRef();

  const handleClick = () => {
    formApiRef.current.setValue(
      'name',
      Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))
    );
  };

  return (
    <div>
      <Form formApiRef={formApiRef}>
        <Input name="name" label="First Name:" />
        <button type="submit">Submit</button>
      </Form>
      <button onClick={handleClick}>Random</button>
    </div>
  );
};

export default withDocs(readme, MyAwesomeForm);
