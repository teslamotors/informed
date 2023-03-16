// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 * https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */
function useOutsideAlerter(action, ref, elem) {
  useEffect(
    () => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        const outsideOfTarket =
          ref.current && !ref.current.contains(event.target);
        const outsideOfTrigger = elem && !elem.contains(event.target);
        if (outsideOfTarket && (elem ? outsideOfTrigger : true)) {
          action();
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [ref, elem]
  );
}

export default useOutsideAlerter;
