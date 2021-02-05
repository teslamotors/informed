import React from 'react';
import useMultistep from '../hooks/useMultistep';
import useMultistepStep from '../hooks/useMultistepStep';

export default function Multistep({ children, ...props }) {
  const { render, ...context } = useMultistep(props);

  if (typeof children === 'function') {
    return render(children(context));
  }

  return render(children);
}

Multistep.Step = function MultistepStep({ children, ...props }) {
  const { render } = useMultistepStep(props);
  return render(children);
};
