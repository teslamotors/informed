import React from 'react';
import Code from '../../../utils/Code';
import withDocs from '../../../utils/withDocs';
import readme from './README.md';
import { Form, useField } from '../../../../src';

const CustomTextInput = (props) => {

  const { fieldState, fieldApi, render, ref, userProps } = useField({ ...props });

  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, ...rest } = userProps;

  return render(
    <input
      {...rest}
      ref={ref}
      value={!value && value !== 0 ? '' : value}
      onChange={e => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched(true);
        if (onBlur) {
          onBlur(e);
        }
      }} />
  );
};

const FromScratch = () => (
  <div>
    <Form id="custom-form-2">
      {({ formApi, formState }) => (
        <React.Fragment>
          <label>
            First name:
            <CustomTextInput
              field="name" />
          </label>
          <button type="submit">Submit</button>
          <label>Values:</label>
          <Code language="language-js">
            {JSON.stringify(formState.values, null, 2)}
          </Code>
          <label>Errors:</label>
          <Code language="language-js">
            {JSON.stringify(formState.errors, null, 2)}
          </Code>
        </React.Fragment>
      )}
    </Form>
  </div>
);

export default withDocs(readme, FromScratch);
