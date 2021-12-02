import { useEffect, useMemo } from 'react';
import { useFormController } from './useFormController';
// import { useForceUpdate } from './useForceUpdate';
import { isChild } from '../utils';
import { Debug } from '../debug';
import { useScoper } from './useScoper';

const debug = Debug('informed:useFieldSubscription' + '\t');

/* ----------------------- useFieldSubscription ----------------------- */
export const useFieldSubscription = (event, fields, cb, scoped = true) => {
  // Create scoper function
  const scope = useScoper();

  // Generate scoped fields
  const scopedFields = useMemo(
    () => {
      if (scoped) {
        return fields.map(field => scope(field));
      }
      return fields;
    },
    [fields]
  );

  // Grab the form controller
  const formController = useFormController();

  // Magic trick
  // const forceUpdate = useForceUpdate();

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
          scopedFields.includes(target) ||
          (target && scopedFields.some(field => isChild(field, target)))
        ) {
          debug(
            `subscription ${event} triggered with target ${target} for`,
            scopedFields
          );
          // forceUpdate();
          cb(target);
        }
      };

      formController.emitter.on(event, listener);

      // When name changes we always force an update!
      // forceUpdate();

      return () => {
        formController.emitter.removeListener(event, listener);
      };
    },
    [fields]
  );
};
