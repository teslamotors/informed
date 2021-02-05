import React from 'react';
import useArrayFieldApi from '../../hooks/useArrayFieldApi';

const AddButton = () => {
  const { add } = useArrayFieldApi();

  return (
    <button
      onClick={() => {
        add();
      }}
      type="button">
      Add
    </button>
  );
};

export default AddButton;
