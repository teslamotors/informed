import { useMemo, useRef, useEffect, useLayoutEffect } from 'react';
import { useFormController } from './useFormController';
import { createDeepProxy, isDeepChanged } from '../proxy';
import { useForceUpdate } from './useForceUpdate';

if (typeof window.structuredClone !== 'function') {
  // fallback for browsers that don't support `structuredClone` yet
  // this comes with some limitations in what can be cloned, but this should be fine for most use cases
  // `structuredClone` can also be polyfilled using https://www.npmjs.com/package/@ungap/structured-clone
  window.structuredClone = obj => {
    return JSON.parse(JSON.stringify(obj));
  };
}

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

  useLayoutEffect(() => {
    lastAffected.current = affected;
  });

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

        selectorStateRef.current = selector(
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
