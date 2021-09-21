import { useEffect } from 'react';
import { useFormController } from './useFormController';
import { useForceUpdate } from './useForceUpdate';
import { isChild } from '../utils';
import { Debug } from '../debug';

const debug = Debug('informed:useFieldState' + '\t');

/* ----------------------- useFieldState ----------------------- */
export const useFieldState = name => {
  // Grab the form controller
  const formController = useFormController();

  // Magic trick
  const forceUpdate = useForceUpdate();

  // Register for events on our field
  useEffect(
    () => {
      const listener = target => {
        if (target === '_ALL_' || target === name || isChild(name, target)) {
          debug('Updating', name);
          forceUpdate();
        }
      };

      formController.emitter.on('field', listener);

      // When name changes we always force an update!
      forceUpdate();

      return () => {
        formController.emitter.removeListener('field', listener);
      };
    },
    [name]
  );

  return formController.getFieldState(name);
};
