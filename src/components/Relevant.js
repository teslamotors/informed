import React, { useMemo } from 'react';
import { useFormState } from '../hooks/useFormState';
import { useFormApi } from '../hooks/useFormApi';
import { RelevanceContext } from '../Context';
import { useFormController } from '../hooks/useFormController';

export const Relevant = ({ when, children }) => {
  const formState = useFormState();
  const formApi = useFormApi();
  const formController = useFormController();

  const isRelevant = when(formState, formApi);

  const relevantContext = useMemo(
    () => {
      return {
        isRelevant,
        relevant: () =>
          when(formController.getFormState(), formController.getFormApi())
      };
    },
    [isRelevant]
  );

  return (
    <RelevanceContext.Provider value={relevantContext}>
      {isRelevant ? children : null}
    </RelevanceContext.Provider>
  );
};
