import { useEffect } from 'react';
import { useFormController } from './useFormController';
import { useStateWithGetter } from './useStateWithGetter';

/* ----------------------- useRelevance ----------------------- */
export const useRelevance = ({ name, relevant = () => true }) => {
  // Grab the form controller
  const formController = useFormController();

  // Relevant state
  const [isRelevant, setIsRelevant, getIsRelevant] = useStateWithGetter(() =>
    relevant(formController.getFormState(), formController.getFormApi())
  );

  // Register for events on our field
  useEffect(
    () => {
      // console.log("UPDATED", name);
      // When we have a field update we always check
      const listener = () => {
        const rel = relevant(
          formController.getFormState(),
          formController.getFormApi()
        );
        // Only update if we changed
        if (getIsRelevant() != rel) {
          // console.log("UPDATING", name, rel);
          setIsRelevant(rel);
        }
      };

      formController.emitter.on('field', listener);

      // When name changes we always check if relevant
      setIsRelevant(
        relevant(formController.getFormState(), formController.getFormApi())
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
