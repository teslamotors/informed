// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useFieldApi } from './useFieldApi';
import { useFormApi } from './useFormApi';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

function useFieldState(name) {
  const fieldApi = useFieldApi(name);
  const formApi = useFormApi();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useIsomorphicLayoutEffect(() => {
    const listener = target => {
      if (target === name) {
        forceUpdate();
      }
    };

    formApi.emitter.on('field', listener);

    return () => {
      formApi.emitter.removeListener('field', listener);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    forceUpdate();
  }, []);

  // useEffect(() => {
  //   forceUpdate();
  // }, []);

  return fieldApi.getFieldState() || {};
}

export { useFieldState };
