import React, { createContext, useContext } from 'react';
import { useField, Debug } from 'informed';
import { Form } from 'YourComponents'; // See Form Example

// Create a context for RadioGroup
const RadioGroupContext = createContext();

// HOW TO SETUP A RADIO GROUP COMPONENT WITH INFORMED
const RadioGroup = ({ children, label, id, options, ...props }) => {
  const { fieldApi, fieldState, userProps } = useField(props);

  const { showError, error } = fieldState;

  // Create context value with the field API and state
  const groupContext = {
    radioGroupApi: fieldApi,
    radioGroupState: fieldState
  };

  return (
    <RadioGroupContext.Provider value={groupContext}>
      <fieldset
        aria-describedby={`${id}-error`}
        style={{
          border: 'none',
          padding: 0,
          margin: 0,
          marginBottom: '1rem'
        }}>
        {label && (
          <legend style={{
            marginBottom: '0.5rem',
            fontWeight: 'bold'
          }}>
            {label}
          </legend>
        )}
        {options ? options.map(option => (
          <label key={option.value} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.5rem',
            cursor: 'pointer'
          }}>
            <Radio value={option.value} style={{ marginRight: '0.5rem' }} />
            {option.label}
          </label>
        )) : children}
        {showError && (
          <small role="alert" id={`${id}-error`} style={{ color: 'red' }}>
            {error}
          </small>
        )}
      </fieldset>
    </RadioGroupContext.Provider>
  );
};

// Custom hook to access RadioGroup context
const useRadioGroup = () => {
  return useContext(RadioGroupContext);
};

// HOW TO SETUP A RADIO COMPONENT WITH INFORMED
const Radio = ({ value, label, ...props }) => {
  const { radioGroupApi, radioGroupState } = useRadioGroup();

  const { setValue, setTouched } = radioGroupApi;
  const { value: groupValue, showError } = radioGroupState;

  return (
    <input
      {...props}
      aria-invalid={!!showError}
      type="radio"
      value={value}
      checked={groupValue === value}
      onChange={e => {
        if (!e.target.checked) {
          return;
        }
        setValue(value, e);
      }}
      onBlur={e => {
        setTouched(true, e);
      }}
      style={{
        cursor: 'pointer',
        ...props.style
      }}
    />
  );
};

// HOW TO USE IT
const Example = () => (
  <Form
    initialValues={{
      size: 'medium'
    }}>
    <RadioGroup
      name="size"
      label="Size"
      id="size"
      options={[
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' }
      ]}
    />
    <button type="submit">Submit</button>
    <Debug />
  </Form>
);

export default Example;
