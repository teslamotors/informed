import React from 'react';
import { useField } from '../../hooks/useField';

export function Hidden(props) {
  const { informed, render, userProps, ref } = useField({
    type: 'text',
    ...props
  });

  return render(<input {...informed} {...userProps} ref={ref} type="hidden" />);
}
