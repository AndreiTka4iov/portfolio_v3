import { useEffect, useState } from "react";
import { windowSize } from "../types/windowSize";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return windowSize
};

export default useWindowSize;
