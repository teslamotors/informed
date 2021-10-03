import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import { Form, useField } from '../../../src';

const Slider = React.memo(props => {
  const { render, fieldState, fieldApi } = useField({ ...props });
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return render(
    <input
      {...rest}
      type="range"
      min={0}
      max={100}
      step={5}
      ref={forwardedRef}
      value={value || initialValue || '0'}
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
});

const SliderExample = () => (
  <div>
    <Form id="custom-form-3">
      {({ formState }) => (
        <React.Fragment>
          <label htmlFor="custom-3-range">Range:</label>
          <Slider field="range" initialValue={'50'} id="custom-3-range" />
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

export default withDocs(readme, SliderExample);
