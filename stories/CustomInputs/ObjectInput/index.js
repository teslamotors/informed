import React, { useRef } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, useField } from '../../../src';

const ObjectInput = props => {
  const { fieldState, fieldApi, render, userProps } = useField(props);

  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, ...rest } = userProps;

  const v = value || {};

  const aChange = e => {
    const newVal = { ...v };

    newVal.a = e.target.value;

    setValue(newVal);
  };

  const bChange = e => {
    const newVal = { ...v };

    newVal.b = e.target.value;

    setValue(newVal);
  };

  const { a, b } = v;

  return render(
    <React.Fragment>
      <input
        {...rest}
        value={a ? a : ''}
        onChange={aChange}
        onBlur={() => setTouched}
      />
      <input
        {...rest}
        value={b ? b : ''}
        onChange={bChange}
        onBlur={() => setTouched()}
      />
    </React.Fragment>
  );
};

const Example = () => (
  <div>
    <Form>
      {({ formApi, formState }) => (
        <React.Fragment>
          <label>
            Double Input
            <ObjectInput field="doubleInput" />
          </label>
          <button type="submit">Submit</button>
          <label>Values:</label>
          <Code language="language-js">
            {JSON.stringify(formState.values, null, 2)}
          </Code>
        </React.Fragment>
      )}
    </Form>
  </div>
);

export default withDocs(readme, Example);
