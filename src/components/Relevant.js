import { useFormState } from '../hooks/useFormState';

const Relevant = ({ when, children }) => {
  const formState = useFormState();

  const isRelevant = when(formState);

  if (isRelevant) {
    return children;
  }

  return null;
};

export { Relevant };
