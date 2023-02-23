import React, { useRef } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Scope, useScope } from '../../../src';

const initialValues = {
  name: 'Elon',
  age: 50,
  spouse: {
    name: 'Talulah',
    age: 36
  },
  mother: {
    name: 'Maye',
    age: 74
  }
};

const WhereAmI = () => {
  const scope = useScope();
  return (
    <div style={{ margin: '1rem' }}>
      You are within <strong>{scope}</strong>s scope.
    </div>
  );
};

const ScopeThis = ({ name }) => {
  const scopedName = useScope(name);
  return (
    <div style={{ margin: '1rem' }}>
      Scoped name <strong>{scopedName}</strong>.
    </div>
  );
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
      <WhereAmI />
      <ScopeThis name="hello" />
      <Scope scope="spouse">
        <h3>Spouses Info</h3>
        <Input name="name" label="First name:" />
        <Input name="age" label="Age:" type="number" />
        <WhereAmI />
        <ScopeThis name="hello" />
      </Scope>
      <br />
      <Scope scope="mother">
        <h3>Mothers Info</h3>
        <Input name="name" label="First name:" />
        <Input name="age" label="Age:" type="number" />
        <WhereAmI />
        <ScopeThis name="hello" />
      </Scope>
      {/* <button type="button" onClick={onClick}>
        Reset Spouse
      </button> */}
    </Form>
  );
};

export default withDocs(readme, ScopeComonent);
