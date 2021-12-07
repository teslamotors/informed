import React from 'react';
import Code from '../../../utils/Code';
import withDocs from '../../../utils/withDocs';
import readme from './README.md';
import { Form, useField, Debug } from '../../../../src';

const CustomTextInput = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField({
    ...props
  });

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
      }}
    />
  );
};

const FromScratch = () => (
  <div>
    <Form>
      <label>
        First name:
        <CustomTextInput field="name" />
      </label>
      <button type="submit">Submit</button>
      <Debug values errors />
    </Form>
  </div>
);

export default withDocs(readme, FromScratch);
