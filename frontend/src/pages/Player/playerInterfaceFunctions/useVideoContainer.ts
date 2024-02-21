import { useRef } from "react";

const useContainerMousemove = () => {
  const containerRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const timeout: React.MutableRefObject<null | NodeJS.Timeout> = useRef(null);

  const hideShowInterface = () => {
    if (containerRef.current === null) return;
    if (timeout.current !== null) {
      clearTimeout(timeout.current);
    }
    containerRef.current.classList.add("moved");

    const removeMenu = () => {
      if (containerRef.current === null) return;
      containerRef.current.classList.remove("moved");
    };
    timeout.current = setTimeout(() => removeMenu(), 3000);
  };
  console.log("reload");

  return {
    hideShowInterface,
    containerRef,
  };
};

export default useContainerMousemove;
