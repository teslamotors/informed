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
        const offset = getCursorOffset() < 0 ? 0 : getCursorOffset();
        const cursorLoc = getCursor() + offset;
        // console.log('Cursor', getCursor());
        // console.log('Offset', offset);
        // console.log('CursorLoc', cursorLoc);
        // Only offset if we need to
        if (maintainCursor) {
          inputRef.current.setSelectionRange(cursorLoc, cursorLoc);
        }
      }
      if (inputRefs && getCursor()) {
        // console.log('Cursor', getCursor());
        // Loop over each ref and set selection range
        Object.keys(inputRefs).forEach(key => {
          const offset =
            getCursorOffset()[key] < 0 ? 0 : getCursorOffset()[key];
          const cursorLoc = getCursor()[key] + offset;
          // Only offset if we need to
          if (maintainCursor) {
            inputRefs[key].current.setSelectionRange(cursorLoc, cursorLoc);
          }
        });
      }
    },
    [value, cursor]
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
