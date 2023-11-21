import { useEffect, useState } from "react";

const brakepoint = 576;
const detectedDevice = () => {
  return window.innerWidth <= brakepoint ? "Mobile" : "Desktop";
};

const useDetectDevice = () => {
  const [device, setDevice] = useState(() => detectedDevice());

  useEffect(() => {
    const handleResize = () => {
      setDevice(detectedDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useDetectDevice;
