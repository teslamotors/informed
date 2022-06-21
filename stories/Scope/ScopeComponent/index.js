import React, { useRef } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Scope, Debug, Checkbox } from '../../../src';

const initialValues = {
  name: 'Elon',
  age: 50,
  spouse: {
    name: 'Talulah',
    age: 36
  }
};

const ScopeComonent = () => {
  // const formApiRef = useRef();

  // const onClick = () => {
  //   formApiRef.current.resetPath('spouse');
  // };

  return (
    <Form initialValues={initialValues}>
      <h3>Your Info</h3>
      <Input name="name" label="First name:" />
      <Input name="age" label="Age:" type="number" />
      <Scope scope="spouse">
        <h3>Spouses Info</h3>
        <Input name="name" label="First name:" />
        <Input name="age" label="Age:" type="number" />
      </Scope>
      {/* <button type="button" onClick={onClick}>
        Reset Spouse
      </button> */}
      <Debug values />
    </Form>
  );
};

export default withDocs(readme, ScopeComonent);
