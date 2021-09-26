import React, { useMemo } from 'react';
import { useFormState } from '../hooks/useFormState';
import { useFormApi } from '../hooks/useFormApi';
import { RelevanceContext, ScopeContext } from '../Context';
import { useFormController } from '../hooks/useFormController';
import { useScope } from '../hooks/useScope';

export const Relevant = ({ when, children }) => {
  const formState = useFormState();
  const formApi = useFormApi();
  const formController = useFormController();
  const scope = useScope(ScopeContext);

  const isRelevant = when({
    formState,
    formApi,
    scope
  });

  const relevantContext = useMemo(
    () => {
      return {
        isRelevant,
        relevant: () =>
          when({
            formState: formController.getFormState(),
            formApi: formController.getFormApi(),
            scope
          })
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
