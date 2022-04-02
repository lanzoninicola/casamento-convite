import { useEffect, useState } from "react";

export default function useViewportInfo() {
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    if (isDomAvailable()) {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };

      window.addEventListener("DOMContentLoaded", handleResize);
      window?.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("DOMContentLoaded", handleResize);
        window?.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return {
    width,
    height,
  };
}

function isDomAvailable() {
  return (
    typeof window !== "undefined" &&
    !!window?.document &&
    !!window?.document.createElement
  );
}
