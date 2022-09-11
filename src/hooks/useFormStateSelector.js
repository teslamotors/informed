import { useMemo, useRef, useEffect } from 'react';
import { useFormController } from './useFormController';
import { createDeepProxy, isDeepChanged } from '../proxy';
import { useForceUpdate } from './useForceUpdate';
import { structuredClone } from '../structuredClone';

export function useFormStateSelector(selector) {
  const formController = useFormController();
  const affected = new WeakMap();
  const proxyCache = useMemo(() => new WeakMap(), []);
  const prevState = useRef(structuredClone(formController.state));
  const lastAffected = useRef(affected);
  const forceUpdate = useForceUpdate();
  const selectorStateRef = useRef(
    selector(createDeepProxy(prevState.current, affected, proxyCache))
  );
  const selectorRef = useRef();

  selectorRef.current = selector;
  lastAffected.current = affected;

  useEffect(() => {
    const callback = () => {
      if (
        isDeepChanged(
          prevState.current,
          formController.state,
          lastAffected.current
        )
      ) {
        prevState.current = structuredClone(formController.state);

        selectorStateRef.current = selectorRef.current(
          createDeepProxy(prevState.current, affected, proxyCache)
        );

        forceUpdate();
      }
    };

    formController.on('field', callback);

    return () => {
      formController.removeListener('field', callback);
    };
  }, []);

  return selectorStateRef.current;
}
