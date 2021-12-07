import React from 'react';
import { useArrayFieldApi } from '../../hooks/useArrayFieldApi';

const AddButton = ({ text }) => {
  const { add } = useArrayFieldApi();

  return (
    <button
      onClick={() => {
        add();
      }}
      type="button">
      {text ? text : 'Add'}
    </button>
  );
};

export { AddButton };
