import { useRef, useEffect } from 'react';

// https://reactjs.org/docs/hooks-faq.html#can-i-run-an-effect-only-on-updates

/**
 *
 * Acts as a react useEffect that does not run on first render.
 *
 * @example
 * useUpdateEffect(()=>{...}, [foo])
 * 1st Render: NO CALL
 * foo changes: GETS CALLED
 *
 */
const useUpdateEffect = (effect, deps) => {
  const firstRef = useRef(true);
  const isFirstMount = firstRef.current;
  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    } else {
      firstRef.current = false;
    }
  }, deps);
};

export { useUpdateEffect };
