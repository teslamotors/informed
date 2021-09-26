import { useEffect } from 'react';
import { useFormController } from './useFormController';
import { useForceUpdate } from './useForceUpdate';
import { isChild } from '../utils';
import { Debug } from '../debug';
import { useScope } from './useScope';

const debug = Debug('informed:useFieldState' + '\t');

/* ----------------------- useFieldState ----------------------- */
export const useFieldState = (n, scoped = true) => {
  // Create name
  const name = scoped ? useScope(n) : n;

  // Grab the form controller
  const formController = useFormController();

  // Magic trick
  const forceUpdate = useForceUpdate();

  // Register for events on our field
  useEffect(
    () => {
      const listener = target => {
        // either
        // 1. All fields are supposed to update
        // 2. This is a specific registration "foo" === "foo"
        // 3. This field is a child of registration "friends[0].name" is a child of name="friends[0]"
        if (
          target === '_ALL_' ||
          target === name ||
          (target && isChild(name, target))
        ) {
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
