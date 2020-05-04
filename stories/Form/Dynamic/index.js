import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text } from '../../../src';

const DynamicContent = () => {
  const [field1, setField1] = useState('foo');
  const [field2, setField2] = useState('baz');
  const [field3, setField3] = useState('boo');
  const [disabled, setDisabled] = useState(true);
  const [field5, setField5] = useState('joe');

  const toggle1 = () => {
    setField1(field1 === 'foo' ? 'bar' : 'foo');
  };

  const toggle2 = () => {
    setField2(field2 === 'baz' ? 'taz' : 'baz');
  };

  const toggle3 = () => {
    setField3(field3 === 'boo' ? 'far' : 'boo');
  };

  const toggle4 = () => {
    setDisabled(dis => !dis);
  };

  const toggle5 = () => {
    setField5(field5 === 'joe' ? 'elon' : 'joe');
  };

  return (
    <div>
      <Form>
        <label htmlFor="field1" key={field1}>
          {field1}:<Text field={field1} id="field1" />
        </label>

        {field2 === 'baz' ? (
          <label htmlFor="baz" key="baz">
            baz:
            <Text field="baz" id="baz" />
          </label>
        ) : (
          <label htmlFor="taz" key="taz">
            taz:
            <Text field="taz" id="taz" />
          </label>
        )}

        <label htmlFor="field3" key={field3}>
          {field3}:<Text field={field3} id="field3" keepState />
        </label>

        <label key="diabled">
          Diabled:
          <Text field="disabled" disabled={disabled} />
        </label>

        <label>
          {field5}:<Text field={field5} />
        </label>

        <button type="submit">Submit</button>
        <FormState />
      </Form>
      <button onClick={toggle1}>Toggle Foo {'<->'} Bar</button>
      <br />
      <button onClick={toggle2}>Toggle Baz {'<->'} Taz</button>
      <br />
      <button onClick={toggle3}>Toggle Boo {'<->'} Far</button>
      <br />
      <button onClick={toggle4}>Toggle Disabled</button>
      <br />
      <button onClick={toggle5}>Toggle Joe {'<->'} Elon</button>
    </div>
  );
};

const Dynamic = () => <DynamicContent />;

export default withDocs(readme, Dynamic);
