import { useCallback, useEffect, useMemo } from 'react';
import { useStateWithGetter } from './useStateWithGetter';

const useCursorPosition = ({
  value,
  inputRef,
  inputRefs,
  maintainCursor = false
}) => {
  const initialCursor = useMemo(() => {
    if (inputRefs) {
      const initOffset = {};
      Object.keys(inputRefs).forEach(key => (initOffset[key] = 0));
    } else {
      return 0;
    }
  }, []);

  const [cursor, setCursor, getCursor] = useStateWithGetter(initialCursor);

  const [cursorOffset, setCursorOffset, getCursorOffset] = useStateWithGetter(
    initialCursor
  );

  const setCursorCallback = useCallback((c, key) => {
    if (key) {
      const newCursor = { ...getCursor() };
      newCursor[key] = c;
      setCursor(newCursor);
    } else {
      setCursor(c);
    }
  }, []);

  const setCursorOffsetCallback = useCallback((c, key) => {
    if (key) {
      const newCursor = { ...getCursor() };
      newCursor[key] = c[key];
      setCursorOffset(newCursor);
    } else {
      setCursorOffset(c);
    }
  }, []);

  useEffect(
    () => {
      if (!inputRefs && inputRef.current != null && getCursor()) {
        // inputRef.current.selectionEnd = getCursor() + getCursorOffset();
        const cursorLoc = getCursor() + getCursorOffset();
        // Only offset if we need to
        if (getCursorOffset() != 0 && maintainCursor) {
          inputRef.current.setSelectionRange(cursorLoc + 1, cursorLoc + 1);
        } else if (maintainCursor) {
          inputRef.current.setSelectionRange(cursorLoc, cursorLoc);
        }
      }
      if (inputRefs && getCursor()) {
        // Loop over each ref and set selection range
        Object.keys(inputRefs).forEach(key => {
          const cursorLoc = getCursor()[key] + getCursorOffset()[key];
          // Only offset if we need to
          if (getCursorOffset()[key] != 0 && maintainCursor) {
            inputRefs[key].current.setSelectionRange(
              cursorLoc + 1,
              cursorLoc + 1
            );
          } else if (maintainCursor) {
            inputRefs[key].current.setSelectionRange(cursorLoc, cursorLoc);
          }
        });
      }
    },
    [value]
  );

  return {
    setCursorOffset: setCursorOffsetCallback,
    setCursor: setCursorCallback,
    cursor,
    getCursor,
    cursorOffset
  };
};

export { useCursorPosition };
