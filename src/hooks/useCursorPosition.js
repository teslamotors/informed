import { useLayoutEffect } from 'react';
import useStateWithGetter from './useStateWithGetter';

const useCursorPosition = ({ value, inputRef }) => {
  const [cursor, setCursor, getCursor] = useStateWithGetter(0);

  const [cursorOffset, setCursorOffset, getCursorOffset] = useStateWithGetter(
    0
  );

  useLayoutEffect(
    () => {
      if (inputRef.current != null && getCursor()) {
        inputRef.current.selectionEnd = getCursor() + getCursorOffset();
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
