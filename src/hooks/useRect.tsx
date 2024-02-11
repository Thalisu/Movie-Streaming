import { useCallback, useLayoutEffect, useRef, useState } from "react";

/* import ResizeObserver from "resize-observer-polyfill"; */

type RectResult = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
} | null;

const getRect = (element: HTMLElement | null): RectResult | null => {
  if (!element) return null;
  return element.getBoundingClientRect();
};

export const useRect = (
  toggle: boolean
): [RectResult, React.MutableRefObject<HTMLDivElement | null>] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const current = ref.current || null;
  const [rect, setRect] = useState(getRect(current));

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    setRect(getRect(element));
  }, [toggle]);
  return [rect, ref];
};
