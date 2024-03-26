import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleChangeScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleChangeScreenSize);

    return () => {
      window.removeEventListener("resize", handleChangeScreenSize);
    };
  }, []);

  return {
    height: screenSize.height,
    width: screenSize.width,
  };
};

export default useScreenSize;
