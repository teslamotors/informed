import { useContext, useEffect, useMemo, useRef } from 'react';
import { ScopeContext } from '../Context';
import { useFormController } from './useFormController';
import { useStateWithGetter } from './useStateWithGetter';
import { useFieldSubscription } from './useFieldSubscription';
import { Debug } from '../debug';
const logger = Debug('informed:useRelevance' + '\t');

/* ----------------------- useRelevance ----------------------- */
export const useRelevance = ({
  name,
  relevant,
  relevanceWhen = [],
  relevanceDeps = []
}) => {
  // Grab the form controller
  const formController = useFormController();

  // Get scope
  const scope = useContext(ScopeContext);

  // Need ref to scope because subscriptions will keep ref to it
  const scopeRef = useRef(scope);
  scopeRef.current = scope;

  // Relevant state
  const [isRelevant, setIsRelevant, getIsRelevant] = useStateWithGetter(() => {
    if (relevant) {
      return relevant({
        formState: formController.getFormState(),
        formApi: formController.getFormApi(),
        scope,
        relevanceDeps
      });
    }
    return true;
  });

  const check = typeof relevanceWhen === 'function' ? [] : relevanceWhen;

  const fields = useMemo(
    () => {
      if (typeof relevanceWhen === 'function') {
        // Generate fields array with scope
        // Example: relevanceWhen = scope => [`${scope}.foo`, `${scope}.bar`]
        return relevanceWhen(scope);
      }
      // Example relevanceWhen = ["name", "age"]
      return relevanceWhen;
    },
    [...check, scope]
  );

  // Example relevanceWhen = ["name", "age"]
  useFieldSubscription(
    'field-value',
    fields,
    target => {
      logger(`re-evaluating relevance for ${name} because of ${target}`);
      const rel = relevant({
        formState: formController.getFormState(),
        formApi: formController.getFormApi(),
        scope: scopeRef.current,
        relevanceDeps
      });
      // Only update if we changed
      if (getIsRelevant() != rel) {
        // console.log("UPDATING", name, rel);
        setIsRelevant(rel);
      }
    },
    // Note: we pass false because we don't want this to be scoped!
    // When the user explicitly uses a function!
    !(typeof relevanceWhen === 'function')
  );

  // Register for ALL events if we have no relevanceWhen
  useEffect(() => {
    if (
      relevant &&
      typeof relevanceWhen !== 'function' &&
      relevanceWhen.length === 0
    ) {
      // When we have a field update we always check
      const listener = target => {
        logger(`re-evaluating relevance for ${name} because of ${target}`);
        const rel = relevant({
          formState: formController.getFormState(),
          formApi: formController.getFormApi(),
          scope: scopeRef.current,
          relevanceDeps
        });
        logger(
          `re-evaluated relevance for ${name} because of ${target} and got ${rel}`
        );
        // Only update if we changed
        if (getIsRelevant() != rel) {
          // console.log("UPDATING", name, rel);
          logger(
            `updating relevance for ${name} because of ${target} and got ${rel}`
          );
          setIsRelevant(rel);
        }
      };

      formController.emitter.on('field', listener);

      return () => {
        // console.log("REMOVED LISTENER", name);
        formController.emitter.removeListener('field', listener);
      };
    }
  }, []);

  useEffect(
    () => {
      if (relevant) {
        // When name changes we always check if relevant
        setIsRelevant(
          relevant({
            formState: formController.getFormState(),
            formApi: formController.getFormApi(),
            scope,
            relevanceDeps
          })
        );
      }
    },
    [name, ...relevanceDeps]
  );

  return isRelevant;
};
