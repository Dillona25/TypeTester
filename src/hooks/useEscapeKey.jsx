import { useEffect } from "react";

const useEscapeKey = (callback) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [callback]);
};

export default useEscapeKey;
