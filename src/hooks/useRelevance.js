import { useContext, useEffect } from 'react';
import { ScopeContext } from '../Context';
import { useFormController } from './useFormController';
import { useStateWithGetter } from './useStateWithGetter';

/* ----------------------- useRelevance ----------------------- */
export const useRelevance = ({ name, relevant = () => true }) => {
  // Grab the form controller
  const formController = useFormController();

  // Get scope
  const scope = useContext(ScopeContext);

  // Relevant state
  const [isRelevant, setIsRelevant, getIsRelevant] = useStateWithGetter(() =>
    relevant({
      formState: formController.getFormState(),
      formApi: formController.getFormApi(),
      scope
    })
  );

  // Register for events on our field
  useEffect(
    () => {
      // console.log("UPDATED", name);
      // When we have a field update we always check
      const listener = () => {
        const rel = relevant({
          formState: formController.getFormState(),
          formApi: formController.getFormApi(),
          scope
        });
        // Only update if we changed
        if (getIsRelevant() != rel) {
          // console.log("UPDATING", name, rel);
          setIsRelevant(rel);
        }
      };

      formController.emitter.on('field', listener);

      // When name changes we always check if relevant
      setIsRelevant(
        relevant({
          formState: formController.getFormState(),
          formApi: formController.getFormApi(),
          scope
        })
      );

      return () => {
        // console.log("REMOVED LISTENER", name);
        formController.emitter.removeListener('field', listener);
      };
    },
    [name]
  );

  return isRelevant;
};
