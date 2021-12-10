import React from 'react';
import withDocs from '../../../utils/withDocs';
import readme from './README.md';
import { Form, Input, useFormApi, Debug } from '../../../../src';

const RandomSetterButton = () => {
  const formApi = useFormApi();
  return (
    <button
      type="button"
      onClick={() =>
        formApi.setValue(
          'name',
          Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER))
        )
      }>
      Random
    </button>
  );
};

const SetValuesButton = () => {
  const formApi = useFormApi();
  return (
    <button
      type="button"
      onClick={() => formApi.setValues({ age: 26, color: 'Green' })}>
      All
    </button>
  );
};

const SetTheseValuesButton = () => {
  const formApi = useFormApi();
  return (
    <button
      type="button"
      onClick={() => formApi.setTheseValues({ age: 26, color: 'Green' })}>
      Age & Color
    </button>
  );
};

const FormApi = () => (
  <Form validateOn="change" showErrorIfError>
    <Input name="name" label="First Name:" initialValue="Joe" required />
    <Input name="age" label="First Name:" type="number" initialValue="27" />
    <Input name="color" label="Favorite Color:" formatter="*-*-***" />
    <RandomSetterButton />
    <SetValuesButton />
    <SetTheseValuesButton />
    <button type="submit">Submit</button>
    {/* <Debug /> */}
  </Form>
);

export default withDocs(readme, FormApi);
