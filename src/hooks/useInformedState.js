import { useEffect } from 'react';
import { useInformed } from './useInformed';
import { useForceUpdate } from './useForceUpdate';
import { Debug } from '../debug';

const debug = Debug('informed:useInformedState' + '\t');

/* ----------------------- useFieldState ----------------------- */
export const useInformedState = name => {
  // Grab informed
  const informed = useInformed();

  // Magic trick
  const forceUpdate = useForceUpdate();

  // Register for events on our field
  useEffect(
    () => {
      const listener = n => {
        debug('Updating', n);
        forceUpdate();
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

  return informed.getController(name)?.getFormState();
};
