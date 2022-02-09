import { useEffect } from 'react';
import { useInformed } from './useInformed';
import { useForceUpdate } from './useForceUpdate';
import { Debug } from '../debug';
import { isChild } from '../utils';

const debug = Debug('informed:useInformedField' + '\t');

/* ----------------------- useFieldState ----------------------- */
export const useInformedField = (name, target) => {
  // Grab informed
  const informed = useInformed();

  // Magic trick
  const forceUpdate = useForceUpdate();
  // Register for events on our field
  useEffect(
    () => {
      const listener = t => {
        // either
        // 1. All fields are supposed to update
        // 2. This is a specific registration "foo" === "foo"
        // 3. This field is a child of registration "friends[0].name" is a child of name="friends[0]"
        if (t === '_ALL_' || t === target || (t && isChild(target, t))) {
          debug('Updating', t, name, target);
          forceUpdate();
        }
      };

      informed.emitter.on(name, listener);

      // When name changes we always force an update!
      forceUpdate();

      return () => {
        informed.emitter.removeListener(name, listener);
      };
    },
    [name]
  );

  return informed.getController(name)?.getFieldState(target);
};
