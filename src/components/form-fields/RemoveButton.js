import React from 'react';
import { useArrayFieldItemApi } from '../../hooks/useArrayFieldItemApi';

const RemoveButton = ({ text }) => {
  const { remove } = useArrayFieldItemApi();

  return (
    <button
      onClick={() => {
        remove();
      }}
      type="button">
      {text ? text : 'Remove'}
    </button>
  );
};

export { RemoveButton };
