import React, { useState } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug, useFieldState } from '../../../src';

const JoesState = () => {
  const fieldState = useFieldState('joe');
  return (
    <>
      <strong>Joes State</strong>
      <pre>
        <code>{JSON.stringify(fieldState, null, 2)}</code>
      </pre>
    </>
  );
};

const ElonsState = () => {
  const fieldState = useFieldState('elon');
  return (
    <>
      <strong>Elons State</strong>
      <pre>
        <code>{JSON.stringify(fieldState, null, 2)}</code>
      </pre>
    </>
  );
};

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
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="field1" key={field1}>
              {field1}:<Input name={field1} id="field1" />
            </label>

            {field2 === 'baz' ? (
              <label htmlFor="baz" key="baz">
                baz:
                <Input name="baz" id="baz" />
              </label>
            ) : (
              <label htmlFor="taz" key="taz">
                taz:
                <Input name="taz" id="taz" />
              </label>
            )}

            <label htmlFor="field3" key={field3}>
              {field3}:<Input name={field3} id="field3" keepState />
            </label>

            <label key="diabled">
              Diabled:
              <Input name="disabled" disabled={disabled} />
            </label>

            <label>
              {field5}:<Input name={field5} />
            </label>

            <JoesState />
            <br />
            <ElonsState />

            <button type="submit">Submit</button>
          </div>
          <div style={{ flex: 1 }}>
            <button type="button" onClick={toggle1}>
              Toggle Foo {'<->'} Bar
            </button>
            <br />
            <button type="button" onClick={toggle2}>
              Toggle Baz {'<->'} Taz
            </button>
            <br />
            <button type="button" onClick={toggle3}>
              Toggle Boo {'<->'} Far
            </button>
            <br />
            <button type="button" onClick={toggle4}>
              Toggle Disabled
            </button>
            <br />
            <button type="button" onClick={toggle5}>
              Toggle Joe {'<->'} Elon
            </button>
          </div>
        </div>

        <Debug />
      </Form>
    </div>
  );
};

const Dynamic = () => <DynamicContent />;

export default withDocs(readme, Dynamic);
