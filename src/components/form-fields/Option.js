import React from 'react';

const Option = ({ value, forwardedRef, children, ...rest }) => {
  return (
    <option ref={forwardedRef} value={value} key={value} {...rest}>
      {children}
    </option>
  );
};

export default Option;
