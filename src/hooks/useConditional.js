import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ScopeContext } from '../Context';
import { useFormController } from './useFormController';
import { useFieldSubscription } from './useFieldSubscription';
import { Debug } from '../debug';
const logger = Debug('informed:useConditional' + '\t');

/* ----------------------- useDepends ----------------------- */
export const useConditional = ({
  name,
  evaluate,
  evaluateWhen = [],
  dependsOn = []
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

  const fields = useMemo(
    () => {
      if (typeof evaluateWhen === 'function') {
        // Generate fields array with scope
        // Example: evaluateWhen = scope => [`${scope}.foo`, `${scope}.bar`]
        return evaluateWhen(scope);
      }
      // Example evaluateWhen = ["name", "age"]
      return evaluateWhen;
    },
    [...check, scope]
  );

  // Example evaluateWhen = ["name", "age"]
  useFieldSubscription(
    'field-value',
    fields,
    target => {
      logger(`re-evaluating conditional for ${name} because of ${target}`);
      const res = evaluate({
        formState: formController.getFormState(),
        formApi: formController.getFormApi(),
        scope: scopeRef.current,
        dependsOn
      });
      setProps(res);
    },
    // Note: we pass false because we don't want this to be scoped!
    // When the user explicitly uses a function!
    !(typeof evaluateWhen === 'function')
  );

  useEffect(
    () => {
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
    },
    [name, ...dependsOn]
  );

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
