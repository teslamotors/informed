import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ScopeContext } from '../Context';
import { useFormController } from './useFormController';
import { useFieldSubscription } from './useFieldSubscription';
import { Debug } from '../debug';

const logger = Debug('informed:useConditional' + '\t');

/**
 * Custom hook for handling conditional logic based on form state.
 *
 * @param {object} options - The options for conditional evaluation.
 * @param {string} options.name - The name of the conditional field.
 * @param {function} options.evaluate - The evaluation function for conditional logic.
 * @param {Array<string|number|symbol>} [options.evaluateWhen=[]] - The fields to watch for triggering re-evaluation.
 * @param {Array<string>} [options.dependsOn=[]] - The fields that the evaluation depends on.
 * @param {boolean} [options.native=false] - Whether to use native events for evaluation.
 * @returns {object} - The props object with conditional properties.
 */
export const useConditional = ({
  name,
  evaluate,
  evaluateWhen = [],
  dependsOn = [],
  native = false
}) => {
  // Grab the form controller
  const formController = useFormController();

  // Get scope
  const scope = useContext(ScopeContext);

  // Need ref to scope because subscriptions will keep ref to it
  const scopeRef = useRef(scope);
  scopeRef.current = scope;

  // Conditional state
  const [props, setProps] = useState(() => {
    if (evaluate) {
      return evaluate({
        formState: formController.getFormState(),
        formApi: formController.getFormApi(),
        scope,
        dependsOn
      });
    }
    return {};
  });

  const check = typeof evaluateWhen === 'function' ? [] : evaluateWhen;

  const fields = useMemo(() => {
    if (typeof evaluateWhen === 'function') {
      // Generate fields array with scope
      // Example: evaluateWhen = scope => [`${scope}.foo`, `${scope}.bar`]
      return evaluateWhen(scope);
    }
    // Example evaluateWhen = ["name", "age"]
    return evaluateWhen;
  }, [...check, scope]);

  const event = native ? 'field-native' : 'field-value';

  // Example evaluateWhen = ["name", "age"]
  useFieldSubscription(
    event,
    fields,
    target => {
      logger(`re-evaluating conditional for ${name} because of ${target}`);
      const res = evaluate({
        formState: formController.getFormState(),
        formApi: formController.getFormApi(),
        scope: scopeRef.current,
        dependsOn,
        target
      });
      setProps(res);
    },
    // Note: we pass false because we don't want this to be scoped!
    // When the user explicitly uses a function!
    !(typeof evaluateWhen === 'function')
  );

  useEffect(() => {
    if (evaluate) {
      // When name changes we always check if relevant
      setProps(
        evaluate({
          formState: formController.getFormState(),
          formApi: formController.getFormApi(),
          scope,
          dependsOn
        })
      );
    }
  }, [name, ...dependsOn]);

  // Trigger evaluate on a reset of form
  useEffect(() => {
    const listener = () => {
      if (evaluate) {
        setProps(
          evaluate({
            formState: formController.getFormState(),
            formApi: formController.getFormApi(),
            scope,
            dependsOn
          })
        );
      }
    };

    formController.emitter.on('reset', listener);

    return () => {
      formController.emitter.removeListener('reset', listener);
    };
  }, []);

  return props;
};
