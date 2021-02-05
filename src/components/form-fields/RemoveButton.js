import React from 'react';
import useArrayFieldItemApi from '../../hooks/useArrayFieldItemApi';

const AddButton = () => {
  const { remove } = useArrayFieldItemApi();

  return (
    <button
      onClick={() => {
        remove();
      }}
      type="button">
      Remove
    </button>
  );
};

export default AddButton;
