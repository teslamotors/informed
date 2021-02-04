import { useLayoutEffect } from 'react';
import useStateWithGetter from './useStateWithGetter';

const useCursorPosition = ({ value, inputRef, maintainCursor = true }) => {
  const [cursor, setCursor, getCursor] = useStateWithGetter(0);

  const [cursorOffset, setCursorOffset, getCursorOffset] = useStateWithGetter(
    0
  );

  useLayoutEffect(
    () => {
      if (inputRef.current != null && getCursor()) {
        // inputRef.current.selectionEnd = getCursor() + getCursorOffset();
        const cursorLoc = getCursor() + getCursorOffset();
        // Only offset if we need to
        if (getCursorOffset() != 0 && maintainCursor) {
          inputRef.current.setSelectionRange(cursorLoc + 1, cursorLoc + 1);
        } else if (maintainCursor) {
          inputRef.current.setSelectionRange(cursorLoc, cursorLoc);
        }
      }
    },
    [value]
  );

  return {
    setCursorOffset,
    setCursor,
    cursor,
    getCursor,
    cursorOffset
  };
};

export default useCursorPosition;
