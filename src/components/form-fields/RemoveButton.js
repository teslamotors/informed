import React from 'react';
import { useArrayFieldItemApi } from '../../hooks/useArrayFieldItemApi';

const RemoveButton = () => {
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

export { RemoveButton };
